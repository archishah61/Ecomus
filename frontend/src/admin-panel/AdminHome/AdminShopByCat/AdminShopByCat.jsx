import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Notification from '../../Notification/Notification'; // Import your Notification component
import './AdminShopByCat.css';

function AdminShopByCat() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    caption: '',
    image: null,
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // State for notifications
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success', // 'success' or 'danger'
  });

  // Fetch existing categories from backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/shopbycat');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      showNotification('Error fetching categories', 'danger');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setFormData({
      caption: categories[index].caption,
      image: null,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('caption', formData.caption);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await axios.put(`http://localhost:3000/shopbycat/${categories[editingIndex]._id}`, formDataToSend);
      showNotification('Updated successfully!', 'success');
      fetchCategories(); // Refresh data after update
      setEditingIndex(null); // Exit edit mode
      setIsAddingNew(false); // Close add new category form if it was open
    } catch (error) {
      console.error('Error updating category:', error);
      showNotification('Failed to update category. Please try again.', 'danger');
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('caption', formData.caption);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await axios.post(`http://localhost:3000/shopbycat`, formDataToSend);
      showNotification('Category added successfully!', 'success');
      fetchCategories(); // Refresh data after adding
      // Reset form data to initial state
      setFormData({
        caption: '',
        image: null,
      });

      setIsAddingNew(false); // Close add new category form
    } catch (error) {
      console.error('Error adding category:', error);
      showNotification('Failed to add category. Please try again.', 'danger');
    }
  };

  const handleDelete = async (index) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:3000/shopbycat/${categories[index]._id}`);
        fetchCategories(); // Refresh data after deletion
        showNotification('Category deleted successfully!', 'success');
      } catch (error) {
        console.error('Error deleting category:', error);
        showNotification('Failed to delete category. Please try again.', 'danger');
      }
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 4000); // Hide notification after 4 seconds
  };

  return (
    <div className="container mt-5">
      <h1>Admin Shop By Category</h1>

      {/* Notification Popup */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
      />

      {/* Render existing category cards */}
      <div className="cards-container">
        {categories.map((category, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={category.img} />
            <Card.Body>
              {editingIndex === index ? (
                <Form onSubmit={handleUpdateSubmit}>
                  <Form.Group controlId="formCaption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control
                      type="text"
                      name="caption"
                      value={formData.caption}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className='mt-2'>
                    <Button className='me-2' variant="outline-dark" type="submit">Update</Button>
                    <Button variant="outline-warning" onClick={() => setEditingIndex(null)}>Cancel</Button>
                    <Button className='ms-4' variant="outline-danger" onClick={() => handleDelete(index)}><MdDelete /></Button>
                  </div>
                </Form>
              ) : (
                <>
                  <Card.Title onClick={() => handleEditClick(index)} style={{ cursor: 'pointer' }}>
                    {category.caption}
                  </Card.Title>
                  {/* Pencil Icon */}
                  <div className="edit-icon" onClick={() => handleEditClick(index)}>
                    <FaPencilAlt />
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        ))}

        {/* Button to add a new category */}
        <Button
          variant="success"
          className="mt-3 add-category-btn"
          onClick={() => setIsAddingNew(true)}
          style={{ width: '18rem', margin: '10px', alignSelf: 'center' }}
        >
          <FaPlus /> Add New Category
        </Button>

        {/* Form for adding a new category */}
        {isAddingNew && (
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <h5>Add New Category</h5>
              <Form onSubmit={handleAddSubmit}>
                <Form.Group controlId="formCaption">
                  <Form.Label>Caption</Form.Label>
                  <Form.Control
                    type="text"
                    name="caption"
                    value={formData.caption}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className='mt-2'>
                  <Button className='me-2' variant="outline-dark" type="submit">Add Category</Button>
                  <Button variant="outline-warning" onClick={() => setIsAddingNew(false)}>Cancel</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}

      </div>

    </div>
  );
}

export default AdminShopByCat;

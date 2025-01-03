import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';
import './AdminHero.css';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Notification from '../../Notification/Notification';

function AdminHero() {

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: null,
  });

  const [heroData, setHeroData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false); // State to manage adding new hero

  // State for notifications
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success', // 'success' or 'danger'
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchHeroData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hero');
      setHeroData(response.data);
    } catch (error) {
      console.error('Error fetching Hero data:', error);
      showNotification('Error fetching Hero data.', 'danger');
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 4000);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setFormData({
      title: heroData[index].title,
      subtitle: heroData[index].subtitle,
      image: null,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('subtitle', formData.subtitle);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      // Make sure to include the ID in the URL
      const response = await axios.put(`http://localhost:3000/hero/${heroData[editingIndex]._id}`, formDataToSend);
      console.log('Update Response:', response.data);
      showNotification('Updated successfully!', 'success');
      fetchHeroData(); // Refresh data after update
      setEditingIndex(null); // Exit edit mode
      setIsAddingNew(false); // Close add new hero form if it was open
    } catch (error) {
      console.error('Error updating data:', error);
      showNotification('Failed to update data. Please try again.', 'danger');
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('subtitle', formData.subtitle);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.post(`http://localhost:3000/hero`, formDataToSend); // Assuming you have a POST route for adding heroes
      console.log('Add Response:', response.data);
      showNotification('Hero added successfully!', 'success');
      fetchHeroData(); // Refresh data after adding
      // Reset form data to initial state
      setFormData({
        title: '',
        subtitle: '',
        image: null,
      });

      setIsAddingNew(false); // Close add new hero form
    } catch (error) {
      console.error('Error adding data:', error);
      showNotification('Failed to add data. Please try again.', 'danger');
    }
  };

  // Delete function
  const handleDelete = async (index) => {
    if (window.confirm("Are you sure you want to delete this hero?")) {
      try {
        await axios.delete(`http://localhost:3000/hero/${heroData[index]._id}`);
        showNotification('Hero deleted successfully!', 'success');
        fetchHeroData(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting hero:', error);
        showNotification('Failed to delete hero. Please try again.', 'danger');
      }
    }
  };

  return (
    <div className="cards-container d-flex flex-wrap justify-content-around">
      {/* Notification Popup */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
      />
      {/* Render existing hero cards */}
      {heroData.map((d, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px', position: 'relative' }}>
          <Card.Img variant="top" src={d.img} />
          <Card.Body>
            {editingIndex === index ? (
              <Form onSubmit={handleUpdateSubmit}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formSubtitle">
                  <Form.Label>Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
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
                  {d.title}
                </Card.Title>
                <Card.Text onClick={() => handleEditClick(index)} style={{ cursor: 'pointer' }}>
                  {d.subtitle}
                </Card.Text>
                {/* Pencil Icon */}
                <div className="edit-icon" onClick={() => handleEditClick(index)}>
                  <FaPencilAlt />
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}

      {/* Button to add a new hero */}
      <Button
        variant="success"
        className="mt-3 add-hero-btn"
        onClick={() => setIsAddingNew(true)}
        style={{ width: '18rem', margin: '10px', alignSelf: 'center' }}
      >
        <FaPlus /> Add New Hero
      </Button>

      {/* Form for adding a new hero */}
      {isAddingNew && (
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <h5>Add New Hero</h5>
            <Form onSubmit={handleAddSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formSubtitle">
                <Form.Label>Subtitle</Form.Label>
                <Form.Control
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
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
                <Button className='me-2' variant="outline-dark" type="submit">Add Hero</Button>
                <Button variant="outline-warning" onClick={() => setIsAddingNew(false)}>Cancel</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      )}

    </div>
  );
}

export default AdminHero;

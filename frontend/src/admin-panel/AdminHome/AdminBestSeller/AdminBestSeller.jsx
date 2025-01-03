import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';
import './AdminBestSeller.css';
import Notification from '../../Notification/Notification';
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AdminBestSeller() {
    const [formData, setFormData] = useState({
        sizes: '',
        name: '',
        price: '',
        colors: '',
        images: {} // Store images as key-value pairs
    });

    const [bestSellerData, setBestSellerData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

    const fetchBestSellers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/bestseller');
            setBestSellerData(response.data);
        } catch (error) {
            console.error('Error fetching BestSeller data:', error);
            showNotification('Error fetching BestSeller data.', 'danger');
        }
    };

    useEffect(() => {
        fetchBestSellers();
    }, []);

    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ ...notification, show: false });
        }, 4000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (color, file) => {
        setFormData(prev => ({
            ...prev,
            images: {
                ...prev.images,
                [color]: file // Associate the file with the color
            }
        }));
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        const item = bestSellerData[index];
        setFormData({
            sizes: item.sizes.join(','),
            name: item.name,
            price: item.price,
            colors: item.colors.join(','),
            images: item.images // Load existing images
        });
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        // Validate that an image exists for each color
        const colorsArray = formData.colors.split(',').map(color => color.trim());
        const missingImages = colorsArray.filter(color => !formData.images[color]);

        if (missingImages.length > 0) {
            showNotification(`Image files are required for each color: ${missingImages.join(', ')}`, 'danger');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('sizes', JSON.stringify(formData.sizes.split(',')));
            formDataToSend.append('name', formData.name);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('colors', JSON.stringify(colorsArray));

            // Append images for each color
            Object.entries(formData.images).forEach(([color, file]) => {
                if (file) {
                    formDataToSend.append('images', file);
                }
            });

            await axios.put(`http://localhost:3000/bestseller/${bestSellerData[editingIndex]._id}`, formDataToSend);
            showNotification('Updated successfully!', 'success');

            fetchBestSellers(); // Refresh data after update
            setEditingIndex(null); // Exit edit mode
            setIsAddingNew(false); // Close add new best seller form if it was open
        } catch (error) {
            console.error('Error updating BestSeller:', error);
            showNotification('Failed to update BestSeller. Please try again.', 'danger');
        }
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();

        // Validate that an image exists for each color
        const colorsArray = formData.colors.split(',').map(color => color.trim());
        const missingImages = colorsArray.filter(color => !formData.images[color]);

        if (missingImages.length > 0) {
            showNotification(`Image files are required for each color: ${missingImages.join(', ')}`, 'danger');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('sizes', JSON.stringify(formData.sizes.split(',')));
            formDataToSend.append('name', formData.name);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('colors', JSON.stringify(colorsArray));

            // Append images for each color
            Object.entries(formData.images).forEach(([color, file]) => {
                if (file) {
                    formDataToSend.append('images', file);
                }
            });

            await axios.post(`http://localhost:3000/bestseller`, formDataToSend);
            showNotification('BestSeller added successfully!', 'success');

            // Reset form data to initial state
            setFormData({ sizes: '', name: '', price: '', colors: '', images: {} });
            setIsAddingNew(false); // Close add new best seller form
        } catch (error) {
            console.error('Error adding BestSeller:', error.response ? error.response.data : error.message);
            showNotification('Failed to add BestSeller. Please try again.', 'danger');
        }
    };

    const handleDelete = async (index) => {
        if (window.confirm("Are you sure you want to delete this BestSeller?")) {
            try {
                await axios.delete(`http://localhost:3000/bestseller/${bestSellerData[index]._id}`);
                showNotification('BestSeller deleted successfully!', 'success');
                fetchBestSellers(); // Refresh data after deletion
            } catch (error) {
                console.error('Error deleting BestSeller:', error);
                showNotification('Failed to delete BestSeller. Please try again.', 'danger');
            }
        }
    };

    return (
        <div className="cards-container d-flex flex-wrap justify-content-around">
            <Notification show={notification.show} message={notification.message} type={notification.type} onClose={() => setNotification({ ...notification, show: false })} />

            {/* Render existing best seller cards */}
            {bestSellerData.map((item, index) => (
                <Card key={index} style={{ width: '18rem', margin: '10px', position: 'relative' }}>
                    <Card.Img variant="top" src={item.images[item.colors[0]]} /> {/* Display first image */}
                    <Card.Body>
                        {editingIndex === index ? (
                            <Form onSubmit={handleUpdateSubmit}>
                                <Form.Group controlId="formSizes">
                                    <Form.Label>Sizes</Form.Label>
                                    <Form.Control type="text" name="sizes" value={formData.sizes} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="formColors">
                                    <Form.Label>Colors</Form.Label>
                                    <Form.Control type="text" name="colors" value={formData.colors} onChange={handleChange} required />
                                </Form.Group>
                                {/* File inputs for each color */}
                                {item.colors.map(color => (
                                    <Form.Group key={color} controlId={`formImage_${color}`}>
                                        <Form.Label>{color.charAt(0).toUpperCase() + color.slice(1)} Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(color, e.target.files[0])}
                                        />
                                    </Form.Group>
                                ))}
                                <div className='mt-2'>
                                    <Button className='me-2' variant="outline-dark" type="submit">Update</Button>
                                    <Button variant="outline-warning" onClick={() => setEditingIndex(null)}>Cancel</Button>
                                    <Button className='ms-4' variant="outline-danger" onClick={() => handleDelete(index)}><MdDelete /></Button>
                                </div>
                            </Form>
                        ) : (
                            <>
                                <Card.Title onClick={() => handleEditClick(index)} style={{ cursor: 'pointer' }}>{item.name}</Card.Title>
                                <Card.Text>Price: ${item.price}</Card.Text>
                                <Card.Text>Sizes: {Array.isArray(item.sizes) ? item.sizes.join(', ').replace(/['"]/g, '') : item.sizes}</Card.Text>
                                <Card.Text>Colors: {Array.isArray(item.colors) ? item.colors.join(', ').replace(/['"]/g, '') : item.colors}</Card.Text>
                                {/* Pencil Icon */}
                                <div className="edit-icon" onClick={() => handleEditClick(index)}>
                                    <FaPencilAlt />
                                </div>
                            </>
                        )}
                    </Card.Body>
                </Card>
            ))}

            {/* Button to add a new best seller */}
            <Button variant="success" className="mt-3 add-best-seller-btn" onClick={() => setIsAddingNew(true)} style={{ width: '18rem', margin: '10px', alignSelf: 'center' }}>
                <FaPlus /> Add New Best Seller
            </Button>

            {isAddingNew && (
                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body>
                        <h5>Add New Best Seller</h5>
                        <Form onSubmit={handleAddSubmit}>
                            <Form.Group controlId="formSizes">
                                <Form.Label>Sizes</Form.Label>
                                <Form.Control type="text" name="sizes" value={formData.sizes} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="formColors">
                                <Form.Label>Colors</Form.Label>
                                <Form.Control type="text" name="colors" value={formData.colors} onChange={handleChange} required />
                            </Form.Group>
                            {/* File inputs for each color */}
                            {formData.colors.split(',').map(color => (
                                <Form.Group key={color.trim()} controlId={`formImage_${color.trim()}`}>
                                    <Form.Label>{color.trim().charAt(0).toUpperCase() + color.trim().slice(1)} Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(color.trim(), e.target.files[0])}
                                    />
                                </Form.Group>
                            ))}
                            <div className='mt-2'>
                                <Button className='me-2' variant="outline-dark" type="submit">Add Best Seller</Button>
                                <Button variant="outline-warning" onClick={() => setIsAddingNew(false)}>Cancel</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default AdminBestSeller;

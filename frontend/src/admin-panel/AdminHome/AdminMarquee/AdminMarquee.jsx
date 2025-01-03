import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa"; // Import pencil icon for editing
import Notification from '../../Notification/Notification'; // Import Notification component
import './AdminMarquee.css'; // Ensure you have CSS for styling

function AdminMarquee() {
    const [marqueeData, setMarqueeData] = useState([]); // State to hold marquee data
    const [formData, setFormData] = useState({
        marqueeText: '',
        editingIndex: null,
    });

    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'success', // 'success' or 'danger'
    });

    // Function to fetch marquee data from the backend
    const fetchMarqueeData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/marquee'); // Adjust the URL as necessary
            setMarqueeData(response.data); // Set the fetched data to state
        } catch (error) {
            console.error('Error fetching marquee data:', error);
            showNotification('Error fetching marquee data.', 'danger'); // Show error notification
        }
    };

    // Fetch marquee data on component mount
    useEffect(() => {
        fetchMarqueeData();
    }, []);

    const handleEditClick = (index) => {
        setFormData({ marqueeText: marqueeData[index].text, editingIndex: index }); // Set current text for editing
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/marquee/${marqueeData[formData.editingIndex]._id}`, {
                text: formData.marqueeText,
            });
            console.log("Marquee updated:", response.data);
            fetchMarqueeData(); // Refresh list after updating
            setFormData({ marqueeText: '', editingIndex: null }); // Reset form
            showNotification('Marquee updated successfully!', 'success'); // Show success notification
        } catch (error) {
            console.error('Error updating marquee:', error);
            showNotification('Failed to update marquee. Please try again.', 'danger'); // Show error notification
        }
    };

    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ ...notification, show: false });
        }, 4000); // Hide after 4 seconds
    };

    return (
        <div className="marquee-container">
            {/* Notification Popup */}
            {notification.show && (
                <Notification
                    show={notification.show}
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ ...notification, show: false })}
                />
            )}

            <div className="custom-card">
                <div className="circle"></div>
                <h1 className="card-title">Existing Marquee</h1>

                {/* Display existing marquees */}
                <div className="cards-container d-flex flex-wrap justify-content-around mt-4">
                    {marqueeData.map((item, index) => (
                        <Card key={index} style={{ width: '18rem', margin: '10px', position: 'relative' }}>
                            <Card.Body>
                                {formData.editingIndex === index ? (
                                    <form onSubmit={handleUpdateSubmit}>
                                        <input
                                            type="text"
                                            value={formData.marqueeText}
                                            onChange={(e) => setFormData({ ...formData, marqueeText: e.target.value })}
                                            required
                                        />
                                        <div className='mt-2 d-flex justify-content-end'>
                                            <Button variant="outline-dark" type="submit">Update</Button>
                                            <Button variant="outline-warning" onClick={() => setFormData({ ...formData, editingIndex: null })}>Cancel</Button>
                                        </div>
                                    </form>
                                ) : (
                                    <>
                                        <Card.Text>{item.text}</Card.Text>
                                        {/* Edit Icon */}
                                        <div className="edit-icon" onClick={() => handleEditClick(index)}>
                                            <FaPencilAlt />
                                        </div>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminMarquee;

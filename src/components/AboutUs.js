import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have this import for routing
import './AboutUs.css';

const AboutUs = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '1.2em',
        backgroundColor: '#4a2c6c', // Button color
        color: 'white', // Text color
        border: 'none', // Remove border
        borderRadius: '5px', // Rounded corners
        cursor: 'pointer', // Pointer cursor on hover
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
        transition: 'transform 0.2s', // Smooth transition
    };

    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>
                At our firm, we aim to simplify your business operations with our intuitive invoice generation tool. Our platform allows users to easily create, preview, and customize invoices, helping businesses stay organized. We also provide helpful resources like sales tax determination and discount basics to streamline financial management. With a focus on flexibility, you can personalize invoices with your company logo, customer information, and even apply taxes and discounts. Our commitment to providing user-friendly tools empowers businesses to focus on what matters most — growing and serving their customers. Learn more about us and our mission to support businesses.
            </p>
            <div className="contact-us" >
                <p>Contact Us: <a href="mailto:Mediaxtreme1@gmail.com">Mediaxtreme1@gmail.com</a></p>
            </div>

            {/* Button moved to the bottom */}
            <div className="invoice-button-container">
                <Link to="/invoice" className="link-no-underline">
                    <button
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                    >
                        Go to Invoice
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
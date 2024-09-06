import React from 'react';
import './AboutUs.css'; // Import the CSS file for specific styles

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>
                At Tollars, we aim to simplify your business operations with our intuitive invoice generation tool. Our platform allows users to easily create, preview, and customize invoices, helping businesses stay organized. We also provide helpful resources like sales tax determination and discount basics to streamline financial management. With a focus on flexibility, you can personalize invoices with your company logo, customer information, and even apply taxes and discounts. Our commitment to providing user-friendly tools empowers businesses to focus on what matters most — growing and serving their customers. Learn more about us and our mission to support businesses.
            </p>
            <div className="contact-us">
                <p>Contact Us: <a href="mailto:Mediaxtreme1@gmail.com">Mediaxtreme1@gmail.com</a></p>
            </div>
        </div>
    );
};

export default AboutUs;
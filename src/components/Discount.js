import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have this import for routing
import './AboutUs.css';

const Discount = () => {
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
        <div className="discount">
            <h2>Discount Basics</h2>
            <p>
                Understanding discount basics is key to optimizing pricing strategies. To apply a discount, simply enter the percentage into the designated field on our form. For example, to apply a 50% discount, just input 50. The web app will automatically adjust the total price of your invoice accordingly. Discounts can be applied to individual items or the entire order, depending on your preferences. Ensure that discount percentages are accurately entered to reflect the correct savings on your invoices. Properly utilizing discounts can enhance customer satisfaction and drive sales while maintaining profitability.
            </p>
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

export default Discount;
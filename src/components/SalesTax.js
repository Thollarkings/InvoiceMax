import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const SalesTax = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '1.2em',
        color: 'white',
        backgroundColor: '#4a2c6c', // Keep the button color constant
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
        transition: 'transform 0.2s', // Smooth transition
    };

    return (
        <div className="sales-tax">
            <h2>How to Determine Sales Tax</h2>
            <p>
                To determine the sales tax, simply input the percentage for your region or jurisdiction into the designated field on our form. The web app will automatically apply this rate to your total sale amount and make all necessary adjustments. This streamlined approach ensures accurate tax calculations without the need for manual computations. Make sure to input the correct rate for your location to ensure compliance with local tax regulations.
            </p>
            {/* New button added below */}
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

export default SalesTax;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PrintablePage.css';

const PrintablePage = () => {
    const location = useLocation();
    const { formData } = location.state || {}; // Get formData from state
    const navigate = useNavigate();

    if (!formData) {
        return <div>Error: No data available to display the receipt.</div>;
    }

    const calculateTotals = () => {
        const subtotal = formData.items.reduce((acc, item) => {
            const qty = parseFloat(item.quantity) || 0;
            const price = parseFloat(item.unitPrice) || 0;
            return acc + qty * price;
        }, 0);

        const discountAmount = (subtotal * formData.discount) / 100;
        const taxableAmount = subtotal - discountAmount;
        const salesTax = (taxableAmount * formData.salesTax) / 100;
        const total = taxableAmount + salesTax;

        return { subtotal, discountAmount, salesTax, total };
    };

    const { subtotal, discountAmount, salesTax, total } = calculateTotals();

    const handlePrint = () => {
        window.print();
    };

    return (
<div className="invoice-previewpp">
            {/* Render multiple watermarks */}
            <div className="watermark-container">
    {[...Array(18)].map((_, index) => (
        <div key={index} className="watermark">{formData.companyName}</div>
    ))}
</div>
<div style={{ textAlign: 'right', marginBottom: '1px', marginTop: '-20px' }}></div>
            <h2>Sale/Service Receipt</h2>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                    <h3> {formData.selectedDate}</h3>
                </div>
            <div style={{ textAlign: 'right', marginBottom: '1px' }}>
                <h3>R.No.: {formData.receiptNumber}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                {/* Left Column: Logo and Company Info */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {formData.logo && (
                            <img 
                                src={URL.createObjectURL(formData.logo)} 
                                alt="Company Logo" 
                                style={{ maxWidth: '100px', marginBottom: '5px' }} 
                            />
                        )}
                        <h3 style={{ margin: 0 }}>{formData.companyName}</h3>
                    </div>
                    <div className="customer-infopp" style={{ marginTop: '20px', textAlign: 'left' }}>
                        <h4 style={{ margin: 0 }}>Customer:</h4>
                        <div style={{ margin: 0 }}>{formData.customerName}</div>
                        <h4 style={{ margin: '10px 0 0 0' }}>Customer Address:</h4>
                        <p style={{ margin: 0 }}>{formData.customerAddress}</p>
                        <p style={{ margin: '20px 0 0 0' }}>
                            <strong>Phone:</strong> {formData.phoneNumber}
                        </p>
                    </div>
                </div>

                {/* Right Column: Seller Info */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'right' }}>
                    <div className="seller-infopp">
                        <h4 style={{ margin: 0 }}>Address:</h4>
                        <p style={{ margin: 0 }}>{formData.sellerAddress}</p>
                        <h4 style={{ margin: '30px 0 0 0' }}>Contact Us:</h4>
                        <p style={{ margin: '0 0 0 0' }}>{formData.sellerPhoneNumber}</p>
                    </div>
                </div>
            </div>

            <h3>Currency: {formData.currency}</h3>
            
            <table className="invoice-tablepp">
    <thead >
        <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Line Total</th>
        </tr>
    </thead>
                <tbody>
                    {formData.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{formData.currency}{parseFloat(item.unitPrice).toFixed(2)}</td>
                            <td>{formData.currency}{(parseFloat(item.quantity) * parseFloat(item.unitPrice)).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="totalspp">
                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '100px 0 0 0' }}>
                    <div style={{ textAlign: 'right', marginRight: '20px' }}>
                        <p style={{ margin: '0px', fontSize: '1em', fontWeight: 'bold' }}>Discount:</p>
                        <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>
                            {formData.currency} {discountAmount.toFixed(2)}
                        </p>
                        <p style={{ margin: '30px 0 0 0', fontSize: '1em', fontWeight: 'bold' }}>Sales Tax:</p>
                        <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>
                            {formData.currency} {salesTax.toFixed(2)}
                        </p>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>Subtotal:</p>
                        <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>
                            {formData.currency} {subtotal.toFixed(2)}
                        </p>
                        <p style={{ margin: '20px 0 0 0', fontSize: '1.4em', fontWeight: 'bold' }}>Total:</p>
                        <p style={{ margin: '0', fontSize: '1.4em', fontWeight: 'bold' }}>
                            {formData.currency} {total.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
            <button 
                onClick={handlePrint} 
                style={{
                    maxWidth: '300px',
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4a2c6c',
                    color: 'white',
                    fontSize: '18px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Print Receipt
            </button>
            <button 
                    onClick={() => navigate(-1)} // Navigate back to the previous page
                    style={{
                        maxWidth: '300px',
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4a2c6c',
                        color: 'white',
                        fontSize: '18px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Go Back
                </button>
        </div>
    );
};

export default PrintablePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvoicePreview.css';


const InvoicePreview = ({ formData }) => {
    const navigate = useNavigate();

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

    return (
        <div className="background">
            <div className="invoice-preview">
                <h2>Sale/Service Invoice</h2>
                <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                    <h3>{formData.selectedDate}</h3>
                </div>
                <div style={{ textAlign: 'right', marginBottom: '20px' }}>
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
                            <h3 style={{ margin: 0 }}>
                                {formData.companyName.split(' ').map((word, index) => (
                                    <span key={index} style={{ display: 'block' }}>{word}</span>
                                ))}
                            </h3>
                        </div>

                        {/* Customer Info */}
                        <div className="customer-info" style={{ marginTop: '20px', textAlign: 'left' }}>
                            <h4 style={{ margin: 0 }}>Customer:</h4>
                            <div style={{ margin: 0 }}>{formData.customerName}</div>
                            <h4 style={{ margin: '10px 0 0 0' }}>Customer Address:</h4>
                            <p style={{ margin: 0 }}>
                                {formData.customerAddress.split(' ').reduce((acc, word, index) => {
                                    if (index > 0 && index % 4 === 0) {
                                        acc.push(<br key={index} />);
                                    }
                                    acc.push(word + ' ');
                                    return acc;
                                }, [])}
                            </p>
                            <p style={{ margin: '20px 0 0 0' }}>
                                <strong>Phone:</strong> {formData.phoneNumber}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Seller Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'right' }}>
                        <div className="seller-info">
                            <h4 style={{ margin: 0 }}>Address:</h4>
                            <p style={{ margin: 0 }}>
                                {formData.sellerAddress.split(' ').reduce((acc, word, index) => {
                                    if (index % 4 === 0 && index !== 0) {
                                        acc.push(<br key={index} />);
                                    }
                                    acc.push(word + ' ');
                                    return acc;
                                }, [])}
                            </p>
                            <h4 style={{ margin: '30px 0 0 0' }}>Contact Us:</h4>
                            <p style={{ margin: 0 }}>{formData.sellerPhoneNumber}</p>
                        </div>
                    </div>
                </div>

                <h3>Currency: {formData.currency}</h3>
                <table className="invoice-table">
                    <thead className="table-header">
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

                <div className="totals">
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
                            <p style={{ margin: '20px 0 0 0', fontSize: '1#6a4e8d.4em', fontWeight: 'bold' }}>Total:</p>
                            <p style={{ margin: '0', fontSize: '1.4em', fontWeight: 'bold' }}>
                                {formData.currency} {total.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button to edit invoice */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button 
                    onClick={() => navigate(-1)} // Navigate back on button click
                    style={{
                        maxWidth: '150px',
                        padding: '5px 20px',
                        backgroundColor: '#9d0ac6',
                        color: 'white',
                        fontSize: '15px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '40px', // Center button horizontally
                        display: 'inline-block' // Allow margin auto to work
                    }}
                >
                    Edit Invoice
                </button>
            </div>

            {/* Button to print the invoice */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button 
                    onClick={() => navigate('/printable', { state: { formData } })} // Navigate to PrintablePage with formData
                    style={{
                        marginTop: '60px',
                        maxWidth: '300px',
                        padding: '6px 20px',
                        background: 'linear-gradient(to right, #3b1e55, , #4a2c6c)',
                        color: 'white',
                        fontSize: '18px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#6a4e8d',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        margin: '0 auto', // Center button horizontally
                        display: 'inline-block' // Allow margin auto to work
                    }}
                >
                    View Receipt
                </button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                
                <button 
                    onClick={() => navigate('/ViewInvoice', { state: { formData } })} 
                    style={{
                        marginTop: '0px',
                        marginBottom: '4px',
                        maxWidth: '300px',
                        padding: '6px 20px',
                        background: 'linear-gradient(to right, #3b1e55, , #4a2c6c)',
                        color: 'white',
                        fontSize: '18px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#6a4e8d',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        margin: '0 auto', // Center button horizontally
                        display: 'inline-block' // Allow margin auto to work
                    }}
                >
                    View Invoice
                </button>
               
            </div>
        </div>
    );
};

export default InvoicePreview;
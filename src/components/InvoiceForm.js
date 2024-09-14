import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvoiceForm.css';
import DateSelector from './DateSelector';

const InvoiceForm = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    const handleChange = (index, event) => {
        const newItems = [...formData.items];
        newItems[index][event.target.name] = event.target.value;
        setFormData({ ...formData, items: newItems });
    };

    const handleCurrencyChange = (event) => {
        setFormData({ ...formData, currency: event.target.value });
    };

    const handleLogoChange = (event) => {
        setFormData({ ...formData, logo: event.target.files[0] });
    };

    const handleTaxChange = (event) => {
        const value = Math.min(Math.max(event.target.value, 0), 100);
        setFormData({ ...formData, salesTax: value });
    };

    const handleDiscountChange = (event) => {
        const value = Math.min(Math.max(event.target.value, 0), 100);
        setFormData({ ...formData, discount: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, selectedDate: date }); // Update selectedDate in formData
    };

    const addItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { description: '', quantity: '', unitPrice: '' }],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/invoice-preview', { state: { formData } }); // Pass formData to preview
    };

    return (
        <div className="invoice-form">
            <h2 style={{ color: '#ffffff' }}>Create Invoice</h2>
            <div className="input-background">
                <form onSubmit={handleSubmit}>
                <DateSelector 
                        onChange={handleDateChange} 
                        selectedDate={formData.selectedDate} // Pass the current selected date
                        />
                    <div>
                        <label>Receipt Number:</label>
                        <input
                            type="text"
                            value={formData.receiptNumber || ''}
                            onChange={(e) => setFormData({ ...formData, receiptNumber: e.target.value })}
                            required
                        />
                    </div>
                    {/* Company Information */}
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                    </label>

                    <label>
                        Company Address:
                        <input
                            type="text"
                            name="sellerAddress"
                            value={formData.sellerAddress}
                            onChange={(e) => setFormData({ ...formData, sellerAddress: e.target.value })}
                        />
                    </label>

                    <label>
                        Company's Phone Number:
                        <input
                            type="text"
                            name="sellerPhoneNumber"
                            value={formData.sellerPhoneNumber}
                            onChange={(e) => setFormData({ ...formData, sellerPhoneNumber: e.target.value })}
                        />
                    </label>

                    {/* Customer Information */}
                    <label>
                        Customer's Name:
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        />
                    </label>

                    <label>
                        Customer's Address:
                        <input
                            type="text"
                            name="customerAddress"
                            value={formData.customerAddress}
                            onChange={(e) => setFormData({ ...formData, customerAddress: e.target.value })}
                        />
                    </label>

                    <label>
                        Customer's Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        />
                    </label>

                    {/* Other Information */}
                    <label>
                        Upload Company Logo:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                        />
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Select Currency:
                        <select 
                            name="currency" 
                            value={formData.currency} 
                            onChange={handleCurrencyChange} 
                            style={{ marginLeft: '10px', width: '120px' }} 
                        >
                            <option value="₦">₦ - (Naira)</option>
                            <option value="$">$ - (US Dollar)</option>
                            <option value="¥">¥ - (Chinese Yen)</option>
                            <option value="£">£ - (Pound Sterling)</option>
                        </select>
                    </label>

                    <label>
                        Sales Tax (%):
                        <input
                            type="number"
                            name="salesTax"
                            value={formData.salesTax}
                            onChange={handleTaxChange}
                            min="0"
                            max="100"
                            placeholder="Enter sales tax"
                        />
                    </label>

                    <label>
                        Discount (%):
                        <input
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleDiscountChange}
                            min="0"
                            max="100"
                            placeholder="Enter discount"
                        />
                    </label>

                    {/* Line Items */}
                    <div className="line-items">
                        {formData.items.map((item, index) => (
                            <div className="line-item" key={index}>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    value={item.description}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Quantity"
                                    value={item.quantity}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                <input
                                    type="number"
                                    name="unitPrice"
                                    placeholder="Unit Price"
                                    value={item.unitPrice}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <button type="button" onClick={addItem} style={{ margin: '0 5px', padding: '10px 15px' }}>
                            Add Item
                        </button>
                        <button type="submit" style={{ margin: '0 5px', padding: '10px 15px' }}>
                            Submit Invoice
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InvoiceForm;
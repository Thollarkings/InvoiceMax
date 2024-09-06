import React from 'react';
import './InvoiceItem.css'; // Optional: for specific styles

const InvoiceItem = ({ description, quantity, unitPrice, lineTotal }) => {
    return (
        <tr className="invoice-item">
            <td>{description}</td>
            <td>{quantity}</td>
            <td>${unitPrice.toFixed(2)} </td>
            <td>${lineTotal.toFixed(2)} </td>
        </tr>
    );
};

export default InvoiceItem;
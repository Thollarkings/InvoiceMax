import React, { useState, useEffect } from 'react';
import './InvoiceForm.css';

const DateSelector = ({ onChange, selectedDate }) => {
    const [date, setDate] = useState(selectedDate || '');

    useEffect(() => {
        setDate(selectedDate); // Update local state if selectedDate changes
    }, [selectedDate]);

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate);
        onChange(newDate); // Call the parent function to update the form data
    };

    return (
        <div className="date-selector">
            <label>Select a Date</label>
            <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className='date-input'
            />
            {date && <p>Date: {date}</p>}
        </div>
    );
};

export default DateSelector;
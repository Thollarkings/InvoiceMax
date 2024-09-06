import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import SalesTax from './components/SalesTax';
import Discount from './components/Discount';
import AboutUs from './components/AboutUs';
import './styles/App.css';
import './styles/InfoButtons.css'; // Import the new CSS file
import Footer from './components/Footer'; 

const App = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        sellerAddress: '',
        sellerPhoneNumber: '',
        customerName: '',
        customerAddress: '',
        phoneNumber: '',
        logo: null,
        currency: '₦', // Default currency
        salesTax: 0, // Sales tax field
        discount: 0, // Discount field
        items: [{ description: '', quantity: '', unitPrice: '' }],
    });
    
    const [receiptNumber, setReceiptNumber] = useState('');

    return (
         <Router basename={process.env.PUBLIC_URL}> {'https://thollarkings.github.io/InvoiceMax/'}
            <div className="app-container">
                <div className="button-container">
                    <Link to="/invoice">
                    <button class="home-button">Home</button>
                    </Link>
                    <Link to="/sales-tax">
                    <button class="about-us-button">Sales Tax</button>
                    </Link>
                    <Link to="/discount">
                    <button class="sales-tax-button">Discount</button>
                    </Link>
                    <Link to="/about-us">
                    <button class="discount-button">About Us</button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/invoice" 
                        element={
                            <InvoiceForm 
                                formData={formData} 
                                setFormData={setFormData} 
                                setReceiptNumber={setReceiptNumber} 
                            />
                        } 
                    />
                    <Route 
                        path="/invoice-preview" 
                        element={
                            <InvoicePreview 
                                formData={formData} 
                                receiptNumber={receiptNumber} 
                            />
                        } 
                    />
                    <Route path="/sales-tax" element={<SalesTax />} />
                    <Route path="/discount" element={<Discount />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer /> {/* Add Footer component here */}
            </div>
        </Router>
    );
};

const Home = () => {
    return (
        <div>
            <h2>Welcome to InvoiceMax</h2>
            <Link to="/invoice">
            <button className="button-invoice">Generate Invoice</button>
            </Link>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import SalesTax from './components/SalesTax';
import Discount from './components/Discount';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import PrintablePage from './components/PrintablePage';
import ViewInvoice from './components/ViewInvoice'; // Ensure this is imported
import Home from './components/Home'; // Import the extracted Home component
import './styles/App.css';
import './styles/InfoButtons.css';


const App = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        sellerAddress: '',
        sellerPhoneNumber: '',
        customerName: '',
        customerAddress: '',
        phoneNumber: '',
        logo: null,
        currency: '₦',
        salesTax: 0,
        discount: 0,
        items: [{ description: '', quantity: '', unitPrice: '' }],
    });

    const [receiptNumber, setReceiptNumber] = useState('');

    return (
        <Router>
            <div className="app-container">
                <Navigation />
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
                    <Route path="/printable" element={<PrintablePage />} />
                    <Route path="/sales-tax" element={<SalesTax />} />
                    <Route path="/discount" element={<Discount />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/ViewInvoice" element={<ViewInvoice />} />
                    <Route path="*" element={<Navigate to="/" replace />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="button-container">
            {location.pathname !== '/printable' && (
                <>
                    <Link to="/" className="link-no-underline">
                        <button className="home-button">Home</button>
                    </Link>
                    <Link to="/sales-tax" className="link-no-underline">
                        <button className="about-us-button">Sales Tax</button>
                    </Link>
                    <Link to="/discount" className="link-no-underline">
                        <button className="sales-tax-button">Discount</button>
                    </Link>
                    <Link to="/about-us" className="link-no-underline">
                        <button className="discount-button">About Us</button>
                    </Link>
                </>
            )}
            
            
        </div>
    );
};


export default App;
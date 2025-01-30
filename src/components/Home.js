import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <h2 className="welcome-title">Welcome to InvoiceMax</h2>
      <Link to="/invoice" className="link-no-underline">
        <button className="button-invoice">Generate Your Invoice</button>
      </Link>
    </div>
  );
};

export default Home;
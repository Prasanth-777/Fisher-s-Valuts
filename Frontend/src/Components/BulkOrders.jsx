// src/components/BulkOrders.js
import React from 'react';
import './BulkOrders.css';
import bulkImg from '../assets/bulk-orders.jpeg'; // Replace with your actual image

const BulkOrders = () => {
  return (
    <section id="bulk-orders" className="bulk-section">
      <div className="bulk-content">
        <img src={bulkImg} alt="Thumbo coal box in fish packing" className="bulk-img" />
        <div className="bulk-text">
          <h2>Bulk Orders</h2>
          <p>
            We offer bulk seafood packaging using Thumbo coal boxes to ensure freshness and insulation during transport. 
            Ideal for restaurants, wholesalers, and events — our packaging maintains peak quality, even over long distances.
          </p>
          <p className="caption">Thumbo coal box in fish packing.</p>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;

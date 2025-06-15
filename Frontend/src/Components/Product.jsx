// src/components/ProductsShowcase.js
import React from 'react';
import './Product.css';
import prawnsImg from '../assets/prawns.jpeg';
import fishImg from '../assets/fish.jpeg';
import crabImg from '../assets/crabs.jpeg';

const ProductsShowcase = () => {
  return (
    <section id="products" className="products-section">
      <div className="product-images">
        <div className="product-card">
          <img src={prawnsImg} alt="Prawns" />
        </div>
        <div className="product-card">
          <img src={fishImg} alt="Fish" />
        </div>
        <div className="product-card">
          <img src={crabImg} alt="Crab" />
        </div>
      </div>
      <h2 className="caption">Our Fresher Catch</h2>
    </section>
  );
};

export default ProductsShowcase;

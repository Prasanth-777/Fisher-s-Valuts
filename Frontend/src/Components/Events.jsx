// src/components/EventsCatering.js
import React from 'react';
import './Events.css';
import cateringImg from '../assets/Event-catering.png'; // Replace with your actual image

const EventsCatering = () => {
  return (
    <section id="events-catering" className="events-section">
      <h2>Events & Catering</h2>
      <div className="events-content">
        <img src={cateringImg} alt="Seafood catering event" className="events-img" />
        <p className="events-description">
          Make your special occasions memorable with Fresh Vaults' premium seafood catering services. Whether it's weddings, parties,
          or corporate events, we provide fresh and beautifully presented seafood dishes tailored to your needs.
        </p>
      </div>
    </section>
  );
};

export default EventsCatering;

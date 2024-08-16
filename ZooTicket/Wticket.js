import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Wticket.css';
import qrCodeImage from './whatsapp-qr-code.jpeg'; // Import the QR code image

const Wticket = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleTryBot = () => {
    // Navigate to the Wchat page
    navigate('/wchat');
  };

  return (
    <div className="ticket-booking-wrapper">
      <header className="header-container">
        <h1 className="header-title">WhatsApp Booking</h1>
        <button className="try-bot-btn" onClick={handleTryBot}>Try Our Bot</button>
      </header>

      {step === 1 && (
        <div className="step-content">
          <h2 className="step-heading">Step 1: Scan the QR Code</h2>
          <p className="step-description">
            Open your WhatsApp application on your smartphone and tap on the menu
            icon (three dots) at the top right corner. Select <strong>"Linked Devices"</strong> from the
            menu, then tap on <strong>"Link a device"</strong>. Your phone’s camera will open,
            allowing you to scan QR codes. Hold your phone steady and point the
            camera at the QR code below to scan it.
          </p>
          <div className="qr-code-image">
            <img src={qrCodeImage} alt="WhatsApp QR Code" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h2 className="step-heading">Step 2: Start the Conversation</h2>
          <p className="step-description">
            Once you’ve scanned the QR code, a WhatsApp chat will open automatically.
            Type <strong>"Hi"</strong> in the chat box to start the conversation. Follow the
            on-screen instructions to proceed with booking your tickets.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h2 className="step-heading">Step 3: Follow the Booking Steps</h2>
          <p className="step-description">
            The WhatsApp bot will guide you through the ticket booking process step by step.
            Provide the necessary details, such as the date, time, and number of tickets.
            Confirm your booking and make the payment as instructed.
          </p>
        </div>
      )}

      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={step === 1} className="nav-button">
          Previous
        </button>
        <button onClick={handleNext} disabled={step === 3} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Wticket;

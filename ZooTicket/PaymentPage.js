import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './PaymentPage.css';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    bankName: '',
    expiryDate: '',
    cardName: '',
  });
  const [upiId, setUpiId] = useState(''); // UPI ID for generating the QR code
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUPIChange = (e) => {
    setUpiId(e.target.value);
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (paymentMethod === 'UPI Payments') {
      if (!upiId) {
        alert('Please enter your UPI ID.');
        return;
      }
      alert(`UPI Payment Initiated for UPI ID: ${upiId}`);
      navigate('/confirmation');
    } else {
      alert(`Payment successful using ${paymentMethod}`);
      console.log('Card Details:', cardDetails);
      navigate('/confirmation');
    }
  };

  return (
    <div className='pay-container'>

      <div className="payment-page-container">
        <h2>SELECT PAYMENT METHOD</h2>
        <div className="payment-options-container">
          <button
            className={paymentMethod === 'Credit Card' ? 'selected-option' : ''}
            onClick={() => handlePaymentMethodChange('Credit Card')}
          >
            Credit Card
          </button>
          <button
            className={paymentMethod === 'Debit Card' ? 'selected-option' : ''}
            onClick={() => handlePaymentMethodChange('Debit Card')}
          >
            Debit Card
          </button>
          <button
            className={paymentMethod === 'UPI Payments' ? 'selected-option' : ''}
            onClick={() => handlePaymentMethodChange('UPI Payments')}
          >
            UPI Payments
          </button>
        </div>
        <div className="payment-details-container">
          {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
            <div className="card-details-form-container">
              <div>
                <label className='card-details-label'>Card Number:</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className='card-details-label'>Bank Name:</label>
                <input
                  type="text"
                  name="bankName"
                  value={cardDetails.bankName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className='card-details-label'>Expiry Date:</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className='card-details-label'>Name on Card:</label>
                <input
                  type="text"
                  name="cardName"
                  value={cardDetails.cardName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          {paymentMethod === 'UPI Payments' && (
            <div className="upi-details-form-container">
              <div>
                <label>Enter your UPI ID:</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={handleUPIChange}
                  required
                />
              </div>
              {upiId && (
                <div className="qr-code-container">
                  <QRCode value={`upi://pay?pa=${upiId}&pn=PayeeName`} size={200} />
                </div>
              )}
            </div>
          )}
        </div>
        <button onClick={handlePayment} className="pay-button-container">Pay Now</button>
      </div>
    </div>
  );
}

export default PaymentPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ZooDonation.css';

const zoos = [
  'Safari Zoo', 'Wildlife Park', 'Aqua Zoo', 'Mountain Zoo', 'City Zoo', 
  'Rainforest Zoo', 'Desert Zoo', 'Arctic Zoo', 'Jungle Safari Zoo', 
  'River Zoo', 'Savannah Zoo', 'Forest Zoo', 'Adventure Zoo', 'Exotic Zoo', 
  'Wild West Zoo', 'Tropical Zoo', 'Ocean Zoo', 'Bird Sanctuary Zoo', 
  'Reptile Park', 'Asian Wildlife Zoo', 'European Wildlife Park'
];

const ZooDonationion = () => {
  const [zoo, setZoo] = useState('');
  const [purpose, setPurpose] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to payment page with state
    navigate('/payment', { state: { zoo, purpose, name, email, phone } });
  };

  return (
    
    <div className="donation-page">
      <div>
        <br></br>
        <h5 className='don'>MAKE A DONATION</h5>
      </div>
      <div>
        <br></br>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
         Select Zoo:
          <select id="zoo" value={zoo} onChange={(e) => setZoo(e.target.value)} required>
            <option value="" disabled>Select a zoo</option>
            {zoos.map((zooName, index) => (
              <option key={index} value={zooName}>{zooName}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          Purpose of Donation:<br></br>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
            placeholder="Enter the purpose of your donation"
            ></textarea>
        </div>

        <div className="form-group">
          Donator's Name:<br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            />
        </div>

        <div className="form-group">
         Email:
         <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            />
        </div>

        <div className="form-group">
          Phone Number:<br></br>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter your phone number"
            />
        </div>

        <button type="submit" className="submit-button">Proceed to Payment</button>
      </form>
      </div>
    </div>
  );
};

export default ZooDonationion;

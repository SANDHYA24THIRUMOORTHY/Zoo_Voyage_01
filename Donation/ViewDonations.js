import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewDonations.css';

const ViewDonations = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/donations/all');
        // Log response data to debug
        console.log('Donations data:', response.data);
        if (Array.isArray(response.data)) {
          setDonations(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setError('Failed to load donations');
        }
      } catch (err) {
        console.error('Error fetching donations:', err);
        setError('Failed to load donations');
      }
    };

    fetchDonations();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="view-donations">
      <h2>Donations List</h2>
      <ul>
        {donations.length > 0 ? (
          donations.map((donation) => (
            <li key={donation.id}>
              <p>Zoo: {donation.zoo}</p>
              <p>Purpose: {donation.purpose}</p>
              <p>Name: {donation.name}</p>
              <p>Email: {donation.email}</p>
              <p>Phone: {donation.phone}</p>
            </li>
          ))
        ) : (
          <p>No donations available</p>
        )}
      </ul>
    </div>
  );
};

export default ViewDonations;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketPopup.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TicketPopup = ({ onClose }) => {
  const [selectedZoo, setSelectedZoo] = useState('');
  const [zooTimings, setZooTimings] = useState('');

  const zoos = {
    "Arignar Anna Zoological Park, TamilNadu": "10:00 AM - 5:00 PM",
    "Bannerughatta Biological Park, Karnataka": "9:00 AM - 6:00 PM",
    "Vedanthangal Bird Sanctuary, TamilNadu": "10:00 AM - 4:00 PM",
    "National Zoological Park, New Delhi": "8:30 AM - 6:00 PM",
  };

  const handleZooChange = (event) => {
    const zoo = event.target.value;
    setSelectedZoo(zoo);
    setZooTimings(zoos[zoo]);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <Typography variant="h5" gutterBottom>Select a Zoo</Typography>
        <select value={selectedZoo} onChange={handleZooChange} className="zoo-dropdown">
          <option value="" disabled>Select Zoo</option>
          {Object.keys(zoos).map((zoo, index) => (
            <option key={index} value={zoo}>{zoo}</option>
          ))}
        </select>
        {selectedZoo && (
          <Box mt={2}>
            <Typography variant="body1">Timings for {selectedZoo}:</Typography>
            <Typography variant="h6"><strong>{zooTimings}</strong></Typography>
          </Box>
        )}
        <Box mt={3} textAlign="right">
          <Link to='/booking'><button variant="contained" className="popup-next" color="primary">Next</button></Link>
        </Box>
      </div>
    </div>
  );
};

export default TicketPopup;
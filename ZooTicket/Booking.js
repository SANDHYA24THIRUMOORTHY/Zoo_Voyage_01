import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {

  useEffect(() => {
    const ticketOptions = document.querySelectorAll('.ticket-option');
    ticketOptions.forEach((option, index) => {
      option.style.animationDelay = `${index * 0.5}s`; // Delay each option by 0.5s
      option.classList.add('roll-in');
    });
  }, []);

  return (
    <div className="home-page">
      <div className='choose slide-in'>
        <h2 className='choose-tic'><br />CHOOSE TICKETS <br /></h2>
      </div>
      <br />
      <div className="ticket-options">
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>ZOO&nbsp;&nbsp;&nbsp;or SANCTUARY</span>
          <img className="ticket-option-zoo" src="https://media.istockphoto.com/id/1355516422/photo/entrance-to-the-oakland-zoo-on-a-sunny-day-with-animal-representations-and-plants-decorating.jpg?s=612x612&w=0&k=20&c=wVeCfcDBdalL0NNJaE5VX2tXkogIQDCfLiv-_eKFxjc=" alt="Zoo" />
        </Link>
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>BUTTERFLY PARK</span>
          <img className="ticket-option-butterfly" src="https://media2.thrillophilia.com/images/photos/000/259/453/original/1589360691_92ce9941ee06035f2e9277c0de872505fafd8366-tc-img-preview.jpg?width=975&height=600" alt="Butterfly Park" />
        </Link>
      </div>
      <br />
      <div className="ticket-options">
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>BUS SAFARI</span>
          <img className="ticket-option-bus-safari" src="https://www.balisafarimarinepark.com/wp-content/uploads/2020/07/dt_junglehopper.jpg" alt='safari' />
        </Link>
        <Link to="/bookingform" className="ticket-option">
          <span className='tick'>JEEP SAFARI</span>
          <img className="ticket-option-jeep-safari" src="https://png.pngtree.com/background/20230528/original/pngtree-jeep-full-of-animals-heading-on-a-trail-of-lions-picture-image_2775808.jpg" alt="Jeep Safari" />
        </Link>
      </div>
    </div>
  );
};

export default Booking;

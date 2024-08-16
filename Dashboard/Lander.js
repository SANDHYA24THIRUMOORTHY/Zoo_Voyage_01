import React, { useState, useEffect } from 'react';
import './Lander.css';
import Login from '../FirstPage/Login';
import Register from '../FirstPage/Register';

const images = [
  {
    src: 'https://s1.1zoom.me/big0/78/Scenery_Deer_Clouds_497935.jpg',
    title: 'Zoo Voyage...',
    description: 'Welcomes you..',
  },
  {
    src: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?cs=srgb&dl=pexels-couleur-2317904.jpg&fm=jpg',
    title: 'Exlore wildness',
    description: 'Adventure awaits at the zoo!',
  },
  {
    src: 'https://lh3.googleusercontent.com/zBFB7fUIP4AyrPpL7AcyzJXcPWOXswtrBQR_SGMH60iEnHr8fKBz-yi-OrqiLRssiUCDsHeqr9jO=w1440-ns-nd-rj',
    title: 'Fierce and Wild',
    description: 'Exploring animal kingdom at the zoos.',
  },
  {
    src: 'https://i.pinimg.com/originals/89/8a/58/898a58edbec10ac4b429a5a31255ca56.jpg',
    title: 'Adventure awaits..',
    description: 'Get your wild vibes..',
  },
];

const Lander = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div className="landing-page">
      <header className="header-lander">
        <div className="header-buttons">
          <button className="header-button" onClick={handleLoginClick}>Login</button>
          <button className="header-button" onClick={handleRegisterClick}>Register</button>
          <h1 className='zoovoyage'>Zoo Voyage</h1>
        </div>
      </header><br /><br /><br />
      <div className="background-image" style={{ backgroundImage: `url(${images[currentIndex].src})` }}>
        <div className="text-content-land">
          <h1>{images[currentIndex].title}</h1>
          <p>{images[currentIndex].description}</p>
        </div>
        <div className="image-slider">
        {images.map((image, index) => (
          <div key={index} className={`slider-image ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.title} />
            <div className="image-description">
            </div>
          </div>
        ))}
      </div>

      </div><br />
      
      <div className="details-section">
        <div className="details-header">
          {/* Add any header content if needed */}
        </div>
        <div className="details-content">
          <h2>Explore More at Our Zoos</h2>
          <div className="round-image-container">
            <img src="https://i.chzbgr.com/full/3158109184/hA3808229/panda" alt="Animal" className="round-image" />
            <p>Animals</p>
          </div>
          <div className="round-image-container">
            <img src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/4268/image/s768x1300/WC202209_LAST_006_430968_reduced.jpg" alt="Bird" className="round-image" />
            <p>Birds</p>
          </div>
          <div className="round-image-container">
            <img src="https://cdn.shopify.com/s/files/1/0094/2823/8432/files/b3_final.jpg?v=1655336196" alt="Butterfly" className="round-image" />
            <p>Butterflies</p>
          </div>
        </div>
      </div>
      <div className="lander-content">
  <div className="info-box">
    <h2>Our Vision</h2>
    <p>At ZooVoyage, our vision is to create an immersive and accessible experience for all visitors. We aim to combine the beauty of nature with cutting-edge technology to make wildlife exploration more engaging and informative.</p>
  </div>
  <div className="info-box">
    <h2>Our Motive</h2>
    <p>Our motive is to promote wildlife conservation by offering a platform that educates and entertains. With features like enhanced UI/UX, vlog pages, and resort booking, we strive to connect people with nature in innovative ways.</p>
  </div>
  <div className="info-box">
    <h2>Key Features</h2>
    <p>Key features of ZooVoyage include a state-of-the-art user interface, the ability to upload and view vlogs, and seamless resort booking. We ensure that every aspect of your journey is memorable and <br></br>convenient.</p>
  </div>
</div>

      <footer className="footer-l">
        <p>Contact us: zoo.voyage@example.com | Follow us on social media</p>
        <p>&copy; 2024 Zoo Voyage. All rights reserved.</p>
      </footer>

      {/* Modals */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button-r" onClick={closeModal}>X</button>
            <Login onSwitchToRegister={handleRegisterClick} />
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button-r" onClick={closeModal}>X</button>
            <Register onSwitchToLogin={handleLoginClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lander;

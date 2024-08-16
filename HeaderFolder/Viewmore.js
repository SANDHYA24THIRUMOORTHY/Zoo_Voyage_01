import React, { useEffect } from 'react';
import './Viewmore.css';
import { Link } from 'react-router-dom';

const Viewmore = () => {
  const hotel = {
    name: 'Erisha Tadoba',
    description: 'Erisha Tadoba Hotel Paradise is a luxurious resort with stunning ocean views and top-notch amenities.',
    images: [
      'https://www.baycapitaldanang.com/wp-content/uploads/2023/03/xPresidential_Suite_Bay_Capital_Danang_Hotel_1920x.jpg.pagespeed.ic.gYdbhwt9Vo.jpg',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382696406.jpg?k=7d4ea3f18030854c9f7cc98a54dfdc6f812425875d35deb915d5ba8828cd53e1&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126780059.jpg?k=6b06f18283c7e9947720069dd60a154fec210a783590af567aa0c0c35addfe40&o=&hp=1',
      'https://furaveri.com/wp-content/uploads/2022/04/GardenVilla_Bath_1.jpg'
    ],
    roomCategories: [
      {
        name: 'Ocean View Suite',
        description: 'A spacious suite with breathtaking ocean views, perfect for a romantic getaway.',
        maxPersons: 2,
        budget: 'Rs.35000 per night',
      },
      {
        name: 'Garden Villa',
        description: 'A cozy villa surrounded by lush gardens, ideal for families.',
        maxPersons: 4,
        budget: 'Rs.45000 per night',
      },
      {
        name: 'Presidential Suite',
        description: 'Experience ultimate luxury in our top-tier suite with premium amenities.',
        maxPersons: 2,
        budget: 'Rs.70000 per night',
      },
    ],
  };

  // Automatically change images
  useEffect(() => {
    const interval = setInterval(() => {
      const gallery = document.querySelector('.unique-image-gallery');
      gallery.appendChild(gallery.firstChild);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="unique-hotel-details-page">
      <h1 className="unique-hotel-name">{hotel.name}</h1>
      <p className="unique-hotel-description">{hotel.description}</p>

      <div className="unique-hotel-images">
        <h2>Hotel Images</h2>
        <div className="unique-image-gallery">
          {hotel.images.map((image, index) => (
            <img key={index} src={image} alt={`${hotel.name} ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="unique-room-categories">
        <h2>Available Room Categories</h2>
        <div className="unique-room-container">
          {hotel.roomCategories.map((room, index) => (
            <div key={index} className="unique-room-category">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p><strong>Max Persons:</strong> {room.maxPersons}</p>
              <p><strong>Budget:</strong> {room.budget}</p>
      <Link to="/payment"><button className="unique-book-now-button" >
        Book Now
      </button></Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Viewmore;

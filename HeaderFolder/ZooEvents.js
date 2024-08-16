import React from 'react';
import './ZooEvents.css';

const events = [
  {
    title: 'Lion Feeding Show',
    description: 'Watch the lions being fed by our experienced zookeepers.',
    imageUrl: 'https://img.freepik.com/free-photo/lion-pride-dry-forest_23-2151661682.jpg?uid=R119970806&ga=GA1.1.2009190256.1721713402&semt=ais_user',
    videoUrl: 'https://www.youtube.com/embed/wZIfU_J45Fc'
  },
  {
    title: 'Elephant Parade',
    description: 'Enjoy the majestic parade of elephants in the zoo.',
    imageUrl: 'https://live.staticflickr.com/4111/5086255890_9dd19d4fff_b.jpg',
    videoUrl: 'https://www.youtube.com/embed/weDPR50YHVM?si=JcM2Pbnxsbu_EnQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
  },
  {
    title: 'Birds of Prey Show',
    description: 'Experience the thrilling flight of our birds of prey.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoDfG0oJH_Nm52xcophz6C0-86rR3a5dTdg&s',
    videoUrl: 'https://www.youtube.com/embed/fnkV3S3aOio'
  }
];

const ZooEvents = () => {
  return (
    <div className="events-page">
      <h4 className="page-title">RECENT EVENTS</h4>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <div className="event-media">
              <img src={event.imageUrl} alt={event.title} className="event-image" />
              <iframe
                src={event.videoUrl}
                title={event.title}
                className="event-video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZooEvents;

import React, { useEffect, useRef } from 'react';
import './VideoCarousel.css'; // Ensure this imports your CSS

const images = [
  { src: 'https://i.pinimg.com/236x/4d/92/91/4d9291d732fbdd275cf1e637c07f31d4.jpg', alt: 'Fox' },
  { src: 'https://i.pinimg.com/236x/72/ec/ca/72eccad962bb5206449bab3c3c193c14.jpg', alt: 'Tiger' },
  { src: 'https://i.pinimg.com/236x/0d/89/ca/0d89ca6afbc677c337c305232c9fc7b8.jpg', alt: 'Rhino' },
  { src: 'https://i.pinimg.com/236x/8f/af/10/8faf10dc1303ef4b02b79df84640b5fd.jpg', alt: 'Bird' },
  { src: 'https://i.pinimg.com/236x/c5/3e/56/c53e565dab12f958830cf1c55ab10292.jpg', alt: 'Owl' },
  { src: 'https://i.pinimg.com/236x/75/ee/b6/75eeb67fa35199bc6244fba84e733ace.jpg', alt: 'Snake' },
  { src: 'https://i.pinimg.com/236x/c9/1c/59/c91c5949c622246a779527de799e2a00.jpg', alt: 'Dog' },
  { src: 'https://i.pinimg.com/236x/a5/fe/7d/a5fe7dd704514c6f44774c4b40900dc1.jpg', alt: 'Chimpanzee' },
  { src: 'https://i.pinimg.com/236x/b1/ed/9d/b1ed9d752c47169c13747fbb9e665ba6.jpg', alt: 'Zebra' },
  { src: 'https://i.pinimg.com/236x/66/92/af/6692af15601217811c9ee59169ee431e.jpg', alt: 'Puffin' },
  { src: 'https://i.pinimg.com/236x/5e/13/79/5e13792616924164de88185ceb96cab4.jpg', alt: 'Bird' },
  { src: 'https://i.pinimg.com/236x/e4/bd/06/e4bd0626841d5472bb16941041562e7c.jpg', alt: 'Reptile' },
  { src: 'https://i.pinimg.com/236x/35/4c/d8/354cd8f42629543a69828d277af83f07.jpg', alt: 'Alligator' },
  { src: 'https://i.pinimg.com/474x/22/dd/81/22dd8144f10955138d4fe7d6986468ae.jpg', alt: 'Lizard' },
  { src: 'https://i.pinimg.com/236x/ec/9f/3a/ec9f3ae46bcd930b5d8a31f975c9235d.jpg', alt: 'Chameleon' },
  { src: 'https://i.pinimg.com/236x/e0/e0/66/e0e066f4c80bd18300091a0ad5454f6d.jpg', alt: 'Snake' },
  { src: 'https://i.pinimg.com/236x/7e/0d/cc/7e0dcc986c81abf38ca19e4cda947dfc.jpg', alt: 'Snake' },
  { src: 'https://i.pinimg.com/236x/68/0e/87/680e87b047888b6c2a0babcb8e9573ab.jpg', alt: 'Snake' },
];

const VideoCarousel = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((ref, index) => {
      setTimeout(() => {
        ref.classList.add('roll-in');
      }, index * 300); // Stagger the animation by 300ms
    });
  }, []);

  return (
    <div className='hvideo1'>
        <div className='hvideo'>

    <h1>Animal and Birds</h1>
        </div>
    <div className="video-carousel">
        
        
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-item"
          ref={el => imageRefs.current[index] = el}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoCarousel;

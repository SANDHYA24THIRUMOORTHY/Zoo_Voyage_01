import React, { useState } from 'react';
import './MapEmbed.css'; // Import the CSS file for styling

const zooOptions = [
  {
    name: "Bannerghatta Biological Park",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.69053912012!2d77.56296407791719!3d12.798588155273487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69e00b196db1%3A0x4f6f2e78ffa13a5f!2sBannerughatta%20Biological%20Park!5e0!3m2!1sen!2sin!4v1723569651152!5m2!1sen!2sin"
  },
  {
    name: "Vandalur Zoo",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.441209351785!2d80.077040677927!3d12.879326555010554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7aee041edbd%3A0xe1f08da7830c80fa!2sVANDALUR%20zoo!5e0!3m2!1sen!2sin!4v1723569778414!5m2!1sen!2sin"
  },
  {
    name: "Bhadra Wildlife Sanctuary",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.389005791094!2d75.63265207485485!3d13.694873786691069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb2029086af8a9%3A0xacab84f30b64a71d!2sBhadra%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1723569854790!5m2!1sen!2sin"
  },
  {
    name: "Sri Chamarajendra Zoological Gardens",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.198590218775!2d76.66124447482962!3d12.302409187954805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7023040e7795%3A0xea57334ccb6cbfcb!2sSri%20Chamarajendra%20Zoological%20Gardens%20(Mysuru%20Zoo)!5e0!3m2!1sen!2sin!4v1723570057894!5m2!1sen!2sin"
  },
  {
    name: "Rajiv Gandhi Zoological Park",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.687762314317!2d73.85822277496116!3d18.452480682627957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac307f7a82f%3A0x3ac431343224b00b!2sRajiv%20Gandhi%20Zoological%20Park%20and%20Wildlife%20Research%20Center!5e0!3m2!1sen!2sin!4v1723570120714!5m2!1sen!2sin"
  }
];

const MapEmbed= () => {
  const [selectedZoo, setSelectedZoo] = useState(zooOptions[0].src);

  const handleChange = (event) => {
    const selectedOption = zooOptions.find(zoo => zoo.name === event.target.value);
    setSelectedZoo(selectedOption.src);
  };

  return (
    <div className="map-wrapper">
      <select onChange={handleChange} className="zoo-select">
        {zooOptions.map((zoo, index) => (
          <option key={index} value={zoo.name}>
            {zoo.name}
          </option>
        ))}
      </select>
      <iframe
        src={selectedZoo}
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

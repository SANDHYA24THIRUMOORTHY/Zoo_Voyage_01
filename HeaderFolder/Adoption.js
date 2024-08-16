import React from 'react';
import './Adoption.css';

const Adoption = () => {
  return (
    <div className="adoption-container">
      <h1 className="adoption-heading">Adoption</h1>
      
      <div className="adoption-images">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQy8OSiJBDaloISlSGKkmfLm2abhuyqp3tcPG0OHkCQ1eUCTVkK" alt="Adopt via ZAK" className="adoption-image" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YPdGOAH1gsLZ7FYr54YFk52FVa_oZA8FHg&usqp=CAU" alt="Adopt via ZAK" className="adoption-image" />
      </div>
      
      <table className="adoption-table">
        <thead>
          <tr>
            <th>SLNo</th>
            <th>Species</th>
            <th>Adoption Rate per Year (Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="diamond-category">
            <td colSpan="3">Diamond Class</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Asiatic Elephant</td>
            <td>₹3,00,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lion, Tiger (White/Bengal), Giraffe</td>
            <td>₹2,00,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hippopotamus</td>
            <td>₹1,50,000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Zebra</td>
            <td>₹75,000</td>
          </tr>

          <tr className="gold-category">
            <td colSpan="3">Gold Class</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Indian Leopard, Sloth Bear, Asiatic Black Bear, Gaur</td>
            <td>₹1,00,000</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Golden Jackal, Indian Grey Wolf, Striped Hyena, Dhole/Wild Dog</td>
            <td>₹50,000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Spot-billed Pelican, Black Buck</td>
            <td>₹25,000</td>
          </tr>

          <tr className="silver-category">
            <td colSpan="3">Silver Class</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Malabar Giant Squirrel</td>
            <td>₹20,000</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Nilgai, Sambar, Spotted Deer</td>
            <td>₹20,000</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Ostrich, Rhea, Emu</td>
            <td>₹15,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adoption;

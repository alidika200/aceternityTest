import React from "react";
import  './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
const Card = ({ gameName, categories, backgroundImage }) => {
  return (
    <div className="card">
        <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <p className="gameName20" style={{ color: 'white' }}>{gameName}</p>
        <div className="categoryrow">
            {categories.map((category, index) => (
                <div key={index} className={`category ${index === 0 ? 'category' : 'category2'}`}>
                    {category}
                </div>
            ))}
        </div>
        <div className="actions">
            <div className="rating">
                <div className="num">
                <FontAwesomeIcon icon={faFaceSmile} style={{color: "#1d2e4e",}} />
                </div>
            </div>
            <a href="#" className="buy">Buy</a>
        </div>
    </div>
);
};

   
   export default Card;
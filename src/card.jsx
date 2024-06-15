import React from "react";
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const Card = ({ gameName, studioName, categories, backgroundImage, price, Description, releaseDate, category, steam, humbleBundle, gog, cpu, gpu, ram, review, userImage, userReview, image1, image2, image3, trailer }) => {
  const stateData = {
    gameName,
    studioName,
    backgroundImage,
    price,
    Description,
    releaseDate,
    category,
    steam,
    humbleBundle,
    gog,
    cpu,
    gpu,
    ram,
    review,
    userImage,
    userReview,
    image1,
    image2,
    image3,
    trailer
  }; 

 

  return (
    <div className="card15">
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
            <FontAwesomeIcon icon={faFaceSmile} style={{ color: "#1d2e4e", }} />
          </div>
        </div>
        <Link to="/storePage" state={stateData}>
          <div className="buy">Buy</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;

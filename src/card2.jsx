import React from "react";
import './card2.css';
import { Link } from "react-router-dom";

const Card2 = ({ backgroundImage, gameName, studioName, Description, datePlayed, totalHours, tournamentImage,
  tournamentName, tournamentDesc,  maxNumber }) => {
  const stateData = {
    backgroundImage, 
    gameName, 
    studioName, 
    Description,
    datePlayed, 
    totalHours, 
    tournamentImage,
    tournamentName, tournamentDesc,  maxNumber
  };

  return (
    <>
      <Link to="/libraryPage" state={stateData}>
        <div className="card215" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <p className="gameName201">{gameName}</p>
        </div>
      </Link>
    </>
  );
};

export default Card2;

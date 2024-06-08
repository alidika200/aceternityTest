import React from "react";
import './addGameForm.css';
import Header from "./Layout";
import profilePic from './assets/shitpost.jpg'

const GameForm = () => {
    return(
        <>
         <Header playerName ="Ali"
   backgroundImage = {profilePic}/> 

    <div className="form-container">
      <h1>Game Form</h1>
      <form>
        <div className="left-column">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="developer">Developer</label>
            <input type="text" id="developer" name="developer" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="requirements">System Requirements</label>
            <textarea id="requirements" name="requirements"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" />
          </div>
         
        </div>
        <div className="right-column">
          <div className="form-group">
            <label htmlFor="picture">Picture</label>
            <input type="file" id="picture" name="picture" accept="image/*" />
          </div>
          <div className="form-group">
            <label htmlFor="banner">Banner</label>
            <input type="file" id="banner" name="banner" accept="image/*" />
          </div>
          <div className="form-group">
            <label htmlFor="trailer">Trailer Link</label>
            <input type="url" id="trailer" name="trailer" />
          </div>
          <div className="form-group">
            <label htmlFor="release-date">Release Date</label>
            <input type="date" id="release-date" name="release-date" />
          </div>
          <div className="form-group">
            <label htmlFor="systems">Available Systems</label>
            <input type="text" id="systems" name="systems" />
          </div>
        </div>
      </form>
    </div>
    </>
    );
};
export default GameForm;
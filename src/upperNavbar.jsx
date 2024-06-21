import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import './upperNavBar.css';
import {
  PictureOutlined
} from '@ant-design/icons';


const UpperNavBar = ({ onPostTypeSelected }) => {
  return (
    <div className="upper-nav-bar">
      <button className="button-large" onClick={() => onPostTypeSelected('text')}>
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button className="button-large" onClick={() => onPostTypeSelected('image')}>
        <PictureOutlined width={120} />
      </button>
      <button className="button-large" onClick={() => onPostTypeSelected('video')}>
        <FontAwesomeIcon icon={faVideo} />
      </button>
    </div>
  );
};

export default UpperNavBar;

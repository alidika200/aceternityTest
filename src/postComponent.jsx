import React from 'react';
import './postComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import {
    MenuOutlined
  } from '@ant-design/icons';


const Post = ({ userImage, userName, postText, mediaUrl }) => {
  return (
    <>
      <div className="postCard">
        <div className="postContent">
          <div className="postHeader">
            <div  className="postImageUser" style={{ backgroundImage: `url(${userImage})` }}></div>
            <div className="userName"> <a href='#'>{userName}</a></div>
          </div>
          <p className="postText">{postText}</p>
          {mediaUrl && (
            <div className="postMedia">
              {mediaUrl.endsWith('.mp4') ? (
                <video controls>
                  <source src={mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={mediaUrl} alt="Post media" />
              )}
            </div>
          )}
          <div className="submit">
            <div className="rate">
              <button className="up">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <button className="down">
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button className="postOps"> <MenuOutlined /> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

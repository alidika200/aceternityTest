import React, { useState } from 'react';
import './postComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

const Post = ({ userImage, userName, postText, mediaUrl }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [comment, setComment] = useState('');

  const handleMenuClick = (e) => {
    switch (e.key) {
      case 'edit':
        console.log('Edit action');
        break;
      case 'delete':
        console.log('Delete action');
        break;
        case 'Save':
          console.log('Save action');
          break;
      case 'report':
        console.log('Report action');
        break;
      default:
        break;
    }
  };

  const handleUpvote = () => {
    if (!upvoted) {
      setUpvotes(upvotes + 1);
      setUpvoted(true);
      if (downvoted) {
        setDownvotes(downvotes - 1);
        setDownvoted(false);
      }
    } else {
      setUpvotes(upvotes - 1);
      setUpvoted(false);
    }
  };

  const handleDownvote = () => {
    if (!downvoted) {
      setDownvotes(downvotes + 1);
      setDownvoted(true);
      if (upvoted) {
        setUpvotes(upvotes - 1);
        setUpvoted(false);
      }
    } else {
      setDownvotes(downvotes - 1);
      setDownvoted(false);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment);
    setComment('');
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
      <Menu.Item key="report">Report</Menu.Item>
      <Menu.Item key="report">Save post</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="postCard">
        <div className="postContent">
          <div className="postHeader">
            <div
              className="postImageUser"
              style={{ backgroundImage: `url(${userImage})` }}
            ></div>
            <div className="userName">
              <a href="#">{userName}</a>
            </div>
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
          <div className="submitPost">
            <div className="ratePost">
              <button
                className="upPost"
                onClick={handleUpvote}
                style={{ color: upvoted ? 'green' : '#fff' }}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <span>{upvotes}</span>
              <button
                className="downPost"
                onClick={handleDownvote}
                style={{ color: downvoted ? 'red' : '#fff' }}
              >
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <span>{downvotes}</span>
              <Dropdown overlay={menu} trigger={['click']}>
                <button className="postOps">
                  <MenuOutlined />
                </button>
              </Dropdown>
            </div>
            <div className="commentSection">
              <textarea
                placeholder="Add a comment..."
                className="commentInput"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
              <button className="commentSubmit" onClick={handleCommentSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

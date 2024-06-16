import React, { useState } from 'react';
import './postPopup.css';

const PostPopup = ({ type, onClose, onSubmit }) => {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = () => {
    onSubmit({ type, text, media });
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h3>Post a {type}</h3>
        <textarea
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {type !== 'text' && (
          <input
            type="file"
            accept={type === 'image' ? 'image/*' : 'video/*'}
            onChange={(e) => setMedia(e.target.files[0])}
          />
        )}
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
};

export default PostPopup;

import React, { useState } from 'react';
import { MessageList, ChatItem } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import './ChatWidget.css';

// Sample avatar images (you can replace with actual image URLs)
import avatar1 from './assets/shitpost.jpg';
import avatar2 from './assets/avatar3.jpg';

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);

  const chats = [
    { id: 1, title: 'Mahdi Olliek', avatar: avatar1 },
    { id: 2, title: 'Malek ', avatar: avatar2 },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() || mediaFiles.length > 0) {
      const newMessage = {
        position: 'right',
        type: 'text',
        text: inputValue.trim(),
        date: new Date(),
        ...(mediaFiles.length > 0 && { files: mediaFiles }), // Add mediaFiles to the message object if there are any
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
      setMediaFiles([]);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files);
  };

  return (
    <div className="chat-widget">
      {isChatOpen && selectedChat ? (
        <div className="chat-window">
          <button onClick={() => setIsChatOpen(false)}>Back</button>
          <MessageList className="message-list" lockable={true} toBottomHeight={'100%'} dataSource={messages} />
          <div className="input-container">
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              accept="image/*, video/*, application/pdf" // Acceptable file types
              className="media-input"
            />
            <input
              type="text"
              placeholder="Type here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-input"
            />
            <button onClick={handleSendMessage} className="send-button">Send</button>
          </div>
        </div>
      ) : (
        <div className="chat-list">
          {chats.map(chat => {
            const lastMessage = messages.find(msg => msg.position === 'left' && msg.title === chat.title);
            const subtitle = lastMessage ? lastMessage.text : '';

            return (
              <ChatItem
                key={chat.id}
                avatar={chat.avatar}
                alt={chat.title}
                title={chat.title}
                subtitle={subtitle}
                onClick={() => {
                  setSelectedChat(chat);
                  setIsChatOpen(true);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

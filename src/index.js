import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import { UserProvider } from './components/UserProvider.js';
import Store from './store.jsx';
import Feed from './feed.jsx';
import LibraryCarousel from './libraryCarousel.jsx';
import GamePageStore from './gamePageStore.jsx';
import GamePageLibrary from './gamePageLibrary.jsx';
import GameForm from './addGameForn.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />
  
);
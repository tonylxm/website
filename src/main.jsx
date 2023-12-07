import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root');

// Update the rendering logic for React 18 using createRoot
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
    <App />
);

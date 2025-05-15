
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create root and render App
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');
const root = createRoot(rootElement);
root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);

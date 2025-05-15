
import * as React from 'https://esm.sh/react@18';
import { createRoot } from 'https://esm.sh/react-dom@18/client';
import App from './App.tsx';
import './index.css';

// Create root and render App
const rootElement = document.getElementById("root");
createRoot(rootElement).render(React.createElement(App));

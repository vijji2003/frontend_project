import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  console.error("❌ VITE_API_URL is not defined");
} else {
  // If API already ends with /api, remove it
  window.__BASE_URL__ = apiUrl.endsWith("/api")
    ? apiUrl.replace("/api", "")
    : apiUrl;
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

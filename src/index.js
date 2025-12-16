import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import StripeProvider from './contexts/StripeProvider';
import './aws-config'; // Initialize AWS configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StripeProvider>
        <App />
      </StripeProvider>
    </AuthProvider>
  </React.StrictMode>
);

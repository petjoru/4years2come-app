
import React from 'react';
import ReactDOM from 'react-dom/client';
import FourYears2App from './FourYears2App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FourYears2App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(reg => console.log('✅ ServiceWorker registrerad:', reg))
      .catch(err => console.error('❌ ServiceWorker fel:', err));
  });
}

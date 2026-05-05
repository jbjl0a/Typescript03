import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Encontra a div raiz do HTML e cria o ponto de entrada da aplicacao React.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderiza a aplicacao dentro do StrictMode para ajudar a detectar problemas durante o desenvolvimento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * PUNTO DE ENTRADA DE REACT / PONTO DE ENTRADA REACT
 * --------------------------------------------------
 * [ES] Este archivo monta la aplicación React en el elemento DOM con id 'root'.
 *      Es el primer archivo que se ejecuta en el navegador.
 * 
 * [PT] Este arquivo monta a aplicação React no elemento DOM com id 'root'.
 *      É o primeiro arquivo executado no navegador.
 */

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
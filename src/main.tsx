import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CardDeck from "./lib/cardDeck";
// import './cards.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const test = new CardDeck();

console.log(test.getCard())
console.log(test.getCards(5))

// const arr = [1, 2, 3];
//
// console.log(arr);
//
// arr.splice(1, 1)
//
// console.log(arr);
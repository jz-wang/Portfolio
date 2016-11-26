import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', ()=>{
  const store = configureStore();
  const base = document.getElementById('base');
  ReactDOM.render(<Root store={store}/>, base);
});

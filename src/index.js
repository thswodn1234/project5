import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyNav from './MyNav';
import MyHeader from './MyHeader';
import MyMain from './MyMain';
import MyFooter from './MyFooter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNav/>
    <MyHeader />
    <MyMain/>
    <MyFooter />
  </React.StrictMode>
);



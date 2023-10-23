import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import NavBar from './Navbar';
import AboutUs from './AboutUs';
import Apply from './Apply';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import MeetTeam from './MeetTeam';
import PhotoGallery from './PhotoGallery';
import ContactUs from './ContactUs';
import './Home.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg'>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Apply/>
      <FAQ/>
      <Sponsors/>
      <PhotoGallery/>
    </div>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

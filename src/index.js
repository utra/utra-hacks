import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import NavBar from './Navbar';
import AboutUs from './AboutUs';
import Apply from './Apply';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import PhotoGallery from './PhotoGallery';
import Resources from './Resources';
import ContactUs from './ContactUs';
import './Home.css';

import reportWebVitals from './reportWebVitals';
import Schedule from './Schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg'>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Schedule/>
      <Apply/>
      <FAQ/>
      <Sponsors/>
      <PhotoGallery/>
      <Resources/>
      <ContactUs/>
    </div>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import NavBar from './Navbar';
import AboutUs from './AboutUs';
import Apply from './Apply';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import Resources from './Resources';
import ContactUs from './ContactUs';
import './Home.css';
import "./Home Page Photos/stars.png"
import Schedule from './Schedule';
import Footer from './Footer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_D3KaB81UWmVMApo6BZ4cpwbRA7bmQig",
  authDomain: "hackathon-54b2d.firebaseapp.com",
  projectId: "hackathon-54b2d",
  storageBucket: "hackathon-54b2d.appspot.com",
  messagingSenderId: "517309214531",
  appId: "1:517309214531:web:40cbfbc69c522e2c6909f6",
  measurementId: "G-7X4NKDMPRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
      <Resources/>
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

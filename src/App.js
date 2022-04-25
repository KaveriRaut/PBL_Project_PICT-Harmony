import React from 'react';
import {BrowserRouter as Router, Routes ,Route, NavLink } from 'react-router-dom' ;
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import Club_info from './components/Club_info';
import Faculty_info from './components/Faculty_info';
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <>
    
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/Club_info' element={<Club_info />} />
          <Route path='/Faculty_info' element={<Faculty_info />} />
          <Route path='/SignInPage' element={<SignInPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
        </Routes>
    </Router>
      
    </>
  );
}

export default App;

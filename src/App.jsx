import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


const AccessEaseApp = () => {
  

  return (
   <>
   <div className='w-full '>
    <Header />
    <Outlet/>
    <Footer/>
   </div>
   </>
  );
};

export default AccessEaseApp;
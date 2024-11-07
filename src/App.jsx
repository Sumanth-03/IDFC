import React from 'react';
import Home from './components/Home';
import './App.css'
import { Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Offers from './components/Offers';
import OfferDetails from './components/offerDetails';


function App() {

  return (
    <>
    <div className='w-screen overflow-y-auto min-h-screen md:px-10'>
    <div className='overflow-x-hidden max-w-[1200px]  m-auto mt-20'>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/offer" element={<Offers/>} />
          <Route path="/offerDetails" element={<OfferDetails/>} />
      </Routes>
    </div>
    </div>
    <Footer/>
    </>
    

  )
}

export default App

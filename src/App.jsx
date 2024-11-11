import React from 'react';
import Home from './components/Home';
import './App.css'
import { Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Offers from './components/Offers';
import OfferDetails from './components/offerDetails';
import TermsOfService from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';


function App() {

  return (
    <>
    <div className='w-screen overflow-y-auto min-h-screen md:px-10'>
    <div className='overflow-x-hidden max-w-[1200px]  m-auto mt-20'>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/offerDetails" element={<OfferDetails/>} />
          <Route path="/terms" element={<TermsOfService/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />
      </Routes>
    </div>
    </div>
    <Footer/>
    </>
    
   
  )
}

export default App




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import ContactForm from './Component/ContactForm';
import Footer from './Component/Footer';
import About from './Component/About';
import Contact from "./Component/Contact.jsx"
import PrivacyPolicy from './Component/PrivacyPolicy.jsx';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="Privacy-Policy" element={<PrivacyPolicy/>}/>

        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
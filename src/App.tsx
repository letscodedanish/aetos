import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import SecurityPage from "./components/SecurityPage";
import WhyUsPage from "./components/WhyUsPage";
import AboutUsPage from "./components/AboutUsPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import IndustriesPage from "./components/IndustriesPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto px-10">
        <Navbar />
        <div className="bg-cream rounded-xl p-8 md:p-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
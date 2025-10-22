import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import PopularPolicies from "./components/PopularPolicies/PopularPolicies";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonial from "./components/Testimonials/Testimonials";
import AboutPage from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import PoliciesPage from "./components/Policies/Policies";
import Contact from "./components/Contact/Contact";


const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <WhyChooseUs />
    <PopularPolicies />
    <HowItWorks />
    <Testimonial />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/policies/:type" element={<PoliciesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

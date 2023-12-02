import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 
import './App.css';
import Home from './Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Service from './Service';
import { Footer } from './Footer';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

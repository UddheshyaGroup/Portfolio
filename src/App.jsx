import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Homepage from "./pages/HomePage/Homepage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/services" element={<Services />} /> 
         <Route path="/career" element={<Career />} />
         <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

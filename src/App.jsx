import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Homepage from "./pages/HomePage/Homepage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import ContactUS from "./components/ContactUS";
import "./App.css";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
      <Router>
        <div className="max-w-[1920px] mx-auto relative shadow-2xl">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Homepage onContactClick={() => setIsContactModalOpen(true)} />
              }
            />
            <Route
              path="/portfolio"
              element={
                <Portfolio onContactClick={() => setIsContactModalOpen(true)} />
              }
            />
            <Route
              path="/services"
              element={
                <Services onContactClick={() => setIsContactModalOpen(true)} />
              }
            />
            <Route
              path="/career"
              element={
                <Career onContactClick={() => setIsContactModalOpen(true)} />
              }
            />
            <Route
              path="/about"
              element={
                <AboutUs onContactClick={() => setIsContactModalOpen(true)} />
              }
            />
          </Routes>
          <Footer />

          {/* Contact Us Modal */}
          <ContactUS
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </div>
      </Router>
    );
}

export default App;

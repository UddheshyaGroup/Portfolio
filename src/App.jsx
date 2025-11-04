import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import Homepage from './pages/HomePage/Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/career" element={<Career />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App

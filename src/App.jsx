import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import ScrollToTopButton from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<CaseStudy />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  )
}

export default App

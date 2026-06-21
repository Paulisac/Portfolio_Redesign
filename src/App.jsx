import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import AIPrintPreparation from './pages/tools/AIPrintPreparation'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import ScrollToTopButton from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/tools/ai-print-preparation-assistant" element={<AIPrintPreparation />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  )
}

export default App

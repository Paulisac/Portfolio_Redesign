import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setDrawerOpen(false)
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">Paul Isac</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a></li>
            <li><a href="#tools" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>Tools</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          </ul>
          <button 
            className={`nav-hamburger ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setDrawerOpen(false)}>Home</Link>
        <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
        <a href="#tools" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>Tools</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
      </div>
    </>
  )
}

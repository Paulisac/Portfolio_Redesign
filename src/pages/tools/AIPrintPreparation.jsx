import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'
import { Link } from 'react-router-dom'
import PrintPrepTool from '../../components/tools/PrintPrepTool'

export default function AIPrintPreparation() {
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <div className="cs-hero">
        <Link to="/" className="cs-back">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M11 3L4 8l7 5"/>
          </svg>
          Back to home
        </Link>
        <div className="cs-hero-label">Tool · Experiment</div>
        <h1>AI Print Preparation Assistant</h1>
        <div className="cs-hero-outcome">Upload artwork and receive a print-readiness analysis and production recommendations.</div>
      </div>

      <div className="cs-body">
        <div className="cs-section">
          <div className="cs-section-label">About the tool</div>
          <p>This assistant analyses uploaded artwork for print readiness — checking resolution (DPI), color mode (RGB/CMYK), and offering production recommendations.</p>
        </div>

        <div className="cs-section">
          <div className="cs-section-label">Tool interface</div>
          <PrintPrepTool />
        </div>

        <div className="cs-section">
          <div className="cs-section-label">FAQ</div>
          <details style={{marginBottom: '1rem'}}>
            <summary>What file types are supported?</summary>
            <p>Common raster and vector formats such as JPG, PNG, TIFF, and PDF are supported. Vector files are preferred for scalability.</p>
          </details>
          <details style={{marginBottom: '1rem'}}>
            <summary>How does DPI analysis work?</summary>
            <p>The assistant estimates print DPI from pixel dimensions and intended print size, and recommends resampling or vector sources if resolution is insufficient.</p>
          </details>
        </div>

        <div style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--line)'}}>
          <Link to="/" className="cs-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M11 3L4 8l7 5"/>
            </svg>
            Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { getProject } from '../data/projects'

export default function CaseStudy() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Navigation />
      <ScrollToTop />

      <div className="cs-hero">
        <Link to="/" className="cs-back">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M11 3L4 8l7 5"/>
          </svg>
          Back to work
        </Link>
        <div className="cs-hero-label">{project.client} · {project.year}</div>
        <h1>{project.title}</h1>
        <div className="cs-hero-outcome">{project.outcome}</div>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cs-meta-label">Client</div>
            <div className="cs-meta-val">{project.client}</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Year</div>
            <div className="cs-meta-val">{project.year}</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Role</div>
            <div className="cs-meta-val">{project.role}</div>
          </div>
        </div>
      </div>

      <div className="cs-body">
        <div className="cs-section">
          <div className="cs-section-label">Context</div>
          <p>{project.context}</p>
          <p><strong style={{color:'var(--text)', fontSize:'.9rem'}}>Constraints:</strong> {project.constraints}</p>
        </div>

        <div className="cs-section">
          <div className="cs-section-label">Role</div>
          <p>{project.roleDetail}</p>
        </div>

        <div className="cs-section">
          <div className="cs-section-label">Process</div>
          {project.process.map((item, i) => (
            <div key={i} style={{
              marginBottom:'1.25rem',
              paddingLeft:'1rem',
              borderLeft:'2px solid var(--line)'
            }}>
              <strong style={{display:'block', fontSize:'.9rem', marginBottom:'.25rem'}}>
                {item.step}
              </strong>
              <span style={{fontSize:'.88rem', color:'var(--text-mid)'}}>
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="cs-section">
          <div className="cs-section-label">Outcome</div>
          <div className="cs-outcome-box">
            <p>{project.impact}</p>
          </div>
        </div>

        <div className="cs-section">
          <div className="cs-section-label">Reflection</div>
          <p className="cs-reflection">{project.reflection}</p>
        </div>

        <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid var(--line)'}}>
          <Link to="/" className="cs-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M11 3L4 8l7 5"/>
            </svg>
            Back to work
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

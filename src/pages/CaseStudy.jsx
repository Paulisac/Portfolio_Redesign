import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, Navigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import projects from '../data/projects'
import { HashLink } from 'react-router-hash-link'

export default function CaseStudy() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — {project.client} · Paul Isac</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={`${project.title} — ${project.client}`} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={project.thumbnail || 'https://paulisac.com/og.png'} />
        <link rel="canonical" href={`https://paulisac.com/work/${project.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": project.title,
            "image": project.thumbnail || 'https://paulisac.com/og.png',
            "author": {
              "@type": "Person",
              "name": "Paul Isac"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Paul Isac",
              "logo": { "@type": "ImageObject", "url": "https://paulisac.com/og.png" }
            },
            "description": project.shortDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://paulisac.com/work/${project.id}`
            }
          })}
        </script>
      </Helmet>
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
        <div className="cs-hero-outcome">{project.shortDescription}</div>
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
        {/* Context */}
        <div className="cs-section">
          <div className="cs-section-label">Context</div>
          <p>{project.context}</p>
        </div>

        {/* Role */}
        <div className="cs-section">
          <div className="cs-section-label">Role</div>
          <p>{project.roleDetail}</p>
        </div>

        {/* Process */}
        <div className="cs-section">
          <div className="cs-section-label">Process</div>
          {project.process.map((item, i) => (
            <div key={i} style={{
              marginBottom: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '2px solid var(--line)'
            }}>
              <strong style={{
                display: 'block',
                fontSize: '.9rem',
                marginBottom: '.25rem'
              }}>
                {item.step}
              </strong>
              <span style={{
                fontSize: '.88rem',
                color: 'var(--text-mid)'
              }}>
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Outcome */}
        <div className="cs-section">
          <div className="cs-section-label">Outcome</div>
          <div className="cs-outcome-box">
            <p>{project.impact}</p>
          </div>
        </div>

        {/* Reflection */}
        <div className="cs-section">
          <div className="cs-section-label">Reflection</div>
          <p className="cs-reflection">{project.reflection}</p>
        </div>

        {/* View Full Case Study CTAs */}
        <div className="cs-section">
          <div className="cs-section-label">Full Case Study</div>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}>
            <a 
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Complete Case Study
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '15px', height: '15px'}}>
                <path d="M6 3h7v7M13 3L3 13"/>
              </svg>
            </a>
           {/* <a 
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View on Behance
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '15px', height: '15px'}}>
                <path d="M6 3h7v7M13 3L3 13"/>
              </svg>
            </a> */}
          </div>
        </div>

        {/* Back Link */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--line)'
        }}>
          <HashLink smooth to="/#work" className="cs-back">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M11 3L4 8l7 5"/>
          </svg>
          Back to work
          </HashLink>
        </div>
      </div>

      <Footer />
    </>
  )
}

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import HeroAnimation from '../components/HeroAnimation'
import tools from '../data/tools'

export default function Home() {
  useEffect(() => {
    // Scroll reveal logic
    const triggerReveals = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add('visible')
        }
      })
    }

    triggerReveals()
    window.addEventListener('scroll', triggerReveals)
    return () => window.removeEventListener('scroll', triggerReveals)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://paulisac.com/#organization",
              "name": "Paul Isac",
              "url": "https://paulisac.com",
              "logo": "https://paulisac.com/og.png",
              "sameAs": [
                "https://www.linkedin.com/in/paul-isac-16213a148/",
                "https://www.behance.net/luapteg",
                "https://dribbble.com/luapteg"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://paulisac.com",
              "name": "Paul Isac — Designer",
              "publisher": {
                "@id": "https://paulisac.com/#organization"
              }
            }
          ])}
        </script>
      </Helmet>
      <Navigation />
      <ScrollToTop />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-tag">UX · Visual · Motion</div>
            <h1>Designing <br/> digital products <br/> with intention.</h1>
            <p className="hero-sub">UX, visual, and motion design focused on clarity, flow, and real human behavior.</p>
            <p className="hero-since">Freelance designer since April 2024.</p>
            <div className="hero-ctas">
              <button onClick={() => scrollToSection('work')} className="btn btn-primary">
                View selected work
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </button>
              <button onClick={() => scrollToSection('approach')} className="btn btn-secondary">
                How I work
              </button>
            </div>
          </div>
          <HeroAnimation />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="services-header reveal">
          <div className="section-label">What I do</div>
          <h2 className="section-title">Three disciplines.<br/>One thread.</h2>
        </div>
        <div className="services-grid">
          <div className="service-item reveal">
            <div className="service-num">01</div>
            <h3>Product Design</h3>
            <p>Research-driven UX and UI for digital products, from early concepts to scalable systems.</p>
          </div>
          <div className="service-item reveal">
            <div className="service-num">02</div>
            <h3>Visual Design</h3>
            <p>Clear, intentional visual language across interfaces, graphics, and identity.</p>
          </div>
          <div className="service-item reveal">
            <div className="service-num">03</div>
            <h3>Motion Design</h3>
            <p>Subtle interaction and motion that guide users and reduce friction.</p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section" id="work">
        <div className="work-header reveal">
          <div className="section-label">Selected work</div>
          <h2 className="section-title">Problems solved.<br/>Decisions made.</h2>
        </div>
        <div className="work-grid">
          {/* B2B Browse */}
          <Link to="/work/browse" className="work-card reveal" data-project="browse">
            <div className="work-card-vis">
              <svg viewBox="0 0 72 72" fill="none" stroke="#8C7B6B" strokeWidth="1.2">
                <rect x="8" y="18" width="56" height="36" rx="3"/>
                <line x1="8" y1="32" x2="64" y2="32"/>
                <line x1="24" y1="18" x2="24" y2="54"/>
                <circle cx="40" cy="43" r="5"/>
                <line x1="43" y1="46" x2="50" y2="53"/>
              </svg>
            </div>
            <div className="work-card-body">
              <div className="work-card-meta">Walmart <span className="badge">Client</span></div>
              <h3>B2B Search Experience</h3>
              <div className="work-card-outcome">
                Improved product discovery efficiency by 30% <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          {/* My Insights */}
          <Link to="/work/insights" className="work-card reveal" data-project="insights">
            <div className="work-card-vis">
              <svg viewBox="0 0 72 72" fill="none" stroke="#8C7B6B" strokeWidth="1.2">
                <rect x="10" y="12" width="52" height="48" rx="3"/>
                <line x1="10" y1="24" x2="62" y2="24"/>
                <rect x="16" y="30" width="16" height="24" rx="2"/>
                <rect x="38" y="34" width="18" height="20" rx="2"/>
                <line x1="20" y1="36" x2="28" y2="36"/>
                <line x1="20" y1="40" x2="26" y2="40"/>
              </svg>
            </div>
            <div className="work-card-body">
              <div className="work-card-meta">Amnet Digital <span className="badge">Client</span></div>
              <h3>My Insights Portal</h3>
              <div className="work-card-outcome">
                Unified enterprise reports with 40% less complexity <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Takshashila */}
          <Link to="/work/taksh" className="work-card reveal" data-project="taksh">
            <div className="work-card-vis">
              <svg viewBox="0 0 72 72" fill="none" stroke="#8C7B6B" strokeWidth="1.2">
                <rect x="18" y="8" width="36" height="56" rx="4"/>
                <line x1="18" y1="20" x2="54" y2="20"/>
                <line x1="18" y1="50" x2="54" y2="50"/>
                <circle cx="36" cy="35" r="8"/>
                <line x1="36" y1="27" x2="36" y2="43"/>
                <line x1="28" y1="35" x2="44" y2="35"/>
              </svg>
            </div>
            <div className="work-card-body">
              <div className="work-card-meta">Concept <span className="badge">Solo</span></div>
              <h3>Takshashila</h3>
              <div className="work-card-outcome">
                EdTech app — 20% engagement lift in user testing <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Mighty Mechanic */}
          <Link to="/work/mechanic" className="work-card reveal" data-project="mechanic">
            <div className="work-card-vis">
              <svg viewBox="0 0 72 72" fill="none" stroke="#8C7B6B" strokeWidth="1.2">
                <circle cx="36" cy="36" r="20"/>
                <circle cx="36" cy="36" r="6"/>
                <line x1="36" y1="10" x2="36" y2="30"/>
                <line x1="36" y1="42" x2="36" y2="62"/>
                <line x1="10" y1="36" x2="30" y2="36"/>
                <line x1="42" y1="36" x2="62" y2="36"/>
              </svg>
            </div>
            <div className="work-card-body">
              <div className="work-card-meta">Concept <span className="badge">Solo</span></div>
              <h3>Mighty Mechanic</h3>
              <div className="work-card-outcome">
                Booking flow redesigned — 30% faster task completion <span className="arrow">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section" id="tools">
        <div className="work-header reveal">
          <div className="section-label">Tools</div>
          <h2 className="section-title">Useful tools.<br/>Experiments & helpers.</h2>
        </div>
        <div className="work-grid">
          {tools.map(tool => (
            <Link key={tool.id} to={tool.route} className="work-card reveal" data-tool={tool.id}>
              <div className="work-card-vis">
                <svg viewBox="0 0 72 72" fill="none" stroke="#8C7B6B" strokeWidth="1.2">
                  <rect x="12" y="14" width="48" height="44" rx="4"/>
                  <line x1="12" y1="26" x2="60" y2="26"/>
                  <circle cx="36" cy="42" r="7"/>
                </svg>
              </div>
              <div className="work-card-body">
                <div className="work-card-meta">Tool</div>
                <h3>{tool.title}</h3>
                <div className="work-card-outcome">
                  {tool.description} <span className="arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" id="approach">
        <div className="approach-header reveal">
          <div className="section-label">How I work</div>
          <h2 className="section-title">A quiet process.</h2>
        </div>
        <div className="approach-steps">
          <div className="approach-step reveal">
            <div className="step-circle">1</div>
            <h3>Understand</h3>
            <p>Clarify the real problem. Not the stated one — the actual one.</p>
          </div>
          <div className="approach-step reveal">
            <div className="step-circle">2</div>
            <h3>Define</h3>
            <p>Shape direction through structure. Constraints become the brief.</p>
          </div>
          <div className="approach-step reveal">
            <div className="step-circle">3</div>
            <h3>Explore</h3>
            <p>Visualize multiple paths. Stay loose. Don't commit too early.</p>
          </div>
          <div className="approach-step reveal">
            <div className="step-circle">4</div>
            <h3>Refine</h3>
            <p>Reduce until it feels obvious. The best design disappears.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="about-layout">
          <div className="about-left reveal">
            <div className="section-label">About</div>
            <h2 className="section-title">I'm Paul.</h2>
            <p>Designer based in India. I work across UX, visual, and motion — always in service of making things clearer, not more impressive.</p>
            <p>Before freelancing, I spent time at Walmart working on B2B e-commerce, and before that at a handful of startups where I learned to think in systems, not just screens.</p>
            <p>Outside of work: drums, reading, drawing, and occasionally breaking things to understand how they fit back together.</p>
            <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-64f3b.appspot.com/o/general%2FPaul%20Isac_Resume.pdf?alt=media&token=442a016d-897e-4559-8b71-b57c1add838a" download className="btn btn-primary" style={{marginTop:'1.5rem'}}>
              Download Resume
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 2v10M4 9l4 4 4-4"/>
              </svg>
            </a>
          </div>
          <div className="about-right reveal">
            <h4>Experience</h4>
            <div className="exp-row">
              <div>
                <div className="exp-title">Freelance Designer</div>
                <div className="exp-company">Independent</div>
              </div>
              <div className="exp-date">Apr 2024 – Now</div>
            </div>
            <div className="exp-row">
              <div>
                <div className="exp-title">UX Designer (Contract)</div>
                <div className="exp-company">Walmart</div>
              </div>
              <div className="exp-date">Oct 2023 – Apr 2024</div>
            </div>
            <div className="exp-row">
              <div>
                <div className="exp-title">UX Designer</div>
                <div className="exp-company">Amnet Digital</div>
              </div>
              <div className="exp-date">Mar 2023 – Oct 2023</div>
            </div>
            <div className="exp-row">
              <div>
                <div className="exp-title">UX/UI Designer</div>
                <div className="exp-company">Kal Informatics</div>
              </div>
              <div className="exp-date">May 2022 – Feb 2023</div>
            </div>
            <div className="exp-row">
              <div>
                <div className="exp-title">UI Designer</div>
                <div className="exp-company">Srushti Innovative Tech</div>
              </div>
              <div className="exp-date">Jun 2019 – Oct 2021</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="section">
        <div className="expect-layout">
          <div className="expect-left reveal">
            <div className="section-label">Working with me</div>
            <h2 className="section-title">What you<br/>can expect.</h2>
            <p className="section-desc">Simple process. Clear thinking. Real collaboration.</p>
          </div>
          <ul className="expect-list reveal">
            <li>
              <svg className="ico" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 2"/>
              </svg>
              <div>
                <strong>Clear thinking</strong>
                <span>Every element exists for a reason, nothing added without intent.</span>
              </div>
            </li>
            <li>
              <svg className="ico" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 10h14M10 3l7 7-7 7"/>
              </svg>
              <div>
                <strong>Open dialogue</strong>
                <span>I value clarity in conversation as much as clarity in design.</span>
              </div>
            </li>
            <li>
              <svg className="ico" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="14" height="14" rx="2"/>
                <line x1="3" y1="8" x2="17" y2="8"/>
                <line x1="8" y1="3" x2="8" y2="17"/>
              </svg>
              <div>
                <strong>Designed as a system</strong>
                <span>I design for the product as a whole — components, states, edge cases.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  )
}

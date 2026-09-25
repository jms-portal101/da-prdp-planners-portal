import './Hero.css'
import { ArrowRight } from 'lucide-react'

function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section className="hero-section">

      {/* Background */}
      <div className="hero-background" />

      {/* Overlay */}
      <div className="hero-overlay" />


      {/* Main Content */}
      <div className="hero-container">

        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge">

            <span className="hero-badge-dot" />

            DA-PRDP PLANNERS' PORTAL

          </div>


          {/* Title */}
          <h1 className="hero-title">

            Agricultural Planning

            <br />

            <span>
              &amp; Investment Intelligence
            </span>

          </h1>


          {/* Description */}
          <p className="hero-subtitle">

            A centralized platform for agricultural data,
            investment planning, regional portfolios, and
            decision-support resources.

          </p>


          {/* Same-page navigation */}
          <div className="hero-links">

            <button
              type="button"
              className="hero-link-primary"
              onClick={() =>
                scrollToSection('portfolio')
              }
            >

              <span>
                Explore Investment Portfolio
              </span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />

            </button>


            <button
              type="button"
              className="hero-link-secondary"
              onClick={() =>
                scrollToSection('tools')
              }
            >

              Explore Tools

            </button>

          </div>


          {/* Metrics */}
          <div className="hero-metrics">

            <div className="hero-metric">

              <span className="hero-metric-number">
                17
              </span>

              <span className="hero-metric-label">
                REGIONS
              </span>

            </div>


            <div className="hero-metric-divider" />


            <div className="hero-metric">

              <span className="hero-metric-number">
                01
              </span>

              <span className="hero-metric-label">
                PLANNING PLATFORM
              </span>

            </div>


            <div className="hero-metric-divider" />


            <div className="hero-metric">

              <span className="hero-metric-number">
                ∞
              </span>

              <span className="hero-metric-label">
                POSSIBILITIES
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
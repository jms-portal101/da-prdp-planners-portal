import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const goHome = () => {
    closeMenu()

    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      navigate('/')
    }
  }

  const goToSection = (sectionId) => {
    closeMenu()

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return
    }

    navigate('/', {
      state: {
        scrollTo: sectionId,
      },
    })
  }

  return (
    <header className="navbar">
      <nav className="navbar-inner">

        <button
          className="navbar-brand"
          onClick={goHome}
          aria-label="Go to DA-PRDP Planners' Portal home"
        >
          <img
            src="/images/prdp-logo.png"
            alt="PRDP Logo"
            className="navbar-logo"
          />

          <span className="navbar-brand-text">
            <strong>DA-PRDP</strong>
            <span>PLANNERS' PORTAL</span>
          </span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar-links ${
            menuOpen ? 'open' : ''
          }`}
        >
          <button onClick={goHome}>
            Home
          </button>

          <button
            onClick={() =>
              goToSection('planning')
            }
          >
            Planning
          </button>

          <button
            onClick={() =>
              goToSection('portfolio')
            }
          >
            Investment Portfolio
          </button>

          <button
            onClick={() =>
              goToSection('tools')
            }
          >
            Tools
          </button>

          <button
            onClick={() =>
              goToSection('dashboards')
            }
          >
            Dashboards
          </button>

          <button
            onClick={() =>
              goToSection('resources')
            }
          >
            Resources
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
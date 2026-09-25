import React from 'react';
import './Footer.css';

function Footer() {
  // Helper function para sa smooth scroll papunta sa mga sections
  const handleScroll = (e, id) => {
    e.preventDefault();

    if (id === 'hero' || id === 'top') {
      // Siguradong aakyat sa pinakataas ng page para sa Home
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback kung sakaling gamit mo rin ang React Router o hash anchor
      window.location.hash = id;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* BRAND & DESCRIPTION */}
        <div className="footer-brand">
          <div className="footer-logo">
            <strong>DA-PRDP</strong>
            <span>PLANNERS' PORTAL</span>
          </div>

          <p>
            A centralized digital platform for agricultural planning,
            investment, monitoring, and decision support.
          </p>
        </div>

        {/* PORTAL NAVIGATION */}
        <div className="footer-column">
          <h4>Portal</h4>

          {/* GAGANA NA ANG HOME LINK DITO */}
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
            Home
          </a>
          <a href="#planning" onClick={(e) => handleScroll(e, 'planning')}>
            Planning
          </a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>
            Investment Portfolio
          </a>
          <a href="#tools" onClick={(e) => handleScroll(e, 'tools')}>
            Tools
          </a>
        </div>

        {/* EXPLORE NAVIGATION */}
        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#dashboards" onClick={(e) => handleScroll(e, 'dashboards')}>
            Dashboards
          </a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')}>
            Resources
          </a>
          <a href="#maps-spatial" onClick={(e) => handleScroll(e, 'maps-spatial')}>
            Maps &amp; Spatial
          </a>
          <a href="#commodity-references" onClick={(e) => handleScroll(e, 'commodity-references')}>
            Commodity References
          </a>
        </div>

        {/* RESOURCES NAVIGATION */}
        <div className="footer-column">
          <h4>Resources</h4>

          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')}>
            PCIP Library
          </a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')}>
            VCA Reports
          </a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')}>
            iPEP-ARS
          </a>
          <a href="#resources" onClick={(e) => handleScroll(e, 'resources')}>
            Coursework &amp; Guides
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM / COPYRIGHT */}
      <div className="footer-bottom">
        <span>© 2026 DA-PRDP Planners' Portal</span>
        <span>Agricultural Planning &amp; Development</span>
      </div>
    </footer>
  );
}

export default Footer;
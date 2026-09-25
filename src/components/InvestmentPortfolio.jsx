import React from 'react';
import './InvestmentPortfolio.css';
import { Map, Layers3, ArrowUpRight, Sprout } from 'lucide-react';

function InvestmentPortfolio() {
  const commodities = [
    { icon: '🌾', name: 'Rice' },
    { icon: '🌽', name: 'Corn' },
    { icon: '🥥', name: 'Coconut' },
    { icon: '🥭', name: 'Mango' },
    { icon: '🐖', name: 'Swine' },
    { icon: '☕', name: 'Coffee' },
    { icon: '🍫', name: 'Cacao' },
    { icon: '🍌', name: 'Banana' },
  ];

  return (
    <section className="investment-portfolio" id="portfolio">
      {/* HEADER */}
      <div className="investment-header">
        <div>
          <span className="section-eyebrow">INVESTMENT INTELLIGENCE</span>
          <h2>
            Regional Agriculture & Fisheries
            <br />
            Investment Portfolio (RAFIP)
          </h2>
        </div>
        <p>
          A consolidated view of regional agriculture and fisheries investment
          opportunities, priority commodities, and portfolio information.
        </p>
      </div>

      {/* MAIN PORTFOLIO PANEL */}
      <div className="portfolio-panel">
        {/* MAIN CONTENT */}
        <div className="portfolio-main">
          <div className="portfolio-main-top">
            <span className="portfolio-label">REGIONAL INVESTMENT PORTFOLIO</span>
          </div>

          <h3>
            Discover where agriculture
            <br />
            meets investment opportunity.
          </h3>

          <p>
            Explore regional investment portfolios and identify priority
            commodities, value-chain opportunities, and areas for agricultural
            development.
          </p>

          <a href="/regional-portfolio" className="portfolio-button">
            Explore Regional Portfolios
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* STATS */}
        <div className="portfolio-stats">
          <div className="portfolio-stat">
            <div className="stat-icon">
              <Map size={18} strokeWidth={2} />
            </div>
            <div className="stat-content">
              <span>REGIONAL COVERAGE</span>
              <strong>17</strong>
              <small>Regional investment portfolios</small>
            </div>
          </div>

          <div className="portfolio-stat">
            <div className="stat-icon">
              <Layers3 size={18} strokeWidth={2} />
            </div>
            <div className="stat-content">
              <span>PRIORITY COMMODITIES</span>
              <strong>57</strong>
              <small>Identified across regional portfolios</small>
            </div>
          </div>

          <div className="portfolio-stat">
            <div className="stat-icon">
              <Sprout size={18} strokeWidth={2} />
            </div>
            <div className="stat-content">
              <span>INVESTMENT FOCUS</span>
              <strong className="investment-focus">AGRICULTURE</strong>
              <small>Agriculture & fisheries development</small>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED COMMODITIES */}
      <div className="commodity-section">
        <div className="commodity-header">
          <div>
            <span>FEATURED PRIORITY COMMODITIES</span>
            <h3>Representative Investment Focus Areas</h3>
          </div>
          <p>
            Selected examples from the priority commodities identified across
            regional investment portfolios.
          </p>
        </div>

        <div className="commodity-strip">
          {commodities.map((commodity) => (
            <div className="commodity-card" key={commodity.name}>
              <span className="commodity-symbol">{commodity.icon}</span>
              <span className="commodity-name">{commodity.name}</span>
            </div>
          ))}
        </div>

        <div className="commodity-note">
          <span>57 priority commodities identified across regional portfolios</span>
          <a href="/regional-portfolio">
            Explore all regional portfolios
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default InvestmentPortfolio;
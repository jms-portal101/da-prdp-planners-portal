import React from 'react';
import './InvestmentPortfolio.css';

import {
  Map,
  Layers3,
  ArrowUpRight,
  Sprout,
  Coins,
} from 'lucide-react';

function InvestmentPortfolio() {
  return (
    <section className="investment-portfolio" id="portfolio">
      {/* HEADER */}
      <div className="investment-header">
        <div>
          <span className="section-eyebrow">
            INVESTMENT INTELLIGENCE
          </span>

          <h2>
            Regional Agriculture & Fisheries
            <br />
            Investment Portfolio (RAFIP)
          </h2>
        </div>

        <p>
          A consolidated view of regional agriculture and fisheries
          investment requirements, priority commodities, and investment
          packages from the 2026 RAFIP dataset.
        </p>
      </div>

      {/* MAIN PORTFOLIO PANEL */}
      <div className="portfolio-panel">

        {/* LEFT SIDE */}
        <div className="portfolio-main">
          <div className="portfolio-main-top">
            <span className="portfolio-label">
              2026 REGIONAL INVESTMENT PORTFOLIO
            </span>
          </div>

          <h3>
            Discover where agriculture
            <br />
            meets investment opportunity.
          </h3>

          <p>
            Explore regional investment requirements, priority commodities,
            intervention areas, and RAFIP investment packages consolidated
            from the 2026 regional agriculture and fisheries investment
            portfolios.
          </p>

          <a
            href="/regional-portfolio"
            className="portfolio-button"
          >
            Explore Regional Portfolios
            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
            />
          </a>
        </div>

        {/* RIGHT SIDE — STATISTICS */}
        <div className="portfolio-stats">

          {/* REGIONAL COVERAGE */}
          <div className="portfolio-stat">
            <div className="stat-icon">
              <Map
                size={18}
                strokeWidth={2}
              />
            </div>

            <div className="stat-content">
              <span>REGIONAL COVERAGE</span>
              <strong>17</strong>
              <small>
                Regional investment portfolios
              </small>
            </div>
          </div>

          {/* PRIORITY COMMODITIES */}
          <div className="portfolio-stat">
            <div className="stat-icon">
              <Layers3
                size={18}
                strokeWidth={2}
              />
            </div>

            <div className="stat-content">
              <span>PRIORITY COMMODITIES</span>
              <strong>32</strong>
              <small>
                Identified across the 2026 RAFIP dataset
              </small>
            </div>
          </div>

          {/* TOTAL INVESTMENT */}
          <div className="portfolio-stat">
            <div className="stat-icon">
              <Coins
                size={18}
                strokeWidth={2}
              />
            </div>

            <div className="stat-content">
              <span>TOTAL INVESTMENT REQUIREMENT</span>

              <strong className="investment-focus">
                ₱178.5B
              </strong>

              <small>
                Consolidated 2026 RAFIP requirement
              </small>
            </div>
          </div>

          {/* INVESTMENT FOCUS */}
          <div className="portfolio-stat">
            <div className="stat-icon">
              <Sprout
                size={18}
                strokeWidth={2}
              />
            </div>

            <div className="stat-content">
              <span>INVESTMENT FOCUS</span>

              <strong className="investment-focus">
                AGRI & FISHERIES
              </strong>

              <small>
                Regional agriculture and fisheries development
              </small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default InvestmentPortfolio;
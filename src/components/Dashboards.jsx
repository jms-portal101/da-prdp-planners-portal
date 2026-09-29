import {
  BarChart3,
  Map,
  Activity,
  TrendingUp,
  Layers3,
  ArrowUpRight,
  ExternalLink,
  Sprout,
  Coins,
} from 'lucide-react'

import './Dashboards.css'

function Dashboards() {
  const prdpDashboardUrl =
    'https://geomapping.da.gov.ph/prdp/dashboard'

  const iPlanDashboardUrl =
    'https://lookerstudio.google.com/reporting/711f028b-2166-44de-b2f1-84b2c70bf6ff'

  const dashboards = [
    {
      icon: Sprout,
      title: 'RAFIP Regional Portfolio',
      category: 'REGIONAL AGRICULTURE & FISHERIES INVESTMENT',
      description:
        'Explore regional investment requirements, priority commodities, intervention areas, and investment packages consolidated from the 2026 RAFIP dataset.',
      metric: 'RAFIP 2026',
      color: 'green',
      href: '/regional-portfolio',
      external: false,
    },
    {
      icon: BarChart3,
      title: 'EVSA Dashboard',
      category: 'SPATIAL & AGRICULTURAL ANALYSIS',
      description:
        'Explore agricultural suitability, vulnerability, and spatial information to support investment and planning decisions.',
      metric: 'SPATIAL INTELLIGENCE',
      color: 'blue',
      href: '/tools/evsa',
      external: false,
    },
    {
      icon: TrendingUp,
      title: 'I-PLAN Investment Dashboard',
      category: 'INVESTMENT PLANNING',
      description:
        'Explore investment planning information, priority commodities, and portfolio-related indicators.',
      metric: 'INVESTMENT DATA',
      color: 'orange',
      href: iPlanDashboardUrl,
      external: true,
    },
    {
      icon: Activity,
      title: 'SES Dashboard',
      category: 'MONITORING & EVALUATION',
      description:
        'Monitor indicators and information supporting project implementation, assessment, and decision-making.',
      metric: 'MONITORING',
      color: 'purple',
      href: '/ses-dashboard',
      external: false,
    },
    {
      icon: Map,
      title: 'PRDP Commodity Map',
      category: 'COMMODITY & SUBPROJECT MAPPING',
      description:
        'Explore commodity information and mapped PRDP subprojects through the Enhanced Geomapping System.',
      metric: 'PRDP COMMODITY DATA',
      color: 'teal',
      href: prdpDashboardUrl,
      external: true,
    },
  ]

  return (
    <section className="dashboards" id="dashboards">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="dashboards-header">
        <div>
          <span className="section-eyebrow">
            DATA & INVESTMENT INTELLIGENCE
          </span>

          <h2>Dashboards & Intelligence</h2>
        </div>

        <p>
          Interactive dashboards and intelligence tools that bring
          together regional investment, agricultural, spatial, and
          monitoring information for evidence-based planning.
        </p>
      </div>


      {/* =====================================================
          FEATURED RAFIP DASHBOARD
          ===================================================== */}

      <div className="dashboard-featured">

        {/* LEFT CONTENT */}
        <div className="dashboard-featured-content">

          <div className="dashboard-featured-top">
            <span className="dashboard-live">
              <span className="dashboard-live-dot"></span>
              2026 RAFIP DATASET
            </span>

            <span className="dashboard-featured-label">
              FEATURED
            </span>
          </div>

          <span className="dashboard-featured-category">
            REGIONAL AGRICULTURE & FISHERIES INVESTMENT PORTFOLIO
          </span>

          <h3>
            RAFIP Investment
            <br />
            Intelligence
          </h3>

          <p>
            Explore regional investment requirements, priority
            commodities, intervention areas, and investment packages
            consolidated from the 2026 Regional Agriculture and
            Fisheries Investment Portfolio.
          </p>

          <a
            href="/regional-portfolio"
            className="dashboard-featured-button"
          >
            <span>Explore RAFIP Dashboard</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
            />
          </a>

        </div>


        {/* RIGHT PREVIEW */}
        <div className="dashboard-featured-visual">

          <div className="dashboard-preview">

            {/* PREVIEW HEADER */}
            <div className="dashboard-preview-header">

              <div className="preview-title">
                <span className="preview-dot"></span>
                RAFIP INVESTMENT INTELLIGENCE
              </div>

              <div className="preview-menu">
                • • •
              </div>

            </div>


            {/* PREVIEW BODY */}
            <div className="preview-body">

              {/* STAT ROW */}
              <div className="preview-stat-row">

                <div className="preview-stat">
                  <span>REGIONS</span>
                  <strong>17</strong>
                </div>

                <div className="preview-stat">
                  <span>COMMODITIES</span>
                  <strong>32</strong>
                </div>

                <div className="preview-stat">
                  <span>INVESTMENT</span>
                  <strong>₱178.5B</strong>
                </div>

              </div>


              {/* INVESTMENT CHART */}
              <div className="preview-chart">

                <div className="chart-header">
                  <span>
                    REGIONAL INVESTMENT REQUIREMENT
                  </span>

                  <span>
                    RAFIP 2026
                  </span>
                </div>


                <div className="chart-area">

                  <div className="chart-grid-line line-one"></div>
                  <div className="chart-grid-line line-two"></div>
                  <div className="chart-grid-line line-three"></div>

                  <div className="chart-bars">

                    <span style={{ height: '92%' }}></span>
                    <span style={{ height: '84%' }}></span>
                    <span style={{ height: '74%' }}></span>
                    <span style={{ height: '66%' }}></span>
                    <span style={{ height: '58%' }}></span>
                    <span style={{ height: '51%' }}></span>
                    <span style={{ height: '45%' }}></span>
                    <span style={{ height: '38%' }}></span>

                  </div>

                </div>

              </div>


              {/* MINI CARDS */}
              <div className="preview-bottom">

                <div className="preview-mini-card">
                  <Coins size={12} />
                  <span>INVESTMENT</span>
                </div>

                <div className="preview-mini-card">
                  <Map size={12} />
                  <span>REGIONS</span>
                </div>

                <div className="preview-mini-card">
                  <Layers3 size={12} />
                  <span>COMMODITIES</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DASHBOARD CARDS
          ===================================================== */}

      <div className="dashboards-section-heading">

        <div>
          <span>EXPLORE INTELLIGENCE TOOLS</span>

          <h3>
            Data at a Glance
          </h3>
        </div>

        <p>
          Access interactive views designed to help planners
          explore regional investment, agricultural suitability,
          monitoring, and PRDP spatial information.
        </p>

      </div>


      <div className="dashboard-grid">

        {dashboards.map((dashboard) => {

          const Icon = dashboard.icon

          return (
            <a
              href={dashboard.href}
              className={`dashboard-card dashboard-${dashboard.color}`}
              key={dashboard.title}
              target={
                dashboard.external
                  ? '_blank'
                  : undefined
              }
              rel={
                dashboard.external
                  ? 'noopener noreferrer'
                  : undefined
              }
            >

              {/* CARD HEADER */}
              <div className="dashboard-card-header">

                <div className="dashboard-card-icon">
                  <Icon
                    size={20}
                    strokeWidth={2}
                  />
                </div>

                <span className="dashboard-card-arrow">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.2}
                  />
                </span>

              </div>


              {/* CATEGORY */}
              <span className="dashboard-card-category">
                {dashboard.category}
              </span>


              {/* CONTENT */}
              <div className="dashboard-card-content">

                <h4>
                  {dashboard.title}
                </h4>

                <p>
                  {dashboard.description}
                </p>

              </div>


              {/* FOOTER */}
              <div className="dashboard-card-footer">

                <span>
                  {dashboard.metric}
                </span>

                <ExternalLink
                  size={13}
                  strokeWidth={2}
                />

              </div>

            </a>
          )
        })}

      </div>

    </section>
  )
}

export default Dashboards
import {
  BarChart3,
  Map,
  Activity,
  TrendingUp,
  Layers3,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'

import './Dashboards.css'

function Dashboards() {
  const prdpDashboardUrl = 'https://geomapping.da.gov.ph/prdp/dashboard'
  const iPlanDashboardUrl =
    'https://lookerstudio.google.com/reporting/711f028b-2166-44de-b2f1-84b2c70bf6ff'

  const dashboards = [
    {
      icon: BarChart3,
      title: 'EVSA Dashboard',
      category: 'SPATIAL & AGRICULTURAL ANALYSIS',
      description:
        'Explore agricultural suitability, vulnerability, and spatial information to support investment and planning decisions.',
      metric: 'SPATIAL INTELLIGENCE',
      color: 'green',
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
      color: 'blue',
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
      color: 'orange',
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
      color: 'purple',
      href: prdpDashboardUrl,
      external: true,
    },
  ]

  return (
    <section className="dashboards" id="dashboards">
      {/* HEADER AREA */}
      <div className="dashboards-header">
        <div>
          <span className="section-eyebrow">DATA & MONITORING</span>
          <h2>Dashboards & Intelligence</h2>
        </div>
        <p>
          Interactive dashboards that bring together agricultural, investment,
          spatial, and monitoring information for faster evidence-based
          decision-making.
        </p>
      </div>

      {/* FEATURED PRDP DASHBOARD HERO PANEL */}
      <div className="dashboard-featured">
        <div className="dashboard-featured-content">
          <div className="dashboard-featured-top">
            <span className="dashboard-live">
              <span className="dashboard-live-dot"></span>
              INTERACTIVE DASHBOARD
            </span>
            <span className="dashboard-featured-label">FEATURED</span>
          </div>

          <span className="dashboard-featured-category">
            PRDP ENHANCED GEOMAPPING SYSTEM
          </span>

          <h3>
            Explore PRDP <br />
            Project Intelligence
          </h3>

          <p>
            Explore PRDP subprojects, project costs, implementation status,
            commodity information, spatial layers, and geotagging information
            through an interactive mapping environment.
          </p>

          <a
            href={prdpDashboardUrl}
            className="dashboard-featured-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Open PRDP Dashboard</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* MOCKUP PREVIEW VISUAL */}
        <div className="dashboard-featured-visual">
          <div className="dashboard-preview">
            <div className="dashboard-preview-header">
              <div className="preview-title">
                <span className="preview-dot"></span>
                PRDP ENHANCED GEOMAPPING
              </div>
              <div className="preview-menu">• • •</div>
            </div>

            <div className="preview-body">
              <div className="preview-stat-row">
                <div className="preview-stat">
                  <span>SUBPROJECTS</span>
                  <strong>PRDP</strong>
                </div>
                <div className="preview-stat">
                  <span>COMPONENTS</span>
                  <strong>2</strong>
                </div>
                <div className="preview-stat">
                  <span>DATA</span>
                  <strong>GIS</strong>
                </div>
              </div>

              <div className="preview-chart">
                <div className="chart-header">
                  <span>PRDP PROJECT INTELLIGENCE</span>
                  <span>MAP</span>
                </div>

                <div className="chart-area">
                  <div className="chart-grid-line line-one"></div>
                  <div className="chart-grid-line line-two"></div>
                  <div className="chart-grid-line line-three"></div>

                  <div className="chart-bars">
                    <span style={{ height: '40%' }}></span>
                    <span style={{ height: '60%' }}></span>
                    <span style={{ height: '48%' }}></span>
                    <span style={{ height: '75%' }}></span>
                    <span style={{ height: '65%' }}></span>
                    <span style={{ height: '88%' }}></span>
                    <span style={{ height: '72%' }}></span>
                    <span style={{ height: '95%' }}></span>
                  </div>
                </div>
              </div>

              <div className="preview-bottom">
                <div className="preview-mini-card">
                  <Layers3 size={12} />
                  <span>SUBPROJECTS</span>
                </div>
                <div className="preview-mini-card">
                  <Map size={12} />
                  <span>SPATIAL DATA</span>
                </div>
                <div className="preview-mini-card">
                  <TrendingUp size={12} />
                  <span>COMMODITIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DASHBOARD CARDS SECTION */}
      <div className="dashboards-section-heading">
        <div>
          <span>EXPLORE DASHBOARDS</span>
          <h3>Data at a Glance</h3>
        </div>
        <p>
          Access interactive views designed to help planners explore agricultural,
          investment, monitoring, and PRDP spatial information.
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
              target={dashboard.external ? '_blank' : undefined}
              rel={
                dashboard.external ? 'noopener noreferrer' : undefined
              }
            >
              <div className="dashboard-card-header">
                <div className="dashboard-card-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="dashboard-card-arrow">
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </span>
              </div>

              <span className="dashboard-card-category">
                {dashboard.category}
              </span>

              <div className="dashboard-card-content">
                <h4>{dashboard.title}</h4>
                <p>{dashboard.description}</p>
              </div>

              <div className="dashboard-card-footer">
                <span>{dashboard.metric}</span>
                <ExternalLink size={13} strokeWidth={2} />
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Dashboards
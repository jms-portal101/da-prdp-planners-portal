import {
  Sprout,
  ShieldCheck,
  Fish,
  Route,
  Map,
  CloudSun,
  Waves,
  AlertTriangle,
  Building2,
  BarChart3,
  ArrowUpRight,
  ArrowLeft,
  ExternalLink,
  Layers3,
  Database,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import './Tools.css'

function Tools() {
  const tools = [
    {
      number: '01',
      category: 'AGRICULTURAL PLANNING',
      title: 'Expanded Vulnerability & Suitability Assessment',
      shortTitle: 'eVSA',
      description:
        'Assess agricultural suitability, vulnerability, and socio-economic conditions to support commodity prioritization and spatial planning.',
      icon: Sprout,
      type: 'internal',
      path: '/tools/evsa',
      accent: 'green',
    },
    {
      number: '02',
      category: 'CLIMATE & RISK',
      title: 'Climate Risk & Vulnerability Assessment',
      shortTitle: 'CRVA',
      description:
        'Explore climate-related risks, exposure, sensitivity, and adaptive capacity to support climate-resilient commodity planning.',
      icon: ShieldCheck,
      type: 'internal',
      path: '/tools/crva',
      accent: 'blue',
    },
    {
      number: '03',
      category: 'FISHERIES',
      title: 'Fisheries Vulnerability Assessment Tool',
      shortTitle: 'FishVool',
      description:
        'Support fisheries planning through vulnerability assessment and spatial information relevant to fisheries and aquatic resources.',
      icon: Fish,
      type: 'external',
      url: 'https://www.daprdp-plannersportal.net/pcip-planners-portal/fishvool',
      accent: 'cyan',
    },
    
    {
      number: '04',
      category: 'AGRICULTURAL INFORMATION',
      title: 'GeoAgri',
      shortTitle: 'GeoAgri',
      description:
        'Access agricultural geospatial information and mapping resources that support evidence-based planning and analysis.',
      icon: Map,
      type: 'external',
      url: 'https://geoagri-agila.bafe.gov.ph/',
      accent: 'purple',
    },
    {
      number: '05',
      category: 'CLIMATE INFORMATION',
      title: 'National Color-Coded Agricultural Guide',
      shortTitle: 'NCCAG',
      description:
        'Explore climate and agricultural information that can support crop planning, risk assessment, and climate-informed decisions.',
      icon: CloudSun,
      type: 'external',
      url: 'https://farmersguidemap.da.gov.ph/',
      accent: 'teal',
    },
    {
      number: '06',
      category: 'HAZARD INFORMATION',
      title: 'HazardHunter Philippines',
      shortTitle: 'Hazard Hunter',
      description:
        'Access hazard and risk information for geographic areas to help planners understand potential exposure to natural hazards.',
      icon: AlertTriangle,
      type: 'external',
      url: 'https://hazardhunter.georisk.gov.ph/map',
      accent: 'red',
    },
    {
      number: '07',
      category: 'PROJECT INFORMATION',
      title: 'PRDP Management Information System',
      shortTitle: 'PRDP MIS',
      description:
        'Access project management information and related PRDP systems supporting planning, implementation, monitoring, and reporting.',
      icon: Building2,
      type: 'external',
      url: 'http://prdp-mis.da.gov.ph/login',
      accent: 'indigo',
    },
    {
      number: '08',
      category: 'SOCIO-ECONOMIC INFORMATION',
      title: 'Socio-Economic Spatial Dashboard',
      shortTitle: 'SES',
      description:
        'Explore socio-economic and spatial information that can complement agricultural, investment, and development planning.',
      icon: BarChart3,
      type: 'external',
      url: 'https://geomapping.da.gov.ph/prdp/ses_dashboard',
      accent: 'gold',
    },
  ]

  return (
    <main className="tools-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="tools-hero">
        <div className="tools-hero-orb tools-orb-one"></div>
        <div className="tools-hero-orb tools-orb-two"></div>

        <div className="tools-container">
          <Link to="/" className="tools-back">
            <ArrowLeft size={15} />
            Back to Planners' Portal
          </Link>

          <div className="tools-hero-grid">
            <div className="tools-hero-content">
              <div className="tools-hero-icon">
                <Layers3 size={28} strokeWidth={1.7} />
              </div>

              <span className="tools-eyebrow">
                DA-PRDP DECISION SUPPORT
              </span>

              <h1>
                Planning tools
                <br />
                <span>for better decisions.</span>
              </h1>

              <p>
                Explore science-based tools, spatial platforms, climate
                information systems, and planning applications that support
                evidence-based agricultural and agri-fishery investment
                decisions.
              </p>

              <div className="tools-hero-meta">
                <div>
                  <strong>08</strong>
                  <span>PLANNING TOOLS</span>
                </div>

                <div>
                  <strong>GIS</strong>
                  <span>SPATIAL INFORMATION</span>
                </div>

                <div>
                  <strong>DATA</strong>
                  <span>EVIDENCE-BASED PLANNING</span>
                </div>
              </div>
            </div>

            <div className="tools-hero-panel">
              <div className="tools-panel-top">
                <span>PLANNERS' TOOLKIT</span>

                <span className="tools-panel-status">
                  <span></span>
                  ACTIVE
                </span>
              </div>

              <div className="tools-panel-map">
                <div className="tools-map-grid"></div>

                <div className="tools-map-shape shape-one"></div>
                <div className="tools-map-shape shape-two"></div>
                <div className="tools-map-shape shape-three"></div>

                <div className="tools-map-point map-point-one"></div>
                <div className="tools-map-point map-point-two"></div>
                <div className="tools-map-point map-point-three"></div>

                <div className="tools-map-label map-label-one">
                  SUITABILITY
                </div>

                <div className="tools-map-label map-label-two">
                  CLIMATE RISK
                </div>

                <div className="tools-map-label map-label-three">
                  INVESTMENT
                </div>
              </div>

              <div className="tools-panel-footer">
                <div>
                  <Database size={14} />
                  <span>DATA</span>
                </div>

                <div>
                  <Map size={14} />
                  <span>MAPS</span>
                </div>

                <div>
                  <BarChart3 size={14} />
                  <span>ANALYSIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="tools-intro">
        <div className="tools-container">
          <div className="tools-intro-grid">
            <div>
              <span className="tools-section-label">
                DECISION SUPPORT TOOLKIT
              </span>

              <h2>
                From spatial evidence
                <br />
                to planning insight.
              </h2>
            </div>

            <div>
              <p>
                The Planners' Portal brings together complementary tools that
                help planners understand suitability, vulnerability, climate
                risk, hazards, infrastructure, socio-economic conditions, and
                other spatial information.
              </p>

              <p>
                Use these platforms individually or as complementary sources
                of evidence during planning, prioritization, and investment
                analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          TOOLS GRID
      ========================================= */}

      <section className="tools-directory">
        <div className="tools-container">
          <div className="tools-directory-header">
            <div>
              <span className="tools-section-label">EXPLORE TOOLS</span>

              <h2>Planning & decision-support applications.</h2>
            </div>

            <p>
              Select a tool to open the application or explore its dedicated
              information page.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => {
              const Icon = tool.icon

              return (
                <article
                  key={tool.number}
                  className={`tool-card tool-${tool.accent}`}
                >
                  <div className="tool-card-top">
                    <div className="tool-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="tool-number">{tool.number}</span>
                  </div>

                  <span className="tool-category">
                    {tool.category}
                  </span>

                  <div className="tool-title-row">
                    <h3>{tool.title}</h3>

                    <span className="tool-short-title">
                      {tool.shortTitle}
                    </span>
                  </div>

                  <p>{tool.description}</p>

                  <div className="tool-card-bottom">
                    {tool.type === 'internal' ? (
                      <Link
                        to={tool.path}
                        className="tool-open-button"
                      >
                        Explore Tool
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tool-open-button"
                      >
                        Open Tool
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          PLANNING CONNECTION
      ========================================= */}

      <section className="tools-connection">
        <div className="tools-container">
          <div className="tools-connection-inner">
            <div className="tools-connection-icon">
              <Sprout size={24} />
            </div>

            <div className="tools-connection-content">
              <span>PLANNING CONNECTION</span>

              <h2>
                Use tools together to build stronger evidence for investment
                planning.
              </h2>

              <p>
                eVSA, CRVA, FishVool, geospatial systems, hazard information,
                infrastructure data, and socio-economic information can
                complement one another during commodity and investment
                planning.
              </p>
            </div>

            <Link
              to="/"
              className="tools-connection-button"
            >
              Back to Portal
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          SOURCE
      ========================================= */}

      <section className="tools-source">
        <div className="tools-container">
          <div className="tools-source-inner">
            <InfoIcon />

            <p>
              The tools presented in this directory are intended to provide
              planners with complementary evidence, datasets, maps, and
              decision-support capabilities for agricultural and agri-fishery
              planning.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoIcon() {
  return (
    <div className="tools-source-icon">
      <Database size={15} />
    </div>
  )
}

export default Tools
import React from 'react'
import {
  ShieldAlert,
  Map,
  Activity,
  Mountain,
  Waves,
  Wind,
  Building2,
  Route,
  FileText,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Database,
  Search,
} from 'lucide-react'

import './HazardHunter.css'

const hazardHunterUrl = 'https://hazardhunter.georisk.gov.ph/map'
const aboutUrl = 'https://hazardhunter.georisk.gov.ph/about-hazardhunterph'
const faqUrl = 'https://hazardhunter.georisk.gov.ph/faqs'

const hazardGroups = [
  {
    icon: Activity,
    title: 'Seismic Hazards',
    items: [
      'Active Faults and Ground Rupture',
      'Ground Shaking',
      'Earthquake-Induced Landslide',
      'Liquefaction',
      'Tsunami',
      'Distance from Nearest Fissure',
    ],
  },
  {
    icon: Mountain,
    title: 'Volcanic Hazards',
    items: [
      'Pyroclastic Density Currents',
      'Lava Flow',
      'Lahar',
      'Permanent and Extended Danger Zones',
      'Ballistic Projectiles',
      'Ashfall and Volcanic Tsunami',
    ],
  },
  {
    icon: Waves,
    title: 'Hydrometeorological Hazards',
    items: [
      'Flood',
      'Rain-Induced Landslide',
      'Storm Surge',
      'Severe Wind',
      'Rainfall Projections',
      'Temperature Projections',
    ],
  },
  {
    icon: Building2,
    title: 'Exposure & Critical Facilities',
    items: [
      'Schools',
      'Health Facilities',
      'Road Networks',
      'Safe Open Spaces',
      'Administrative Boundaries',
      'Other exposure information',
    ],
  },
]

const planningUses = [
  'Initial hazard screening of proposed project locations',
  'Site and investment planning',
  'Infrastructure and development planning',
  'Disaster risk reduction and climate adaptation planning',
  'Identification of areas requiring further technical assessment',
  'Supporting hazard-aware planning discussions',
]

const agencies = [
  'DOST-PHIVOLCS',
  'DOST-PAGASA',
  'DOST-ASTI',
  'DENR-MGB',
  'DENR-NAMRIA',
  'DND-OCD',
  'DepEd',
  'DOH',
  'DPWH',
]

function HazardHunter() {
  return (
    <main className="hh-page">
      <section className="hh-hero">
        <div className="hh-container">
          <div className="hh-hero-grid">
            <div className="hh-hero-copy">
              <div className="hh-eyebrow">
                <ShieldAlert size={15} />
                DECISION SUPPORT TOOL
              </div>

              <h1>
                HazardHunter
                <span>Philippines</span>
              </h1>

              <p className="hh-hero-lead">
                A one-stop hazard assessment platform that helps users
                identify whether a location is exposed or prone to seismic,
                volcanic, and hydrometeorological hazards.
              </p>

              <div className="hh-hero-actions">
                <a
                  className="hh-btn hh-btn-primary"
                  href={hazardHunterUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Map size={17} />
                  Open HazardHunterPH
                  <ExternalLink size={15} />
                </a>

                <a
                  className="hh-btn hh-btn-secondary"
                  href={aboutUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  About HazardHunterPH
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="hh-meta-row">
                <div>
                  <span>PLATFORM</span>
                  <strong>GeoRisk Philippines</strong>
                </div>
                <div>
                  <span>PRIMARY USE</span>
                  <strong>Hazard Assessment</strong>
                </div>
                <div>
                  <span>DATA BASIS</span>
                  <strong>Government Agencies</strong>
                </div>
              </div>
            </div>

            <div className="hh-visual-card">
              <div className="hh-visual-top">
                <div>
                  <span className="hh-small-label">HAZARD ASSESSMENT</span>
                  <h3>Location Risk Overview</h3>
                </div>
                <div className="hh-live-badge">
                  <span />
                  MAP-BASED
                </div>
              </div>

              <div className="hh-map-visual">
                <div className="hh-map-grid" />
                <div className="hh-contour contour-a" />
                <div className="hh-contour contour-b" />
                <div className="hh-contour contour-c" />
                <div className="hh-map-zone zone-a" />
                <div className="hh-map-zone zone-b" />
                <div className="hh-map-zone zone-c" />

                <div className="hh-location-pin">
                  <div />
                </div>

                <div className="hh-map-label label-a">
                  <Activity size={12} />
                  SEISMIC
                </div>
                <div className="hh-map-label label-b">
                  <Waves size={12} />
                  FLOOD
                </div>
                <div className="hh-map-label label-c">
                  <Mountain size={12} />
                  VOLCANIC
                </div>
              </div>

              <div className="hh-visual-footer">
                <span>
                  <CheckCircle2 size={15} />
                  Location-based hazard information
                </span>
                <Search size={15} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hh-section hh-notice-section">
        <div className="hh-container">
          <div className="hh-notice">
            <div className="hh-notice-icon">
              <Info size={20} />
            </div>
            <div>
              <span className="hh-small-label">IMPORTANT NOTE</span>
              <h3>Use HazardHunterPH as an indicative assessment tool</h3>
              <p>
                HazardHunterPH uses existing information supplied through the
                GeoRiskPH Integrated System. The official site notes that some
                data may be outdated, hazard information may be refined as
                new data become available, and map results may differ from
                actual ground conditions. For detailed or official hazard
                assessments, users should coordinate with the appropriate
                mandated government agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hh-section">
        <div className="hh-container">
          <div className="hh-section-heading">
            <div>
              <span className="hh-kicker">ABOUT HAZARDHUNTERPH</span>
              <h2>Hazard information at a selected location.</h2>
            </div>
            <p>
              HazardHunterPH provides a map interface where users can select
              a location and generate an indicative hazard assessment report
              with relevant hazard information and recommendations.
            </p>
          </div>

          <div className="hh-about-grid">
            <article className="hh-about-card">
              <div className="hh-icon-box">
                <Map size={20} />
              </div>
              <h3>Map-based assessment</h3>
              <p>
                Select a location on the map and view hazard information
                associated with the selected area.
              </p>
            </article>

            <article className="hh-about-card">
              <div className="hh-icon-box">
                <FileText size={20} />
              </div>
              <h3>Assessment reports</h3>
              <p>
                Generate hazard assessment results with explanations and
                recommendations for the selected location.
              </p>
            </article>

            <article className="hh-about-card">
              <div className="hh-icon-box">
                <Database size={20} />
              </div>
              <h3>Government-source information</h3>
              <p>
                Hazard information is supplied through the GeoRiskPH
                Integrated System by participating government agencies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="hh-section hh-section-soft">
        <div className="hh-container">
          <div className="hh-section-heading compact">
            <div>
              <span className="hh-kicker">HAZARD COVERAGE</span>
              <h2>Four areas of information</h2>
            </div>
            <p>
              The current map interface organizes hazard assessment and
              supporting exposure information across several major categories.
            </p>
          </div>

          <div className="hh-hazard-grid">
            {hazardGroups.map((group) => {
              const Icon = group.icon

              return (
                <article className="hh-hazard-card" key={group.title}>
                  <div className="hh-hazard-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{group.title}</h3>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="hh-section hh-section-dark">
        <div className="hh-container">
          <div className="hh-dark-heading">
            <div>
              <span className="hh-kicker light">PLANNING APPLICATIONS</span>
              <h2>Use hazard information early in the planning process.</h2>
            </div>
            <p>
              HazardHunterPH can provide an initial spatial reference before
              more detailed engineering, geologic, hydrologic, field, or
              regulatory assessments are undertaken.
            </p>
          </div>

          <div className="hh-use-grid">
            {planningUses.map((use, index) => (
              <div className="hh-use-item" key={use}>
                <span>0{index + 1}</span>
                <p>{use}</p>
              </div>
            ))}
          </div>

          <div className="hh-workflow">
            <div className="hh-workflow-step">
              <strong>01</strong>
              <span>LOCATE</span>
              <p>Select the project or area of interest.</p>
            </div>
            <div className="hh-workflow-line" />
            <div className="hh-workflow-step">
              <strong>02</strong>
              <span>ASSESS</span>
              <p>Review applicable hazard and exposure information.</p>
            </div>
            <div className="hh-workflow-line" />
            <div className="hh-workflow-step">
              <strong>03</strong>
              <span>PLAN</span>
              <p>Use results as input to further planning and assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hh-section">
        <div className="hh-container">
          <div className="hh-section-heading compact">
            <div>
              <span className="hh-kicker">PARTICIPATING AGENCIES</span>
              <h2>Built around government hazard information.</h2>
            </div>
            <p>
              HazardHunterPH identifies the following agencies and
              organizations among its participating or data-contributing
              partners.
            </p>
          </div>

          <div className="hh-agency-grid">
            {agencies.map((agency) => (
              <div className="hh-agency-item" key={agency}>
                <CheckCircle2 size={16} />
                <span>{agency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hh-section hh-reference-section">
        <div className="hh-container">
          <div className="hh-reference-grid">
            <div>
              <span className="hh-kicker">OFFICIAL RESOURCE</span>
              <h2>Explore the live HazardHunterPH map.</h2>
              <p>
                The Planners Portal provides this page as an orientation and
                planning reference. The actual map, assessment engine, and
                generated reports remain on the official GeoRiskPH
                HazardHunterPH platform.
              </p>
            </div>

            <div className="hh-reference-actions">
              <a
                href={hazardHunterUrl}
                target="_blank"
                rel="noreferrer"
                className="hh-btn hh-btn-green"
              >
                Open HazardHunterPH
                <ExternalLink size={15} />
              </a>

              <a
                href={faqUrl}
                target="_blank"
                rel="noreferrer"
                className="hh-text-link"
              >
                View official FAQs
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="hh-footer">
        <div className="hh-container">
          <div className="hh-footer-inner">
            <div>
              <strong>HazardHunterPH</strong>
              <span>Hazard assessment at your fingertips</span>
            </div>

            <p>
              Information page for planning context. Always verify critical
              site conditions with the appropriate official agency and
              technical assessment.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default HazardHunter

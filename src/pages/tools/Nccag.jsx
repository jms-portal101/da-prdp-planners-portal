import React from 'react'
import {
  Map,
  Sprout,
  CloudSun,
  ShieldAlert,
  Droplets,
  Layers3,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Database,
  Landmark,
  Info,
  Leaf,
} from 'lucide-react'

import './Nccag.css'

const officialAmiaUrl =
  'https://amia.da.gov.ph/national-color-coded-agricultural-guide-nccag-map/'

const nccagMapUrl = 'https://farmersguidemap.da.gov.ph/'

const planningLayers = [
  {
    icon: Sprout,
    title: 'Crop Suitability',
    text: 'Explore suitability information for economically important agricultural crops to support location-specific planning.',
  },
  {
    icon: CloudSun,
    title: 'Climate Information',
    text: 'Use rainfall and temperature information together with other spatial data for climate-informed agricultural planning.',
  },
  {
    icon: ShieldAlert,
    title: 'Climate & Hazard Information',
    text: 'Consider hazards and climate-related risks such as flooding, drought, landslide, erosion, extreme wind, and other mapped risks.',
  },
  {
    icon: Droplets,
    title: 'Water & Agro-Ecological Information',
    text: 'Consider groundwater availability, agro-ecological zones, rice suitability, and other agricultural planning layers.',
  },
]

const planningUses = [
  'Site-specific agricultural and food production planning',
  'Agricultural infrastructure and investment planning',
  'Climate change adaptation and disaster-risk planning',
  'Agricultural research, development, and extension',
  'Identification and assessment of areas suitable for selected crops',
  'Evidence-based planning at national, regional, and local levels',
]

const dataSources = [
  'Department of Agriculture – Bureau of Soils and Water Management',
  'DOST – PAGASA',
  'DOST – PHIVOLCS',
  'DENR – Mines and Geosciences Bureau',
  'DENR – Land Management Bureau',
  'DENR – National Water Resources Board',
  'NAMRIA',
  'Philippine Statistics Authority and NEDA',
  'FAO agro-ecological zone information',
]

const crops = [
  'Abaca',
  'Bamboo',
  'Banana',
  'Cacao',
  'Cassava',
  'Coconut',
  'Coffee',
  'Corn',
  'Legumes',
  'Mango',
  'Palm Oil',
  'Papaya',
  'Pineapple',
  'Rice',
  'Rubber',
  'Sugarcane',
  'Sweet Potato',
  'Taro',
  'Vegetables',
  'Yam',
]

function Nccag() {
  return (
    <main className="nccag-page">
      <section className="nccag-hero">
        <div className="nccag-container">
          <div className="nccag-hero-grid">
            <div className="nccag-hero-copy">
              <div className="nccag-eyebrow">
                <Map size={15} />
                DECISION SUPPORT TOOL
              </div>

              <h1>
                National Color-Coded
                <span>Agricultural Guide</span>
              </h1>

              <p className="nccag-hero-lead">
                A spatial decision-support resource that brings together
                agricultural suitability, climate, hazard, and other
                location-based information for climate-informed planning.
              </p>

              <div className="nccag-hero-actions">
                <a
                  className="nccag-btn nccag-btn-primary"
                  href={nccagMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Map size={17} />
                  Explore Farmers Guide Map
                  <ExternalLink size={15} />
                </a>

                <a
                  className="nccag-btn nccag-btn-secondary"
                  href={officialAmiaUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Official DA–AMIA Page
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="nccag-meta-row">
                <div>
                  <span>PROGRAM</span>
                  <strong>DA–AMIA</strong>
                </div>
                <div>
                  <span>RESOURCE</span>
                  <strong>National Agricultural Guide</strong>
                </div>
                <div>
                  <span>USE</span>
                  <strong>Planning & Investment</strong>
                </div>
              </div>
            </div>

            <div className="nccag-map-card">
              <div className="nccag-map-top">
                <div>
                  <span className="nccag-small-label">SPATIAL GUIDE</span>
                  <h3>NCCAG Map</h3>
                </div>
                <div className="nccag-map-badge">
                  <Layers3 size={15} />
                  MAP OVERLAYS
                </div>
              </div>

              <div className="nccag-map-visual">
                <div className="nccag-grid-lines" />
                <div className="nccag-map-shape shape-a" />
                <div className="nccag-map-shape shape-b" />
                <div className="nccag-map-shape shape-c" />
                <div className="nccag-map-shape shape-d" />

                <div className="nccag-map-pin pin-one">
                  <span />
                </div>
                <div className="nccag-map-pin pin-two">
                  <span />
                </div>
                <div className="nccag-map-pin pin-three">
                  <span />
                </div>

                <div className="nccag-map-label label-one">CROP</div>
                <div className="nccag-map-label label-two">CLIMATE</div>
                <div className="nccag-map-label label-three">HAZARD</div>
              </div>

              <div className="nccag-map-footer">
                <span>
                  <CheckCircle2 size={15} />
                  Location-based agricultural information
                </span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nccag-notice-section">
        <div className="nccag-container">
          <div className="nccag-notice">
            <div className="nccag-notice-icon">
              <Info size={20} />
            </div>
            <div>
              <span className="nccag-small-label">ACCESS NOTICE</span>
              <h3>Farmers Guide Map availability</h3>
              <p>
                The official Farmers Guide Map may currently be inaccessible.
                While access is being checked, this page provides background
                information on the NCCAG and its planning applications. Users
                are advised to verify current information through official
                DA–AMIA channels.
              </p>
            </div>
            <a
              href={officialAmiaUrl}
              target="_blank"
              rel="noreferrer"
              className="nccag-notice-link"
            >
              Check DA–AMIA
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="nccag-section">
        <div className="nccag-container">
          <div className="nccag-section-heading">
            <div>
              <span className="nccag-kicker">ABOUT NCCAG</span>
              <h2>Turning agricultural information into planning context.</h2>
            </div>
            <p>
              NCCAG brings together multiple thematic maps and datasets so
              planners can view agricultural conditions and risks in a
              geographic context.
            </p>
          </div>

          <div className="nccag-about-grid">
            <div className="nccag-about-card">
              <div className="nccag-icon-box">
                <Layers3 size={20} />
              </div>
              <h3>Multiple spatial layers</h3>
              <p>
                Agricultural suitability can be considered alongside climate,
                hazards, water, soils, land classification, and other
                location-based information.
              </p>
            </div>

            <div className="nccag-about-card">
              <div className="nccag-icon-box">
                <Database size={20} />
              </div>
              <h3>Multi-agency information</h3>
              <p>
                The guide draws information from government agencies and other
                recognized sources to support integrated agricultural analysis.
              </p>
            </div>

            <div className="nccag-about-card">
              <div className="nccag-icon-box">
                <Landmark size={20} />
              </div>
              <h3>For planning and investment</h3>
              <p>
                Information can help provide spatial context for agricultural
                development, infrastructure, investment, and climate
                adaptation decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nccag-section nccag-section-soft">
        <div className="nccag-container">
          <div className="nccag-section-heading compact">
            <div>
              <span className="nccag-kicker">WHAT YOU CAN EXPLORE</span>
              <h2>Key information layers</h2>
            </div>
            <p>
              The NCCAG framework combines agricultural, environmental, and
              climate-related information for spatial assessment.
            </p>
          </div>

          <div className="nccag-feature-grid">
            {planningLayers.map((item) => {
              const Icon = item.icon

              return (
                <article className="nccag-feature-card" key={item.title}>
                  <div className="nccag-feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="nccag-section">
        <div className="nccag-container">
          <div className="nccag-split">
            <div>
              <span className="nccag-kicker">CROP INFORMATION</span>
              <h2>Suitability information for selected crops</h2>
              <p className="nccag-section-intro">
                The official NCCAG information includes suitability-related
                mapping for economically important crops. The list below
                provides a quick reference to the crop coverage described by
                the DA–AMIA resource.
              </p>
            </div>

            <div className="nccag-crop-list">
              {crops.map((crop) => (
                <span key={crop} className="nccag-crop-pill">
                  <Leaf size={13} />
                  {crop}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nccag-section nccag-section-dark">
        <div className="nccag-container">
          <div className="nccag-dark-heading">
            <div>
              <span className="nccag-kicker light">PLANNING APPLICATIONS</span>
              <h2>From spatial information to planning decisions.</h2>
            </div>
            <p>
              NCCAG information can provide a common spatial reference for
              agricultural planning, assessment, and investment discussions.
            </p>
          </div>

          <div className="nccag-use-grid">
            {planningUses.map((use, index) => (
              <div className="nccag-use-item" key={use}>
                <span>0{index + 1}</span>
                <p>{use}</p>
              </div>
            ))}
          </div>

          <div className="nccag-workflow">
            <div className="nccag-workflow-step">
              <strong>01</strong>
              <span>LOCATE</span>
              <p>Identify the area of interest.</p>
            </div>
            <div className="nccag-workflow-line" />
            <div className="nccag-workflow-step">
              <strong>02</strong>
              <span>ASSESS</span>
              <p>Review relevant agricultural and risk layers.</p>
            </div>
            <div className="nccag-workflow-line" />
            <div className="nccag-workflow-step">
              <strong>03</strong>
              <span>PLAN</span>
              <p>Use the spatial context to inform development planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nccag-section">
        <div className="nccag-container">
          <div className="nccag-section-heading compact">
            <div>
              <span className="nccag-kicker">DATA & SOURCES</span>
              <h2>Built from multi-agency information</h2>
            </div>
            <p>
              Source agencies identified by the official DA–AMIA NCCAG
              information page include the following.
            </p>
          </div>

          <div className="nccag-source-grid">
            {dataSources.map((source) => (
              <div className="nccag-source-item" key={source}>
                <CheckCircle2 size={16} />
                <span>{source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nccag-cta-section">
        <div className="nccag-container">
          <div className="nccag-cta">
            <div>
              <span className="nccag-kicker">OFFICIAL RESOURCE</span>
              <h2>Learn more about NCCAG through DA–AMIA.</h2>
              <p>
                Visit the official Department of Agriculture – Adaptation and
                Mitigation Initiative in Agriculture page for the latest
                information, updates, and access guidance.
              </p>
            </div>

            <a
              href={officialAmiaUrl}
              target="_blank"
              rel="noreferrer"
              className="nccag-btn nccag-btn-primary"
            >
              Visit Official DA–AMIA Page
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <footer className="nccag-footer">
        <div className="nccag-container">
          <div className="nccag-footer-inner">
            <div>
              <strong>NCCAG</strong>
              <span>
                National Color-Coded Agricultural Guide
              </span>
            </div>

            <p>
              Information page for planning context. The actual map service
              remains under the official DA–AMIA / Farmers Guide Map platform.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Nccag

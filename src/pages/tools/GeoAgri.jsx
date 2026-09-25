import {
  Map,
  Route,
  Tractor,
  Building2,
  Database,
  Layers3,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Globe2,
  BarChart3,
  ShieldCheck,
  Landmark,
  Info,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import './GeoAgri.css'

const geoAgriUrl = 'https://geoagri2.bafe.gov.ph/'

const geoAgriReferenceUrl =
  'https://www.da.gov.ph/wp-content/uploads/2023/02/jao01_s2023.pdf'

const bafeGeoAgriUrl =
  'https://www.da.gov.ph/wp-content/uploads/2024/12/mc41_s2024.pdf'

const geoAgriSections = [
  {
    icon: Route,
    title: 'Farm-to-Market Roads',
    text: 'Supports the spatial consolidation and management of Farm-to-Market Road information for network planning and project coordination.',
  },
  {
    icon: Building2,
    title: 'Agri-Fishery Infrastructure',
    text: 'Provides a geographic view of agricultural and fisheries facilities and infrastructure relevant to planning and investment activities.',
  },
  {
    icon: Tractor,
    title: 'Machinery & Facilities',
    text: 'Connects with agricultural and fisheries machinery and infrastructure information used in planning and mechanization programs.',
  },
  {
    icon: Layers3,
    title: 'Interactive Mapping',
    text: 'Uses spatial layers and map-based information to help planners view infrastructure and agricultural engineering information geographically.',
  },
]

const planningUses = [
  'Farm-to-Market Road network planning',
  'Infrastructure inventory and spatial referencing',
  'Agricultural and fisheries mechanization planning',
  'Project coordination and monitoring',
  'Evidence-based investment and development planning',
]

const planningWorkflow = [
  {
    number: '01',
    title: 'Locate',
    text: 'View infrastructure, roads, facilities, and related information in their geographic context.',
  },
  {
    number: '02',
    title: 'Assess',
    text: 'Use mapped information to understand distribution, connectivity, gaps, and project locations.',
  },
  {
    number: '03',
    title: 'Plan',
    text: 'Use spatial evidence to support network planning, project coordination, and investment decisions.',
  },
]

function GeoAgri() {
  return (
    <main className="geoagri-page">
      <section className="geoagri-hero">
        <div className="geoagri-container geoagri-hero-grid">
          <div className="geoagri-hero-copy">
            <div className="geoagri-eyebrow">
              <Globe2 size={14} />
              DA–BAFE GEOSPATIAL PLATFORM
            </div>

            <h1>
              GEO
              <span>AGRI</span>
            </h1>

            <p className="geoagri-hero-title">
              Geographic Information System for Agricultural and Fisheries
              Machinery and Infrastructure
            </p>

            <p className="geoagri-hero-description">
              A web-based spatial platform that brings agricultural and
              fisheries infrastructure, machinery, facilities, and
              Farm-to-Market Road information into a geographic planning
              environment.
            </p>

            <div className="geoagri-hero-actions">
              <a
                href={geoAgriUrl}
                target="_blank"
                rel="noreferrer"
                className="geoagri-primary-button"
              >
                Open GEOAGRI System
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#geoagri-overview"
                className="geoagri-secondary-button"
              >
                Explore Platform
                <Map size={16} />
              </a>
            </div>

            <div className="geoagri-meta">
              <span>
                <CheckCircle2 size={15} />
                DA–BAFE
              </span>
              <span>
                <CheckCircle2 size={15} />
                Web-based GIS
              </span>
              <span>
                <CheckCircle2 size={15} />
                Planning & infrastructure
              </span>
            </div>
          </div>

          <div className="geoagri-hero-visual">
            <div className="geoagri-visual-top">
              <span>SPATIAL PLANNING</span>
              <Map size={18} />
            </div>

            <div className="geoagri-map-art">
              <div className="geoagri-map-grid" />
              <div className="geoagri-map-route route-one" />
              <div className="geoagri-map-route route-two" />
              <div className="geoagri-map-route route-three" />

              <span className="geoagri-map-point point-one" />
              <span className="geoagri-map-point point-two" />
              <span className="geoagri-map-point point-three" />
              <span className="geoagri-map-point point-four" />

              <div className="geoagri-map-label label-one">
                <Route size={13} />
                FMR
              </div>
              <div className="geoagri-map-label label-two">
                <Building2 size={13} />
                FACILITY
              </div>
            </div>

            <div className="geoagri-visual-footer">
              <div>
                <strong>Map-based</strong>
                <span>planning information</span>
              </div>
              <div>
                <strong>Spatial</strong>
                <span>project context</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="geoagri-overview"
        id="geoagri-overview"
      >
        <div className="geoagri-container">
          <div className="geoagri-section-heading">
            <div>
              <span className="geoagri-section-kicker">ABOUT GEOAGRI</span>
              <h2>Putting agricultural infrastructure on the map.</h2>
            </div>

            <p>
              GEOAGRI is part of the Department of Agriculture's digital
              information environment for agricultural and fisheries
              machinery and infrastructure. It provides a geographic way to
              view and work with infrastructure-related information.
            </p>
          </div>

          <div className="geoagri-feature-grid">
            {geoAgriSections.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="geoagri-feature-card"
                  key={item.title}
                >
                  <div className="geoagri-feature-icon">
                    <Icon size={19} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="geoagri-scope">
        <div className="geoagri-container">
          <div className="geoagri-scope-grid">
            <div>
              <span className="geoagri-section-kicker">
                PLANNING INFORMATION
              </span>
              <h2>
                From mapped information to better-informed planning.
              </h2>
              <p>
                Agricultural and fisheries infrastructure decisions are
                inherently geographic. GEOAGRI provides a spatial context
                where roads, facilities, machinery, and project information
                can be considered together.
              </p>
            </div>

            <div className="geoagri-scope-card">
              <div className="geoagri-scope-card-head">
                <Database size={18} />
                <span>PLANNING USES</span>
              </div>

              <ul>
                {planningUses.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="geoagri-fmr">
        <div className="geoagri-container">
          <div className="geoagri-fmr-card">
            <div className="geoagri-fmr-icon">
              <Route size={24} />
            </div>

            <div className="geoagri-fmr-copy">
              <span className="geoagri-section-kicker">
                FARM-TO-MARKET ROAD PLANNING
              </span>

              <h2>Connecting production areas to the wider network.</h2>

              <p>
                DA policy provides for the use of ABEMIS and GeoAgri in
                maintaining the common Farm-to-Market Road database and in
                formulating and updating FMR network and investment plans at
                national and local levels.
              </p>
            </div>

            <a
              href={geoAgriReferenceUrl}
              target="_blank"
              rel="noreferrer"
              className="geoagri-text-link"
            >
              View DA reference
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="geoagri-workflow">
        <div className="geoagri-container">
          <div className="geoagri-section-heading geoagri-heading-centered">
            <div>
              <span className="geoagri-section-kicker">
                A SIMPLE PLANNING WORKFLOW
              </span>
              <h2>Locate. Assess. Plan.</h2>
            </div>

            <p>
              Use GEOAGRI as a spatial reference when reviewing agricultural
              and fisheries infrastructure information and developing
              location-based planning inputs.
            </p>
          </div>

          <div className="geoagri-workflow-grid">
            {planningWorkflow.map((item) => (
              <article
                className="geoagri-workflow-card"
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="geoagri-connection">
        <div className="geoagri-container">
          <div className="geoagri-connection-card">
            <div className="geoagri-connection-icon">
              <ShieldCheck size={24} />
            </div>

            <div>
              <span className="geoagri-section-kicker">
                FOR PLANNERS & INVESTMENT TEAMS
              </span>

              <h2>Use the actual GEOAGRI platform for live map data.</h2>

              <p>
                This Planner's Portal page provides context and orientation.
                For current spatial information and the live mapping
                environment, open the official GEOAGRI application.
              </p>
            </div>

            <a
              href={geoAgriUrl}
              target="_blank"
              rel="noreferrer"
              className="geoagri-primary-button"
            >
              Launch GEOAGRI
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="geoagri-references">
        <div className="geoagri-container">
          <div className="geoagri-reference-header">
            <div>
              <span className="geoagri-section-kicker">
                REFERENCE & CONTEXT
              </span>
              <h2>Official DA references</h2>
            </div>

            <Info size={20} />
          </div>

          <div className="geoagri-reference-grid">
            <a
              href={geoAgriReferenceUrl}
              target="_blank"
              rel="noreferrer"
              className="geoagri-reference-card"
            >
              <div>
                <Landmark size={18} />
                <span>JOINT ADMINISTRATIVE ORDER</span>
              </div>

              <h3>FMR common database and network planning</h3>

              <p>
                DA Joint Administrative Order No. 1, series of 2023, which
                identifies GeoAgri as part of the common FMR information
                environment.
              </p>

              <ExternalLink size={15} />
            </a>

            <a
              href={bafeGeoAgriUrl}
              target="_blank"
              rel="noreferrer"
              className="geoagri-reference-card"
            >
              <div>
                <BarChart3 size={18} />
                <span>BAFE MECHANIZATION POLICY</span>
              </div>

              <h3>Inventory and mapping of machinery and facilities</h3>

              <p>
                DA guidance referencing inventory and mapping of agricultural
                machinery and facilities using ABEMIS and GEOAGRI.
              </p>

              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="geoagri-footer-cta">
        <div className="geoagri-container">
          <div className="geoagri-footer-cta-inner">
            <div>
              <span>READY TO EXPLORE?</span>
              <h2>Open the GEOAGRI mapping platform.</h2>
            </div>

            <a
              href={geoAgriUrl}
              target="_blank"
              rel="noreferrer"
              className="geoagri-primary-button"
            >
              Open GEOAGRI
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="geoagri-source-note">
            <Globe2 size={14} />
            <span>
              GEOAGRI is presented here as an external DA–BAFE platform. The
              Planner's Portal does not reproduce or replace its live data.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GeoAgri

import React from 'react'
import {
  ShieldCheck,
  MapPinned,
  Layers3,
  TriangleAlert,
  Leaf,
  Trees,
  Building2,
  BarChart3,
  Database,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Search,
  Globe2,
} from 'lucide-react'
import './SesDashboard.css'

const sesDashboardUrl =
  'https://geomapping.da.gov.ph/prdp/webgis/ses_dashboard'

const screeningCategories = [
  {
    title: 'Within Both KBA & PA',
    description:
      'Subprojects identified as intersecting both a Key Biodiversity Area and a Protected Area.',
    icon: ShieldCheck,
  },
  {
    title: 'Within Key Biodiversity Area',
    description:
      'Subprojects located within or intersecting identified Key Biodiversity Areas.',
    icon: Leaf,
  },
  {
    title: 'Within Protected Area',
    description:
      'Subprojects located within or intersecting designated Protected Areas.',
    icon: Trees,
  },
  {
    title: 'Outside KBA & PA',
    description:
      'Subprojects not identified as intersecting the displayed KBA and Protected Area screening categories.',
    icon: Globe2,
  },
]

const dashboardFeatures = [
  {
    title: 'Subproject Location',
    text: 'View and filter subprojects according to Cluster, Region, and Province.',
    icon: MapPinned,
  },
  {
    title: 'Hazard Screening',
    text: 'Use the dashboard hazard layer as part of the environmental and safeguard screening workflow.',
    icon: TriangleAlert,
  },
  {
    title: 'KBA & Protected Areas',
    text: 'Review whether subprojects intersect Key Biodiversity Areas, Protected Areas, or both.',
    icon: Layers3,
  },
  {
    title: 'Subproject Monitoring',
    text: 'View subproject counts and summary information through the monitoring dashboard.',
    icon: BarChart3,
  },
  {
    title: 'Unfunded Interventions',
    text: 'Monitor the reported number of unfunded interventions shown by the dashboard.',
    icon: Database,
  },
  {
    title: 'Subproject List',
    text: 'Access the dashboard list of subprojects for screening and monitoring reference.',
    icon: Search,
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Select location',
    text: 'Filter the dashboard by Cluster, Region, and Province.',
  },
  {
    number: '02',
    title: 'Review screening layers',
    text: 'Examine the available hazard and KBA/Protected Area screening information.',
  },
  {
    number: '03',
    title: 'Check intersections',
    text: 'Review the dashboard categories for KBA, Protected Area, both, or outside KBA & PA.',
  },
  {
    number: '04',
    title: 'Review monitoring data',
    text: 'Use the subproject counts, cluster summary, subproject list, and unfunded intervention information.',
  },
]

export default function SesDashboard() {
  return (
    <main className="ses-page">
      <section className="ses-hero">
        <div className="ses-shell ses-hero-grid">
          <div className="ses-hero-copy">
            <div className="ses-eyebrow">
              <ShieldCheck size={15} />
              PRDP ENVIRONMENTAL &amp; SOCIAL SAFEGUARDS
            </div>

            <h1>
              Social and Environmental
              <span> Dashboard</span>
            </h1>

            <p className="ses-hero-lead">
              A web-based monitoring dashboard for PRDP NPCO Environmental
              and Safeguard Screening of subprojects, with location,
              hazard, biodiversity, protected-area, and monitoring views.
            </p>

            <div className="ses-hero-actions">
              <a
                className="ses-primary-btn"
                href={sesDashboardUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open SES Dashboard
                <ArrowUpRight size={18} />
              </a>

              <a className="ses-secondary-btn" href="#about">
                Explore dashboard
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="ses-hero-meta">
              <div>
                <span className="ses-meta-label">SYSTEM</span>
                <strong>Enhanced Geomapping System</strong>
              </div>
              <div>
                <span className="ses-meta-label">DASHBOARD</span>
                <strong>Subproject Scale-up Monitoring</strong>
              </div>
            </div>
          </div>

          <div className="ses-visual-card">
            <div className="ses-visual-top">
              <div>
                <span className="ses-visual-kicker">SES MONITORING</span>
                <h2>Environmental &amp; Safeguard Screening</h2>
              </div>
              <div className="ses-live-pill">
                <span />
                WEB DASHBOARD
              </div>
            </div>

            <div className="ses-map-panel">
              <div className="ses-map-grid" />
              <div className="ses-map-orbit orbit-one" />
              <div className="ses-map-orbit orbit-two" />

              <div className="ses-map-marker marker-one">
                <MapPinned size={17} />
              </div>
              <div className="ses-map-marker marker-two">
                <Leaf size={16} />
              </div>
              <div className="ses-map-marker marker-three">
                <Trees size={16} />
              </div>

              <div className="ses-map-center">
                <ShieldCheck size={30} />
                <strong>PRDP SES</strong>
                <span>SCREENING</span>
              </div>

              <div className="ses-map-legend">
                <div>
                  <span className="legend-dot hazard" />
                  Hazards
                </div>
                <div>
                  <span className="legend-dot kba" />
                  KBA
                </div>
                <div>
                  <span className="legend-dot pa" />
                  Protected Area
                </div>
              </div>
            </div>

            <div className="ses-stat-strip">
              <div>
                <span>SUBPROJECTS</span>
                <strong>MONITOR</strong>
              </div>
              <div>
                <span>SCREENING</span>
                <strong>KBA / PA</strong>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>PHILIPPINES</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ses-section" id="about">
        <div className="ses-shell">
          <div className="ses-section-heading">
            <div>
              <span className="ses-section-label">ABOUT THE TOOL</span>
              <h2>What the SES Dashboard provides</h2>
            </div>
            <p>
              The official dashboard presents PRDP NPCO Environmental and
              Safeguard Screening information together with subproject
              scale-up monitoring views.
            </p>
          </div>

          <div className="ses-feature-grid">
            {dashboardFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <article className="ses-feature-card" key={feature.title}>
                  <div className="ses-feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ses-section ses-section-soft">
        <div className="ses-shell">
          <div className="ses-section-heading compact">
            <div>
              <span className="ses-section-label">SPATIAL SCREENING</span>
              <h2>KBA and Protected Area categories</h2>
            </div>
            <p>
              The dashboard separates subprojects into four displayed
              intersection categories for environmental screening.
            </p>
          </div>

          <div className="ses-screening-grid">
            {screeningCategories.map((item) => {
              const Icon = item.icon
              return (
                <article className="ses-screening-card" key={item.title}>
                  <div className="ses-screening-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="ses-card-index">
                      {String(
                        screeningCategories.indexOf(item) + 1,
                      ).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="ses-note">
            <Info size={19} />
            <p>
              These categories describe the screening classifications
              displayed by the official SES dashboard. They should be
              interpreted together with the dashboard's current data,
              layers, and applicable PRDP environmental and social
              safeguard procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="ses-section">
        <div className="ses-shell">
          <div className="ses-section-heading">
            <div>
              <span className="ses-section-label">WORKFLOW</span>
              <h2>Using the dashboard</h2>
            </div>
            <p>
              A simple workflow for planners and monitoring teams when
              reviewing subproject screening information.
            </p>
          </div>

          <div className="ses-workflow">
            {workflowSteps.map((step) => (
              <article className="ses-workflow-card" key={step.number}>
                <span className="ses-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ses-section ses-dashboard-cta">
        <div className="ses-shell">
          <div className="ses-cta-card">
            <div className="ses-cta-icon">
              <ShieldCheck size={27} />
            </div>

            <div className="ses-cta-copy">
              <span className="ses-section-label">OFFICIAL SYSTEM</span>
              <h2>Open the Social and Environmental Dashboard</h2>
              <p>
                Continue to the official PRDP NPCO SES Environmental and
                Safeguard Screening dashboard for the live monitoring
                interface.
              </p>
            </div>

            <a
              className="ses-primary-btn ses-cta-btn"
              href={sesDashboardUrl}
              target="_blank"
              rel="noreferrer"
            >
              Launch Dashboard
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="ses-section ses-disclaimer-section">
        <div className="ses-shell">
          <div className="ses-disclaimer">
            <div className="ses-disclaimer-icon">
              <Info size={20} />
            </div>
            <div>
              <span className="ses-section-label">IMPORTANT NOTE</span>
              <h3>Dashboard information and screening reference</h3>
              <p>
                This portal page is an informational entry point to the
                official PRDP SES dashboard. Dashboard values, map layers,
                screening results, and subproject information may change as
                the official system is updated. For actual screening,
                monitoring, and safeguard decisions, refer to the official
                dashboard and applicable PRDP policies and procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="ses-footer">
        <div className="ses-shell ses-footer-inner">
          <div>
            <strong>PRDP Social &amp; Environmental Dashboard</strong>
            <span>Environmental and Safeguard Screening • Subproject Scale-up Monitoring</span>
          </div>

          <a
            href={sesDashboardUrl}
            target="_blank"
            rel="noreferrer"
          >
            Official Dashboard
            <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </main>
  )
}

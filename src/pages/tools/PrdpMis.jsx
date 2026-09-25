import React from 'react'
import {
  Database,
  BarChart3,
  Route,
  Sprout,
  Map,
  FileText,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Network,
  Archive,
  LifeBuoy,
} from 'lucide-react'

import './PrdpMis.css'

const sidlanUrl = 'https://sidlan.da.gov.ph/'
const legacyMisUrl = 'http://prdp-mis.da.gov.ph/login'

const components = [
  {
    code: 'I-SUPPORT',
    title: 'Institutional Support',
    description:
      'Provides the enabling support, coordination, capacity building, and technical assistance needed to implement PRDP activities.',
    icon: LifeBuoy,
  },
  {
    code: 'I-BUILD',
    title: 'Infrastructure Development',
    description:
      'Covers infrastructure subprojects and related project information for rural connectivity, facilities, and development investments.',
    icon: Route,
  },
  {
    code: 'I-REAP',
    title: 'Enterprise Development',
    description:
      'Supports enterprise and agri-fishery investments, including project information and implementation monitoring.',
    icon: Sprout,
  },
  {
    code: 'I-PLAN',
    title: 'Planning & Value Chain',
    description:
      'Supports planning, value-chain analysis, investment planning, and related information used for development decisions.',
    icon: Map,
  },
]

const modules = [
  {
    code: 'I-BUILD',
    title: 'Infrastructure',
    description:
      'Infrastructure subprojects, basic profiles, project information, and implementation-related data.',
    icon: Route,
  },
  {
    code: 'I-REAP',
    title: 'Enterprise',
    description:
      'Enterprise project information and stages supporting monitoring of I-REAP investments.',
    icon: Sprout,
  },
  {
    code: 'I-PLAN',
    title: 'Planning',
    description:
      'Planning and value-chain information used to support analysis and investment planning.',
    icon: Map,
  },
  {
    code: 'MIS',
    title: 'Monitoring & Analysis',
    description:
      'Structured project information that can support review, monitoring, reporting, and analysis.',
    icon: BarChart3,
  },
]

const coverage = [
  'Infrastructure subprojects and project profiles',
  'Enterprise project information',
  'Planning and value-chain information',
  'Project implementation and monitoring information',
  'Structured data for review and analysis',
]

const workflow = [
  {
    number: '01',
    title: 'LOCATE',
    description: 'Identify the relevant project, component, or information in the MIS.',
  },
  {
    number: '02',
    title: 'REVIEW',
    description: 'Review available project details, records, milestones, and related information.',
  },
  {
    number: '03',
    title: 'ANALYZE',
    description: 'Use available information to support monitoring, reporting, planning, and decision-making.',
  },
]

export default function PrdpMis() {
  return (
    <main className="prdp-page">
      <section className="prdp-hero">
        <div className="prdp-shell prdp-hero-grid">
          <div className="prdp-hero-copy">
            <div className="prdp-eyebrow">
              <Database size={15} />
              PRDP Management Information System
            </div>

            <h1>
              PRDP MIS
              <span>Project information, monitoring, and analysis.</span>
            </h1>

            <p className="prdp-hero-text">
              Access the PRDP Management Information System and its project
              information through the current SIDLAN platform, with a separate
              entry point for the legacy MIS.
            </p>

            <div className="prdp-hero-actions">
              <a
                className="prdp-btn prdp-btn-primary"
                href={sidlanUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open SIDLAN
                <ArrowUpRight size={17} />
              </a>

              <a
                className="prdp-btn prdp-btn-secondary"
                href={legacyMisUrl}
                target="_blank"
                rel="noreferrer"
              >
                Legacy MIS
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="prdp-hero-note">
              <Info size={17} />
              <span>
                SIDLAN is presented as the current PRDP Management Information
                System platform. Availability and access are subject to the
                respective system administrators.
              </span>
            </div>
          </div>

          <div className="prdp-component-visual">
            <div className="prdp-visual-label">PRDP COMPONENTS</div>

            <div className="prdp-component-stack">
              {components.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    className={`prdp-component-card prdp-component-${index + 1}`}
                    key={item.code}
                  >
                    <div className="prdp-component-icon">
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <div>
                      <span>{item.code}</span>
                      <strong>{item.title}</strong>
                    </div>

                    <div className="prdp-component-index">
                      0{index + 1}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="prdp-visual-footer">
              <span className="prdp-dot" />
              <span>Integrated project information environment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="prdp-section prdp-section-light">
        <div className="prdp-shell">
          <div className="prdp-section-heading">
            <div>
              <span className="prdp-kicker">CURRENT PLATFORM</span>
              <h2>SIDLAN</h2>
            </div>

            <p>
              The current PRDP MIS environment provides structured access to
              project information across major PRDP components.
            </p>
          </div>

          <div className="prdp-module-grid">
            {modules.map((item) => {
              const Icon = item.icon

              return (
                <article className="prdp-info-card" key={item.code}>
                  <div className="prdp-info-icon">
                    <Icon size={21} />
                  </div>

                  <div className="prdp-card-code">{item.code}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="prdp-section">
        <div className="prdp-shell">
          <div className="prdp-two-column">
            <div>
              <span className="prdp-kicker">INFORMATION COVERAGE</span>
              <h2>What can be reviewed through the MIS?</h2>
              <p className="prdp-lead">
                The platform organizes project-related information that can
                support monitoring, reporting, planning, and analysis.
              </p>
            </div>

            <div className="prdp-check-list">
              {coverage.map((item) => (
                <div className="prdp-check-item" key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="prdp-section prdp-section-tint">
        <div className="prdp-shell">
          <div className="prdp-section-heading centered">
            <span className="prdp-kicker">PLANNING USE</span>
            <h2>From project records to useful information</h2>
            <p>
              MIS information can be used as a reference for reviewing project
              status, understanding investments, and supporting planning and
              monitoring activities.
            </p>
          </div>

          <div className="prdp-use-grid">
            <article className="prdp-use-card">
              <Database size={22} />
              <h3>Project Records</h3>
              <p>
                Review available project and subproject information in one
                structured environment.
              </p>
            </article>

            <article className="prdp-use-card">
              <BarChart3 size={22} />
              <h3>Monitoring</h3>
              <p>
                Support review of implementation information, milestones, and
                other available monitoring records.
              </p>
            </article>

            <article className="prdp-use-card">
              <FileText size={22} />
              <h3>Reporting</h3>
              <p>
                Use available records as references for reports, technical
                review, and project documentation.
              </p>
            </article>

            <article className="prdp-use-card">
              <Network size={22} />
              <h3>Analysis</h3>
              <p>
                Organize project information to support planning and
                evidence-based analysis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="prdp-section">
        <div className="prdp-shell">
          <div className="prdp-section-heading centered">
            <span className="prdp-kicker">WORKFLOW</span>
            <h2>A simple way to use the MIS</h2>
          </div>

          <div className="prdp-workflow">
            {workflow.map((item, index) => (
              <React.Fragment key={item.number}>
                <div className="prdp-step">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {index < workflow.length - 1 && (
                  <div className="prdp-step-line" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="prdp-access-section">
        <div className="prdp-shell">
          <div className="prdp-access-header">
            <div>
              <span className="prdp-kicker">SYSTEM ACCESS</span>
              <h2>Choose the appropriate PRDP MIS entry point</h2>
            </div>

            <Archive size={34} />
          </div>

          <div className="prdp-access-grid">
            <article className="prdp-access-card current">
              <div className="prdp-access-top">
                <div className="prdp-access-icon">
                  <Database size={22} />
                </div>
                <span className="prdp-status">CURRENT</span>
              </div>

              <h3>SIDLAN</h3>
              <p>
                Current PRDP Management Information System platform for
                accessing available PRDP project information and datasets.
              </p>

              <a
                href={sidlanUrl}
                target="_blank"
                rel="noreferrer"
                className="prdp-access-link"
              >
                Open SIDLAN
                <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="prdp-access-card legacy">
              <div className="prdp-access-top">
                <div className="prdp-access-icon">
                  <Archive size={22} />
                </div>
                <span className="prdp-status muted">LEGACY</span>
              </div>

              <h3>PRDP MIS</h3>
              <p>
                Separate access point retained for users who still require
                existing legacy MIS functions or records.
              </p>

              <a
                href={legacyMisUrl}
                target="_blank"
                rel="noreferrer"
                className="prdp-access-link"
              >
                Open Legacy MIS
                <ExternalLink size={16} />
              </a>
            </article>
          </div>

          <div className="prdp-access-note">
            <Info size={16} />
            <span>
              Availability, permissions, and system access are subject to the
              respective system administrators.
            </span>
          </div>
        </div>
      </section>

      <section className="prdp-final-cta">
        <div className="prdp-shell prdp-final-inner">
          <div>
            <span className="prdp-kicker">PRDP INFORMATION SYSTEM</span>
            <h2>Access project information through SIDLAN.</h2>
            <p>
              Use the current platform for available PRDP project, planning,
              enterprise, infrastructure, and monitoring information.
            </p>
          </div>

          <a
            href={sidlanUrl}
            target="_blank"
            rel="noreferrer"
            className="prdp-btn prdp-btn-white"
          >
            Open SIDLAN
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer className="prdp-footer">
        <div className="prdp-shell">
          <span>DA-PRDP PLANNERS PORTAL</span>
          <span>PRDP Management Information System</span>
        </div>
      </footer>
    </main>
  )
}

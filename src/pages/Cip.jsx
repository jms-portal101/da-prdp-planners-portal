import './Cip.css'

import './Cip.css'

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  Layers3,
  Target,
  Scale,
  Search,
} from 'lucide-react'

function Cip() {
  const processSteps = [
    {
      number: '01',
      title: 'Study the Criteria',
      description:
        'Review the criteria used in commodity prioritization and understand how each criterion contributes to the assessment.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Review the Indicators',
      description:
        'Examine the indicators associated with each criterion and identify the information required for assessment.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Understand the Weights',
      description:
        'Review the assigned weights to understand the relative contribution of each criterion in the prioritization process.',
      icon: Scale,
    },
    {
      number: '04',
      title: 'Compile Information',
      description:
        'Gather the relevant commodity information and supporting data needed for the assessment.',
      icon: Database,
    },
    {
      number: '05',
      title: 'Assess & Prioritize',
      description:
        'Apply the criteria and indicators to support the identification and prioritization of commodities.',
      icon: Target,
    },
  ]

  const methodologyItems = [
    {
      number: '01',
      title: 'Criteria',
      description:
        'Define the dimensions or considerations that will be used to assess commodities.',
      icon: Layers3,
    },
    {
      number: '02',
      title: 'Indicators',
      description:
        'Use measurable or observable indicators to provide evidence for each criterion.',
      icon: BarChart3,
    },
    {
      number: '03',
      title: 'Weights',
      description:
        'Consider the relative importance assigned to the criteria in the prioritization framework.',
      icon: Scale,
    },
    {
      number: '04',
      title: 'Prioritization',
      description:
        'Use the assessment results to identify commodities that warrant priority attention for planning.',
      icon: Target,
    },
  ]

  return (
    <main className="cip-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="cip-hero">
        <div className="cip-container">

          <div className="cip-breadcrumb">
            <a href="/planning">
              <ArrowLeft size={14} />
              Planning Framework
            </a>

            <span>/</span>

            <span>Commodity Identification & Prioritization</span>
          </div>

          <div className="cip-hero-grid">

            <div className="cip-hero-content">

              <span className="cip-eyebrow">
                VALUE CHAIN DEVELOPMENT FLOW · STAGE 01
              </span>

              <h1>
                Commodity Identification
                <br />
                <span>& Prioritization</span>
              </h1>

              <p className="cip-hero-description">
                A structured approach for identifying and prioritizing
                commodities using relevant criteria, indicators, and
                planning considerations.
              </p>

              <div className="cip-hero-actions">

                <a
                  href="#cip-process"
                  className="cip-primary-button"
                >
                  Explore the CIP Process
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

            <div className="cip-hero-panel">

              <div className="cip-panel-number">
                01
              </div>

              <div className="cip-panel-icon">
                <Target
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              <span className="cip-panel-label">
                PLANNING STAGE
              </span>

              <h2>
                From commodity information
                to planning priorities.
              </h2>

              <div className="cip-panel-line" />

              <p>
                Commodity prioritization provides a structured
                starting point for subsequent market, value chain,
                and investment planning activities.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}
      <section className="cip-intro">
        <div className="cip-container">

          <div className="cip-section-heading">

            <span className="cip-section-eyebrow">
              OVERVIEW
            </span>

            <h2>
              Understanding Commodity Identification
              & Prioritization
            </h2>

            <p>
              Commodity Identification and Prioritization establishes
              a systematic basis for determining which commodities
              should receive attention during succeeding stages of
              agricultural and value chain planning.
            </p>

          </div>


          <div className="cip-intro-grid">

            <div className="cip-intro-card cip-intro-card-main">

              <div className="cip-card-icon">
                <Target
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <h3>
                Why this stage matters
              </h3>

              <p>
                Planning resources are limited and commodities may
                differ in terms of their development potential,
                market conditions, production characteristics,
                constraints, and other relevant considerations.
              </p>

              <p>
                A defined prioritization process helps organize these
                considerations into a structured framework that can
                support succeeding planning decisions.
              </p>

            </div>


            <div className="cip-intro-side">

              <div className="cip-mini-card">
                <span>01</span>

                <div>
                  <strong>Identify</strong>
                  <p>
                    Determine commodities that may be considered
                    within the planning area.
                  </p>
                </div>
              </div>

              <div className="cip-mini-card">
                <span>02</span>

                <div>
                  <strong>Assess</strong>
                  <p>
                    Examine commodities using defined criteria
                    and indicators.
                  </p>
                </div>
              </div>

              <div className="cip-mini-card">
                <span>03</span>

                <div>
                  <strong>Prioritize</strong>
                  <p>
                    Use the assessment to support planning
                    prioritization.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
          ===================================================== */}
      <section
        className="cip-process"
        id="cip-process"
      >
        <div className="cip-container">

          <div className="cip-section-heading cip-heading-center">

            <span className="cip-section-eyebrow">
              CIP WORKFLOW
            </span>

            <h2>
              Commodity Prioritization Process
            </h2>

            <p>
              The process begins with understanding the criteria,
              indicators, and weights that form the basis of
              commodity prioritization.
            </p>

          </div>


          <div className="cip-process-grid">

            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  className="cip-process-card"
                  key={step.number}
                >

                  <div className="cip-process-top">

                    <span className="cip-process-number">
                      {step.number}
                    </span>

                    <div className="cip-process-icon">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          METHODOLOGY
          ===================================================== */}
      <section className="cip-methodology">
        <div className="cip-container">

          <div className="cip-methodology-header">

            <div>

              <span className="cip-section-eyebrow">
                METHODOLOGY
              </span>

              <h2>
                Criteria, Indicators & Weights
              </h2>

            </div>

            <p>
              The CIP framework is built around the relationship
              between criteria, indicators, and their relative
              weights in the prioritization process.
            </p>

          </div>


          <div className="cip-methodology-grid">

            {methodologyItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  className="cip-methodology-card"
                  key={item.number}
                >

                  <div className="cip-methodology-number">
                    {item.number}
                  </div>

                  <div className="cip-methodology-icon">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          PLANNING OUTPUT
          ===================================================== */}
      <section className="cip-output">
        <div className="cip-container">

          <div className="cip-output-box">

            <div className="cip-output-icon">
              <CheckCircle2
                size={23}
                strokeWidth={1.6}
              />
            </div>

            <div className="cip-output-content">

              <span>
                PLANNING OUTPUT
              </span>

              <h2>
                Prioritized commodities
                for succeeding analysis
              </h2>

              <p>
                The result of the prioritization stage provides a
                planning basis for the succeeding stages of the
                value chain development process, including market
                appraisal, value chain analysis, and investment
                planning.
              </p>

            </div>

          </div>

        </div>
      </section>



      {/* =====================================================
          NAVIGATION
          ===================================================== */}
      <section className="cip-navigation">
        <div className="cip-container">

          <a
            href="/planning"
            className="cip-nav-back"
          >
            <ArrowLeft size={15} />
            <span>
              Back to Planning Framework
            </span>
          </a>


          <div className="cip-nav-next">

            <span>
              NEXT STAGE
            </span>

            <a href="/planning/rma">
              Rapid Market Appraisal
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Cip
import './Rma.css'

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Network,
  Search,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react'

function Rma() {
  const processSteps = [
    {
      number: '01',
      title: 'Define the Market',
      description:
        'Establish the commodity, geographic area, market scope, and key questions that will guide the appraisal.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Assess Demand & Supply',
      description:
        'Examine market demand, supply conditions, production volumes, consumption, and other relevant market information.',
      icon: BarChart3,
    },
    {
      number: '03',
      title: 'Map Market Actors',
      description:
        'Identify producers, traders, processors, buyers, institutions, and other actors involved in the market system.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Examine Market Channels',
      description:
        'Understand how commodities move from production areas through intermediaries, processors, buyers, and final markets.',
      icon: Network,
    },
    {
      number: '05',
      title: 'Identify Opportunities',
      description:
        'Determine market opportunities, constraints, gaps, and potential areas for value chain development.',
      icon: TrendingUp,
    },
  ]

  const assessmentAreas = [
    {
      number: '01',
      title: 'Market Demand',
      description:
        'Understand demand characteristics, buyer requirements, consumption patterns, and market preferences.',
      icon: Store,
    },
    {
      number: '02',
      title: 'Supply Conditions',
      description:
        'Examine production, availability, seasonality, volume, and factors affecting commodity supply.',
      icon: BarChart3,
    },
    {
      number: '03',
      title: 'Market Actors',
      description:
        'Identify key actors and understand their roles, relationships, functions, and market interactions.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Market Channels',
      description:
        'Trace the movement of commodities and identify important market pathways and linkages.',
      icon: Network,
    },
  ]

  const outputs = [
    'Market profile and context',
    'Key market actors and their roles',
    'Market channels and linkages',
    'Market opportunities and constraints',
    'Priority areas for succeeding value chain analysis',
  ]

  return (
    <main className="rma-page">

      {/* HERO */}
      <section className="rma-hero">
        <div className="rma-container">

          <div className="rma-breadcrumb">
            <a href="/planning">
              <ArrowLeft size={14} />
              Planning Framework
            </a>

            <span>/</span>

            <span>Rapid Market Appraisal</span>
          </div>

          <div className="rma-hero-grid">

            <div className="rma-hero-content">

              <span className="rma-eyebrow">
                VALUE CHAIN DEVELOPMENT FLOW · STAGE 02
              </span>

              <h1>
                Rapid Market
                <br />
                <span>Appraisal</span>
              </h1>

              <p className="rma-hero-description">
                A structured approach for understanding market
                conditions, actors, channels, opportunities, and
                constraints surrounding a priority commodity.
              </p>

              <div className="rma-hero-actions">

                <a
                  href="#rma-process"
                  className="rma-primary-button"
                >
                  Explore the RMA Process
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

            <div className="rma-hero-panel">

              <div className="rma-panel-number">
                02
              </div>

              <div className="rma-panel-icon">
                <Store
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              <span className="rma-panel-label">
                PLANNING STAGE
              </span>

              <h2>
                From commodity priorities
                to market understanding.
              </h2>

              <div className="rma-panel-line" />

              <p>
                Rapid Market Appraisal provides a practical basis
                for understanding how a priority commodity moves
                through the market and where development opportunities
                may exist.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="rma-intro">

        <div className="rma-container">

          <div className="rma-section-heading">

            <span className="rma-section-eyebrow">
              OVERVIEW
            </span>

            <h2>
              Understanding the Market
              Around a Priority Commodity
            </h2>

            <p>
              Rapid Market Appraisal provides a focused way of
              gathering and organizing market information. It helps
              planners understand market conditions and identify
              opportunities and constraints that can inform succeeding
              value chain analysis.
            </p>

          </div>

          <div className="rma-intro-grid">

            <div className="rma-intro-card rma-intro-card-main">

              <div className="rma-card-icon">
                <Store
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <h3>
                Why this stage matters
              </h3>

              <p>
                A commodity may have production potential while
                facing limitations in demand, market access, pricing,
                processing, logistics, or buyer requirements.
              </p>

              <p>
                RMA helps organize market information so that these
                conditions can be considered before moving into a
                more detailed value chain analysis.
              </p>

            </div>

            <div className="rma-intro-side">

              <div className="rma-mini-card">
                <span>01</span>

                <div>
                  <strong>
                    Understand
                  </strong>

                  <p>
                    Establish the market context
                    surrounding the commodity.
                  </p>
                </div>
              </div>

              <div className="rma-mini-card">
                <span>02</span>

                <div>
                  <strong>
                    Connect
                  </strong>

                  <p>
                    Identify actors, relationships,
                    and market channels.
                  </p>
                </div>
              </div>

              <div className="rma-mini-card">
                <span>03</span>

                <div>
                  <strong>
                    Identify
                  </strong>

                  <p>
                    Determine market opportunities,
                    gaps, and constraints.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section
        className="rma-process"
        id="rma-process"
      >

        <div className="rma-container">

          <div className="rma-section-heading rma-heading-center">

            <span className="rma-section-eyebrow">
              RMA WORKFLOW
            </span>

            <h2>
              Rapid Market Appraisal Process
            </h2>

            <p>
              A practical sequence for gathering market information,
              understanding market relationships, and identifying
              opportunities and constraints.
            </p>

          </div>

          <div className="rma-process-grid">

            {processSteps.map((step) => {

              const Icon = step.icon

              return (
                <div
                  className="rma-process-card"
                  key={step.number}
                >

                  <div className="rma-process-top">

                    <span className="rma-process-number">
                      {step.number}
                    </span>

                    <div className="rma-process-icon">
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

      {/* ASSESSMENT AREAS */}
      <section className="rma-assessment">

        <div className="rma-container">

          <div className="rma-assessment-header">

            <div>

              <span className="rma-section-eyebrow">
                MARKET ASSESSMENT
              </span>

              <h2>
                Areas to Examine
              </h2>

            </div>

            <p>
              RMA brings together different dimensions of the market
              to develop a practical picture of how the commodity
              moves from production to buyers and consumers.
            </p>

          </div>

          <div className="rma-assessment-grid">

            {assessmentAreas.map((item) => {

              const Icon = item.icon

              return (
                <div
                  className="rma-assessment-card"
                  key={item.number}
                >

                  <div className="rma-assessment-number">
                    {item.number}
                  </div>

                  <div className="rma-assessment-icon">
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

      {/* MARKET QUESTIONS */}
      <section className="rma-questions">

        <div className="rma-container">

          <div className="rma-questions-box">

            <div className="rma-questions-heading">

              <span>
                MARKET QUESTIONS
              </span>

              <h2>
                What should the appraisal help us understand?
              </h2>

            </div>

            <div className="rma-question-list">

              <div>
                <span>01</span>
                <p>
                  Who are the important buyers and market actors?
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  What are the major market channels and linkages?
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  What factors influence demand and supply?
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  What market opportunities can be developed?
                </p>
              </div>

              <div>
                <span>05</span>
                <p>
                  What constraints may limit value chain development?
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OUTPUT */}
      <section className="rma-output">

        <div className="rma-container">

          <div className="rma-output-box">

            <div className="rma-output-icon">
              <CheckCircle2
                size={23}
                strokeWidth={1.6}
              />
            </div>

            <div className="rma-output-content">

              <span>
                PLANNING OUTPUT
              </span>

              <h2>
                A clearer picture of the market
              </h2>

              <p>
                The RMA provides organized market information that
                can guide the succeeding Climate-Resilient
                Agro-Industry Oriented Value Chain Analysis.
              </p>

              <ul>
                {outputs.map((output) => (
                  <li key={output}>
                    <CheckCircle2
                      size={13}
                      strokeWidth={1.8}
                    />

                    <span>
                      {output}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}
      <section className="rma-navigation">

        <div className="rma-container">

          <a
            href="/planning/cip"
            className="rma-nav-back"
          >
            <ArrowLeft size={15} />

            <span>
              Previous Stage · CIP
            </span>
          </a>

          <div className="rma-nav-next">

            <span>
              NEXT STAGE
            </span>

            <a href="/planning/ivca">
              Value Chain Analysis
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Rma
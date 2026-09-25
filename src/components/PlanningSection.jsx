import './PlanningSection.css'

import { Link } from 'react-router-dom'

import {
  Target,
  Store,
  Network,
  FileText,
  Tractor,
  Building2,
  Globe2,
  Activity,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'

function PlanningSection() {

  const stages = [
    {
      num: '01',
      category: 'IDENTIFICATION',
      title: 'Commodity Identification & Prioritization',
      icon: Target,
    },
    {
      num: '02',
      category: 'MARKET ASSESSMENT',
      title: 'Rapid Market Appraisal',
      icon: Store,
    },
    {
      num: '03',
      category: 'VALUE CHAIN ANALYSIS',
      title:
        'Climate-Resilient Agro-Industry Oriented Value Chain Analysis',
      icon: Network,
    },
    {
      num: '04',
      category: 'INVESTMENT PLANNING',
      title:
        'Provincial Commodity Investment Plan Formulation',
      icon: FileText,
    },
    {
      num: '05',
      category: 'INVESTMENT DELIVERY',
      title: 'Implementation',
      icon: Tractor,
    },
    {
      num: '06',
      category: 'LOCAL GOVERNANCE',
      title: 'Institutionalization',
      icon: Building2,
    },
    {
      num: '07',
      category: 'PROGRAM INTEGRATION',
      title: 'Mainstreaming',
      icon: Globe2,
    },
    {
      num: '08',
      category: 'PERFORMANCE TRACKING',
      title: 'Operational Monitoring',
      icon: Activity,
    },
    {
      num: '09',
      category: 'LEARNING & FEEDBACK',
      title: 'Evaluation',
      icon: ClipboardCheck,
    },
  ]

  return (
    <section
      className="planning-section"
      id="planning"
    >

      <div className="planning-inner">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="planning-header">

          <div className="planning-heading">

            <span className="planning-eyebrow">
              PLANNING FRAMEWORK
            </span>

            <h2>
              Value Chain Development Flow
            </h2>

            <p>
              A structured planning pathway that connects
              commodity prioritization, market assessment,
              value chain analysis, investment planning,
              implementation, and monitoring.
            </p>

          </div>


          {/* 09 STAGE METRIC */}

          <div className="planning-header-note">

            <span>
              09
            </span>

            <p>
              INTERCONNECTED STAGES
              <br />
              FROM PLANNING TO EVALUATION
            </p>

          </div>

        </div>


        {/* =====================================================
            9-STAGE DEVELOPMENT FLOW
            ===================================================== */}

        <div className="planning-flow">

          {stages.map((stage, index) => {

            const Icon = stage.icon

            return (
              <div
                className="planning-flow-item"
                key={stage.num}
              >

                <div className="planning-stage">

                  {/* Stage header */}

                  <div className="planning-stage-top">

                    <span className="planning-stage-number">
                      {stage.num}
                    </span>

                    <div className="planning-stage-icon">

                      <Icon
                        size={16}
                        strokeWidth={1.8}
                      />

                    </div>

                  </div>


                  {/* Stage content */}

                  <div className="planning-stage-content">

                    <span className="planning-stage-label">
                      {stage.category}
                    </span>

                    <h3>
                      {stage.title}
                    </h3>

                  </div>

                </div>


                {/* Connector */}

                {index < stages.length - 1 && (

                  <div
                    className="planning-flow-connector"
                    aria-hidden="true"
                  />

                )}

              </div>
            )
          })}

        </div>


        {/* =====================================================
            PLANNING RESOURCES CTA
            ===================================================== */}

        <div className="planning-cta">

          <div className="planning-cta-copy">

            <span>
              PLANNING RESOURCES
            </span>

            <h3>
              Explore the complete planning framework
            </h3>

            <p>
              Access detailed guidance, planning resources,
              reference materials, and supporting information
              for each stage of the value chain development
              process.
            </p>

          </div>


          {/* Native portal navigation */}

          <Link
            to="/planning"
            className="planning-cta-button"
          >

            <span>
              Explore Planning Framework
            </span>

            <ArrowRight
              size={16}
              strokeWidth={1.8}
            />

          </Link>

        </div>

      </div>

    </section>
  )
}

export default PlanningSection
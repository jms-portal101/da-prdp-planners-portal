import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  Gauge,
  Landmark,
  Layers3,
  Network,
  Target,
  Users,
  Workflow,
} from 'lucide-react'

import './Institutionalization.css'

const steps = [
  {
    number: '01',
    title: 'Assess Existing Planning and Institutional Arrangements',
    shortTitle: 'Assess',
    icon: Building2,
    description:
      'Review existing LGU planning systems, institutional arrangements, mandates, committees, processes, and coordination mechanisms that can support the integration of PCIP priorities.',
    objective:
      'Understand the current planning and institutional environment and identify existing mechanisms that can be used to sustain the planning process.',
    methodologies: [
      'Review existing local plans and planning processes',
      'Map institutional roles and responsibilities',
      'Identify existing committees and coordination mechanisms',
      'Assess current use of commodity and value chain information',
    ],
    participants: [
      'LGU planning and development offices',
      'Agriculture and related offices',
      'Provincial and municipal technical staff',
      'Relevant sector and institutional representatives',
    ],
    tools: [
      'Planning document review',
      'Institutional mapping',
      'Key informant discussions',
      'Process assessment',
    ],
    outputs: [
      'Institutional and planning assessment',
      'Existing planning mechanisms identified',
      'Initial institutional gaps and opportunities',
    ],
    questions: [
      'What planning mechanisms already exist?',
      'Which offices are involved in commodity planning?',
      'Where can PCIP processes be integrated?',
    ],
  },

  {
    number: '02',
    title: 'Map PCIP Linkages with Local Plans',
    shortTitle: 'Link Plans',
    icon: Layers3,
    description:
      'Identify how PCIP priorities and proposed interventions relate to existing local development, investment, sectoral, and spatial planning instruments.',
    objective:
      'Establish clear linkages between PCIP priorities and the plans used by LGUs for development programming and investment decisions.',
    methodologies: [
      'Review relevant local planning instruments',
      'Map PCIP priorities against local development priorities',
      'Identify complementary programs and interventions',
      'Determine planning and programming entry points',
    ],
    participants: [
      'Local planning and development offices',
      'Agriculture and sector offices',
      'Provincial planning teams',
      'Relevant LGU technical working groups',
    ],
    tools: [
      'Plan-to-plan mapping',
      'Priority alignment matrix',
      'Intervention mapping',
      'Planning linkage assessment',
    ],
    outputs: [
      'PCIP-to-local-plan linkage matrix',
      'Priority alignment areas',
      'Identified entry points for integration',
    ],
    questions: [
      'Which local plans contain related priorities?',
      'Which PCIP interventions can support existing local objectives?',
      'Where should PCIP priorities be reflected?',
    ],
  },

  {
    number: '03',
    title: 'Establish Roles and Responsibilities',
    shortTitle: 'Roles',
    icon: Users,
    description:
      'Clarify the roles of LGU offices, DA units, technical teams, development partners, and other stakeholders in maintaining the planning process and supporting PCIP implementation.',
    objective:
      'Create clear institutional ownership and accountability for planning, coordination, implementation, monitoring, and review.',
    methodologies: [
      'Identify key institutional actors',
      'Define planning and implementation responsibilities',
      'Clarify coordination and reporting arrangements',
      'Establish focal persons or working mechanisms',
    ],
    participants: [
      'LGU executive and planning offices',
      'Agriculture and sector offices',
      'DA regional and provincial offices',
      'Technical working groups',
      'Development partners',
    ],
    tools: [
      'Institutional responsibility matrix',
      'RACI-style role mapping',
      'Coordination framework',
      'Stakeholder mapping',
    ],
    outputs: [
      'Institutional role matrix',
      'Defined responsibilities',
      'Coordination and communication arrangements',
    ],
    questions: [
      'Who owns each part of the planning process?',
      'Who coordinates implementation?',
      'Who is responsible for monitoring and review?',
    ],
  },

  {
    number: '04',
    title: 'Integrate PCIP Priorities into Local Planning',
    shortTitle: 'Integrate',
    icon: Landmark,
    description:
      'Translate relevant PCIP priorities into the appropriate local planning and programming processes so that commodity and value chain priorities can be considered in regular development planning.',
    objective:
      'Embed relevant PCIP priorities into regular LGU planning and programming processes.',
    methodologies: [
      'Identify applicable local planning instruments',
      'Translate PCIP priorities into local planning language',
      'Link priority interventions with local programs',
      'Support inclusion in appropriate planning and programming processes',
    ],
    participants: [
      'Local development planning offices',
      'Local agriculture offices',
      'Budget and investment programming offices',
      'LGU technical working groups',
    ],
    tools: [
      'Planning alignment matrix',
      'Priority translation worksheet',
      'Investment programming linkage',
      'Local plan review',
    ],
    outputs: [
      'Integrated planning priorities',
      'Linked programs and interventions',
      'Documented planning entry points',
    ],
    questions: [
      'How can PCIP priorities be reflected in local plans?',
      'Which interventions require local programming?',
      'Which priorities need coordination with other plans?',
    ],
  },

  {
    number: '05',
    title: 'Link Priorities with Financing and Partners',
    shortTitle: 'Finance',
    icon: Network,
    description:
      'Connect priority interventions with available financing mechanisms, development programs, agencies, private sector actors, and other potential implementation partners.',
    objective:
      'Improve the ability of institutions to mobilize resources and partnerships around agreed commodity and value chain priorities.',
    methodologies: [
      'Map available financing sources',
      'Identify relevant government programs',
      'Identify development and private sector partners',
      'Match interventions with potential financing and support mechanisms',
    ],
    participants: [
      'LGU planning and budget offices',
      'Agriculture and sector offices',
      'DA offices and programs',
      'Development partners',
      'Private sector and producer organizations',
    ],
    tools: [
      'Financing source mapping',
      'Program matching matrix',
      'Partnership mapping',
      'Resource mobilization framework',
    ],
    outputs: [
      'Potential financing sources',
      'Program and partner matching',
      'Resource mobilization opportunities',
    ],
    questions: [
      'What resources are available?',
      'Which programs can support the identified priorities?',
      'Which partners can contribute to implementation?',
    ],
  },

  {
    number: '06',
    title: 'Embed Monitoring and Review Mechanisms',
    shortTitle: 'Monitor',
    icon: Gauge,
    description:
      'Establish mechanisms for tracking implementation, monitoring results, reviewing progress, and feeding evidence back into planning and programming decisions.',
    objective:
      'Ensure that institutionalization is supported by regular monitoring, reporting, review, and feedback mechanisms.',
    methodologies: [
      'Identify relevant indicators',
      'Define monitoring responsibilities',
      'Establish reporting arrangements',
      'Schedule periodic review and feedback sessions',
    ],
    participants: [
      'Planning and monitoring offices',
      'Agriculture and sector offices',
      'Program implementers',
      'Technical working groups',
      'Relevant partner institutions',
    ],
    tools: [
      'Monitoring framework',
      'Indicator matrix',
      'Progress reporting templates',
      'Review and feedback mechanism',
    ],
    outputs: [
      'Monitoring framework',
      'Defined reporting responsibilities',
      'Regular review mechanism',
    ],
    questions: [
      'What should be monitored?',
      'Who collects and validates information?',
      'How will findings influence planning decisions?',
    ],
  },

  {
    number: '07',
    title: 'Sustain the Process and Update the Planning Framework',
    shortTitle: 'Sustain',
    icon: Workflow,
    description:
      'Institutionalization is sustained through regular review, updating of priorities, continued coordination, and integration of lessons into succeeding planning cycles.',
    objective:
      'Maintain the use of evidence-based commodity and value chain planning as part of regular institutional practice.',
    methodologies: [
      'Conduct periodic planning reviews',
      'Update priorities based on new evidence',
      'Document lessons and good practices',
      'Strengthen institutional arrangements over time',
      'Carry forward relevant priorities into succeeding planning cycles',
    ],
    participants: [
      'LGU planning institutions',
      'Agriculture and sector offices',
      'DA planning and technical units',
      'Technical working groups',
      'Development and implementation partners',
    ],
    tools: [
      'Planning review framework',
      'Lessons learned documentation',
      'Priority updating process',
      'Institutional sustainability assessment',
    ],
    outputs: [
      'Updated planning priorities',
      'Institutionalized planning arrangements',
      'Documented lessons and improvements',
      'Sustained planning cycle',
    ],
    questions: [
      'How will the process continue beyond the initial planning activity?',
      'How will priorities be updated?',
      'How will lessons be carried into succeeding planning cycles?',
    ],
  },
]

const frameworkSections = [
  {
    title: 'What Institutionalization Means',
    icon: Building2,
    content: [
      'Institutionalization means integrating the planning process and relevant PCIP priorities into regular institutional systems rather than treating them as stand-alone planning activities.',
      'The objective is to establish ownership, coordination, planning linkages, implementation mechanisms, monitoring arrangements, and review processes that can continue through regular institutional practice.',
    ],
  },
  {
    title: 'Integration with Local Planning',
    icon: Layers3,
    content: [
      'PCIP priorities can serve as an evidence-based reference for identifying commodity and value chain interventions relevant to local development priorities.',
      'The integration process involves identifying the appropriate planning instruments, translating priorities into applicable programs and activities, and linking them with local investment and implementation processes.',
    ],
  },
  {
    title: 'Institutional Coordination',
    icon: Network,
    content: [
      'Institutionalization requires clear roles among planning offices, agriculture offices, technical units, implementing offices, and partner institutions.',
      'Coordination mechanisms should support information sharing, planning alignment, resource mobilization, implementation coordination, and review of results.',
    ],
  },
  {
    title: 'Planning and Investment Use',
    icon: Target,
    content: [
      'Relevant priorities identified through the planning process should be connected to programming and investment decisions.',
      'This creates a pathway from evidence and planning priorities toward programs, projects, financing opportunities, and implementation arrangements.',
    ],
  },
  {
    title: 'Monitoring and Feedback',
    icon: Gauge,
    content: [
      'Institutionalization is strengthened when implementation information and results are regularly reviewed and used to improve subsequent planning decisions.',
      'Monitoring should therefore function not only as reporting but also as a feedback mechanism for adjusting priorities, interventions, and institutional arrangements.',
    ],
  },
]

function Institutionalization() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(null)

  const step = steps[activeStep]
  const StepIcon = step.icon

  const goToStep = (index) => {
    if (index < 0 || index >= steps.length) return

    setActiveStep(index)
    setOpenSection(null)

    window.setTimeout(() => {
      const element = document.getElementById('institutionalization-step-detail')

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 50)
  }

  return (
    <div className="institutionalization-page">

      {/* HERO */}
      <section className="institutionalization-hero">
        <div className="institutionalization-container">

          <div className="institutionalization-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/planning">Planning Framework</Link>
            <span>/</span>
            <span>Institutionalization</span>
          </div>

          <div className="institutionalization-hero-grid">

            <div className="institutionalization-hero-copy">

              <div className="institutionalization-stage-tag">
                STAGE 06
              </div>

              <div className="institutionalization-eyebrow">
                LOCAL GOVERNANCE
              </div>

              <h1>
                Institutionalization
              </h1>

              <p className="institutionalization-hero-description">
                Integrating commodity and value chain priorities into regular
                local planning, programming, implementation, coordination,
                budgeting, monitoring, and review systems.
              </p>

              <div className="institutionalization-hero-actions">
                <a
                  href="#institutionalization-process"
                  className="institutionalization-primary-button"
                >
                  Explore the Process
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/planning"
                  className="institutionalization-secondary-button"
                >
                  <ArrowLeft size={16} />
                  Planning Framework
                </Link>
              </div>

            </div>

            <div className="institutionalization-hero-visual">

              <div className="institutionalization-orbit">

                <div className="institutionalization-orbit-ring ring-one" />
                <div className="institutionalization-orbit-ring ring-two" />

                <div className="institutionalization-orbit-node node-top">
                  <FileText size={17} />
                  <span>PCIP</span>
                </div>

                <div className="institutionalization-orbit-node node-left">
                  <Building2 size={17} />
                  <span>LGU</span>
                </div>

                <div className="institutionalization-orbit-node node-right">
                  <Network size={17} />
                  <span>Partners</span>
                </div>

                <div className="institutionalization-orbit-center">
                  <Landmark size={24} />
                  <strong>INSTITUTIONALIZATION</strong>
                  <span>Regular Planning System</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="institutionalization-intro">
        <div className="institutionalization-container">

          <div className="institutionalization-section-heading">
            <span>STAGE 06</span>
            <h2>
              From a Planning Activity to a Regular Institutional Practice
            </h2>
            <p>
              Institutionalization establishes the mechanisms needed to
              sustain commodity and value chain planning within regular
              governance and development planning systems.
            </p>
          </div>

          <div className="institutionalization-highlight-grid">

            <div className="institutionalization-highlight-card">
              <div className="institutionalization-highlight-icon">
                <Building2 size={19} />
              </div>
              <strong>Institutional Ownership</strong>
              <p>
                Clarify who is responsible for maintaining and using the
                planning process.
              </p>
            </div>

            <div className="institutionalization-highlight-card">
              <div className="institutionalization-highlight-icon">
                <Layers3 size={19} />
              </div>
              <strong>Planning Integration</strong>
              <p>
                Connect PCIP priorities with regular local planning and
                programming processes.
              </p>
            </div>

            <div className="institutionalization-highlight-card">
              <div className="institutionalization-highlight-icon">
                <Network size={19} />
              </div>
              <strong>Coordination</strong>
              <p>
                Strengthen coordination among LGUs, DA offices, technical
                teams, and development partners.
              </p>
            </div>

            <div className="institutionalization-highlight-card">
              <div className="institutionalization-highlight-icon">
                <Gauge size={19} />
              </div>
              <strong>Continuous Review</strong>
              <p>
                Use monitoring and feedback to improve succeeding planning
                cycles.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        className="institutionalization-process"
        id="institutionalization-process"
      >
        <div className="institutionalization-container">

          <div className="institutionalization-section-heading centered">
            <span>INSTITUTIONALIZATION PROCESS</span>
            <h2>
              Seven Steps for Sustaining the Planning Framework
            </h2>
            <p>
              The process moves from understanding existing institutional
              arrangements toward integration, resource linkage, monitoring,
              and sustained use of the planning framework.
            </p>
          </div>

          <div className="institutionalization-step-tabs">

            {steps.map((item, index) => {
              const Icon = item.icon
              const isActive = index === activeStep

              return (
                <button
                  key={item.number}
                  type="button"
                  className={`institutionalization-step-tab ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => goToStep(index)}
                >
                  <span className="institutionalization-step-number">
                    {item.number}
                  </span>

                  <span className="institutionalization-step-tab-icon">
                    <Icon size={17} />
                  </span>

                  <span className="institutionalization-step-tab-text">
                    {item.shortTitle}
                  </span>
                </button>
              )
            })}

          </div>

          {/* STEP DETAIL */}
          <div
            className="institutionalization-step-detail"
            id="institutionalization-step-detail"
          >

            <div className="institutionalization-step-header">

              <div className="institutionalization-step-heading">

                <div className="institutionalization-step-icon-large">
                  <StepIcon size={24} />
                </div>

                <div>
                  <span>STEP {step.number}</span>
                  <h3>{step.title}</h3>
                </div>

              </div>

              <div className="institutionalization-step-counter">
                {String(activeStep + 1).padStart(2, '0')}
                <span>/</span>
                {String(steps.length).padStart(2, '0')}
              </div>

            </div>

            <p className="institutionalization-step-description">
              {step.description}
            </p>

            <div className="institutionalization-meta-grid">

              <div className="institutionalization-meta-card">
                <div className="institutionalization-meta-icon">
                  <Target size={17} />
                </div>
                <span>OBJECTIVE</span>
                <p>{step.objective}</p>
              </div>

              <div className="institutionalization-meta-card">
                <div className="institutionalization-meta-icon">
                  <Workflow size={17} />
                </div>
                <span>METHODOLOGIES</span>
                <ul>
                  {step.methodologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="institutionalization-meta-card">
                <div className="institutionalization-meta-icon">
                  <Users size={17} />
                </div>
                <span>PARTICIPANTS</span>
                <ul>
                  {step.participants.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="institutionalization-meta-card">
                <div className="institutionalization-meta-icon">
                  <ClipboardList size={17} />
                </div>
                <span>TOOLS / REFERENCES</span>
                <ul>
                  {step.tools.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="institutionalization-output-grid">

              <div className="institutionalization-output-card">
                <div className="institutionalization-output-header">
                  <div className="institutionalization-output-icon">
                    <FileCheck2 size={18} />
                  </div>

                  <div>
                    <span>EXPECTED OUTPUT</span>
                    <h4>Planning Deliverables</h4>
                  </div>
                </div>

                <ul>
                  {step.outputs.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="institutionalization-question-card">
                <div className="institutionalization-output-header">
                  <div className="institutionalization-output-icon">
                    <ClipboardCheck size={18} />
                  </div>

                  <div>
                    <span>GUIDE QUESTIONS</span>
                    <h4>Planning Discussion</h4>
                  </div>
                </div>

                <ul>
                  {step.questions.map((item) => (
                    <li key={item}>
                      <span className="question-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="institutionalization-step-navigation">

              <button
                type="button"
                className="institutionalization-step-nav-button"
                disabled={activeStep === 0}
                onClick={() => goToStep(activeStep - 1)}
              >
                <ArrowLeft size={16} />
                <div>
                  <span>PREVIOUS STEP</span>
                  <strong>
                    {activeStep > 0
                      ? steps[activeStep - 1].shortTitle
                      : 'Start'}
                  </strong>
                </div>
              </button>

              <div className="institutionalization-progress">
                <div className="institutionalization-progress-label">
                  <span>PROCESS PROGRESS</span>
                  <strong>
                    {Math.round(
                      ((activeStep + 1) / steps.length) * 100
                    )}
                    %
                  </strong>
                </div>

                <div className="institutionalization-progress-track">
                  <div
                    className="institutionalization-progress-fill"
                    style={{
                      width: `${
                        ((activeStep + 1) / steps.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <button
                type="button"
                className="institutionalization-step-nav-button next"
                disabled={activeStep === steps.length - 1}
                onClick={() => goToStep(activeStep + 1)}
              >
                <div>
                  <span>NEXT STEP</span>
                  <strong>
                    {activeStep < steps.length - 1
                      ? steps[activeStep + 1].shortTitle
                      : 'Complete'}
                  </strong>
                </div>
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="institutionalization-framework">
        <div className="institutionalization-container">

          <div className="institutionalization-section-heading">
            <span>FRAMEWORK</span>
            <h2>
              Institutionalizing the Planning Cycle
            </h2>
            <p>
              Institutionalization creates a continuous connection between
              planning priorities, local governance systems, implementation,
              monitoring, and succeeding planning cycles.
            </p>
          </div>

          <div className="institutionalization-cycle">

            <div className="institutionalization-cycle-item">
              <div className="institutionalization-cycle-number">01</div>
              <FileText size={19} />
              <strong>PCIP</strong>
              <span>Evidence & Priorities</span>
            </div>

            <ArrowRight className="institutionalization-cycle-arrow" size={17} />

            <div className="institutionalization-cycle-item">
              <div className="institutionalization-cycle-number">02</div>
              <Layers3 size={19} />
              <strong>Local Planning</strong>
              <span>Planning Alignment</span>
            </div>

            <ArrowRight className="institutionalization-cycle-arrow" size={17} />

            <div className="institutionalization-cycle-item">
              <div className="institutionalization-cycle-number">03</div>
              <ClipboardList size={19} />
              <strong>Programming</strong>
              <span>Investment Linkage</span>
            </div>

            <ArrowRight className="institutionalization-cycle-arrow" size={17} />

            <div className="institutionalization-cycle-item">
              <div className="institutionalization-cycle-number">04</div>
              <Building2 size={19} />
              <strong>Implementation</strong>
              <span>Action & Delivery</span>
            </div>

            <ArrowRight className="institutionalization-cycle-arrow" size={17} />

            <div className="institutionalization-cycle-item">
              <div className="institutionalization-cycle-number">05</div>
              <Gauge size={19} />
              <strong>Review</strong>
              <span>Results & Feedback</span>
            </div>

          </div>

        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="institutionalization-details">
        <div className="institutionalization-container">

          <div className="institutionalization-section-heading centered">
            <span>DETAILED FRAMEWORK</span>
            <h2>
              How Institutionalization Works
            </h2>
            <p>
              Review the key institutional dimensions that support sustained
              use of commodity and value chain planning.
            </p>
          </div>

          <div className="institutionalization-accordion">

            {frameworkSections.map((section, index) => {
              const Icon = section.icon
              const isOpen = openSection === index

              return (
                <div
                  className={`institutionalization-accordion-item ${
                    isOpen ? 'open' : ''
                  }`}
                  key={section.title}
                >

                  <button
                    type="button"
                    className="institutionalization-accordion-trigger"
                    onClick={() =>
                      setOpenSection(isOpen ? null : index)
                    }
                  >
                    <div className="institutionalization-accordion-title">
                      <div className="institutionalization-accordion-icon">
                        <Icon size={17} />
                      </div>

                      <span>{section.title}</span>
                    </div>

                    <ChevronDown
                      size={18}
                      className="institutionalization-chevron"
                    />
                  </button>

                  <div className="institutionalization-accordion-content">
                    <div>
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* PIPELINE */}
      <section className="institutionalization-pipeline">
        <div className="institutionalization-container">

          <div className="institutionalization-pipeline-box">

            <div className="institutionalization-pipeline-heading">
              <span>FROM PCIP TO REGULAR GOVERNANCE</span>
              <h2>
                Making Planning Part of the Regular System
              </h2>
              <p>
                Institutionalization connects evidence-based priorities with
                the systems used for planning, programming, implementation,
                and review.
              </p>
            </div>

            <div className="institutionalization-pipeline-flow">

              <div className="institutionalization-pipeline-item">
                <FileText size={18} />
                <span>PCIP</span>
              </div>

              <ArrowRight size={16} />

              <div className="institutionalization-pipeline-item">
                <Layers3 size={18} />
                <span>Local Planning</span>
              </div>

              <ArrowRight size={16} />

              <div className="institutionalization-pipeline-item">
                <ClipboardList size={18} />
                <span>Programming</span>
              </div>

              <ArrowRight size={16} />

              <div className="institutionalization-pipeline-item">
                <Building2 size={18} />
                <span>Implementation</span>
              </div>

              <ArrowRight size={16} />

              <div className="institutionalization-pipeline-item">
                <Gauge size={18} />
                <span>Review</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="institutionalization-closing">
        <div className="institutionalization-container">

          <div className="institutionalization-closing-box">

            <div className="institutionalization-closing-icon">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <span>STAGE 06 COMPLETE</span>
              <h2>
                From Institutionalization to Mainstreaming
              </h2>
              <p>
                Once planning processes and priorities are embedded within
                regular local systems, the next step is to connect them with
                broader DA planning, programming, and development initiatives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="institutionalization-footer-nav">
        <div className="institutionalization-container">

          <Link
            to="/planning/implementation"
            className="institutionalization-footer-link"
          >
            <ArrowLeft size={16} />

            <div>
              <span>PREVIOUS STAGE</span>
              <strong>Implementation</strong>
            </div>
          </Link>

          <Link
            to="/planning"
            className="institutionalization-footer-center"
          >
            <span>PLANNING FRAMEWORK</span>
            <strong>All Stages</strong>
          </Link>

          {/* FIXED: DIRECT LINK TO MAINSTREAMING */}
          <Link
            to="/planning/mainstreaming"
            className="institutionalization-footer-link right"
          >
            <div>
              <span>NEXT STAGE</span>
              <strong>Mainstreaming</strong>
            </div>

            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Institutionalization
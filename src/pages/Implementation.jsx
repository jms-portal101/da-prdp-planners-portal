import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Coins,
  FileCheck2,
  FileText,
  Gauge,
  Handshake,
  Layers3,
  ListChecks,
  MessageSquare,
  Network,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  Workflow,
  Wrench,
} from 'lucide-react'

import './Implementation.css'

const implementationSteps = [
  {
    number: '01',
    shortTitle: 'Translate PCIP Priorities',
    title: 'Translate PCIP Priorities into Investment Actions',
    icon: Target,
    description:
      'Convert approved PCIP priorities and identified interventions into clear investment actions, responsible actors, and implementation pathways.',
    objective:
      'Ensure that prioritized commodity interventions are carried forward from planning into actionable investment programming.',
    methodologies: [
      'Review the approved PCIP and priority commodity interventions',
      'Identify priority infrastructure, enterprise, technical, and support interventions',
      'Clarify responsible offices, proponents, and potential implementing partners',
      'Identify interventions requiring further project preparation',
    ],
    participants: [
      'DA planning and program offices',
      'Provincial and local planning offices',
      'Project proponents',
      'LGUs and implementing units',
      'Relevant national government agencies',
      'Industry and value chain stakeholders',
    ],
    tools: [
      'Approved PCIP',
      'Commodity and intervention matrices',
      'Value Chain Analysis results',
      'Provincial planning documents',
      'Spatial and risk assessment outputs',
    ],
    outputs: [
      'Prioritized investment actions',
      'Identified project/intervention proponents',
      'Initial implementation pathways',
      'Updated investment priorities',
    ],
    questions: [
      'Which PCIP interventions are ready for implementation?',
      'Who will lead or support each intervention?',
      'Which interventions require further project preparation?',
      'Which interventions can be pursued through existing programs?',
    ],
  },

  {
    number: '02',
    shortTitle: 'Investment Programming',
    title: 'Investment Programming',
    icon: WalletCards,
    description:
      'Match priority interventions with investment programming, budget planning, potential financing sources, and implementation windows.',
    objective:
      'Translate PCIP priorities into realistic and financeable investment programs.',
    methodologies: [
      'Review investment priorities and indicative costs',
      'Identify potential financing and support mechanisms',
      'Match interventions with appropriate programs and funding windows',
      'Consider annual and multi-year programming requirements',
      'Coordinate with relevant planning and budgeting offices',
    ],
    participants: [
      'DA planning offices',
      'LGU planning and budgeting offices',
      'Program coordinators',
      'Implementing agencies',
      'Development partners',
      'Private sector and financing institutions where applicable',
    ],
    tools: [
      'PCIP investment matrix',
      'Annual Investment Program',
      'Local development and sector plans',
      'Agency investment programs',
      'Budget and financing references',
    ],
    outputs: [
      'Programmed priority investments',
      'Indicative financing arrangements',
      'Investment pipeline',
      'Identified funding gaps',
    ],
    questions: [
      'What funding source is appropriate for the intervention?',
      'When can the intervention realistically be programmed?',
      'Is the intervention included in existing investment programs?',
      'What financing gaps remain?',
    ],
  },

  {
    number: '03',
    shortTitle: 'Project Preparation',
    title: 'Project Preparation and Development',
    icon: FileCheck2,
    description:
      'Develop the technical, financial, institutional, environmental, social, and other requirements necessary to move an investment toward implementation.',
    objective:
      'Ensure that priority investments are sufficiently prepared before implementation and financing decisions.',
    methodologies: [
      'Develop project concepts and proposals',
      'Conduct technical and feasibility assessments as required',
      'Prepare cost estimates and implementation schedules',
      'Undertake relevant social and environmental screening',
      'Complete documentary and technical requirements',
    ],
    participants: [
      'Project proponents',
      'Technical specialists',
      'Engineers and planners',
      'Social and environmental specialists',
      'Financial and procurement personnel',
      'Concerned implementing agencies',
    ],
    tools: [
      'Project concept notes',
      'Feasibility studies',
      'Technical studies',
      'Maps and GIS outputs',
      'Safeguards screening tools',
      'Cost and investment estimates',
    ],
    outputs: [
      'Project proposal or concept',
      'Technical documentation',
      'Indicative cost estimates',
      'Implementation schedule',
      'Completed preparatory requirements',
    ],
    questions: [
      'Is the project technically feasible?',
      'Are the necessary studies and documents available?',
      'Have relevant risks and safeguards been considered?',
      'What additional information is needed before implementation?',
    ],
  },

  {
    number: '04',
    shortTitle: 'Financing & Resources',
    title: 'Financing and Resource Mobilization',
    icon: Coins,
    description:
      'Mobilize appropriate resources by linking priority investments with government programs, LGUs, PRDP mechanisms, development partners, and other potential sources of support.',
    objective:
      'Expand the capacity to finance priority interventions identified through the commodity investment planning process.',
    methodologies: [
      'Identify appropriate funding institutions and programs',
      'Prepare funding proposals and supporting documents',
      'Coordinate with potential financing partners',
      'Identify counterpart and complementary resources',
      'Track financing commitments and funding gaps',
    ],
    participants: [
      'DA and LGU planning offices',
      'Budget and finance offices',
      'Funding institutions',
      'National government agencies',
      'Development partners',
      'Private sector and other stakeholders',
    ],
    tools: [
      'Investment pipeline',
      'Funding opportunity matrix',
      'Project proposals',
      'Financing plans',
      'Agency program references',
    ],
    outputs: [
      'Potential financing sources',
      'Funding commitments',
      'Resource mobilization plan',
      'Updated financing gap analysis',
    ],
    questions: [
      'Who can potentially finance or support the intervention?',
      'What requirements must be completed to access funding?',
      'What counterpart resources are required?',
      'Are there opportunities to leverage complementary investments?',
    ],
  },

  {
    number: '05',
    shortTitle: 'Implementation & Coordination',
    title: 'Implementation and Coordination',
    icon: Building2,
    description:
      'Carry out approved investments while coordinating implementing offices, proponents, beneficiaries, contractors, service providers, and other stakeholders.',
    objective:
      'Ensure that approved investments are implemented according to agreed scope, schedule, standards, and responsibilities.',
    methodologies: [
      'Confirm implementation arrangements',
      'Mobilize project teams and stakeholders',
      'Execute approved activities',
      'Coordinate technical, administrative, procurement, and safeguards requirements',
      'Resolve implementation issues through appropriate coordination mechanisms',
    ],
    participants: [
      'Implementing agencies',
      'LGUs',
      'Project proponents',
      'PMIUs and implementing units',
      'Beneficiaries and producer organizations',
      'Contractors and service providers',
      'Technical and safeguards personnel',
    ],
    tools: [
      'Approved project documents',
      'Work plans',
      'Implementation schedules',
      'Procurement plans',
      'Project monitoring tools',
      'Geotagged and GIS-based monitoring where applicable',
    ],
    outputs: [
      'Implemented project activities',
      'Physical accomplishments',
      'Financial accomplishments',
      'Implementation records',
      'Resolved implementation issues',
    ],
    questions: [
      'Are activities proceeding according to schedule?',
      'Are responsibilities clearly assigned?',
      'Are implementation standards being followed?',
      'What issues require management action?',
    ],
  },

  {
    number: '06',
    shortTitle: 'Monitoring & Reporting',
    title: 'Monitoring, Reporting and Performance Tracking',
    icon: BarChart3,
    description:
      'Track implementation progress, physical and financial accomplishments, outputs, issues, and emerging results to support management decisions.',
    objective:
      'Provide timely information on implementation performance and emerging issues.',
    methodologies: [
      'Monitor physical and financial accomplishment',
      'Compare actual progress with approved targets',
      'Document issues, risks, and corrective actions',
      'Conduct field validation where appropriate',
      'Prepare periodic accomplishment reports',
    ],
    participants: [
      'Monitoring and evaluation units',
      'Implementing agencies',
      'LGUs and PMIUs',
      'Project proponents',
      'Technical specialists',
      'Beneficiary organizations',
    ],
    tools: [
      'Accomplishment reports',
      'Monitoring forms',
      'Project dashboards',
      'GIS and geotagging tools',
      'Field validation records',
      'Performance indicators',
    ],
    outputs: [
      'Progress reports',
      'Physical and financial accomplishment data',
      'Issue and action logs',
      'Validated project status',
      'Performance information',
    ],
    questions: [
      'What has been accomplished?',
      'Is implementation on schedule?',
      'What factors are affecting performance?',
      'What corrective actions are required?',
    ],
  },

  {
    number: '07',
    shortTitle: 'Review & Adjustment',
    title: 'Review, Learning and Adjustment',
    icon: TrendingUp,
    description:
      'Use implementation experience, monitoring results, emerging needs, and stakeholder feedback to improve succeeding investment programming and planning cycles.',
    objective:
      'Create a feedback mechanism between implementation and succeeding planning decisions.',
    methodologies: [
      'Review implementation performance',
      'Document lessons and good practices',
      'Assess emerging needs and changing conditions',
      'Identify adjustments to investment priorities',
      'Feed implementation evidence into succeeding planning cycles',
    ],
    participants: [
      'DA planning and program offices',
      'LGUs',
      'Implementing units',
      'Monitoring and evaluation personnel',
      'Project proponents',
      'Value chain stakeholders',
    ],
    tools: [
      'Performance reports',
      'Evaluation findings',
      'Stakeholder feedback',
      'Updated spatial and risk information',
      'PCIP updating process',
    ],
    outputs: [
      'Implementation lessons',
      'Recommended adjustments',
      'Updated investment priorities',
      'Evidence for succeeding planning cycles',
    ],
    questions: [
      'What worked and what needs improvement?',
      'Did the investment address the identified constraint?',
      'Have conditions or priorities changed?',
      'What should be carried forward into the next planning cycle?',
    ],
  },
]

const implementationSections = [
  {
    title: 'From PCIP to Investment',
    icon: Target,
    content: [
      'The approved PCIP serves as the planning reference for translating priority commodity interventions into investment actions.',
      'Priority interventions should be reviewed in terms of readiness, responsible proponents, potential financing, and implementation requirements.',
      'The transition from planning to implementation should preserve the priorities and rationale established through the value chain and commodity investment planning process.',
    ],
  },

  {
    title: 'Investment Programming',
    icon: WalletCards,
    content: [
      'Investment programming connects identified interventions with available and potential government programs, budgets, financing mechanisms, and implementation windows.',
      'Not every intervention will necessarily be financed by a single institution. The planning process can therefore identify opportunities for complementary or leveraged investments.',
      'The investment pipeline should indicate priority, indicative cost, potential source of financing, responsible proponent, implementation period, and current status.',
    ],
  },

  {
    title: 'Project Preparation',
    icon: FileText,
    content: [
      'Projects should be adequately prepared before implementation and financing decisions are finalized.',
      'Depending on the type and scale of the intervention, preparation may involve technical studies, feasibility analysis, cost estimates, safeguards requirements, engineering documents, procurement requirements, or other supporting documentation.',
      'Spatial information and risk assessments can also support project siting and implementation decisions.',
    ],
  },

  {
    title: 'Implementation and Coordination',
    icon: Handshake,
    content: [
      'Implementation requires coordination among implementing agencies, LGUs, project proponents, beneficiaries, technical teams, and other stakeholders.',
      'The implementation arrangement should clearly establish responsibilities, timelines, deliverables, reporting mechanisms, and issue-resolution channels.',
      'Coordination should continue throughout implementation rather than being limited to project preparation.',
    ],
  },

  {
    title: 'Monitoring and Reporting',
    icon: Gauge,
    content: [
      'Implementation monitoring should track both physical and financial accomplishments against approved targets.',
      'Monitoring information should document emerging risks, delays, implementation constraints, and corrective actions.',
      'Where appropriate, GIS, geotagging, dashboards, field validation, and other digital tools can strengthen project monitoring and transparency.',
    ],
  },

  {
    title: 'Learning and Adjustment',
    icon: TrendingUp,
    content: [
      'Implementation results provide evidence for improving future investment decisions.',
      'Lessons, stakeholder feedback, changing conditions, and emerging risks can inform succeeding investment programming and PCIP updating.',
      'This creates a continuous connection between planning, investment, implementation, monitoring, and the next planning cycle.',
    ],
  },
]

function Implementation() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(0)

  const currentStep = implementationSteps[activeStep]
  const CurrentIcon = currentStep.icon

  const goToStep = (index) => {
    setActiveStep(index)
    setOpenSection(0)

    window.setTimeout(() => {
      const element = document.getElementById(
        'implementation-step-detail'
      )

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 50)
  }

  return (
    <div className="implementation-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="implementation-hero">
        <div className="implementation-hero-inner">

          <div className="implementation-breadcrumb">
            <Link to="/planning">Planning Framework</Link>
            <span>/</span>
            <span>Implementation</span>
          </div>

          <div className="implementation-stage-label">
            <span>STAGE 05</span>
            <span className="implementation-stage-line" />
            <span>IMPLEMENTATION</span>
          </div>

          <div className="implementation-hero-grid">

            <div className="implementation-hero-copy">
              <h1>
                Implementation &amp;
                <span> Investment Programming</span>
              </h1>

              <p>
                Translate approved commodity investment priorities into
                programmed, prepared, financed, implemented, and monitored
                investments.
              </p>

              <div className="implementation-hero-actions">

                <a
                  href="#implementation-process"
                  className="implementation-primary-btn"
                >
                  Explore Implementation Cycle
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/planning/pcip"
                  className="implementation-secondary-btn"
                >
                  <ArrowLeft size={16} />
                  Back to PCIP
                </Link>

              </div>
            </div>

            <div className="implementation-hero-panel">

              <div className="implementation-panel-label">
                PLANNING TO IMPLEMENTATION
              </div>

              <div className="implementation-flow">

                <div className="implementation-flow-item active">
                  <div className="implementation-flow-icon">
                    <ClipboardCheck size={18} />
                  </div>
                  <span>Approved PCIP</span>
                </div>

                <div className="implementation-flow-arrow">
                  <ArrowRight size={15} />
                </div>

                <div className="implementation-flow-item">
                  <div className="implementation-flow-icon">
                    <WalletCards size={18} />
                  </div>
                  <span>Programming</span>
                </div>

                <div className="implementation-flow-arrow">
                  <ArrowRight size={15} />
                </div>

                <div className="implementation-flow-item">
                  <div className="implementation-flow-icon">
                    <Wrench size={18} />
                  </div>
                  <span>Preparation</span>
                </div>

                <div className="implementation-flow-arrow">
                  <ArrowRight size={15} />
                </div>

                <div className="implementation-flow-item">
                  <div className="implementation-flow-icon">
                    <Building2 size={18} />
                  </div>
                  <span>Implementation</span>
                </div>

              </div>

              <div className="implementation-panel-footer">
                <CheckCircle2 size={16} />
                <span>Evidence feeds the next planning cycle</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="implementation-intro">
        <div className="implementation-container">

          <div className="implementation-intro-grid">

            <div>
              <div className="implementation-eyebrow">
                FROM PLAN TO ACTION
              </div>

              <h2>
                Turning investment priorities
                <span> into implementation.</span>
              </h2>
            </div>

            <div className="implementation-intro-copy">

              <p>
                Planning becomes meaningful when identified priorities can be
                translated into implementable investments. This stage connects
                the approved PCIP with investment programming, project
                preparation, financing, implementation, monitoring, and
                learning.
              </p>

              <p>
                The process is not a one-way transition. Implementation
                results, emerging needs, and lessons are fed back into
                succeeding planning and investment decisions.
              </p>

            </div>
          </div>

          <div className="implementation-highlight-grid">

            <div className="implementation-highlight-card">
              <div className="implementation-highlight-icon">
                <Layers3 size={19} />
              </div>

              <div>
                <strong>Plan</strong>
                <span>
                  Use approved priorities as the investment reference.
                </span>
              </div>
            </div>

            <div className="implementation-highlight-card">
              <div className="implementation-highlight-icon">
                <Coins size={19} />
              </div>

              <div>
                <strong>Program</strong>
                <span>
                  Connect interventions with financing opportunities.
                </span>
              </div>
            </div>

            <div className="implementation-highlight-card">
              <div className="implementation-highlight-icon">
                <Wrench size={19} />
              </div>

              <div>
                <strong>Prepare</strong>
                <span>
                  Complete the requirements for implementation.
                </span>
              </div>
            </div>

            <div className="implementation-highlight-card">
              <div className="implementation-highlight-icon">
                <BarChart3 size={19} />
              </div>

              <div>
                <strong>Learn</strong>
                <span>
                  Use implementation evidence to improve planning.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section
        className="implementation-process-section"
        id="implementation-process"
      >
        <div className="implementation-container">

          <div className="implementation-section-heading">

            <div>
              <div className="implementation-eyebrow">
                IMPLEMENTATION CYCLE
              </div>

              <h2>
                Seven connected steps
                <span> from priorities to results.</span>
              </h2>
            </div>

            <p>
              Select a step to explore its objective, methodology,
              participants, tools, expected outputs, and guide questions.
            </p>

          </div>

          <div className="implementation-process-layout">

            <aside className="implementation-step-list">

              {implementationSteps.map((step, index) => {
                const StepIcon = step.icon
                const isActive = index === activeStep

                return (
                  <button
                    key={step.number}
                    type="button"
                    className={`implementation-step-tab ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() => goToStep(index)}
                  >
                    <span className="implementation-step-number">
                      {step.number}
                    </span>

                    <span className="implementation-step-tab-icon">
                      <StepIcon size={17} />
                    </span>

                    <span className="implementation-step-tab-text">
                      <strong>{step.shortTitle}</strong>

                      <small>
                        {isActive ? 'Current step' : 'View step'}
                      </small>
                    </span>

                    <ArrowRight
                      className="implementation-step-tab-arrow"
                      size={15}
                    />
                  </button>
                )
              })}

            </aside>

            <div
              className="implementation-step-detail"
              id="implementation-step-detail"
            >

              <div className="implementation-detail-top">

                <div className="implementation-detail-icon">
                  <CurrentIcon size={27} />
                </div>

                <div>

                  <div className="implementation-detail-number">
                    STEP {currentStep.number}
                  </div>

                  <h3>{currentStep.title}</h3>

                  <p>{currentStep.description}</p>

                </div>

              </div>

              <div className="implementation-meta-grid">

                <div className="implementation-meta-card">

                  <div className="implementation-meta-icon">
                    <Target size={17} />
                  </div>

                  <div>
                    <span>Objective</span>
                    <p>{currentStep.objective}</p>
                  </div>

                </div>

                <div className="implementation-meta-card">

                  <div className="implementation-meta-icon">
                    <Workflow size={17} />
                  </div>

                  <div>
                    <span>Methodologies</span>

                    <ul>
                      {currentStep.methodologies.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="implementation-meta-card">

                  <div className="implementation-meta-icon">
                    <Users size={17} />
                  </div>

                  <div>
                    <span>Participants</span>

                    <ul>
                      {currentStep.participants.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="implementation-meta-card">

                  <div className="implementation-meta-icon">
                    <Wrench size={17} />
                  </div>

                  <div>
                    <span>Tools &amp; References</span>

                    <ul>
                      {currentStep.tools.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              <div className="implementation-output-question-grid">

                <div className="implementation-output-card">

                  <div className="implementation-card-heading">

                    <div className="implementation-card-heading-icon">
                      <ClipboardCheck size={17} />
                    </div>

                    <div>
                      <span>EXPECTED OUTPUTS</span>
                      <h4>What this step should produce</h4>
                    </div>

                  </div>

                  <ul>
                    {currentStep.outputs.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="implementation-question-card">

                  <div className="implementation-card-heading">

                    <div className="implementation-card-heading-icon">
                      <MessageSquare size={17} />
                    </div>

                    <div>
                      <span>GUIDE QUESTIONS</span>
                      <h4>Questions for implementation</h4>
                    </div>

                  </div>

                  <ul>
                    {currentStep.questions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                </div>

              </div>

              <div className="implementation-detail-navigation">

                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => goToStep(activeStep - 1)}
                  className="implementation-nav-btn"
                >
                  <ArrowLeft size={16} />
                  Previous Step
                </button>

                <div className="implementation-progress">

                  <div className="implementation-progress-track">
                    <div
                      className="implementation-progress-fill"
                      style={{
                        width: `${
                          ((activeStep + 1) /
                            implementationSteps.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <span>
                    {activeStep + 1} of {implementationSteps.length}
                  </span>

                </div>

                <button
                  type="button"
                  disabled={
                    activeStep === implementationSteps.length - 1
                  }
                  onClick={() => goToStep(activeStep + 1)}
                  className="implementation-nav-btn"
                >
                  Next Step
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED CONTENT
      ====================================================== */}
      <section className="implementation-detail-section">
        <div className="implementation-container">

          <div className="implementation-section-heading compact">

            <div>
              <div className="implementation-eyebrow">
                IMPLEMENTATION GUIDANCE
              </div>

              <h2>
                Key considerations
                <span> across the cycle.</span>
              </h2>
            </div>

            <p>
              The following sections summarize the main considerations that
              connect planning decisions with investment implementation.
            </p>

          </div>

          <div className="implementation-accordion">

            {implementationSections.map((section, index) => {
              const SectionIcon = section.icon
              const isOpen = openSection === index

              return (
                <div
                  key={section.title}
                  className={`implementation-accordion-item ${
                    isOpen ? 'open' : ''
                  }`}
                >

                  <button
                    type="button"
                    className="implementation-accordion-trigger"
                    onClick={() =>
                      setOpenSection(isOpen ? -1 : index)
                    }
                  >

                    <div className="implementation-accordion-left">

                      <div className="implementation-accordion-icon">
                        <SectionIcon size={18} />
                      </div>

                      <div>
                        <span>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <strong>{section.title}</strong>
                      </div>

                    </div>

                    <ChevronDown
                      size={18}
                      className="implementation-chevron"
                    />

                  </button>

                  {isOpen && (
                    <div className="implementation-accordion-content">
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          INVESTMENT PIPELINE
      ====================================================== */}
      <section className="implementation-pipeline-section">
        <div className="implementation-container">

          <div className="implementation-pipeline-card">

            <div className="implementation-pipeline-header">

              <div>

                <div className="implementation-eyebrow">
                  INVESTMENT PIPELINE
                </div>

                <h2>
                  Keep the connection visible
                  <span> from planning to implementation.</span>
                </h2>

              </div>

              <div className="implementation-pipeline-icon">
                <Network size={26} />
              </div>

            </div>

            <div className="implementation-pipeline">

              <div className="implementation-pipeline-node">
                <div className="implementation-pipeline-node-icon">
                  <ClipboardList size={18} />
                </div>

                <strong>PCIP Priority</strong>
                <span>What needs to be addressed?</span>
              </div>

              <div className="implementation-pipeline-connector">
                <ArrowRight size={17} />
              </div>

              <div className="implementation-pipeline-node">
                <div className="implementation-pipeline-node-icon">
                  <ListChecks size={18} />
                </div>

                <strong>Investment Action</strong>
                <span>What intervention is needed?</span>
              </div>

              <div className="implementation-pipeline-connector">
                <ArrowRight size={17} />
              </div>

              <div className="implementation-pipeline-node">
                <div className="implementation-pipeline-node-icon">
                  <WalletCards size={18} />
                </div>

                <strong>Funding</strong>
                <span>Who can support it?</span>
              </div>

              <div className="implementation-pipeline-connector">
                <ArrowRight size={17} />
              </div>

              <div className="implementation-pipeline-node">
                <div className="implementation-pipeline-node-icon">
                  <Building2 size={18} />
                </div>

                <strong>Implementation</strong>
                <span>How will it be delivered?</span>
              </div>

              <div className="implementation-pipeline-connector">
                <ArrowRight size={17} />
              </div>

              <div className="implementation-pipeline-node">
                <div className="implementation-pipeline-node-icon">
                  <BarChart3 size={18} />
                </div>

                <strong>Results</strong>
                <span>What was achieved?</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLANNING CONNECTION
      ====================================================== */}
      <section className="implementation-connection-section">
        <div className="implementation-container">

          <div className="implementation-connection-heading">

            <div className="implementation-eyebrow">
              CONTINUOUS PLANNING CYCLE
            </div>

            <h2>
              Implementation informs
              <span> the next planning cycle.</span>
            </h2>

            <p>
              Investment planning does not end when a project is implemented.
              Results, lessons, emerging needs, and changing conditions become
              inputs for institutionalization, monitoring, evaluation, and
              succeeding planning activities.
            </p>

          </div>

          <div className="implementation-cycle-cards">

            {/* PREVIOUS */}
            <Link
              to="/planning/pcip"
              className="implementation-cycle-card"
            >
              <div className="implementation-cycle-card-top">
                <span>PREVIOUS</span>
                <ArrowLeft size={16} />
              </div>

              <div className="implementation-cycle-icon">
                <ClipboardList size={21} />
              </div>

              <h3>
                Provincial Commodity Investment Plan
              </h3>

              <p>
                Review the planning process that establishes priority
                investments.
              </p>
            </Link>

            {/* CURRENT */}
            <div className="implementation-cycle-center">

              <div className="implementation-cycle-center-icon">
                <Workflow size={24} />
              </div>

              <span>STAGE 05</span>
              <strong>Implementation</strong>
              <small>
                Plan → Program → Implement → Learn
              </small>

            </div>

            {/* NEXT */}
            <Link
              to="/planning/institutionalization"
              className="implementation-cycle-card next"
            >
              <div className="implementation-cycle-card-top">
                <span>NEXT STAGE</span>
                <ArrowRight size={16} />
              </div>

              <div className="implementation-cycle-icon">
                <Building2 size={21} />
              </div>

              <h3>Institutionalization</h3>

              <p>
                Embed the planning and investment process into regular
                institutional systems and local governance structures.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT STAGE
      ====================================================== */}
      <section className="implementation-next-section">
        <div className="implementation-container">

          <div className="implementation-next-card">

            <div className="implementation-next-left">

              <div className="implementation-next-number">
                06
              </div>

              <div>

                <span>NEXT STAGE</span>

                <h2>
                  Institutionalization
                </h2>

                <p>
                  Embed the planning and investment process into regular
                  institutional systems, planning structures, and decision
                  making.
                </p>

              </div>

            </div>

            <Link
              to="/planning/institutionalization"
              className="implementation-next-btn"
            >
              Continue to Institutionalization
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER NAVIGATION
      ====================================================== */}
      <section className="implementation-footer-nav">
        <div className="implementation-container">

          {/* PREVIOUS STAGE */}
          <Link
            to="/planning/pcip"
            className="implementation-footer-link"
          >
            <ArrowLeft size={16} />

            <div>
              <span>PREVIOUS STAGE</span>
              <strong>
                Provincial Commodity Investment Plan
              </strong>
            </div>
          </Link>

          {/* PLANNING FRAMEWORK */}
          <Link
            to="/planning"
            className="implementation-footer-center"
          >
            <span>PLANNING FRAMEWORK</span>
            <strong>All Stages</strong>
          </Link>

          {/* NEXT STAGE */}
          <Link
            to="/planning/institutionalization"
            className="implementation-footer-link right"
          >
            <div>
              <span>NEXT STAGE</span>
              <strong>Institutionalization</strong>
            </div>

            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Implementation
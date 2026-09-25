import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Database,
  FileCheck2,
  FileText,
  Gauge,
  Layers3,
  MessageSquare,
  Network,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'

import './OperationalMonitoring.css'

function OperationalMonitoring() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(null)

  const steps = [
    {
      number: '01',
      shortTitle: 'INDICATORS',
      title: 'Define Monitoring Indicators',
      icon: Target,
      description:
        'Establish clear indicators that show whether priority interventions and investment actions are progressing according to the approved planning framework.',
      objective:
        'Define measurable indicators that can consistently track implementation progress and results.',
      methodologies: [
        'Review approved PCIP priorities and investment actions',
        'Identify physical, financial, and implementation indicators',
        'Define indicator descriptions and units of measurement',
        'Assign responsible offices or personnel',
        'Establish reporting frequency',
      ],
      participants: [
        'DA planning and monitoring units',
        'LGU planning and implementing offices',
        'Program and project implementers',
        'PPMIU or equivalent monitoring teams',
      ],
      tools: [
        'Monitoring matrix',
        'Indicator reference sheet',
        'PCIP investment matrix',
        'Project implementation schedules',
      ],
      outputs: [
        'Monitoring indicator matrix',
        'Defined units of measurement',
        'Assigned monitoring responsibilities',
        'Reporting schedule',
      ],
      questions: [
        'What needs to be monitored?',
        'How will progress be measured?',
        'Who is responsible for providing the data?',
        'How often should the indicator be updated?',
      ],
    },

    {
      number: '02',
      shortTitle: 'TARGETS',
      title: 'Establish Baselines and Targets',
      icon: Gauge,
      description:
        'Set the reference condition and expected level of accomplishment against which implementation performance can be assessed.',
      objective:
        'Create a consistent basis for determining progress by establishing baseline values and realistic targets.',
      methodologies: [
        'Review available baseline information',
        'Document the starting condition',
        'Set annual or periodic targets',
        'Check target consistency with approved plans',
        'Validate targets with responsible implementers',
      ],
      participants: [
        'Planning and monitoring personnel',
        'Program managers',
        'Project implementers',
        'LGU and provincial planning teams',
      ],
      tools: [
        'Baseline data sheets',
        'Target-setting matrix',
        'PCIP investment matrix',
        'Annual work and financial plans',
      ],
      outputs: [
        'Baseline values',
        'Periodic accomplishment targets',
        'Target validation notes',
        'Updated monitoring matrix',
      ],
      questions: [
        'What is the starting condition?',
        'What level of accomplishment is expected?',
        'Are the targets measurable and time-bound?',
        'Are the targets consistent with available resources?',
      ],
    },

    {
      number: '03',
      shortTitle: 'DATA',
      title: 'Collect and Validate Data',
      icon: Database,
      description:
        'Gather implementation data from responsible offices and project sites, then validate the information before it is used for reporting and decision-making.',
      objective:
        'Ensure that monitoring information is timely, complete, consistent, and sufficiently supported by records or field evidence.',
      methodologies: [
        'Collect periodic accomplishment reports',
        'Compile physical and financial information',
        'Conduct document review and validation',
        'Undertake field verification when necessary',
        'Record data sources and validation notes',
      ],
      participants: [
        'Implementing offices',
        'Monitoring and evaluation personnel',
        'LGU focal persons',
        'Project and field personnel',
      ],
      tools: [
        'Monitoring forms',
        'Accomplishment reports',
        'Field validation checklists',
        'Geotagged photographs',
        'MIS or digital monitoring systems',
      ],
      outputs: [
        'Validated monitoring data',
        'Updated project records',
        'Data validation notes',
        'Supporting documentation',
      ],
      questions: [
        'Where did the data come from?',
        'Has the reported accomplishment been validated?',
        'Are there missing or inconsistent values?',
        'What supporting documents are available?',
      ],
    },

    {
      number: '04',
      shortTitle: 'TRACKING',
      title: 'Track Physical and Financial Progress',
      icon: BarChart3,
      description:
        'Compare actual implementation performance with approved targets, schedules, and resource requirements to determine current project status.',
      objective:
        'Provide a clear picture of implementation performance and identify variances that require management attention.',
      methodologies: [
        'Compare planned versus actual accomplishment',
        'Track physical progress',
        'Track financial utilization',
        'Review implementation schedules',
        'Document significant variances',
      ],
      participants: [
        'Project implementers',
        'Planning and monitoring units',
        'Financial and budget personnel',
        'LGU and provincial management teams',
      ],
      tools: [
        'Progress tracking matrix',
        'S-curves or implementation schedules',
        'Physical and financial accomplishment reports',
        'Monitoring dashboards',
      ],
      outputs: [
        'Updated progress status',
        'Physical accomplishment report',
        'Financial utilization status',
        'Variance analysis',
      ],
      questions: [
        'What was planned?',
        'What has actually been accomplished?',
        'Is implementation on schedule?',
        'Are physical and financial accomplishments aligned?',
      ],
    },

    {
      number: '05',
      shortTitle: 'ISSUES',
      title: 'Identify Issues and Bottlenecks',
      icon: Search,
      description:
        'Systematically identify implementation constraints, delays, coordination gaps, resource limitations, and other issues affecting accomplishment.',
      objective:
        'Surface implementation problems early enough for responsible offices and partners to respond.',
      methodologies: [
        'Review reported delays and variances',
        'Analyze recurring implementation issues',
        'Conduct coordination meetings',
        'Document bottlenecks and their causes',
        'Assign issues to responsible offices',
      ],
      participants: [
        'Implementing units',
        'Planning and monitoring teams',
        'Provincial and local government representatives',
        'Relevant partner agencies',
      ],
      tools: [
        'Issue and action tracker',
        'Problem analysis matrix',
        'Coordination meeting records',
        'Field monitoring reports',
      ],
      outputs: [
        'Issue and bottleneck registry',
        'Root-cause observations',
        'Assigned responsible offices',
        'Priority action items',
      ],
      questions: [
        'What is causing the delay or variance?',
        'Is the issue operational, financial, technical, or institutional?',
        'Who needs to act?',
        'How urgent is the issue?',
      ],
    },

    {
      number: '06',
      shortTitle: 'ACTION',
      title: 'Apply Corrective Actions',
      icon: Wrench,
      description:
        'Translate monitoring findings into practical actions that address identified constraints and improve implementation performance.',
      objective:
        'Ensure that monitoring does not stop at reporting but leads to documented management and implementation responses.',
      methodologies: [
        'Develop corrective action plans',
        'Assign responsible persons or offices',
        'Set action deadlines',
        'Coordinate technical or management support',
        'Track completion of agreed actions',
      ],
      participants: [
        'Project and program managers',
        'Implementing offices',
        'Planning and monitoring personnel',
        'Technical and partner agencies',
      ],
      tools: [
        'Corrective action plan',
        'Issue-action tracker',
        'Technical assistance records',
        'Management decision logs',
      ],
      outputs: [
        'Corrective action plan',
        'Assigned action owners',
        'Action timelines',
        'Updated issue status',
      ],
      questions: [
        'What action is required?',
        'Who will implement the action?',
        'When should it be completed?',
        'How will completion be verified?',
      ],
    },

    {
      number: '07',
      shortTitle: 'FEEDBACK',
      title: 'Review Results and Feed Back into Planning',
      icon: RefreshCw,
      description:
        'Use monitoring results, implementation experience, and documented lessons to improve succeeding programming, updating, and planning decisions.',
      objective:
        'Create a continuous feedback loop between implementation performance and succeeding planning cycles.',
      methodologies: [
        'Conduct periodic performance reviews',
        'Summarize accomplishments and issues',
        'Document lessons and good practices',
        'Identify planning or programming adjustments',
        'Feed validated findings into succeeding planning cycles',
      ],
      participants: [
        'DA planning and monitoring units',
        'LGU planning teams',
        'Program and project implementers',
        'Convergence and development partners',
      ],
      tools: [
        'Performance review matrix',
        'Lessons learned log',
        'Monitoring reports',
        'Planning update templates',
      ],
      outputs: [
        'Performance review findings',
        'Lessons learned',
        'Recommended planning adjustments',
        'Inputs to succeeding planning cycles',
      ],
      questions: [
        'What worked and what did not?',
        'What implementation lessons were generated?',
        'What should be adjusted in the next cycle?',
        'How should monitoring results inform planning?',
      ],
    },
  ]

  const sections = [
    {
      title: 'What Operational Monitoring Means',
      icon: Gauge,
      content: [
        'Operational monitoring is the systematic tracking of implementation progress against approved plans, targets, schedules, and resources.',
        'It provides timely information on whether planned activities and investments are moving according to schedule and whether emerging issues require action.',
        'For PCIP-related investments, monitoring can include the status and utilization of the commodity investment matrix, including updates to investment entries and non-PRDP funded projects referenced to the approved PCIP.',
      ],
    },
    {
      title: 'Monitoring Indicators and Targets',
      icon: Target,
      content: [
        'A useful monitoring system begins with indicators that are clearly defined and linked to the planning objectives.',
        'Indicators may describe physical accomplishment, financial utilization, implementation milestones, outputs, or other agreed measures of progress.',
        'Baselines establish the reference condition while targets provide the expected level of accomplishment for a defined period.',
      ],
    },
    {
      title: 'Data Collection and Validation',
      icon: Database,
      content: [
        'Monitoring information should come from identified responsible offices and documented sources.',
        'Reported accomplishments may be checked against supporting documents, implementation records, field observations, photographs, or other appropriate evidence.',
        'Validation helps reduce inconsistencies and provides a stronger basis for reporting and management decisions.',
      ],
    },
    {
      title: 'Progress Reporting and Issue Tracking',
      icon: ClipboardCheck,
      content: [
        'Monitoring results should be consolidated into periodic reports that clearly communicate current status, accomplishments, variances, and implementation concerns.',
        'Issues and bottlenecks should be documented rather than treated as isolated observations. A structured issue tracker can identify the responsible office, required action, timeline, and current status.',
        'PRDP monitoring materials emphasize status updating, report generation, and feedback mechanisms as part of monitoring functions.',
      ],
    },
    {
      title: 'Feedback and Continuous Improvement',
      icon: TrendingUp,
      content: [
        'Monitoring becomes more useful when findings are brought back into management and planning discussions.',
        'Performance reviews can identify recurring constraints, successful approaches, resource requirements, and potential adjustments to succeeding implementation or planning cycles.',
        'This creates a feedback loop in which implementation experience contributes to improved planning and programming.',
      ],
    },
  ]

  const monitoringFlow = [
    {
      number: '01',
      title: 'PLAN',
      text: 'Approved priorities and implementation plans',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'SET TARGETS',
      text: 'Indicators, baselines, and targets',
      icon: Target,
    },
    {
      number: '03',
      title: 'TRACK',
      text: 'Physical, financial, and milestone progress',
      icon: BarChart3,
    },
    {
      number: '04',
      title: 'RESPOND',
      text: 'Issues, bottlenecks, and corrective actions',
      icon: Wrench,
    },
    {
      number: '05',
      title: 'LEARN',
      text: 'Review, feedback, and planning adjustments',
      icon: RefreshCw,
    },
  ]

  const pipeline = [
    {
      title: 'Indicators',
      text: 'What should be measured?',
      icon: Target,
    },
    {
      title: 'Data',
      text: 'What evidence is available?',
      icon: Database,
    },
    {
      title: 'Status',
      text: 'What is the current progress?',
      icon: Gauge,
    },
    {
      title: 'Issues',
      text: 'What is affecting implementation?',
      icon: Search,
    },
    {
      title: 'Action',
      text: 'What response is required?',
      icon: Wrench,
    },
    {
      title: 'Feedback',
      text: 'What should improve next?',
      icon: RefreshCw,
    },
  ]

  return (
    <div className="operational-monitoring-page">

      {/* ================================
          HERO
      ================================= */}
      <section className="operational-monitoring-hero">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-breadcrumb">
            <Link to="/planning">Planning Framework</Link>
            <span>/</span>
            <span>Stage 08</span>
          </div>

          <div className="operational-monitoring-hero-grid">

            <div className="operational-monitoring-hero-copy">

              <div className="operational-monitoring-stage-label">
                STAGE 08
                <span>PERFORMANCE TRACKING</span>
              </div>

              <h1>
                Operational
                <span>Monitoring</span>
              </h1>

              <p>
                Track implementation progress, validate performance data,
                identify issues, support corrective action, and feed
                implementation lessons back into the planning cycle.
              </p>

              <div className="operational-monitoring-hero-actions">
                <a href="#monitoring-process">
                  <span>Explore Monitoring Process</span>
                  <ArrowRight size={16} />
                </a>

                <Link to="/planning">
                  <ArrowLeft size={16} />
                  <span>Planning Framework</span>
                </Link>
              </div>

            </div>

            <div className="operational-monitoring-orbit">

              <div className="operational-monitoring-orbit-ring ring-one" />
              <div className="operational-monitoring-orbit-ring ring-two" />

              <div className="operational-monitoring-orbit-center">
                <Gauge size={28} />
                <span>MONITORING</span>
                <strong>LOOP</strong>
              </div>

              <div className="operational-monitoring-orbit-node node-one">
                <Target size={15} />
                <span>Targets</span>
              </div>

              <div className="operational-monitoring-orbit-node node-two">
                <Database size={15} />
                <span>Data</span>
              </div>

              <div className="operational-monitoring-orbit-node node-three">
                <BarChart3 size={15} />
                <span>Progress</span>
              </div>

              <div className="operational-monitoring-orbit-node node-four">
                <Wrench size={15} />
                <span>Action</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================
          INTRO
      ================================= */}
      <section className="operational-monitoring-intro">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-section-heading">
            <span>WHY IT MATTERS</span>

            <h2>
              Monitoring turns implementation data
              <br />
              into management information.
            </h2>

            <p>
              Once investment priorities have been mainstreamed into
              regular programs and implementation systems, they need to
              be continuously tracked. Operational monitoring provides
              the information needed to determine progress, surface
              implementation constraints, and support timely action.
            </p>
          </div>

          <div className="operational-monitoring-highlight-grid">

            <div className="operational-monitoring-highlight-card">
              <div className="operational-monitoring-highlight-icon">
                <Target size={20} />
              </div>
              <strong>Measure</strong>
              <span>
                Define indicators, baselines, and targets.
              </span>
            </div>

            <div className="operational-monitoring-highlight-card">
              <div className="operational-monitoring-highlight-icon">
                <Database size={20} />
              </div>
              <strong>Verify</strong>
              <span>
                Collect and validate implementation data.
              </span>
            </div>

            <div className="operational-monitoring-highlight-card">
              <div className="operational-monitoring-highlight-icon">
                <Wrench size={20} />
              </div>
              <strong>Respond</strong>
              <span>
                Address issues and implementation bottlenecks.
              </span>
            </div>

            <div className="operational-monitoring-highlight-card">
              <div className="operational-monitoring-highlight-icon">
                <RefreshCw size={20} />
              </div>
              <strong>Improve</strong>
              <span>
                Feed lessons into succeeding planning cycles.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================================
          PROCESS
      ================================= */}
      <section
        className="operational-monitoring-process"
        id="monitoring-process"
      >
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-section-heading centered">
            <span>THE MONITORING PROCESS</span>

            <h2>
              Seven steps from tracking
              <br />
              to continuous improvement.
            </h2>

            <p>
              The monitoring process connects approved plans with
              measurable performance, documented issues, corrective
              action, and planning feedback.
            </p>
          </div>

          <div className="operational-monitoring-step-tabs">

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <button
                  key={step.number}
                  type="button"
                  className={
                    activeStep === index
                      ? 'active'
                      : ''
                  }
                  onClick={() => setActiveStep(index)}
                >
                  <span className="operational-monitoring-step-number">
                    {step.number}
                  </span>

                  <Icon size={17} />

                  <span>
                    {step.shortTitle}
                  </span>
                </button>
              )
            })}

          </div>

          <div className="operational-monitoring-step-detail">

            <div className="operational-monitoring-step-main">

              <div className="operational-monitoring-step-heading">

                <div className="operational-monitoring-step-icon">
                  {(() => {
                    const Icon = steps[activeStep].icon
                    return <Icon size={25} />
                  })()}
                </div>

                <div>
                  <span>
                    STEP {steps[activeStep].number}
                  </span>

                  <h3>
                    {steps[activeStep].title}
                  </h3>
                </div>

              </div>

              <p className="operational-monitoring-step-description">
                {steps[activeStep].description}
              </p>

              <div className="operational-monitoring-step-progress">
                <div>
                  <span>
                    PROCESS PROGRESS
                  </span>

                  <strong>
                    {activeStep + 1} of {steps.length}
                  </strong>
                </div>

                <div className="operational-monitoring-progress-track">
                  <span
                    style={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

            </div>

            <div className="operational-monitoring-meta-grid">

              <div className="operational-monitoring-meta-card">
                <span>OBJECTIVE</span>
                <p>
                  {steps[activeStep].objective}
                </p>
              </div>

              <div className="operational-monitoring-meta-card">
                <span>METHODOLOGIES</span>

                <ul>
                  {steps[activeStep].methodologies.map(
                    (item, index) => (
                      <li key={index}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="operational-monitoring-meta-card">
                <span>PARTICIPANTS</span>

                <ul>
                  {steps[activeStep].participants.map(
                    (item, index) => (
                      <li key={index}>
                        <Users size={14} />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="operational-monitoring-meta-card">
                <span>TOOLS & REFERENCES</span>

                <ul>
                  {steps[activeStep].tools.map(
                    (item, index) => (
                      <li key={index}>
                        <FileText size={14} />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

            </div>

            <div className="operational-monitoring-output-grid">

              <div className="operational-monitoring-output-card">

                <div className="operational-monitoring-output-header">
                  <FileCheck2 size={18} />
                  <span>EXPECTED OUTPUTS</span>
                </div>

                <ul>
                  {steps[activeStep].outputs.map(
                    (item, index) => (
                      <li key={index}>
                        <CheckCircle2 size={14} />
                        {item}
                      </li>
                    )
                  )}
                </ul>

              </div>

              <div className="operational-monitoring-question-card">

                <div className="operational-monitoring-output-header">
                  <MessageSquare size={18} />
                  <span>GUIDE QUESTIONS</span>
                </div>

                <ul>
                  {steps[activeStep].questions.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{index + 1}</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>

              </div>

            </div>

          </div>

          <div className="operational-monitoring-step-navigation">

            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.max(0, prev - 1)
                )
              }
            >
              <ArrowLeft size={16} />
              Previous Step
            </button>

            <div className="operational-monitoring-step-dots">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  className={
                    activeStep === index ? 'active' : ''
                  }
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(steps.length - 1, prev + 1)
                )
              }
            >
              Next Step
              <ArrowRight size={16} />
            </button>

          </div>

        </div>
      </section>

      {/* ================================
          MONITORING LOOP
      ================================= */}
      <section className="operational-monitoring-loop">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-section-heading">
            <span>CONTINUOUS MONITORING LOOP</span>

            <h2>
              From approved plans
              <br />
              to implementation feedback.
            </h2>

            <p>
              Monitoring should function as a continuous management
              cycle rather than a one-time reporting activity.
            </p>
          </div>

          <div className="operational-monitoring-flow">

            {monitoringFlow.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  className="operational-monitoring-flow-item"
                  key={item.number}
                >
                  <div className="operational-monitoring-flow-card">

                    <div className="operational-monitoring-flow-icon">
                      <Icon size={20} />
                    </div>

                    <span>{item.number}</span>

                    <strong>{item.title}</strong>

                    <p>{item.text}</p>

                  </div>

                  {index < monitoringFlow.length - 1 && (
                    <ArrowRight
                      className="operational-monitoring-flow-arrow"
                      size={18}
                    />
                  )}
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ================================
          FRAMEWORK ACCORDION
      ================================= */}
      <section className="operational-monitoring-framework">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-section-heading centered">
            <span>MONITORING FRAMEWORK</span>

            <h2>
              Build a monitoring system
              <br />
              around evidence and action.
            </h2>

            <p>
              The following areas provide the supporting framework for
              operational monitoring.
            </p>
          </div>

          <div className="operational-monitoring-accordion">

            {sections.map((section, index) => {
              const Icon = section.icon
              const isOpen = openSection === index

              return (
                <div
                  className={
                    isOpen
                      ? 'operational-monitoring-accordion-item open'
                      : 'operational-monitoring-accordion-item'
                  }
                  key={section.title}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection(
                        isOpen ? null : index
                      )
                    }
                  >
                    <div className="operational-monitoring-accordion-title">

                      <div className="operational-monitoring-accordion-icon">
                        <Icon size={18} />
                      </div>

                      <span>{section.title}</span>

                    </div>

                    <ChevronDown
                      size={18}
                      className="operational-monitoring-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="operational-monitoring-accordion-content">

                      {section.content.map(
                        (paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>
                            {paragraph}
                          </p>
                        )
                      )}

                    </div>
                  )}

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ================================
          MONITORING PIPELINE
      ================================= */}
      <section className="operational-monitoring-pipeline">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-section-heading">
            <span>OPERATIONAL MONITORING PIPELINE</span>

            <h2>
              A simple information flow
              <br />
              for implementation management.
            </h2>

            <p>
              Each monitoring function produces information that feeds
              the next management decision.
            </p>
          </div>

          <div className="operational-monitoring-pipeline-grid">

            {pipeline.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  className="operational-monitoring-pipeline-card"
                  key={item.title}
                >

                  <div className="operational-monitoring-pipeline-top">
                    <span>0{index + 1}</span>

                    <div className="operational-monitoring-pipeline-icon">
                      <Icon size={18} />
                    </div>
                  </div>

                  <strong>{item.title}</strong>

                  <p>{item.text}</p>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ================================
          CLOSING
      ================================= */}
      <section className="operational-monitoring-closing">
        <div className="operational-monitoring-container">

          <div className="operational-monitoring-closing-box">

            <div className="operational-monitoring-closing-icon">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <span>STAGE 08 COMPLETE</span>

              <h2>
                From Monitoring to Evaluation
              </h2>

              <p>
                Once implementation performance has been systematically
                tracked and documented, the next stage examines the
                broader results, outcomes, lessons, and effectiveness
                of the planning and investment process.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================================
          FOOTER NAVIGATION
      ================================= */}
      <section className="operational-monitoring-footer-nav">
        <div className="operational-monitoring-container">

          <Link
            to="/planning/mainstreaming"
            className="operational-monitoring-footer-link"
          >
            <ArrowLeft size={16} />

            <div>
              <span>PREVIOUS STAGE</span>
              <strong>Mainstreaming</strong>
            </div>
          </Link>

          <Link
            to="/planning"
            className="operational-monitoring-footer-center"
          >
            <span>PLANNING FRAMEWORK</span>
            <strong>All Stages</strong>
          </Link>

          <Link
            to="/planning/evaluation"
            className="operational-monitoring-footer-link right"
          >
            <div>
              <span>NEXT STAGE</span>
              <strong>Evaluation</strong>
            </div>

            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

    </div>
  )
}

export default OperationalMonitoring
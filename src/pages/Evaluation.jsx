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
  FileCheck2,
  FileText,
  Gauge,
  Lightbulb,
  Network,
  Search,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'

import './Evaluation.css'

const steps = [
  {
    number: '01',
    label: 'PURPOSE & SCOPE',
    title: 'Define Evaluation Purpose and Scope',
    description:
      'Establish what the evaluation will examine, why it is being conducted, and which program, project, planning intervention, period, locations, and stakeholders are covered.',
    purpose:
      'Provide a clear evaluation direction and define the boundaries of the assessment.',
    activities: [
      'Define the purpose of the evaluation',
      'Identify the program, project, or planning intervention to be assessed',
      'Define the evaluation period and geographic coverage',
      'Identify intended users of the evaluation findings',
      'Determine the appropriate evaluation approach and level of assessment',
    ],
    outputs: [
      'Evaluation purpose statement',
      'Defined scope and coverage',
      'Evaluation plan or terms of reference',
    ],
    questions: [
      'What is being evaluated?',
      'Why is the evaluation being conducted?',
      'Who will use the findings?',
      'What period and areas will be covered?',
    ],
    icon: Target,
  },

  {
    number: '02',
    label: 'QUESTIONS & CRITERIA',
    title: 'Establish Evaluation Questions and Criteria',
    description:
      'Translate the evaluation purpose into clear questions and assessment criteria that will guide evidence collection and analysis.',
    purpose:
      'Create a structured basis for examining implementation, performance, results, and outcomes.',
    activities: [
      'Define key evaluation questions',
      'Identify relevant indicators and evidence requirements',
      'Establish assessment criteria',
      'Clarify expected results and outcomes',
      'Develop an evaluation matrix where appropriate',
    ],
    outputs: [
      'Evaluation questions',
      'Assessment criteria',
      'Evaluation matrix or analytical framework',
    ],
    questions: [
      'What questions must the evaluation answer?',
      'What evidence is needed?',
      'What criteria will be used to assess performance?',
      'What results or outcomes should be examined?',
    ],
    icon: ClipboardCheck,
  },

  {
    number: '03',
    label: 'EVIDENCE REVIEW',
    title: 'Review Monitoring and Baseline Evidence',
    description:
      'Compile and examine monitoring records, baseline information, targets, reports, datasets, field observations, and other available evidence before drawing conclusions.',
    purpose:
      'Establish an evidence base for assessing changes, implementation progress, results, and outcomes.',
    activities: [
      'Review baseline information',
      'Compile monitoring and progress reports',
      'Review physical and financial accomplishment data',
      'Validate relevant datasets and documentation',
      'Identify information gaps and data limitations',
    ],
    outputs: [
      'Consolidated evaluation evidence',
      'Evidence and data inventory',
      'Identified information gaps',
    ],
    questions: [
      'What evidence is available?',
      'Are baseline and monitoring data sufficient?',
      'Are reported accomplishments supported by evidence?',
      'What information gaps need to be addressed?',
    ],
    icon: Search,
  },

  {
    number: '04',
    label: 'IMPLEMENTATION & RESULTS',
    title: 'Assess Implementation and Results',
    description:
      'Examine how interventions were implemented and compare actual accomplishments with plans, targets, intended outputs, and expected results.',
    purpose:
      'Determine the extent to which planned activities and outputs were delivered and identify factors that influenced implementation.',
    activities: [
      'Compare planned and actual accomplishments',
      'Assess implementation performance',
      'Examine delivery of outputs and milestones',
      'Identify implementation constraints and enabling factors',
      'Review stakeholder and beneficiary perspectives',
      'Document significant implementation variations',
    ],
    outputs: [
      'Implementation assessment',
      'Results and accomplishment analysis',
      'Documented implementation factors',
    ],
    questions: [
      'What was planned and what was actually delivered?',
      'What factors affected implementation?',
      'Which outputs and milestones were achieved?',
      'What explains significant gaps or variations?',
    ],
    icon: BarChart3,
  },

  {
    number: '05',
    label: 'OUTCOMES & PERFORMANCE',
    title: 'Analyze Outcomes and Performance',
    description:
      'Examine the changes and outcomes associated with the intervention and assess performance using relevant evidence and evaluation criteria.',
    purpose:
      'Move beyond activity and output tracking to understand results, effects, benefits, and performance.',
    activities: [
      'Analyze changes against baseline conditions',
      'Assess achievement of intended outcomes',
      'Examine effectiveness of interventions',
      'Consider efficiency and use of resources where appropriate',
      'Assess sustainability and continuation of results where relevant',
      'Analyze differences across locations, groups, or intervention types where applicable',
    ],
    outputs: [
      'Outcome and performance analysis',
      'Evidence-based findings',
      'Assessment of results and effects',
    ],
    questions: [
      'What changed after implementation?',
      'To what extent were intended outcomes achieved?',
      'What factors contributed to the observed results?',
      'Are the results likely to be sustained?',
    ],
    icon: TrendingUp,
  },

  {
    number: '06',
    label: 'LESSONS & FINDINGS',
    title: 'Document Lessons and Findings',
    description:
      'Synthesize the evidence into clear findings and identify lessons that can improve implementation, planning, programming, and future investment decisions.',
    purpose:
      'Convert evaluation evidence into practical knowledge that can be used by planners, implementers, and decision-makers.',
    activities: [
      'Synthesize evidence across evaluation questions',
      'Document major findings',
      'Identify successful approaches and implementation practices',
      'Identify recurring gaps and constraints',
      'Document lessons from implementation',
      'Validate findings with relevant stakeholders where appropriate',
    ],
    outputs: [
      'Evaluation findings',
      'Lessons learned',
      'Good practices and improvement areas',
    ],
    questions: [
      'What are the major findings?',
      'What worked and under what conditions?',
      'What implementation practices should be retained?',
      'What recurring issues should be addressed?',
    ],
    icon: Lightbulb,
  },

  {
    number: '07',
    label: 'RECOMMENDATIONS & FEEDBACK',
    title: 'Develop Recommendations and Feed Back into Planning',
    description:
      'Translate evaluation findings and lessons into practical recommendations and feed the results back into succeeding planning, programming, implementation, and investment decisions.',
    purpose:
      'Close the planning cycle by using evaluation evidence to improve future decisions and succeeding planning cycles.',
    activities: [
      'Develop evidence-based recommendations',
      'Prioritize areas requiring improvement',
      'Identify actions for management consideration',
      'Feed evaluation findings into succeeding planning cycles',
      'Update strategies, programs, or interventions where appropriate',
      'Document management responses and follow-through mechanisms',
    ],
    outputs: [
      'Evaluation recommendations',
      'Management action points',
      'Planning and programming feedback',
      'Inputs for succeeding planning cycles',
    ],
    questions: [
      'What should be continued, improved, modified, or further examined?',
      'Which recommendations require management action?',
      'How will findings influence succeeding plans?',
      'How will recommendations be followed up?',
    ],
    icon: Workflow,
  },
]

const sections = [
  {
    title: 'What Evaluation Means',
    icon: ClipboardCheck,
    content:
      'Evaluation is a systematic assessment of implementation, results, outcomes, and relevant effects using available evidence. Unlike routine monitoring, which focuses on tracking progress and status, evaluation interprets evidence to understand what happened, what results were achieved, and what can be learned for future decisions.',
  },
  {
    title: 'Evaluation Questions and Criteria',
    icon: Target,
    content:
      'Evaluation questions define what the assessment needs to answer. Depending on the purpose and scope, criteria may examine relevance, effectiveness, efficiency, sustainability, impact, or other dimensions appropriate to the program or project being evaluated. The criteria should match the evaluation purpose and available evidence.',
  },
  {
    title: 'Evidence and Data',
    icon: Search,
    content:
      'Evaluation can draw from monitoring reports, baseline information, accomplishment records, financial data, field observations, surveys, interviews, stakeholder consultations, geospatial information, and other relevant sources. Evidence should be reviewed for completeness, consistency, and limitations before interpretation.',
  },
  {
    title: 'Findings and Lessons',
    icon: Lightbulb,
    content:
      'Findings should be traceable to the evidence reviewed. Lessons explain what can be learned from implementation and results, including approaches that can be retained, conditions that affected performance, and recurring issues that should be addressed in future planning and implementation.',
  },
  {
    title: 'Recommendations and Management Response',
    icon: Wrench,
    content:
      'Recommendations should be practical and connected to identified findings. They may inform changes in planning, programming, resource allocation, implementation arrangements, monitoring systems, or future investments. Where applicable, management responses and follow-through mechanisms can be documented.',
  },
]

function Evaluation() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(null)

  const currentStep = steps[activeStep]
  const StepIcon = currentStep.icon

  const goPrevious = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0))
  }

  const goNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  return (
    <main className="evaluation-page">
      {/* HERO */}
      <section className="evaluation-hero">
        <div className="evaluation-container">
          <div className="evaluation-breadcrumb">
            <Link to="/planning">Planning Framework</Link>
            <span>/</span>
            <span>Stage 09</span>
          </div>

          <div className="evaluation-hero-grid">
            <div className="evaluation-hero-copy">
              <div className="evaluation-stage-tag">
                STAGE 09 <span>•</span> LEARNING &amp; FEEDBACK
              </div>

              <h1>Evaluation</h1>

              <p className="evaluation-hero-description">
                Evaluation examines implementation, results, outcomes, and
                lessons to understand what changed, what influenced performance,
                and what can be improved in succeeding planning cycles.
              </p>

              <div className="evaluation-hero-actions">
                <a href="#evaluation-process" className="evaluation-primary-btn">
                  Explore Evaluation Process
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/planning/monitoring"
                  className="evaluation-secondary-btn"
                >
                  <ArrowLeft size={16} />
                  Operational Monitoring
                </Link>
              </div>
            </div>

            <div className="evaluation-orbit">
              <div className="evaluation-orbit-ring evaluation-orbit-ring-one" />
              <div className="evaluation-orbit-ring evaluation-orbit-ring-two" />

              <div className="evaluation-orbit-core">
                <ClipboardCheck size={28} />
                <span>EVALUATION</span>
                <strong>LEARNING LOOP</strong>
              </div>

              <div className="evaluation-orbit-node node-top">
                <Target size={15} />
                <span>Purpose</span>
              </div>

              <div className="evaluation-orbit-node node-right">
                <BarChart3 size={15} />
                <span>Results</span>
              </div>

              <div className="evaluation-orbit-node node-bottom">
                <Lightbulb size={15} />
                <span>Lessons</span>
              </div>

              <div className="evaluation-orbit-node node-left">
                <Workflow size={15} />
                <span>Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="evaluation-intro">
        <div className="evaluation-container">
          <div className="evaluation-intro-grid">
            <div>
              <span className="evaluation-eyebrow">WHY EVALUATION MATTERS</span>

              <h2>
                From performance evidence to
                <span> planning knowledge.</span>
              </h2>
            </div>

            <div>
              <p>
                Evaluation builds on the information generated through
                implementation and operational monitoring. It brings together
                evidence to assess results, understand factors affecting
                performance, document lessons, and support decisions for future
                planning and programming.
              </p>

              <p>
                Within the planning cycle, evaluation closes the feedback loop:
                findings are not treated only as a final report, but as inputs
                that can improve succeeding plans, programs, projects, and
                investments.
              </p>
            </div>
          </div>

          <div className="evaluation-highlight-grid">
            <div className="evaluation-highlight-card">
              <div className="evaluation-highlight-icon">
                <Search size={19} />
              </div>
              <span>01</span>
              <h3>Assess</h3>
              <p>
                Examine implementation, outputs, outcomes, and relevant
                performance evidence.
              </p>
            </div>

            <div className="evaluation-highlight-card">
              <div className="evaluation-highlight-icon">
                <BarChart3 size={19} />
              </div>
              <span>02</span>
              <h3>Analyze</h3>
              <p>
                Interpret evidence against appropriate questions, criteria,
                targets, and baseline conditions.
              </p>
            </div>

            <div className="evaluation-highlight-card">
              <div className="evaluation-highlight-icon">
                <Lightbulb size={19} />
              </div>
              <span>03</span>
              <h3>Learn</h3>
              <p>
                Identify lessons, good practices, constraints, and factors
                influencing results.
              </p>
            </div>

            <div className="evaluation-highlight-card">
              <div className="evaluation-highlight-icon">
                <Workflow size={19} />
              </div>
              <span>04</span>
              <h3>Feed Back</h3>
              <p>
                Translate findings into recommendations and inputs for future
                planning and investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="evaluation-process"
        id="evaluation-process"
      >
        <div className="evaluation-container">
          <div className="evaluation-section-heading">
            <div>
              <span className="evaluation-eyebrow">THE EVALUATION PROCESS</span>
              <h2>Seven steps from evidence to learning</h2>
            </div>

            <p>
              The process organizes evaluation from defining its purpose,
              gathering evidence, and assessing results through findings,
              recommendations, and feedback into succeeding planning cycles.
            </p>
          </div>

          <div className="evaluation-step-tabs">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <button
                  key={step.number}
                  type="button"
                  className={`evaluation-step-tab ${
                    activeStep === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="evaluation-step-number">
                    {step.number}
                  </span>

                  <span className="evaluation-step-tab-icon">
                    <Icon size={17} />
                  </span>

                  <span className="evaluation-step-tab-text">
                    {step.label}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="evaluation-step-panel">
            <div className="evaluation-step-panel-top">
              <div className="evaluation-step-panel-icon">
                <StepIcon size={28} />
              </div>

              <div>
                <span>STEP {currentStep.number}</span>
                <h3>{currentStep.title}</h3>
              </div>
            </div>

            <p className="evaluation-step-description">
              {currentStep.description}
            </p>

            <div className="evaluation-step-meta-grid">
              <div className="evaluation-meta-box">
                <span>PURPOSE</span>
                <p>{currentStep.purpose}</p>
              </div>

              <div className="evaluation-meta-box">
                <span>EXPECTED OUTPUTS</span>
                <ul>
                  {currentStep.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="evaluation-step-content-grid">
              <div>
                <span className="evaluation-content-label">
                  KEY ACTIVITIES
                </span>

                <div className="evaluation-activity-list">
                  {currentStep.activities.map((activity, index) => (
                    <div
                      className="evaluation-activity-item"
                      key={activity}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="evaluation-content-label">
                  GUIDE QUESTIONS
                </span>

                <div className="evaluation-question-list">
                  {currentStep.questions.map((question) => (
                    <div
                      className="evaluation-question-item"
                      key={question}
                    >
                      <CheckCircle2 size={15} />
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="evaluation-step-navigation">
              <button
                type="button"
                onClick={goPrevious}
                disabled={activeStep === 0}
                className="evaluation-step-nav-btn"
              >
                <ArrowLeft size={15} />
                Previous Step
              </button>

              <div className="evaluation-progress">
                <span>
                  {activeStep + 1} / {steps.length}
                </span>

                <div className="evaluation-progress-track">
                  <div
                    className="evaluation-progress-fill"
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
                onClick={goNext}
                disabled={activeStep === steps.length - 1}
                className="evaluation-step-nav-btn primary"
              >
                Next Step
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EVALUATION FRAMEWORK */}
      <section className="evaluation-framework">
        <div className="evaluation-container">
          <div className="evaluation-section-heading compact">
            <div>
              <span className="evaluation-eyebrow">EVALUATION FRAMEWORK</span>
              <h2>How evidence becomes learning</h2>
            </div>

            <p>
              Evaluation connects monitoring information with interpretation,
              findings, recommendations, and future planning.
            </p>
          </div>

          <div className="evaluation-framework-flow">
            <div className="evaluation-flow-card">
              <div className="evaluation-flow-icon">
                <Target size={20} />
              </div>
              <span>01</span>
              <strong>DEFINE</strong>
              <p>Purpose &amp; scope</p>
            </div>

            <div className="evaluation-flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="evaluation-flow-card">
              <div className="evaluation-flow-icon">
                <Search size={20} />
              </div>
              <span>02</span>
              <strong>ASSESS</strong>
              <p>Evidence &amp; results</p>
            </div>

            <div className="evaluation-flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="evaluation-flow-card">
              <div className="evaluation-flow-icon">
                <BarChart3 size={20} />
              </div>
              <span>03</span>
              <strong>ANALYZE</strong>
              <p>Performance &amp; outcomes</p>
            </div>

            <div className="evaluation-flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="evaluation-flow-card">
              <div className="evaluation-flow-icon">
                <Lightbulb size={20} />
              </div>
              <span>04</span>
              <strong>LEARN</strong>
              <p>Findings &amp; lessons</p>
            </div>

            <div className="evaluation-flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="evaluation-flow-card">
              <div className="evaluation-flow-icon">
                <Workflow size={20} />
              </div>
              <span>05</span>
              <strong>FEED BACK</strong>
              <p>Future planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="evaluation-details">
        <div className="evaluation-container">
          <div className="evaluation-section-heading compact">
            <div>
              <span className="evaluation-eyebrow">DETAILED GUIDANCE</span>
              <h2>Evaluation reference points</h2>
            </div>

            <p>
              Expand each section to review the role of evaluation within the
              planning and investment cycle.
            </p>
          </div>

          <div className="evaluation-accordion">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isOpen = openSection === index

              return (
                <div
                  className={`evaluation-accordion-item ${
                    isOpen ? 'open' : ''
                  }`}
                  key={section.title}
                >
                  <button
                    type="button"
                    className="evaluation-accordion-trigger"
                    onClick={() =>
                      setOpenSection(isOpen ? null : index)
                    }
                  >
                    <div className="evaluation-accordion-title">
                      <div className="evaluation-accordion-icon">
                        <Icon size={17} />
                      </div>

                      <span>{section.title}</span>
                    </div>

                    <ChevronDown
                      size={18}
                      className="evaluation-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="evaluation-accordion-content">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* EVALUATION PIPELINE */}
      <section className="evaluation-pipeline">
        <div className="evaluation-container">
          <div className="evaluation-pipeline-box">
            <div className="evaluation-pipeline-heading">
              <div>
                <span className="evaluation-eyebrow">
                  EVALUATION PIPELINE
                </span>
                <h2>Evidence → Findings → Action</h2>
              </div>

              <p>
                A useful evaluation output is not only a report. It is a set of
                evidence-based findings and recommendations that can inform
                management and succeeding planning cycles.
              </p>
            </div>

            <div className="evaluation-pipeline-grid">
              <div className="evaluation-pipeline-item">
                <div className="evaluation-pipeline-number">01</div>
                <Search size={18} />
                <strong>Evidence</strong>
                <span>Monitoring, baseline, field and other data</span>
              </div>

              <div className="evaluation-pipeline-line" />

              <div className="evaluation-pipeline-item">
                <div className="evaluation-pipeline-number">02</div>
                <BarChart3 size={18} />
                <strong>Analysis</strong>
                <span>Comparison, interpretation and assessment</span>
              </div>

              <div className="evaluation-pipeline-line" />

              <div className="evaluation-pipeline-item">
                <div className="evaluation-pipeline-number">03</div>
                <Lightbulb size={18} />
                <strong>Findings</strong>
                <span>Results, lessons and key observations</span>
              </div>

              <div className="evaluation-pipeline-line" />

              <div className="evaluation-pipeline-item">
                <div className="evaluation-pipeline-number">04</div>
                <Wrench size={18} />
                <strong>Action</strong>
                <span>Recommendations and management response</span>
              </div>

              <div className="evaluation-pipeline-line" />

              <div className="evaluation-pipeline-item">
                <div className="evaluation-pipeline-number">05</div>
                <Workflow size={18} />
                <strong>Feedback</strong>
                <span>Inputs to succeeding planning cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="evaluation-closing">
        <div className="evaluation-container">
          <div className="evaluation-closing-box">
            <div className="evaluation-closing-icon">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <span>STAGE 09 COMPLETE</span>

              <h2>From Evaluation to the Next Planning Cycle</h2>

              <p>
                Evaluation closes the current planning cycle by converting
                implementation evidence and results into findings, lessons,
                recommendations, and practical inputs for future planning,
                programming, and investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="evaluation-footer-nav">
        <div className="evaluation-container">
          <Link
            to="/planning/monitoring"
            className="evaluation-footer-link"
          >
            <ArrowLeft size={16} />

            <div>
              <span>PREVIOUS STAGE</span>
              <strong>Operational Monitoring</strong>
            </div>
          </Link>

          <Link
            to="/planning"
            className="evaluation-footer-center"
          >
            <span>PLANNING FRAMEWORK</span>
            <strong>All Stages</strong>
          </Link>

          <Link
            to="/planning"
            className="evaluation-footer-link right"
          >
            <div>
              <span>PLANNING CYCLE</span>
              <strong>Return to Framework</strong>
            </div>

            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Evaluation
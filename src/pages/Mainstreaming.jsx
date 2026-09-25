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
  FileCheck2,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  Landmark,
  Network,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react'

import './Mainstreaming.css'

const mainstreamingSteps = [
  {
    number: '01',
    shortTitle: 'Align',
    title: 'Align PCIP with DA Planning Priorities',
    description:
      'Position PCIP priorities within the broader planning directions, sector priorities, programs, and investment frameworks of the Department of Agriculture.',
    icon: Target,
    objective:
      'Establish clear linkages between provincial commodity priorities and the planning directions of the DA.',
    methodologies: [
      'Review current DA planning and investment priorities',
      'Map PCIP commodities and interventions against DA sector priorities',
      'Identify common objectives, strategies, and investment areas',
      'Document priority areas requiring DA support',
    ],
    participants: [
      'DA Regional Field Office',
      'DA Planning and Monitoring Units',
      'Banner Programs',
      'Provincial and Municipal LGUs',
      'Other concerned agencies',
    ],
    tools: [
      'PCIP',
      'DA planning documents',
      'Commodity and sector plans',
      'Investment programming references',
    ],
    outputs: [
      'PCIP–DA alignment matrix',
      'List of aligned commodity priorities',
      'Identified DA program entry points',
    ],
    questions: [
      'Which PCIP priorities are aligned with current DA priorities?',
      'Which DA programs can support the identified commodity interventions?',
      'What planning gaps need to be addressed?',
    ],
  },
  {
    number: '02',
    shortTitle: 'Integrate',
    title: 'Integrate PCIP into DA Programs',
    description:
      'Translate relevant PCIP strategies and priority interventions into appropriate DA programs, projects, activities, and support mechanisms.',
    icon: Layers3,
    objective:
      'Connect evidence-based commodity priorities with existing DA programs and implementation mechanisms.',
    methodologies: [
      'Match PCIP interventions with DA program mandates',
      'Identify suitable program components and intervention windows',
      'Review eligibility and implementation requirements',
      'Identify complementary support across DA offices and programs',
    ],
    participants: [
      'DA Regional Field Office',
      'DA Banner Programs',
      'Technical Services',
      'I-PLAN / Planning Units',
      'LGU representatives',
      'Commodity stakeholders',
    ],
    tools: [
      'PCIP intervention matrix',
      'DA program guidelines',
      'Commodity investment priorities',
      'Program implementation plans',
    ],
    outputs: [
      'Program–PCIP linkage matrix',
      'Identified program interventions',
      'Potential implementation pathways',
    ],
    questions: [
      'Which DA programs can carry the PCIP intervention?',
      'What adjustments are needed to align the intervention with program requirements?',
      'Which interventions require convergence among programs?',
    ],
  },
  {
    number: '03',
    shortTitle: 'Program',
    title: 'Translate Priorities into Investment Programming',
    description:
      'Move aligned PCIP priorities into investment programming and budgeting processes so that priority interventions can be considered for actual resource allocation.',
    icon: ClipboardList,
    objective:
      'Create a practical bridge between commodity investment priorities and government investment programming.',
    methodologies: [
      'Prioritize interventions according to planning and programming requirements',
      'Identify indicative funding requirements',
      'Determine responsible implementing units',
      'Map interventions to appropriate programming cycles',
      'Identify opportunities for convergence and complementary financing',
    ],
    participants: [
      'DA Planning and Monitoring Service',
      'DA Regional Field Office',
      'Program Coordinators',
      'Budget and finance units',
      'LGU planning and agriculture offices',
      'Partner agencies',
    ],
    tools: [
      'PCIP investment matrix',
      'Investment programming templates',
      'DA program plans',
      'Budget and programming references',
    ],
    outputs: [
      'Prioritized investment pipeline',
      'Indicative resource requirements',
      'Identified funding windows',
      'Responsible implementing units',
    ],
    questions: [
      'Which interventions should enter the investment pipeline?',
      'What resources are required?',
      'When should the intervention be programmed?',
    ],
  },
  {
    number: '04',
    shortTitle: 'Converge',
    title: 'Strengthen Inter-Program and Inter-Agency Convergence',
    description:
      'Coordinate DA programs, LGUs, national agencies, development partners, private sector organizations, and other stakeholders around shared commodity priorities.',
    icon: Network,
    objective:
      'Reduce fragmented interventions by establishing coordinated support around priority commodity value chains.',
    methodologies: [
      'Identify overlapping and complementary interventions',
      'Map institutional mandates and responsibilities',
      'Establish coordination mechanisms',
      'Develop joint or complementary interventions',
      'Document commitments and areas of support',
    ],
    participants: [
      'DA offices and programs',
      'Provincial and Municipal LGUs',
      'National government agencies',
      'Development partners',
      'Private sector',
      'Farmer and fisherfolk organizations',
    ],
    tools: [
      'Stakeholder mapping',
      'PCIP investment matrix',
      'Convergence matrix',
      'Inter-agency coordination mechanisms',
    ],
    outputs: [
      'Convergence matrix',
      'Institutional commitments',
      'Complementary investment opportunities',
      'Coordination arrangements',
    ],
    questions: [
      'Who can contribute to each priority intervention?',
      'Which interventions require joint implementation?',
      'How can resources and responsibilities be coordinated?',
    ],
  },
  {
    number: '05',
    shortTitle: 'Mobilize',
    title: 'Mobilize Resources and Partnerships',
    description:
      'Use the PCIP as a reference for identifying additional financing, technical assistance, partnerships, and other resources beyond a single funding source.',
    icon: Globe2,
    objective:
      'Expand the resource base available for priority commodity development.',
    methodologies: [
      'Identify potential financing and technical support sources',
      'Match interventions with partner mandates',
      'Develop investment concepts and proposals',
      'Facilitate partnership and convergence discussions',
      'Track potential and confirmed support',
    ],
    participants: [
      'DA',
      'LGUs',
      'National government agencies',
      'Development partners',
      'Financial institutions',
      'Private sector',
      'Commodity organizations',
    ],
    tools: [
      'PCIP investment portfolio',
      'Funding source mapping',
      'Project concept notes',
      'Partnership and convergence mechanisms',
    ],
    outputs: [
      'Resource mobilization matrix',
      'Potential funding sources',
      'Partnership opportunities',
      'Investment concepts',
    ],
    questions: [
      'What resources are already available?',
      'What funding gaps remain?',
      'Which partners can support the priority intervention?',
    ],
  },
  {
    number: '06',
    shortTitle: 'Institutionalize',
    title: 'Embed Mainstreaming in Regular DA Systems',
    description:
      'Move beyond one-time coordination by embedding the use of PCIP and related planning tools into regular DA planning, programming, implementation, and review processes.',
    icon: Landmark,
    objective:
      'Establish mainstreaming as a regular planning and management practice within the DA system.',
    methodologies: [
      'Define regular points of PCIP use in the planning cycle',
      'Clarify institutional responsibilities',
      'Integrate PCIP references into planning and programming activities',
      'Develop regular coordination and review mechanisms',
      'Document institutional practices and lessons',
    ],
    participants: [
      'DA Planning and Monitoring Service',
      'DA Regional Field Offices',
      'Banner Programs',
      'Attached agencies and corporations',
      'LGUs',
      'Planning and technical units',
    ],
    tools: [
      'Planning calendar',
      'PCIP reference framework',
      'Program planning templates',
      'Institutional coordination mechanisms',
    ],
    outputs: [
      'Mainstreaming arrangements',
      'Defined institutional roles',
      'Regular PCIP reference points',
      'Sustained coordination mechanism',
    ],
    questions: [
      'Where does PCIP enter the regular DA planning cycle?',
      'Who is responsible for maintaining the linkage?',
      'How will the process continue beyond a single planning activity?',
    ],
  },
  {
    number: '07',
    shortTitle: 'Review',
    title: 'Review Results and Improve the Planning Linkage',
    description:
      'Use implementation experience, investment results, monitoring information, and stakeholder feedback to improve the linkage between PCIP and DA planning and programming.',
    icon: TrendingUp,
    objective:
      'Create a feedback mechanism that allows mainstreaming arrangements to improve over time.',
    methodologies: [
      'Review implementation and investment performance',
      'Assess utilization of PCIP priorities',
      'Document good practices and implementation gaps',
      'Gather stakeholder feedback',
      'Update planning and coordination arrangements',
    ],
    participants: [
      'DA planning and monitoring units',
      'Program implementers',
      'LGUs',
      'Commodity stakeholders',
      'Partner agencies',
      'Monitoring and evaluation units',
    ],
    tools: [
      'Performance reports',
      'Monitoring data',
      'PCIP updates',
      'Stakeholder feedback',
      'Review workshops',
    ],
    outputs: [
      'Mainstreaming review findings',
      'Lessons learned',
      'Recommended adjustments',
      'Updated planning linkages',
    ],
    questions: [
      'Which PCIP priorities were carried into DA programming?',
      'What implementation gaps were encountered?',
      'What should be adjusted in the next planning cycle?',
    ],
  },
]

const mainstreamingSections = [
  {
    title: 'What Mainstreaming Means',
    icon: Workflow,
    content: [
      'Mainstreaming is the process of integrating PRDP-developed planning tools, approaches, and investment priorities into regular government systems and programs.',
      'For the PCIP, mainstreaming means that the plan is not treated as a stand-alone document. Its priorities can serve as references for planning, programming, budgeting, implementation, coordination, and monitoring.',
      'PRDP has documented mainstreaming of PCIP and VCA processes into DA systems and broader local planning frameworks.',
    ],
  },
  {
    title: 'PCIP as a Planning Reference',
    icon: FileText,
    content: [
      'The PCIP provides a structured set of priority commodity interventions derived from value chain analysis and related planning processes.',
      'Its use as a planning reference allows DA units and partner institutions to identify where their existing programs and resources can complement priority commodity interventions.',
      'The PCIP should therefore be connected with relevant sector, spatial, investment, and program planning processes rather than used independently.',
    ],
  },
  {
    title: 'Mainstreaming into DA Programs',
    icon: Building2,
    content: [
      'Mainstreaming requires matching PCIP priorities with the mandates and program mechanisms of DA offices and banner programs.',
      'This involves identifying appropriate program entry points, implementation responsibilities, financing opportunities, and coordination requirements.',
      'The objective is not to create a separate implementation system for PCIP, but to make the relevant priorities usable within existing planning and program processes.',
    ],
  },
  {
    title: 'Convergence and Resource Mobilization',
    icon: Network,
    content: [
      'Commodity development frequently requires support from multiple institutions and funding sources.',
      'Mainstreaming can therefore include convergence among DA programs, LGUs, national agencies, development partners, private sector organizations, and commodity stakeholders.',
      'The PCIP can function as a common reference for identifying complementary interventions and potential resource requirements.',
    ],
  },
  {
    title: 'Monitoring and Feedback',
    icon: Gauge,
    content: [
      'Mainstreaming should be reviewed through implementation and monitoring information.',
      'Results, gaps, stakeholder feedback, and lessons can be used to improve program linkages and succeeding planning cycles.',
      'This creates a continuous connection between planning, investment, implementation, and learning.',
    ],
  },
]

function Mainstreaming() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(null)

  const step = mainstreamingSteps[activeStep]
  const StepIcon = step.icon

  const previousStep = () => {
    setActiveStep((current) =>
      current > 0 ? current - 1 : mainstreamingSteps.length - 1,
    )
  }

  const nextStep = () => {
    setActiveStep((current) =>
      current < mainstreamingSteps.length - 1 ? current + 1 : 0,
    )
  }

  return (
    <div className="mainstreaming-page">

      {/* HERO */}
      <section className="mainstreaming-hero">
        <div className="mainstreaming-container">

          <div className="mainstreaming-breadcrumb">
            <Link to="/planning">Planning Framework</Link>
            <span>/</span>
            <span>Mainstreaming</span>
          </div>

          <div className="mainstreaming-hero-grid">

            <div className="mainstreaming-hero-copy">
              <div className="mainstreaming-stage">
                STAGE 07
              </div>

              <h1>Mainstreaming</h1>

              <p className="mainstreaming-hero-lead">
                Integrating PCIP priorities, PRDP planning approaches, and
                evidence-based commodity investments into the regular planning,
                programming, implementation, and review systems of the
                Department of Agriculture.
              </p>

              <div className="mainstreaming-hero-actions">
                <Link
                  to="/planning/institutionalization"
                  className="mainstreaming-btn secondary"
                >
                  <ArrowLeft size={16} />
                  Institutionalization
                </Link>

                <a
                  href="#mainstreaming-process"
                  className="mainstreaming-btn primary"
                >
                  Explore the Process
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="mainstreaming-hero-visual">
              <div className="mainstreaming-orbit">

                <div className="mainstreaming-orbit-ring ring-one" />
                <div className="mainstreaming-orbit-ring ring-two" />

                <div className="mainstreaming-orbit-node node-one">
                  <FileCheck2 size={17} />
                  <span>PCIP</span>
                </div>

                <div className="mainstreaming-orbit-node node-two">
                  <Building2 size={17} />
                  <span>DA</span>
                </div>

                <div className="mainstreaming-orbit-node node-three">
                  <Network size={17} />
                  <span>Partners</span>
                </div>

                <div className="mainstreaming-orbit-center">
                  <Layers3 size={31} />
                  <span>MAINSTREAMING</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mainstreaming-intro">
        <div className="mainstreaming-container">

          <div className="mainstreaming-intro-grid">

            <div>
              <span className="mainstreaming-eyebrow">
                FROM PROJECT PRACTICE TO REGULAR SYSTEMS
              </span>

              <h2>
                Bringing PCIP and evidence-based planning into regular DA
                operations
              </h2>
            </div>

            <div className="mainstreaming-intro-copy">
              <p>
                Mainstreaming builds on the institutionalization of the
                planning process. Instead of treating PCIP as a stand-alone
                planning document, relevant priorities and approaches are
                connected with regular DA planning, programming, budgeting,
                implementation, coordination, and monitoring processes.
              </p>

              <p>
                PRDP has documented the mainstreaming of VCA and PCIP processes
                into DA programs and broader local planning frameworks,
                including their use as references for planning and investment
                decisions.
              </p>
            </div>

          </div>

          <div className="mainstreaming-highlight-grid">

            <div className="mainstreaming-highlight-card">
              <div className="highlight-icon">
                <Target size={20} />
              </div>
              <strong>Align</strong>
              <span>Connect PCIP with DA priorities</span>
            </div>

            <div className="mainstreaming-highlight-card">
              <div className="highlight-icon">
                <Layers3 size={20} />
              </div>
              <strong>Integrate</strong>
              <span>Link priorities with programs</span>
            </div>

            <div className="mainstreaming-highlight-card">
              <div className="highlight-icon">
                <Network size={20} />
              </div>
              <strong>Converge</strong>
              <span>Coordinate institutions and resources</span>
            </div>

            <div className="mainstreaming-highlight-card">
              <div className="highlight-icon">
                <TrendingUp size={20} />
              </div>
              <strong>Improve</strong>
              <span>Use results for the next cycle</span>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section
        id="mainstreaming-process"
        className="mainstreaming-process"
      >
        <div className="mainstreaming-container">

          <div className="mainstreaming-section-heading">
            <div>
              <span className="mainstreaming-eyebrow">
                MAINSTREAMING PROCESS
              </span>

              <h2>Seven stages for carrying PCIP into regular systems</h2>
            </div>

            <p>
              The process moves from alignment and program integration toward
              investment programming, convergence, institutional embedding,
              and continuous review.
            </p>
          </div>

          <div className="mainstreaming-process-layout">

            {/* STEP LIST */}
            <aside className="mainstreaming-step-list">

              {mainstreamingSteps.map((item, index) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.number}
                    type="button"
                    className={`mainstreaming-step-button ${
                      activeStep === index ? 'active' : ''
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="step-number">
                      {item.number}
                    </span>

                    <span className="step-button-icon">
                      <Icon size={17} />
                    </span>

                    <span className="step-button-text">
                      <small>{item.shortTitle}</small>
                      <strong>{item.title}</strong>
                    </span>

                    <ArrowRight size={15} className="step-arrow" />
                  </button>
                )
              })}

            </aside>

            {/* STEP DETAIL */}
            <div className="mainstreaming-step-detail">

              <div className="mainstreaming-step-top">
                <div className="mainstreaming-step-icon">
                  <StepIcon size={25} />
                </div>

                <div>
                  <span>STEP {step.number}</span>
                  <h3>{step.title}</h3>
                </div>
              </div>

              <p className="mainstreaming-step-description">
                {step.description}
              </p>

              <div className="mainstreaming-objective">
                <div className="objective-icon">
                  <Target size={17} />
                </div>

                <div>
                  <span>OBJECTIVE</span>
                  <p>{step.objective}</p>
                </div>
              </div>

              <div className="mainstreaming-meta-grid">

                <div className="mainstreaming-meta-card">
                  <div className="meta-card-heading">
                    <Wrench size={17} />
                    <span>Methodologies</span>
                  </div>

                  <ul>
                    {step.methodologies.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mainstreaming-meta-card">
                  <div className="meta-card-heading">
                    <Users size={17} />
                    <span>Participants</span>
                  </div>

                  <ul>
                    {step.participants.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mainstreaming-meta-card">
                  <div className="meta-card-heading">
                    <ClipboardCheck size={17} />
                    <span>Tools & References</span>
                  </div>

                  <ul>
                    {step.tools.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="mainstreaming-output-grid">

                <div className="mainstreaming-output-card">
                  <div className="output-card-heading">
                    <FileCheck2 size={18} />
                    <span>Expected Outputs</span>
                  </div>

                  <ul>
                    {step.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mainstreaming-question-card">
                  <div className="question-card-heading">
                    <ClipboardList size={18} />
                    <span>Guide Questions</span>
                  </div>

                  <ul>
                    {step.questions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* STEP NAVIGATION */}
              <div className="mainstreaming-step-navigation">

                <button
                  type="button"
                  onClick={previousStep}
                  className="mainstreaming-nav-btn"
                >
                  <ArrowLeft size={16} />

                  <div>
                    <span>PREVIOUS STEP</span>
                    <strong>
                      {mainstreamingSteps[
                        activeStep === 0
                          ? mainstreamingSteps.length - 1
                          : activeStep - 1
                      ].shortTitle}
                    </strong>
                  </div>
                </button>

                <div className="mainstreaming-progress">
                  <div className="progress-label">
                    <span>PROCESS PROGRESS</span>
                    <strong>
                      {activeStep + 1} / {mainstreamingSteps.length}
                    </strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          ((activeStep + 1) /
                            mainstreamingSteps.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="mainstreaming-nav-btn next"
                >
                  <div>
                    <span>NEXT STEP</span>
                    <strong>
                      {mainstreamingSteps[
                        activeStep === mainstreamingSteps.length - 1
                          ? 0
                          : activeStep + 1
                      ].shortTitle}
                    </strong>
                  </div>

                  <ArrowRight size={16} />
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="mainstreaming-framework">
        <div className="mainstreaming-container">

          <div className="mainstreaming-section-heading centered">
            <span className="mainstreaming-eyebrow">
              MAINSTREAMING FRAMEWORK
            </span>

            <h2>From PCIP to regular DA systems</h2>

            <p>
              Mainstreaming creates a continuous connection between commodity
              planning and the regular government planning and investment
              cycle.
            </p>
          </div>

          <div className="mainstreaming-flow">

            <div className="mainstreaming-flow-item">
              <div className="flow-icon">
                <FileCheck2 size={21} />
              </div>
              <span>PCIP</span>
              <small>Priority investments</small>
            </div>

            <div className="flow-line" />

            <div className="mainstreaming-flow-item">
              <div className="flow-icon">
                <Target size={21} />
              </div>
              <span>ALIGNMENT</span>
              <small>DA priorities</small>
            </div>

            <div className="flow-line" />

            <div className="mainstreaming-flow-item">
              <div className="flow-icon">
                <ClipboardList size={21} />
              </div>
              <span>PROGRAMMING</span>
              <small>Investment pipeline</small>
            </div>

            <div className="flow-line" />

            <div className="mainstreaming-flow-item">
              <div className="flow-icon">
                <Network size={21} />
              </div>
              <span>CONVERGENCE</span>
              <small>Partners & resources</small>
            </div>

            <div className="flow-line" />

            <div className="mainstreaming-flow-item">
              <div className="flow-icon">
                <BarChart3 size={21} />
              </div>
              <span>RESULTS</span>
              <small>Review & feedback</small>
            </div>

          </div>

        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="mainstreaming-details">
        <div className="mainstreaming-container">

          <div className="mainstreaming-section-heading">
            <div>
              <span className="mainstreaming-eyebrow">
                DETAILED FRAMEWORK
              </span>

              <h2>Understanding mainstreaming</h2>
            </div>

            <p>
              Explore the major elements that connect PCIP with regular
              planning, programming, coordination, and monitoring systems.
            </p>
          </div>

          <div className="mainstreaming-accordion-list">

            {mainstreamingSections.map((section, index) => {
              const Icon = section.icon
              const isOpen = openSection === index

              return (
                <div
                  className={`mainstreaming-accordion ${
                    isOpen ? 'open' : ''
                  }`}
                  key={section.title}
                >

                  <button
                    type="button"
                    className="mainstreaming-accordion-trigger"
                    onClick={() =>
                      setOpenSection(isOpen ? null : index)
                    }
                  >
                    <div className="accordion-title">
                      <div className="accordion-icon">
                        <Icon size={18} />
                      </div>

                      <span>{section.title}</span>
                    </div>

                    <ChevronDown
                      size={18}
                      className="accordion-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="mainstreaming-accordion-content">
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

      {/* MAINSTREAMING PIPELINE */}
      <section className="mainstreaming-pipeline">
        <div className="mainstreaming-container">

          <div className="mainstreaming-pipeline-card">

            <div className="pipeline-copy">
              <span className="mainstreaming-eyebrow">
                THE MAINSTREAMING PIPELINE
              </span>

              <h2>
                Turning commodity priorities into coordinated government
                action
              </h2>

              <p>
                The objective is to establish a practical linkage between the
                priorities identified through PCIP and the institutions,
                programs, resources, and monitoring mechanisms that can support
                their implementation.
              </p>
            </div>

            <div className="pipeline-list">

              <div className="pipeline-item">
                <span>01</span>
                <div>
                  <strong>Plan</strong>
                  <small>Identify priority interventions</small>
                </div>
              </div>

              <div className="pipeline-item">
                <span>02</span>
                <div>
                  <strong>Align</strong>
                  <small>Connect with DA priorities</small>
                </div>
              </div>

              <div className="pipeline-item">
                <span>03</span>
                <div>
                  <strong>Program</strong>
                  <small>Move into investment programming</small>
                </div>
              </div>

              <div className="pipeline-item">
                <span>04</span>
                <div>
                  <strong>Converge</strong>
                  <small>Mobilize complementary support</small>
                </div>
              </div>

              <div className="pipeline-item">
                <span>05</span>
                <div>
                  <strong>Review</strong>
                  <small>Use results for improvement</small>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="mainstreaming-connections">
        <div className="mainstreaming-container">

          <div className="mainstreaming-section-heading centered">
            <span className="mainstreaming-eyebrow">
              PLANNING FRAMEWORK CONNECTION
            </span>

            <h2>Where Mainstreaming fits</h2>

            <p>
              Mainstreaming carries the institutionalized planning process
              into broader DA systems and prepares the foundation for
              operational monitoring.
            </p>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="mainstreaming-closing">
        <div className="mainstreaming-container">

          <div className="mainstreaming-closing-card">

            <div className="closing-icon">
              <Landmark size={27} />
            </div>

            <div>
              <span>STAGE 07 · MAINSTREAMING</span>

              <h2>
                From a planning product to a regular development practice.
              </h2>

              <p>
                Mainstreaming strengthens the connection between evidence-based
                commodity planning and the regular systems that program,
                finance, implement, monitor, and review agricultural and
                fisheries investments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="mainstreaming-footer-nav">
        <div className="mainstreaming-container">

          <Link
            to="/planning/institutionalization"
            className="mainstreaming-footer-link"
          >
            <ArrowLeft size={16} />

            <div>
              <span>PREVIOUS STAGE</span>
              <strong>Institutionalization</strong>
            </div>
          </Link>

          <Link
            to="/planning"
            className="mainstreaming-footer-center"
          >
            <span>PLANNING FRAMEWORK</span>
            <strong>All Stages</strong>
          </Link>

          <Link
            to="/planning/monitoring"
            className="mainstreaming-footer-link right"
          >
            <div>
              <span>NEXT STAGE</span>
              <strong>Operational Monitoring</strong>
            </div>

            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Mainstreaming
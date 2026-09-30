import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pcip.css'

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  Flag,
  Globe2,
  Layers3,
  Map,
  MessageSquare,
  Network,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Wrench,
  X,
  BarChart3,
  Landmark,
  Route,
  Leaf,
  ListChecks,
} from 'lucide-react'

function Pcip() {
  const [activeStep, setActiveStep] = useState(0)
  const [openSection, setOpenSection] = useState(null)
  const [activeSubStep, setActiveSubStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Launch Activity',
      shortTitle: 'Launch',
      icon: Flag,
      description:
        'Initiate the PCIP formulation or updating process by aligning the planning team, institutional commitments, work plan, timetable, and expected outputs.',

      objective:
        'Launch and organize the PCIP process, establish a common understanding of its purpose, and confirm the institutional arrangements needed to undertake the planning activity.',

      methodologies: [
        'Launch workshop',
        'Orientation and briefing',
        'Review of previous PCIP performance',
        'Planning and work programming',
        'Facilitated discussion',
      ],

      participants: [
        'Provincial Core Planning Team',
        'DA / I-PLAN planning team',
        'LGU representatives',
        'Relevant provincial offices',
        'Private sector / value chain representatives, as appropriate',
      ],

      tools: [
        'Previous PCIP',
        'PCIP planning templates',
        'Provincial planning documents',
        'Work plan and timetable',
        'Relevant value chain studies',
      ],

      outputs: [
        'Agreed purpose and direction for the PCIP',
        'Reconfirmed Provincial Core Planning Team',
        'Agreed work plan and timetable',
        'Institutional commitments',
        'Expected planning outputs',
      ],

      questions: [
        'What is the purpose of preparing or updating the PCIP?',
        'What were the major findings and lessons from the previous PCIP?',
        'What areas of the previous plan require improvement?',
        'Who should participate in the PCIP process?',
        'What activities, responsibilities, and timelines are required?',
      ],

      sections: [
        {
          title: 'Purpose of the Launch Activity',
          icon: Target,
          content:
            'The launch activity establishes a common understanding of the PCIP as a provincial investment planning instrument and provides the starting point for organizing the planning process.'
        },
        {
          title: 'Review of Previous PCIP Performance',
          icon: BarChart3,
          content:
            'The planning team reviews the implementation and performance of the previous PCIP, identifies lessons and gaps, and considers areas that need to be strengthened in the succeeding planning cycle.'
        },
        {
          title: 'Work Plan and Institutional Arrangements',
          icon: Workflow,
          content:
            'The planning team agrees on organizational arrangements, responsibilities, timetable, coordination mechanisms, and expected outputs for the PCIP formulation or updating process.'
        },
      ],
    },

    {
      number: '02',
      title: 'Review Sector and Spatial Planning Frameworks',
      shortTitle: 'Planning Frameworks',
      icon: Layers3,
      description:
        'Review higher-level sector, spatial, and related planning frameworks to establish the policy, spatial, and development context of the PCIP.',

      objective:
        'Ensure that the PCIP is linked with relevant sectoral, spatial, land-use, and development planning frameworks and that investments are considered within an integrated spatial planning perspective.',

      methodologies: [
        'Desk review',
        'Plan and policy review',
        'Spatial analysis',
        'Planning workshops',
        'Inter-agency consultation',
      ],

      participants: [
        'Provincial Core Planning Team',
        'Provincial planning and development office',
        'DA and relevant national agencies',
        'LGU planning representatives',
        'Technical specialists',
      ],

      tools: [
        'Provincial development plans',
        'Sector plans',
        'Land-use plans',
        'PDPFP / related spatial frameworks',
        'CLUPs',
        'Ridge-to-Reef planning framework',
        'GIS and spatial datasets',
      ],

      outputs: [
        'Reviewed sector and spatial planning context',
        'Identified planning linkages',
        'Relevant policy and spatial considerations',
        'Integrated spatial planning considerations',
        'Planning parameters for PCIP drafting',
      ],

      questions: [
        'What higher-level plans should guide the PCIP?',
        'How should the PCIP align with local sector and land-use plans?',
        'What spatial considerations affect proposed investments?',
        'Where are important production, market, infrastructure, and resource areas located?',
        'How can physical and locational connectivity among investments be considered?',
      ],

      sections: [
        {
          title: 'Higher-Level and Related Plans',
          icon: FileText,
          content:
            'Review relevant national, regional, provincial, sectoral, and local plans to establish the policy and development context within which the PCIP will be prepared.'
        },
        {
          title: 'Local Sector and Land-Use Plans',
          icon: Building2,
          content:
            'The PCIP should consider relevant local sector plans and land-use plans so that proposed investments are consistent with local development directions and spatial conditions.'
        },
        {
          title: 'Integrated Spatial Planning',
          icon: Map,
          content:
            'Apply an integrated spatial planning perspective, including Ridge-to-Reef considerations, to understand the locational and physical connectivity among production areas, infrastructure, markets, resources, and proposed investments.'
        },
      ],
    },

    {
      number: '03',
      title: 'Draft the PCIP',
      shortTitle: 'Draft PCIP',
      icon: ClipboardList,
      description:
        'Develop the draft Provincial Commodity Investment Plan by combining commodity prioritization, risk characterization, value chain analysis, investment potentials, strategies, safeguards screening, and investment planning.',

      objective:
        'Translate commodity, value chain, risk, spatial, and safeguards information into a coherent and prioritized provincial investment plan.',

      methodologies: [
        'Data review and analysis',
        'Value chain analysis',
        'Climate and risk assessment',
        'Spatial analysis',
        'Participatory planning',
        'Investment prioritization',
        'Social and environmental safeguards screening',
      ],

      participants: [
        'Provincial Core Planning Team',
        'Regional technical support teams',
        'Value chain actors',
        'LGU representatives',
        'Technical specialists',
        'Relevant DA and partner agencies',
      ],

      tools: [
        'Commodity Prioritization',
        'Climate Risk Vulnerability Assessment (CRVA)',
        'IVCA / Value Chain Analysis',
        'EVSA',
        'Fish Vool, where applicable',
        'Hazard and spatial information',
        'SES screening tools',
        'GIS and geo-mapping resources',
      ],

      outputs: [
        'Updated priority commodities list',
        'Commodity risk characterization',
        'Investment potentials and constraints',
        'Strategies and PAPs',
        'SES early screening results',
        'Draft PCIP narrative and investment plan',
      ],

      questions: [
        'Which commodities should remain or be included as provincial priorities?',
        'What risks affect the priority commodities and their value chains?',
        'What constraints limit competitiveness and resilience?',
        'What investment potentials can address identified constraints?',
        'What strategies, programs, activities, and projects should be proposed?',
        'What safeguards concerns need to be considered early?',
        'How should the identified investments be prioritized and organized in the draft PCIP?',
      ],

      sections: [
        {
          title: '3A — Identification of Provincial Priority Commodities',
          icon: Target,
          content:
            'Update and confirm the provincial priority commodities that will form the focus of the investment planning process. The assessment should consider relevant commodity, value chain, development, and planning information.'
        },
        {
          title: '3B — Risk Characterization',
          icon: ShieldCheck,
          content:
            'Characterize the major risks affecting priority commodities and their value chains. Climate and other relevant risk information can be used to identify hazards, vulnerabilities, adaptive capacity, and implications for investment planning.'
        },
        {
          title: '3C — Translation of VCA Results',
          icon: Network,
          content:
            'Translate value chain analysis findings into identified investment potentials and constraints. The objective is to connect competitiveness findings with concrete areas where investment can address bottlenecks and opportunities.'
        },
        {
          title: '3D — Development of Strategies and PAPs',
          icon: Route,
          content:
            'Formulate value chain upgrading and risk management strategies and translate them into appropriate programs, activities, and projects (PAPs). Proposed interventions should respond to identified constraints, opportunities, risks, and development directions.'
        },
        {
          title: '3E — SES Early Screening',
          icon: Leaf,
          content:
            'Conduct early social and environmental safeguards screening of proposed interventions. The screening helps identify safeguards issues that may affect implementation and provides an early basis for appropriate safeguards considerations.'
        },
        {
          title: '3F — Finalize Draft Investment Plan',
          icon: FileCheck2,
          content:
            'Consolidate the results of the preceding analyses and prepare the draft PCIP narrative and investment plan for technical review and subsequent stakeholder consultation.'
        },
      ],
    },

    {
      number: '04',
      title: 'Joint Technical Review',
      shortTitle: 'Technical Review',
      icon: Search,
      description:
        'Subject the draft PCIP to technical review to assess its completeness, consistency, analytical basis, proposed investments, and alignment with planning requirements.',

      objective:
        'Review the technical quality and completeness of the draft PCIP before it is presented for broader stakeholder consultation.',

      methodologies: [
        'Joint technical review',
        'Document review',
        'Technical assessment',
        'Presentation and discussion',
        'Consolidation of review comments',
      ],

      participants: [
        'Provincial Core Planning Team',
        'Regional technical teams',
        'DA / I-PLAN technical personnel',
        'Relevant technical specialists',
        'Other reviewers as required',
      ],

      tools: [
        'Draft PCIP',
        'PCIP templates',
        'VCA findings',
        'Risk assessment outputs',
        'Spatial planning information',
        'SES screening results',
        'Technical review checklist',
      ],

      outputs: [
        'Technical review comments',
        'Identified gaps and required revisions',
        'Clarified technical issues',
        'Recommendations for strengthening the draft PCIP',
        'Basis for stakeholder consultation',
      ],

      questions: [
        'Is the draft PCIP complete and internally consistent?',
        'Are priority commodities adequately supported by analysis?',
        'Are risks and constraints properly reflected?',
        'Are proposed investments responsive to identified needs?',
        'Are strategies and PAPs sufficiently justified?',
        'Are spatial and safeguards considerations adequately integrated?',
      ],

      sections: [
        {
          title: 'Review of the Draft PCIP',
          icon: FileText,
          content:
            'The draft PCIP is reviewed from a technical perspective, including the evidence supporting priorities, the logic connecting analysis to interventions, and the completeness of the proposed investment plan.'
        },
        {
          title: 'Consolidation of Technical Comments',
          icon: ClipboardCheck,
          content:
            'Review findings are consolidated so that the planning team can address technical gaps and make the necessary revisions before stakeholder consultation.'
        },
      ],
    },

    {
      number: '05',
      title: 'Stakeholders Consultation',
      shortTitle: 'Consultation',
      icon: MessageSquare,
      description:
        'Present and discuss the draft PCIP with relevant stakeholders to validate priorities, proposed interventions, and investment directions.',

      objective:
        'Obtain stakeholder feedback and validate the findings, priorities, strategies, and proposed investments contained in the draft PCIP.',

      methodologies: [
        'Stakeholder consultation',
        'Presentation of findings',
        'Facilitated discussion',
        'Validation workshop',
        'Feedback and issue consolidation',
      ],

      participants: [
        'Provincial Core Planning Team',
        'LGUs',
        'Value chain actors',
        'Farmers and fisherfolk organizations',
        'Private sector',
        'Relevant agencies and stakeholders',
      ],

      tools: [
        'Draft PCIP',
        'Investment matrices',
        'Presentation materials',
        'Maps and spatial outputs',
        'Consultation guides',
        'Stakeholder feedback forms',
      ],

      outputs: [
        'Validated PCIP findings',
        'Stakeholder comments and recommendations',
        'Confirmed or refined priorities',
        'Additional issues and opportunities',
        'Inputs for finalization',
      ],

      questions: [
        'Do stakeholders agree with the identified priority commodities?',
        'Are the identified constraints and risks consistent with field realities?',
        'Are proposed investments responsive to stakeholder needs?',
        'Are there important investments or interventions that need to be added?',
        'Which interventions should receive priority?',
        'What roles can stakeholders play in implementation?',
      ],

      sections: [
        {
          title: 'Presentation of the Draft PCIP',
          icon: PresentationIcon,
          content:
            'The planning team presents the major findings, priority commodities, constraints, strategies, proposed investments, and relevant spatial and safeguards considerations.'
        },
        {
          title: 'Stakeholder Validation',
          icon: Users,
          content:
            'Stakeholders provide feedback on the proposed priorities and investments based on their experience, local knowledge, institutional responsibilities, and value chain perspectives.'
        },
        {
          title: 'Consolidation of Recommendations',
          icon: ListChecks,
          content:
            'Comments, agreements, issues, and recommendations are consolidated as inputs to the finalization of the PCIP.'
        },
      ],
    },

    {
      number: '06',
      title: 'Finalization and Presentation for Approval',
      shortTitle: 'Finalization',
      icon: FileCheck2,
      description:
        'Incorporate technical and stakeholder inputs, finalize the PCIP, and prepare the completed plan for presentation and approval.',

      objective:
        'Produce the final PCIP by addressing review and consultation inputs and prepare the plan and presentation materials for approval.',

      methodologies: [
        'Comment consolidation',
        'Document revision',
        'Technical editing',
        'Final validation',
        'Presentation preparation',
      ],

      participants: [
        'Provincial Core Planning Team',
        'Regional technical team',
        'Relevant DA personnel',
        'Planning and technical specialists',
      ],

      tools: [
        'Reviewed draft PCIP',
        'Stakeholder consultation results',
        'Technical review comments',
        'Final PCIP templates',
        'Investment matrices',
        'Presentation materials',
      ],

      outputs: [
        'Finalized PCIP document',
        'Final investment plan / matrix',
        'Resolved review comments',
        'Approval presentation',
        'Documentation of consultation inputs',
      ],

      questions: [
        'Have all technical review comments been addressed?',
        'Have stakeholder recommendations been considered?',
        'Are the final priorities and investments clearly documented?',
        'Are investment matrices complete and consistent?',
        'Is the PCIP ready for presentation and approval?',
      ],

      sections: [
        {
          title: 'Consolidation and Revision',
          icon: ClipboardList,
          content:
            'The planning team incorporates appropriate technical review and stakeholder consultation inputs into the PCIP and updates the narrative, matrices, maps, and supporting documentation.'
        },
        {
          title: 'Preparation for Approval',
          icon: PresentationIcon,
          content:
            'The finalized PCIP and supporting presentation materials are prepared for the appropriate approval and endorsement process.'
        },
      ],
    },

    {
      number: '07',
      title: 'Approval and Endorsements',
      shortTitle: 'Approval',
      icon: CheckCircle2,
      description:
        'Complete the approval and endorsement process and establish the approved and updated PCIP as a basis for succeeding investment planning and implementation.',

      objective:
        'Secure the required approval and endorsements for the finalized PCIP and establish the approved plan as a reference for investment programming and mainstreaming.',

      methodologies: [
        'Formal presentation',
        'Review and deliberation',
        'Approval process',
        'Endorsement and documentation',
      ],

      participants: [
        'Provincial leadership',
        'Provincial Core Planning Team',
        'DA / I-PLAN representatives',
        'Relevant reviewing and endorsing bodies',
        'Other authorized stakeholders',
      ],

      tools: [
        'Final PCIP',
        'Investment plan / matrix',
        'Approval presentation',
        'Supporting technical documents',
        'Required endorsement documents',
      ],

      outputs: [
        'Approved PCIP',
        'Updated provincial investment plan',
        'Formal endorsements',
        'Basis for investment programming and mainstreaming',
      ],

      questions: [
        'Has the PCIP completed the required review and approval process?',
        'Are the required endorsements secured?',
        'Is the final investment plan properly documented?',
        'How will approved priorities be carried into succeeding planning and investment processes?',
      ],

      sections: [
        {
          title: 'Approval and Endorsement Process',
          icon: Landmark,
          content:
            'The finalized PCIP proceeds through the applicable approval and endorsement process. Required documentation and supporting materials are presented to the appropriate authorities and bodies.'
        },
        {
          title: 'Approved and Updated PCIP',
          icon: CheckCircle2,
          content:
            'The completed process results in an approved and updated PCIP that can serve as a reference for provincial investment programming, implementation, and subsequent planning cycles.'
        },
      ],
    },
  ]

  const subSteps = [
    {
      number: '3A',
      title: 'Identification of Provincial Priority Commodities',
      icon: Target,
      description:
        'Update and confirm the list of commodities that will be prioritized for provincial investment planning.',
    },
    {
      number: '3B',
      title: 'Risk Characterization',
      icon: ShieldCheck,
      description:
        'Characterize the major risks affecting priority commodities and their value chains using available risk and climate information.',
    },
    {
      number: '3C',
      title: 'Translation of VCA Results',
      icon: Network,
      description:
        'Translate value chain findings into investment potentials and constraints that can guide investment planning.',
    },
    {
      number: '3D',
      title: 'Development of Strategies and PAPs',
      icon: Route,
      description:
        'Develop value chain upgrading and risk management strategies and identify appropriate programs, activities, and projects.',
    },
    {
      number: '3E',
      title: 'SES Early Screening',
      icon: Leaf,
      description:
        'Screen proposed interventions for potential social and environmental safeguards concerns at an early planning stage.',
    },
    {
      number: '3F',
      title: 'Finalize Draft Investment Plan',
      icon: FileCheck2,
      description:
        'Consolidate the results into the draft PCIP narrative and investment plan for technical review.',
    },
  ]

  const currentStep = steps[activeStep]
  const CurrentIcon = currentStep.icon

  function handleStepChange(index) {
    setActiveStep(index)
    setOpenSection(null)

    if (index !== 2) {
      setActiveSubStep(0)
    }

    setTimeout(() => {
      document
        .getElementById('pcip-step-detail')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 50)
  }

  function handlePrevious() {
    if (activeStep > 0) {
      handleStepChange(activeStep - 1)
    }
  }

  function handleNext() {
    if (activeStep < steps.length - 1) {
      handleStepChange(activeStep + 1)
    }
  }

  function toggleSection(index) {
    setOpenSection(
      openSection === index ? null : index
    )
  }

  return (
    <main className="pcip-page">
      <div className="pcip-container">

        {/* HERO */}
        <section className="pcip-hero">
          <div className="pcip-breadcrumb">
            <Link to="/planning">
              Planning Framework
            </Link>

            <span>/</span>

            <span>PCIP Formulation</span>
          </div>

          <div className="pcip-hero-grid">

            <div className="pcip-hero-content">
              <span className="pcip-eyebrow">
                STAGE 04 · INVESTMENT PLANNING
              </span>

              <h1>
                Provincial Commodity
                <br />
                Investment Plan
              </h1>

              <p className="pcip-hero-lead">
                A structured process for translating commodity
                and value chain findings into a prioritized,
                risk-informed, and spatially contextualized
                provincial investment plan.
              </p>

              <div className="pcip-hero-actions">
                <a
                  href="#pcip-process"
                  className="pcip-primary-button"
                >
                  <span>Explore the PCIP Process</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </a>

                <span className="pcip-hero-note">
                  07 major steps
                </span>
              </div>
            </div>

            <div className="pcip-hero-panel">
              <div className="pcip-panel-top">
                <span>PLANNING OUTPUT</span>

                <FileCheck2
                  size={19}
                  strokeWidth={1.6}
                />
              </div>

              <div className="pcip-panel-line" />

              <h2>
                Approved and
                <br />
                Updated PCIP
              </h2>

              <p>
                The planning process connects priority
                commodities, risk information, value chain
                analysis, spatial planning, safeguards, and
                investment programming.
              </p>

              <div className="pcip-panel-flow">
                <span>Analysis</span>
                <ArrowRight size={13} />
                <span>Priorities</span>
                <ArrowRight size={13} />
                <span>Investments</span>
              </div>
            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="pcip-intro">
          <div className="pcip-intro-heading">
            <span className="pcip-section-label">
              ABOUT THE PROCESS
            </span>

            <h2>
              From value chain findings
              <br />
              to provincial investments
            </h2>
          </div>

          <div className="pcip-intro-copy">
            <p>
              The Provincial Commodity Investment Plan
              formulation process translates analytical findings
              from commodity prioritization, value chain analysis,
              risk assessment, spatial planning, and safeguards
              screening into a coordinated investment plan.
            </p>

            <p>
              The process moves from launch and planning context,
              through drafting and technical review, toward
              stakeholder validation, finalization, approval,
              and endorsement.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section
          className="pcip-process"
          id="pcip-process"
        >
          <div className="pcip-section-heading">
            <div>
              <span className="pcip-section-label">
                PCIP FORMULATION PROCESS
              </span>

              <h2>
                Seven stages from launch
                <br />
                to approved plan
              </h2>
            </div>

            <div className="pcip-section-counter">
              <strong>07</strong>

              <span>
                major stages
                <br />
                in the process
              </span>
            </div>
          </div>

          <div className="pcip-step-tabs">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeStep

              return (
                <button
                  type="button"
                  key={step.number}
                  className={`pcip-step-tab ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => handleStepChange(index)}
                >
                  <span className="pcip-tab-number">
                    {step.number}
                  </span>

                  <span className="pcip-tab-icon">
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="pcip-tab-copy">
                    <strong>{step.shortTitle}</strong>
                    <small>{step.title}</small>
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* ACTIVE STEP */}
        <section
          className="pcip-detail"
          id="pcip-step-detail"
        >
          <div className="pcip-detail-header">
            <div className="pcip-detail-number">
              {currentStep.number}
            </div>

            <div className="pcip-detail-heading">
              <span>
                STEP {currentStep.number}
              </span>

              <h2>{currentStep.title}</h2>

              <p>{currentStep.description}</p>
            </div>

            <div className="pcip-detail-icon">
              <CurrentIcon
                size={27}
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* META CARDS */}
          <div className="pcip-meta-grid">

            <div className="pcip-meta-card">
              <div className="pcip-meta-icon">
                <Target
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <span>OBJECTIVE OF THE STEP</span>

              <p>{currentStep.objective}</p>
            </div>

            <div className="pcip-meta-card">
              <div className="pcip-meta-icon">
                <Wrench
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <span>METHODOLOGIES</span>

              <ul>
                {currentStep.methodologies.map(
                  (item) => (
                    <li key={item}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="pcip-meta-card">
              <div className="pcip-meta-icon">
                <Users
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <span>PARTICIPANTS</span>

              <ul>
                {currentStep.participants.map(
                  (item) => (
                    <li key={item}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="pcip-meta-card">
              <div className="pcip-meta-icon">
                <BookOpen
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <span>POSSIBLE TOOLS & REFERENCES</span>

              <ul>
                {currentStep.tools.map(
                  (item) => (
                    <li key={item}>{item}</li>
                  )
                )}
              </ul>
            </div>

          </div>

          {/* STEP 3 SUBPROCESS */}
          {activeStep === 2 && (
            <div className="pcip-subprocess">
              <div className="pcip-subprocess-header">
                <div>
                  <span className="pcip-section-label">
                    STEP 03 WORKFLOW
                  </span>

                  <h3>
                    Drafting the PCIP
                  </h3>

                  <p>
                    Six connected sub-steps translate
                    analytical findings into a draft
                    investment plan.
                  </p>
                </div>

                <div className="pcip-subprocess-badge">
                  3A — 3F
                </div>
              </div>

              <div className="pcip-substep-tabs">
                {subSteps.map(
                  (subStep, index) => {
                    const Icon = subStep.icon
                    const isActive =
                      index === activeSubStep

                    return (
                      <button
                        type="button"
                        key={subStep.number}
                        className={`pcip-substep-tab ${
                          isActive ? 'active' : ''
                        }`}
                        onClick={() =>
                          setActiveSubStep(index)
                        }
                      >
                        <span>
                          {subStep.number}
                        </span>

                        <Icon
                          size={15}
                          strokeWidth={1.7}
                        />

                        <strong>
                          {subStep.title}
                        </strong>
                      </button>
                    )
                  }
                )}
              </div>

              <div className="pcip-substep-detail">
                <div className="pcip-substep-number">
                  {subSteps[activeSubStep].number}
                </div>

                <div>
                  <span>
                    DRAFTING THE PCIP
                  </span>

                  <h4>
                    {subSteps[activeSubStep].title}
                  </h4>

                  <p>
                    {subSteps[activeSubStep].description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* OUTPUT + QUESTIONS */}
          <div className="pcip-support-grid">

            <div className="pcip-support-card output">
              <div className="pcip-support-heading">
                <div className="pcip-support-icon">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <span>
                    EXPECTED OUTPUT
                  </span>

                  <h3>
                    What this step should produce
                  </h3>
                </div>
              </div>

              <ul>
                {currentStep.outputs.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2
                        size={14}
                        strokeWidth={1.8}
                      />

                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="pcip-support-card questions">
              <div className="pcip-support-heading">
                <div className="pcip-support-icon">
                  <MessageSquare
                    size={17}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <span>
                    GUIDE QUESTIONS
                  </span>

                  <h3>
                    Questions for the planning team
                  </h3>
                </div>
              </div>

              <ul>
                {currentStep.questions.map(
                  (item) => (
                    <li key={item}>
                      <span className="pcip-question-dot" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

          </div>

          {/* DETAILED SECTIONS */}
          {currentStep.sections?.length > 0 && (
            <div className="pcip-sections">

              <div className="pcip-sections-heading">
                <div>
                  <span className="pcip-section-label">
                    DETAILED CONTENT
                  </span>

                  <h3>
                    Step components and activities
                  </h3>
                </div>

                <span>
                  {currentStep.sections.length}{' '}
                  sections
                </span>
              </div>

              <div className="pcip-accordion-list">
                {currentStep.sections.map(
                  (section, index) => {
                    const Icon = section.icon
                    const isOpen =
                      openSection === index

                    return (
                      <div
                        className={`pcip-accordion ${
                          isOpen ? 'open' : ''
                        }`}
                        key={section.title}
                      >
                        <button
                          type="button"
                          className="pcip-accordion-button"
                          onClick={() =>
                            toggleSection(index)
                          }
                        >
                          <div className="pcip-accordion-left">
                            <div className="pcip-accordion-icon">
                              <Icon
                                size={17}
                                strokeWidth={1.7}
                              />
                            </div>

                            <div>
                              <span>
                                SECTION{' '}
                                {String(
                                  index + 1
                                ).padStart(2, '0')}
                              </span>

                              <strong>
                                {section.title}
                              </strong>
                            </div>
                          </div>

                          <div className="pcip-accordion-toggle">
                            {isOpen ? (
                              <X
                                size={16}
                                strokeWidth={1.7}
                              />
                            ) : (
                              <ChevronDown
                                size={17}
                                strokeWidth={1.7}
                              />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="pcip-accordion-content">
                            <p>
                              {section.content}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          )}

          {/* STEP NAVIGATION */}
          <div className="pcip-step-navigation">

            <button
              type="button"
              className="pcip-nav-step previous"
              onClick={handlePrevious}
              disabled={activeStep === 0}
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.8}
              />

              <span>
                <small>PREVIOUS STEP</small>

                <strong>
                  {activeStep > 0
                    ? steps[activeStep - 1]
                        .shortTitle
                    : 'Start of process'}
                </strong>
              </span>
            </button>

            <div className="pcip-nav-progress">
              <span>
                {currentStep.number}
              </span>

              <div className="pcip-progress-track">
                <div
                  className="pcip-progress-fill"
                  style={{
                    width: `${
                      ((activeStep + 1) /
                        steps.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <span>
                07
              </span>
            </div>

            <button
              type="button"
              className="pcip-nav-step next"
              onClick={handleNext}
              disabled={
                activeStep ===
                steps.length - 1
              }
            >
              <span>
                <small>NEXT STEP</small>

                <strong>
                  {activeStep <
                  steps.length - 1
                    ? steps[activeStep + 1]
                        .shortTitle
                    : 'Final stage'}
                </strong>
              </span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />
            </button>

          </div>
        </section>

        {/* PLANNING CONNECTION */}
        <section className="pcip-connection">

          <div className="pcip-connection-main">
            <span className="pcip-section-label">
              PLANNING CONNECTION
            </span>

            <h2>
              From value chain analysis
              <br />
              to investment planning
            </h2>

            <p>
              PCIP builds on the preceding planning stages.
              Commodity prioritization, market assessment,
              and climate-resilient value chain analysis
              provide analytical inputs that are translated
              into provincial investment priorities.
            </p>
          </div>

          <div className="pcip-connection-flow">

            <Link
              to="/planning/cip"
              className="pcip-connection-item"
            >
              <span>01</span>
              <strong>
                Commodity
                <br />
                Prioritization
              </strong>
              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </Link>

            <Link
              to="/planning/rma"
              className="pcip-connection-item"
            >
              <span>02</span>
              <strong>
                Rapid Market
                <br />
                Appraisal
              </strong>
              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </Link>

            <Link
              to="/planning/ivca"
              className="pcip-connection-item"
            >
              <span>03</span>
              <strong>
                Value Chain
                <br />
                Analysis
              </strong>
              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </Link>

            <div className="pcip-connection-item current">
              <span>04</span>
              <strong>
                PCIP
                <br />
                Formulation
              </strong>

              <CheckCircle2
                size={16}
                strokeWidth={1.7}
              />
            </div>

          </div>
        </section>

        {/* FOOTER NAVIGATION */}
        <section className="pcip-navigation">

          <Link
            to="/planning/ivca"
            className="pcip-navigation-card"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.8}
            />

            <span>
              <small>
                PREVIOUS STAGE
              </small>

              <strong>
                Climate-Resilient
                <br />
                Value Chain Analysis
              </strong>
            </span>
          </Link>

          <Link
            to="/planning"
            className="pcip-navigation-center"
          >
            <span>
              PLANNING FRAMEWORK
            </span>

            <strong>
              View all stages
            </strong>
          </Link>

          <Link
            to="/planning/implementation"
            className="pcip-navigation-card right"
          >
            <span>
              <small>
                NEXT STAGE
              </small>

              <strong>
                Implementation
              </strong>
            </span>

            <ArrowRight
              size={17}
              strokeWidth={1.8}
            />
          </Link>

        </section>

      </div>
    </main>
  )
}

/*
 * Small reusable icon component for presentation-related
 * sections. Kept local so the page does not require another
 * dependency beyond lucide-react.
 */
function PresentationIcon(props) {
  return (
    <FileText
      {...props}
      strokeWidth={1.7}
    />
  )
}

export default Pcip
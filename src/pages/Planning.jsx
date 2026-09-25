import React, { useState } from 'react'
import './Planning.css'

import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Store,
  Network,
  FileText,
  Building2,
  Landmark,
  Activity,
  ClipboardCheck,
  CheckCircle2,
  Layers
} from 'lucide-react'

function Planning() {
  const [activeHeroStage, setActiveHeroStage] = useState(null)

  const stages = [
    {
      number: "01",
      label: "IDENTIFICATION",
      title: "Commodity Identification & Prioritization",
      description:
        "The planning process begins by identifying commodities with strategic potential and prioritizing them using relevant indicators, criteria, and planning considerations.",
      purpose:
        "Establish a clear basis for selecting commodities that warrant further market and value chain assessment.",
      activities: [
        "Review commodity indicators and criteria",
        "Assess commodity performance and potential",
        "Apply prioritization considerations",
        "Identify priority commodities for further analysis",
      ],
      icon: Target,
      resource: "Commodity Identification & Prioritization Resource",
      href: "/planning/cip",
    },
    {
      number: "02",
      label: "MARKET ASSESSMENT",
      title: "Rapid Market Appraisal",
      description:
        "Rapid Market Appraisal provides a practical assessment of market conditions, opportunities, constraints, actors, and linkages surrounding priority commodities.",
      purpose:
        "Generate practical market information that can guide succeeding value chain and investment analysis.",
      activities: [
        "Assess market conditions and trends",
        "Identify market actors and linkages",
        "Identify opportunities and constraints",
        "Document relevant market information",
      ],
      icon: Store,
      resource: "Rapid Market Appraisal Resource",
      href: "/planning/rma",
    },
    {
      number: "03",
      label: "VALUE CHAIN ANALYSIS",
      title: "Climate-Resilient Agro-Industry Oriented Value Chain Analysis",
      description:
        "The value chain analysis examines actors, processes, relationships, constraints, opportunities, and climate considerations across the commodity value chain.",
      purpose:
        "Develop a deeper understanding of the value chain and identify interventions that can strengthen competitiveness and resilience.",
      activities: [
        "Map value chain actors and functions",
        "Identify constraints and opportunities",
        "Assess climate-related considerations",
        "Identify potential interventions and upgrading opportunities",
      ],
      icon: Network,
      resource: "Value Chain Analysis Resource",
      href: "/planning/ivca",
    },
    {
      number: "04",
      label: "INVESTMENT PLANNING",
      title: "Provincial Commodity Investment Plan Formulation",
      description:
        "The PCIP translates commodity and value chain findings into prioritized investment interventions that can support provincial agricultural development.",
      purpose:
        "Provide a structured investment planning framework for priority commodities and value chains.",
      activities: [
        "Translate analysis into investment priorities",
        "Identify proposed interventions",
        "Define investment requirements",
        "Consolidate priorities into the provincial investment plan",
      ],
      icon: FileText,
      resource: "PCIP Formulation Resource",
      href: "/planning/pcip",
    },
    {
      number: "05",
      label: "INVESTMENT DELIVERY",
      title: "Implementation",
      description:
        "Implementation translates approved investment priorities into actionable programs and projects through investment programming, project preparation, financing, implementation, monitoring, and learning.",
      purpose:
        "Move approved investment priorities from planning into coordinated project implementation and results delivery.",
      activities: [
        "Translate PCIP priorities into investment actions",
        "Program and prepare priority projects",
        "Mobilize financing and implementation resources",
        "Coordinate project implementation and partnerships",
        "Monitor progress, performance, and results",
        "Document lessons for succeeding planning cycles",
      ],
      icon: Building2,
      resource: "Implementation Framework",
      href: "/planning/implementation",
    },
    {
      number: "06",
      label: "LOCAL GOVERNANCE",
      title: "Institutionalization",
      description:
        "Institutionalization strengthens the integration of commodity and value chain priorities into local planning, programming, budgeting, implementation, and review processes.",
      purpose:
        "Embed the planning process and PCIP priorities into regular LGU systems to support continuity, coordination, local ownership, and sustained use of evidence in development planning.",
      activities: [
        "Assess existing planning and institutional arrangements",
        "Map PCIP linkages with local plans",
        "Establish roles and responsibilities",
        "Integrate PCIP priorities into local planning",
        "Link priorities with financing and development partners",
        "Embed monitoring and review mechanisms",
        "Sustain and update the planning framework",
      ],
      icon: Building2,
      resource: "Institutionalization Framework",
      href: "/planning/institutionalization",
    },
    {
      number: "07",
      label: "PROGRAM INTEGRATION",
      title: "Mainstreaming",
      description:
        "Mainstreaming carries PCIP priorities and evidence-based commodity planning into regular DA planning, programming, implementation, coordination, and review systems.",
      purpose:
        "Integrate relevant commodity priorities and planning approaches into DA programs and broader agricultural development initiatives.",
      activities: [
        "Align PCIP priorities with DA planning directions",
        "Integrate priority interventions into relevant DA programs",
        "Translate priorities into investment programming",
        "Strengthen inter-program and inter-agency convergence",
        "Mobilize resources and development partnerships",
        "Embed mainstreaming within regular DA systems",
        "Review results and improve planning linkages",
      ],
      icon: Landmark,
      resource: "Mainstreaming Framework",
      href: "/planning/mainstreaming",
    },
    {
      number: "08",
      label: "PERFORMANCE TRACKING",
      title: "Operational Monitoring",
      description:
        "Operational monitoring tracks implementation progress, outputs, issues, and performance to provide timely information for management and adaptive decision-making.",
      purpose:
        "Generate operational information that can support corrective actions and continuous improvement.",
      activities: [
        "Define monitoring indicators",
        "Establish baselines and targets",
        "Collect and validate implementation data",
        "Track physical and financial progress",
        "Identify issues and implementation bottlenecks",
        "Apply corrective actions",
        "Review results and feed findings back into planning",
      ],
      icon: Activity,
      resource: "Operational Monitoring Framework",
      href: "/planning/monitoring",
    },
    {
      number: "09",
      label: "LEARNING & FEEDBACK",
      title: "Evaluation",
      description:
        "Evaluation examines implementation, results, outcomes, and lessons to understand what changed, what influenced performance, and what can be improved in succeeding planning cycles.",
      purpose:
        "Generate evidence-based findings and recommendations that strengthen future planning, programming, implementation, and investment decisions.",
      activities: [
        "Define evaluation purpose and scope",
        "Establish evaluation questions and criteria",
        "Review monitoring and baseline evidence",
        "Assess implementation and results",
        "Analyze outcomes and performance",
        "Document lessons and findings",
        "Develop recommendations and feed back into planning",
      ],
      icon: ClipboardCheck,
      resource: "Evaluation Framework",
      href: "/planning/evaluation",
    },
  ];

  return (
    <main className="planning-page">

      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="planning-page-hero">
        <div className="planning-page-hero-inner">

          {/* LEFT COLUMN: HERO COPY */}
          <div className="planning-page-hero-copy">
            <span className="planning-page-eyebrow">
              AGRICULTURAL PLANNING
            </span>

            <h1>
              Value Chain <br />
              <span>Development Flow</span>
            </h1>

            <p>
              A structured planning pathway connecting commodity
              prioritization, market assessment, value chain analysis,
              investment planning, implementation, monitoring,
              and evaluation.
            </p>

            <div className="planning-page-hero-actions">
              <a
                href="#planning-flow"
                className="planning-primary-button"
              >
                <span>Explore the Flow</span>
                <ArrowRight size={16} />
              </a>

              <div className="planning-stage-badge">
                <Layers size={13} className="badge-icon" />
                <span>09 INTERCONNECTED STAGES</span>
              </div>
            </div>

            {/* DYNAMIC HOVER CARD FOR DIAGRAM STAGES */}
            <div className="planning-hero-info-card">
              {activeHeroStage ? (
                <div className="planning-info-active">
                  <div className="planning-info-header">
                    <span className="planning-info-num">{activeHeroStage.number}</span>
                    <strong>{activeHeroStage.title}</strong>
                  </div>
                  <p>{activeHeroStage.description}</p>
                </div>
              ) : (
                <div className="planning-info-placeholder">
                  <CheckCircle2 size={16} />
                  <span>Hover over any stage on the diagram to inspect details.</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: CIRCULAR DIAGRAM (9 NODES) */}
          <div className="planning-page-hero-visual">
            <div className="planning-circle-wrapper">
              
              {/* RINGS */}
              <div className="planning-outer-ring" />
              <div className="planning-inner-ring" />

              {/* CENTER CORE */}
              <div className="planning-center-core">
                <strong>VALUE</strong>
                <span>CHAIN</span>
              </div>

              {/* 9 CIRCULAR NODES */}
              {stages.map((stage, index) => {
                // 9 nodes distributed evenly: 360 / 9 = 40 deg
                const angle = (index * 40) - 90; // Start at top
                const radius = 155; 
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={stage.number}
                    className={`planning-node-item ${activeHeroStage?.number === stage.number ? 'active' : ''}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveHeroStage(stage)}
                    onMouseLeave={() => setActiveHeroStage(null)}
                  >
                    <a 
                      href={`#stage-${stage.number}`} 
                      className="planning-node-button"
                      aria-label={`Jump to stage ${stage.number}`}
                    >
                      {stage.number}
                    </a>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          INTRO
          ========================================= */}
      <section className="planning-introduction">
        <div className="planning-content-width">
          <div className="planning-intro-grid">
            <div>
              <span className="planning-section-label">
                THE FRAMEWORK
              </span>
              <h2>
                From commodity identification
                to evidence-based evaluation.
              </h2>
            </div>

            <div>
              <p>
                The Value Chain Development Flow provides a structured
                sequence for moving from the identification of priority
                commodities toward market and value chain assessment,
                investment planning, implementation, monitoring, and
                evaluation.
              </p>
              <p>
                Each stage contributes information and decisions that
                support the succeeding stage, creating a continuous
                planning and learning cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FLOW OVERVIEW
          ========================================= */}
      <section
        className="planning-flow-overview"
        id="planning-flow"
      >
        <div className="planning-content-width">
          <div className="planning-flow-header">
            <div>
              <span className="planning-section-label">
                DEVELOPMENT FLOW
              </span>
              <h2>
                Nine stages of the planning cycle
              </h2>
            </div>

            <p>
              Select a stage below to explore its purpose,
              activities, and available planning resources.
            </p>
          </div>

          <div className="planning-timeline">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <a
                  key={stage.number}
                  href={`#stage-${stage.number}`}
                  className="planning-timeline-item"
                >
                  <span className="planning-timeline-number">
                    {stage.number}
                  </span>

                  <span className="planning-timeline-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="planning-timeline-text">
                    <strong>
                      {stage.title}
                    </strong>
                    <small>
                      {stage.label}
                    </small>
                  </span>

                  {index < stages.length - 1 && (
                    <span className="planning-timeline-line" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          STAGE DETAILS
          ========================================= */}
      <section className="planning-stage-details">
        <div className="planning-content-width">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                className="planning-detail-card"
                id={`stage-${stage.number}`}
                key={stage.number}
              >
                <div className="planning-detail-number">
                  {stage.number}
                </div>

                <div className="planning-detail-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="planning-detail-main">
                  <span className="planning-detail-label">
                    {stage.label}
                  </span>

                  <h2>
                    {stage.title}
                  </h2>

                  <p className="planning-detail-description">
                    {stage.description}
                  </p>

                  <div className="planning-detail-grid">
                    <div className="planning-purpose">
                      <span>
                        PURPOSE
                      </span>
                      <p>
                        {stage.purpose}
                      </p>
                    </div>

                    <div className="planning-activities">
                      <span>
                        KEY ACTIVITIES
                      </span>
                      <ul>
                        {stage.activities.map((activity) => (
                          <li key={activity}>
                            <CheckCircle2
                              size={15}
                              strokeWidth={1.8}
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {stage.resource && (
                    <div className="planning-resource">
                      <div>
                        <span>
                          AVAILABLE RESOURCE
                        </span>
                        <strong>
                          {stage.resource}
                        </strong>
                      </div>

                      <a href={stage.href}>
                        Open Resource
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================
          CLOSING
          ========================================= */}
      <section className="planning-closing">
        <div className="planning-content-width">
          <div className="planning-closing-box">
            <span className="planning-section-label">
              CONTINUOUS PLANNING CYCLE
            </span>

            <h2>
              Planning does not end with implementation.
            </h2>

            <p>
              Monitoring and evaluation provide evidence and lessons
              that can inform succeeding planning decisions, helping
              strengthen the connection between agricultural priorities,
              investments, implementation, and results.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Planning
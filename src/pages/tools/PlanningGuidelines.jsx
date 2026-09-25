import {
  BookOpen,
  FileText,
  ClipboardList,
  Map,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

import './PlanningGuidelines.css'

function PlanningGuidelines() {
  const resources = [
    {
      icon: BookOpen,
      category: 'PRDP I-PLAN',
      title: 'I-PLAN Enhanced Operations Manual',
      description:
        'Reference for investment planning processes under the PRDP Scale-Up I-PLAN Component, including commodity systems investment planning and related science-based tools.',
      href: 'https://www.prdp.da.gov.ph/wp-content/uploads/2024/04/PRDP-Scale-Up-I-PLAN-Operations-Manual.pdf',
      tag: 'OPERATIONS MANUAL',
    },
    {
      icon: ClipboardList,
      category: 'PRDP I-PLAN',
      title: 'I-PLAN Operations Manual',
      description:
        'Earlier PRDP reference covering prioritization of commodities, value chain analysis, AFMP planning, and preparation of Provincial Commodity Investment Plans.',
      href: 'https://prdp.da.gov.ph/wp-content/uploads/2015/04/I-PLAN1.pdf',
      tag: 'PLANNING GUIDE',
    },
    {
      icon: ShieldCheck,
      category: 'DA POLICY',
      title: 'Integration of PRDP Processes in DA Programs',
      description:
        'Department policy on integrating relevant PRDP planning and implementation processes, including VCA and PCIP as references for planning and budgeting.',
      href: 'https://www.da.gov.ph/wp-content/uploads/2022/08/mo62_s2022.pdf',
      tag: 'MEMORANDUM ORDER',
    },
    {
      icon: FileText,
      category: 'DA PLANNING',
      title: 'DA Public Investment Programming System',
      description:
        'DA platform and reference point for public investment programming, priority programs and projects, and the Department’s multi-year investment program.',
      href: 'https://pips.da.gov.ph/',
      tag: 'INVESTMENT PROGRAMMING',
    },
    {
      icon: Map,
      category: 'PLANNING TOOLS',
      title: 'Science-Based Planning Tools',
      description:
        'PRDP reference on the use of VCA, VSA, e-VSA, and Rapid Market Analysis in agriculture and fisheries investment planning.',
      href: 'https://prdp.da.gov.ph/institutionalizing-planning-processes-thru-science-based-tools/',
      tag: 'REFERENCE ARTICLE',
    },
  ]

  return (
    <section className="planning-guidelines">
      <div className="planning-guidelines-hero">
        <div className="planning-guidelines-hero-content">
          <span className="section-eyebrow">KNOWLEDGE & REFERENCES</span>
          <h1>Planning Guidelines</h1>
          <p>
            Official manuals, policies, and reference materials supporting
            agriculture and fisheries planning, investment programming,
            commodity planning, and evidence-based project development.
          </p>

          <div className="planning-guidelines-hero-actions">
            <a
              href="#guideline-resources"
              className="planning-guidelines-primary"
            >
              Explore Guidelines
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="planning-guidelines-hero-visual">
          <div className="guideline-stack">
            <div className="guideline-sheet sheet-back">
              <span />
              <span />
              <span />
            </div>
            <div className="guideline-sheet sheet-middle">
              <span />
              <span />
              <span />
            </div>
            <div className="guideline-sheet sheet-front">
              <div className="sheet-icon">
                <BookOpen size={27} strokeWidth={1.5} />
              </div>
              <strong>PLANNING</strong>
              <span>Guidelines & Manuals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="planning-guidelines-intro">
        <div>
          <span className="section-eyebrow">OFFICIAL REFERENCES</span>
          <h2>Guidelines for better planning</h2>
        </div>
        <p>
          These references are organized around the planning and investment
          processes most relevant to the PRDP Planners Portal. Use the source
          documents for the complete provisions, procedures, and requirements.
        </p>
      </div>

      <div className="planning-guidelines-grid" id="guideline-resources">
        {resources.map((resource) => {
          const Icon = resource.icon

          return (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="planning-guideline-card"
            >
              <div className="planning-guideline-card-top">
                <div className="planning-guideline-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                <span className="planning-guideline-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </div>

              <span className="planning-guideline-category">
                {resource.category}
              </span>

              <h3>{resource.title}</h3>
              <p>{resource.description}</p>

              <div className="planning-guideline-footer">
                <span>{resource.tag}</span>
                <ExternalLink size={12} strokeWidth={1.8} />
              </div>
            </a>
          )
        })}
      </div>

      <div className="planning-guidelines-note">
        <div className="planning-guidelines-note-icon">
          <CheckCircle2 size={19} strokeWidth={1.8} />
        </div>
        <div>
          <strong>Use the official source document as the controlling reference.</strong>
          <span>
            Portal summaries are provided for easier navigation. Always consult
            the latest official issuance, manual, or implementing guideline when
            applying a requirement to an actual planning activity.
          </span>
        </div>
      </div>
    </section>
  )
}

export default PlanningGuidelines

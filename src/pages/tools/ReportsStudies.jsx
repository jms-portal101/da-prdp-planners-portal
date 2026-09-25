import {
  FileText,
  BarChart3,
  Sprout,
  Search,
  Map,
  TrendingUp,
  ExternalLink,
  ArrowUpRight,
  BookOpenCheck,
} from 'lucide-react'

import './ReportsStudies.css'

function ReportsStudies() {
  const reports = [
    {
      icon: BarChart3,
      category: 'PRDP PROGRAM REPORT',
      title: 'Major Accomplishments of the DA-PRDP',
      description:
        'A consolidated publication highlighting major PRDP accomplishments, interventions, beneficiaries, Provincial Commodity Investment Plans, and Value Chain Analyses.',
      href: 'https://prdp.da.gov.ph/wp-content/uploads/2024/07/NEW-PRDP-InFocus-Special-Issue-compressed.pdf',
      tag: 'PROGRAM REPORT',
    },
    {
      icon: Search,
      category: 'VALUE CHAIN ANALYSIS',
      title: 'Value Chain Analysis Report Reference',
      description:
        'A PRDP report example showing how value chain analysis is used to identify strategic interventions and guide commodity investment planning.',
      href: 'https://prdp.da.gov.ph/value-chain-to-boost-competitiveness-of-agri-commodities/',
      tag: 'VCA REPORT',
    },
    {
      icon: Sprout,
      category: 'COMMODITY STUDY',
      title: 'Coconut Value Chain Assessment',
      description:
        'A PRDP technical reference illustrating the structure and expected contents of a commodity value chain study, including supply, environment, mapping, and market-related analysis.',
      href: 'https://prdp.da.gov.ph/wp-content/uploads/2024/07/TOR-COCONUT-VCA.pdf',
      tag: 'COMMODITY STUDY',
    },
    {
      icon: TrendingUp,
      category: 'MONITORING & EVALUATION',
      title: 'Rapid Appraisal of Emerging Benefits',
      description:
        'A PRDP assessment example documenting how completed infrastructure and enterprise subprojects are evaluated through beneficiary and field-level evidence.',
      href: 'https://prdp.da.gov.ph/assessing-the-impact-of-rubber-enterprise-sp-with-raeb-tool/',
      tag: 'RAEB STUDY',
    },
    {
      icon: Map,
      category: 'PLANNING & INVESTMENT',
      title: 'Regional Agri-Fishery Investment Planning',
      description:
        'A recent PRDP reference on developing a regional agri-fishery investment plan and aligning local priorities with broader regional and national development directions.',
      href: 'https://prdp.da.gov.ph/da-prdp-i-plan-advances-development-of-regional-agri-fishery-investment-plan-for-ilocos-region-through-participatory-consultation/',
      tag: 'INVESTMENT PLANNING',
    },
    {
      icon: BookOpenCheck,
      category: 'SCIENCE-BASED PLANNING',
      title: 'Science-Based Tools in Planning',
      description:
        'A PRDP reference explaining how VCA, VSA, e-VSA, and Rapid Market Analysis contribute to the preparation of commodity investment plans.',
      href: 'https://prdp.da.gov.ph/institutionalizing-planning-processes-thru-science-based-tools/',
      tag: 'PLANNING STUDY',
    },
  ]

  return (
    <section className="reports-studies">
      <div className="reports-studies-hero">
        <div className="reports-studies-hero-content">
          <span className="section-eyebrow">KNOWLEDGE & REFERENCES</span>
          <h1>Reports & Studies</h1>
          <p>
            Technical reports, assessments, value chain studies, program
            publications, and planning references that provide evidence and
            context for agriculture and fisheries investment planning.
          </p>

          <a
            href="#report-resources"
            className="reports-studies-primary"
          >
            Explore Reports
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </div>

        <div className="reports-studies-hero-visual">
          <div className="report-chart-card">
            <div className="report-chart-top">
              <span>PLANNING EVIDENCE</span>
              <BarChart3 size={18} strokeWidth={1.7} />
            </div>

            <div className="report-bars">
              <span className="bar bar-one"></span>
              <span className="bar bar-two"></span>
              <span className="bar bar-three"></span>
              <span className="bar bar-four"></span>
              <span className="bar bar-five"></span>
            </div>

            <div className="report-chart-labels">
              <span>DATA</span>
              <span>STUDY</span>
              <span>ANALYSIS</span>
              <span>PLAN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reports-studies-intro">
        <div>
          <span className="section-eyebrow">SELECTED REFERENCES</span>
          <h2>Evidence behind the plan</h2>
        </div>

        <p>
          Explore selected official PRDP references covering program
          accomplishments, value chain analysis, commodity studies,
          monitoring and evaluation, and investment planning.
        </p>
      </div>

      <div className="reports-studies-grid" id="report-resources">
        {reports.map((report) => {
          const Icon = report.icon

          return (
            <a
              key={report.title}
              href={report.href}
              target="_blank"
              rel="noopener noreferrer"
              className="report-study-card"
            >
              <div className="report-study-top">
                <div className="report-study-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <span className="report-study-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </div>

              <span className="report-study-category">
                {report.category}
              </span>

              <h3>{report.title}</h3>
              <p>{report.description}</p>

              <div className="report-study-footer">
                <span>{report.tag}</span>
                <ExternalLink size={12} strokeWidth={1.8} />
              </div>
            </a>
          )
        })}
      </div>

      <div className="reports-studies-note">
        <div className="reports-studies-note-icon">
          <FileText size={19} strokeWidth={1.8} />
        </div>

        <div>
          <strong>Reports are references, not substitutes for current policy.</strong>
          <span>
            Publication dates and study contexts vary. Check the original
            source and the latest applicable DA or PRDP issuance before using
            a report as the basis for an actual planning or investment decision.
          </span>
        </div>
      </div>
    </section>
  )
}

export default ReportsStudies

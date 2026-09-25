import './QuickAccess.css'

import {
  ClipboardList,
  TrendingUp,
  Database,
  Compass,
  LayoutDashboard,
  FolderOpen,
} from 'lucide-react'

function QuickAccess() {
  const accessItems = [
    {
      number: '01',
      title: 'Planning',
      description:
        'Planning frameworks, value chain information, and agricultural development resources.',
      icon: ClipboardList,
      href: '#planning',
    },
    {
      number: '02',
      title: 'Investment Portfolio',
      description:
        'Explore agriculture and fisheries investment opportunities and regional portfolios.',
      icon: TrendingUp,
      href: '#portfolio',
    },
    {
      number: '03',
      title: 'PRDP MIS',
      description:
        'Access PRDP project information, implementation data, and management resources for planning and monitoring.',
      icon: Database,
      href: '/prdp-mis',
    },
    {
      number: '04',
      title: 'Decision Tools',
      description:
        'GIS-based tools, assessments, maps, and analytical resources for planning.',
      icon: Compass,
      href: '#tools',
    },
    {
      number: '05',
      title: 'Dashboards',
      description:
        'Access interactive dashboards for monitoring, analysis, and decision support.',
      icon: LayoutDashboard,
      href: '#dashboards',
    },
    {
      number: '06',
      title: 'Resources',
      description:
        'Browse reports, guidelines, references, publications, and planning materials.',
      icon: FolderOpen,
      href: '#resources',
    },
  ]

  const handleClick = (event, href) => {
    if (href.startsWith('#')) {
      event.preventDefault()

      const element = document.getElementById(href.substring(1))

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  return (
    <section className="quick-access" id="quick-access">

      <div className="quick-access-header">

        <span className="section-eyebrow">
          QUICK ACCESS
        </span>

        <h2>
          Explore the Portal
        </h2>

        <p>
          Access the information, portfolios, tools, dashboards,
          and resources that support agricultural planning and
          investment decision-making.
        </p>

      </div>

      <div className="quick-access-grid">

        {accessItems.map((item) => {
          const Icon = item.icon

          return (
            <a
              key={item.number}
              href={item.href}
              className="access-card"
              onClick={(event) => handleClick(event, item.href)}
            >

              <div className="access-top">

                <span className="access-number">
                  {item.number}
                </span>

                <div className="access-icon">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

              </div>

              <div className="access-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <span className="access-arrow">
                →
              </span>

            </a>
          )
        })}

      </div>

    </section>
  )
}

export default QuickAccess
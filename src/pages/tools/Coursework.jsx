import {
  GraduationCap,
  Map,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react'

import './Coursework.css'

function Coursework() {
  const coursework = [
    {
      cluster: 'NORTH LUZON CLUSTER',
      title: 'Investment Planning Tools Coursework',
      description:
        'Access the Investment Planning Tools coursework assigned to the North Luzon Cluster through Google Classroom.',
      icon: Map,
      color: 'green',
      href: 'https://classroom.google.com/c/NTk1Mjk4MzU2NjE1?cjc=kldf35l',
    },
    {
      cluster: 'SOUTH LUZON CLUSTER',
      title: 'Investment Planning Tools Coursework',
      description:
        'Access the Investment Planning Tools coursework assigned to the South Luzon Cluster through Google Classroom.',
      icon: Map,
      color: 'blue',
      href: 'https://classroom.google.com/c/NTk1Mjk4OTYzOTYy?cjc=cpajloj',
    },
    {
      cluster: 'VISAYAS',
      title: 'Investment Planning Tools Coursework',
      description:
        'Access the Investment Planning Tools coursework assigned to the Visayas Cluster through Google Classroom.',
      icon: Map,
      color: 'teal',
      href: 'https://classroom.google.com/c/NTk1Mjk4MDI0ODAw?cjc=rvo2xwx',
    },
    {
      cluster: 'MINDANAO',
      title: 'Investment Planning Tools Coursework',
      description:
        'Access the Investment Planning Tools coursework assigned to the Mindanao Cluster through Google Classroom.',
      icon: Map,
      color: 'orange',
      href: 'https://classroom.google.com/c/NTk1Mjk4MTgyNDYy?cjc=rbryfuu',
    },
    {
      cluster: 'NPCO',
      title: 'Investment Planning Tools Coursework',
      description:
        'Access the Investment Planning Tools coursework for the National Project Coordination Office through Google Classroom.',
      icon: GraduationCap,
      color: 'purple',
      href: 'https://classroom.google.com/c/NDg2OTk4MDE2Nzk3?cjc=5zmcpyf',
    },
  ]

  return (
    <section className="coursework-page">
      <div className="coursework-container">
        <div className="coursework-hero">
          <div className="coursework-hero-content">
            <span className="coursework-eyebrow">
              RESOURCES · ONLINE COURSEWORK
            </span>

            <h1>
              Coursework on
              <br />
              Investment Planning Tools
            </h1>

            <p>
              Access the Investment Planning Tools coursework assigned to
              your cluster through Google Classroom.
            </p>

            <div className="coursework-hero-note">
              <BookOpen size={17} strokeWidth={1.8} />
              <span>
                Select your cluster below to open the corresponding
                Google Classroom.
              </span>
            </div>
          </div>

          <div className="coursework-hero-visual">
            <div className="coursework-visual-card">
              <div className="coursework-visual-icon">
                <GraduationCap size={34} strokeWidth={1.7} />
              </div>

              <span>INVESTMENT PLANNING</span>
              <strong>Coursework Access</strong>

              <div className="coursework-visual-lines">
                <i />
                <i />
                <i />
              </div>

              <div className="coursework-visual-badge">
                <BookOpen size={14} />
                Google Classroom
              </div>
            </div>
          </div>
        </div>

        <div className="coursework-section-heading">
          <div>
            <span>COURSE ACCESS</span>
            <h2>Select your cluster</h2>
          </div>

          <p>
            Use the corresponding classroom link for your assigned
            cluster or office.
          </p>
        </div>

        <div className="coursework-grid">
          {coursework.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.cluster}
                href={item.href}
                className={`coursework-card coursework-${item.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="coursework-card-top">
                  <div className="coursework-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="coursework-arrow">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="coursework-card-content">
                  <span className="coursework-cluster">
                    {item.cluster}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="coursework-card-link">
                  <span>Open Google Classroom</span>
                  <ExternalLink size={14} strokeWidth={1.8} />
                </div>
              </a>
            )
          })}
        </div>

        <div className="coursework-access-note">
          <div className="coursework-access-icon">
            <BookOpen size={19} strokeWidth={1.8} />
          </div>

          <div>
            <span>ACCESS NOTE</span>
            <p>
              Google Classroom may require you to sign in using your
              authorized Google account or join the corresponding class
              using the provided classroom link.
            </p>
          </div>
        </div>

        <div className="coursework-footer-cta">
          <span>INVESTMENT PLANNING RESOURCES</span>
          <h2>Learn the tools. Apply the planning process.</h2>
          <p>
            Use the coursework as a reference while working with the
            investment planning tools available through the Planners Portal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Coursework

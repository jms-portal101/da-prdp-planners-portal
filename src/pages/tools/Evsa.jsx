import {
  Sprout,
  Map,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  ArrowLeft,
  Layers3,
  Info,
  Monitor,
  Download,
  Database,
  SlidersHorizontal,
  MapPinned,
  ExternalLink,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'

import './Evsa.css'

function Evsa() {
  const onlineEvsaUrl =
    'http://prdp-mis.da.gov.ph/evsa/auth/login/'

  const offlineEvsaUrl =
    'https://drive.google.com/file/d/1MaTztCgOKf-ARrKfP4bk7uYIG2GgrpYF/view'

  const userGuideUrl =
    'https://prdp.da.gov.ph/wp-content/uploads/2024/04/Annex-3_-eVSA-Users-Guide.pdf'

  const dashboardUrl =
    'https://lookerstudio.google.com/embed/reporting/bbfccc25-8e75-40f5-81df-b2cc3212d233/page/p_sz19d84q1d'

  const presentationUrl =
    'https://docs.google.com/presentation/d/e/2PACX-1vSwAKMHQzd3H_l2N63CSLKRpvLyhtQ44btzjGocXoAQjU4ziHGQNV80EXNs92Id9g/embed?start=false&loop=false&delayms=3000'

  return (
    <main className="evsa-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="evsa-hero">
        <div className="evsa-hero-inner">

          <a href="/" className="evsa-back">
            <ArrowLeft size={15} />
            Back to Planners' Portal
          </a>

          <div className="evsa-hero-content">

            <div className="evsa-hero-icon">
              <Sprout size={30} strokeWidth={1.7} />
            </div>

            <span className="evsa-eyebrow">
              PRDP DECISION SUPPORT TOOL
            </span>

            <h1>
              Expanded Vulnerability
              <br />
              <span>& Suitability Assessment</span>
            </h1>

            <p>
              eVSA is a GIS-based planning tool that combines vulnerability,
              agricultural suitability, and socio-economic information to
              support commodity prioritization, spatial analysis, and
              investment planning.
            </p>

            <div className="evsa-actions">

              <a
                href={onlineEvsaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-primary"
              >
                <Monitor size={16} />
                Open eVSA Online
                <ExternalLink size={14} />
              </a>

              <a
                href={offlineEvsaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-secondary"
              >
                <Download size={16} />
                Get Offline eVSA
              </a>

            </div>

            <div className="evsa-access-note">
              <CheckCircle2 size={13} />

              <span>
                Online access and Windows offline application are available
                for planners.
              </span>
            </div>

            {/* BROWSER NOTICE */}

            <div className="evsa-browser-notice">

              <div className="evsa-browser-icon">
                <Monitor size={18} />
              </div>

              <div className="evsa-browser-content">

                <div className="evsa-browser-title">
                  <strong>Browser Compatibility</strong>
                  <span>eVSA ONLINE</span>
                </div>

                <p>
                  eVSA Online currently uses the HTTP-based PRDP MIS service.
                  If Chrome redirects the connection to HTTPS and the
                  application cannot be reached, try opening eVSA using
                  Microsoft Edge.
                </p>

                <div className="evsa-browser-status">

                  <div className="evsa-browser-supported">
                    <CheckCircle2 size={14} />
                    <span>Microsoft Edge</span>
                    <strong>Supported</strong>
                  </div>

                  <div className="evsa-browser-info">
                    <Info size={14} />
                    <span>Google Chrome</span>
                    <strong>May require HTTPS access</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="evsa-hero-visual">

            <div className="evsa-visual-card">

              <div className="evsa-visual-header">
                <span>eVSA PLANNING WORKFLOW</span>

                <span className="evsa-active">
                  ● PRDP TOOL
                </span>
              </div>

              <div className="evsa-map-visual">

                <div className="map-grid"></div>

                <div className="map-shape map-shape-one"></div>
                <div className="map-shape map-shape-two"></div>
                <div className="map-shape map-shape-three"></div>

                <div className="map-point point-one"></div>
                <div className="map-point point-two"></div>
                <div className="map-point point-three"></div>

                <div className="evsa-map-label label-one">
                  SUITABILITY
                </div>

                <div className="evsa-map-label label-two">
                  VULNERABILITY
                </div>

                <div className="evsa-map-label label-three">
                  PRIORITY
                </div>

              </div>

              <div className="evsa-visual-footer">

                <div>
                  <span>ANALYSIS</span>
                  <strong>VSA + EVSA</strong>
                </div>

                <div>
                  <span>PARAMETERS</span>
                  <strong>CUSTOMIZABLE</strong>
                </div>

                <div>
                  <span>OUTPUT</span>
                  <strong>RANKING & MAP</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          OVERVIEW
      ========================================= */}

      <section className="evsa-overview" id="overview">

        <div className="evsa-container">

          <div className="evsa-section-header">

            <div>

              <span className="evsa-section-label">
                ABOUT eVSA
              </span>

              <h2>
                Science-based information for agricultural planning.
              </h2>

            </div>

            <p>
              The Expanded Vulnerability and Suitability Assessment helps
              planners evaluate areas based on agricultural suitability,
              vulnerability, and socio-economic conditions.
            </p>

          </div>

          <div className="evsa-feature-grid">

            <div className="evsa-feature-card evsa-green">

              <div className="evsa-feature-icon">
                <Sprout size={21} />
              </div>

              <span>01</span>

              <h3>Agricultural Suitability</h3>

              <p>
                Assess the suitability of areas for specific agricultural
                commodities using relevant agro-edaphic and agricultural
                information.
              </p>

            </div>

            <div className="evsa-feature-card evsa-blue">

              <div className="evsa-feature-icon">
                <ShieldCheck size={21} />
              </div>

              <span>02</span>

              <h3>Vulnerability Assessment</h3>

              <p>
                Consider vulnerability factors including exposure to
                climate-related hazards and conditions that may affect
                agricultural production.
              </p>

            </div>

            <div className="evsa-feature-card evsa-purple">

              <div className="evsa-feature-icon">
                <Database size={21} />
              </div>

              <span>03</span>

              <h3>Socio-economic Analysis</h3>

              <p>
                Incorporate socio-economic parameters such as poverty
                incidence, production area, and other relevant indicators.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          PLANNER WORKFLOW
      ========================================= */}

      <section className="evsa-workflow">

        <div className="evsa-container">

          <div className="evsa-workflow-header">

            <div>

              <span className="evsa-section-label">
                HOW IT WORKS
              </span>

              <h2>
                From parameters to planning insight.
              </h2>

            </div>

            <p>
              eVSA allows planners to define the scope of an analysis,
              assign parameters and weights, generate rankings, and
              visualize the results spatially.
            </p>

          </div>

          <div className="evsa-workflow-grid">

            <div className="evsa-workflow-step">

              <div className="evsa-step-number">
                01
              </div>

              <div className="evsa-step-icon">
                <MapPinned size={20} />
              </div>

              <h3>Define Area</h3>

              <p>
                Select the region, province, and geographic scope of the
                analysis.
              </p>

            </div>

            <div className="evsa-workflow-line"></div>

            <div className="evsa-workflow-step">

              <div className="evsa-step-number">
                02
              </div>

              <div className="evsa-step-icon">
                <SlidersHorizontal size={20} />
              </div>

              <h3>Set Parameters</h3>

              <p>
                Select relevant VSA and socio-economic parameters and
                assign appropriate weights.
              </p>

            </div>

            <div className="evsa-workflow-line"></div>

            <div className="evsa-workflow-step">

              <div className="evsa-step-number">
                03
              </div>

              <div className="evsa-step-icon">
                <BarChart3 size={20} />
              </div>

              <h3>Generate Ranking</h3>

              <p>
                Process the selected parameters to generate an analysis
                and ranking.
              </p>

            </div>

            <div className="evsa-workflow-line"></div>

            <div className="evsa-workflow-step">

              <div className="evsa-step-number">
                04
              </div>

              <div className="evsa-step-icon">
                <Map size={20} />
              </div>

              <h3>Visualize Results</h3>

              <p>
                Explore the resulting ranking through maps and spatial
                visualization.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          ACCESS
      ========================================= */}

      <section className="evsa-access">

        <div className="evsa-container">

          <div className="evsa-access-header">

            <span className="evsa-section-label">
              ACCESS eVSA
            </span>

            <h2>
              Choose how you want to use the tool.
            </h2>

            <p>
              Use the online application for web-based analysis, or
              install the Windows application for offline work.
            </p>

          </div>

          <div className="evsa-access-grid">

            {/* ONLINE */}

            <div className="evsa-access-card evsa-online">

              <div className="evsa-access-card-top">

                <div className="evsa-access-icon">
                  <Monitor size={24} />
                </div>

                <span className="evsa-access-status">
                  ONLINE
                </span>

              </div>

              <h3>eVSA Online</h3>

              <p>
                Access the web-based eVSA application directly through
                the PRDP MIS platform.
              </p>

              <div className="evsa-access-list">

                <div>
                  <CheckCircle2 size={15} />
                  <span>Web-based access</span>
                </div>

                <div>
                  <CheckCircle2 size={15} />
                  <span>No local installation required</span>
                </div>

                <div>
                  <CheckCircle2 size={15} />
                  <span>Access through PRDP MIS</span>
                </div>

              </div>

              <a
                href={onlineEvsaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-primary"
              >
                <Monitor size={16} />
                Open eVSA Online
                <ExternalLink size={14} />
              </a>

            </div>

            {/* OFFLINE */}

            <div className="evsa-access-card evsa-offline">

              <div className="evsa-access-card-top">

                <div className="evsa-access-icon">
                  <Download size={24} />
                </div>

                <span className="evsa-access-status">
                  WINDOWS
                </span>

              </div>

              <h3>eVSA Offline</h3>

              <p>
                Download the Windows-based eVSA application for offline
                analysis and local use.
              </p>

              <div className="evsa-access-list">

                <div>
                  <CheckCircle2 size={15} />
                  <span>Windows application</span>
                </div>

                <div>
                  <CheckCircle2 size={15} />
                  <span>Offline analysis</span>
                </div>

                <div>
                  <CheckCircle2 size={15} />
                  <span>
                    Install using eVSA WinApp installer
                  </span>
                </div>

              </div>

              <a
                href={offlineEvsaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-access-button"
              >
                Download eVSA Offline
                <Download size={15} />
              </a>

            </div>

          </div>

          {/* USERS' GUIDE */}

          <div className="evsa-guide">

            <div className="evsa-guide-icon">
              <BookOpen size={20} />
            </div>

            <div className="evsa-guide-content">

              <span>
                OFFICIAL DOCUMENTATION
              </span>

              <h3>
                eVSA Users' Guide
              </h3>

              <p>
                Follow the official PRDP guide for installation,
                analysis setup, parameters, weights, ranking, and
                map visualization.
              </p>

            </div>

            <a
              href={userGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="evsa-guide-button"
            >
              View Users' Guide
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

      </section>

      {/* =========================================
          eVSA INTELLIGENCE
          DASHBOARD + PRESENTATION
      ========================================= */}

      <section className="evsa-intelligence">

        <div className="evsa-container">

          <div className="evsa-intelligence-header">

            <span className="evsa-section-label">
              eVSA INTELLIGENCE
            </span>

            <h2>
              Explore eVSA results,
              <br />
              dashboards, and learning materials.
            </h2>

            <p>
              Access the eVSA dashboard and presentation materials
              directly from the DA-PRDP Planners' Portal.
            </p>

          </div>

          {/* =========================================
              LIVE DASHBOARD
          ========================================= */}

          <div className="evsa-resource-section">

            <div className="evsa-resource-heading">

              <div>

                <span className="evsa-resource-label">
                  LIVE DASHBOARD
                </span>

                <h3>
                  eVSA Dashboard
                </h3>

                <p>
                  Explore eVSA planning information, analysis results,
                  and spatial visualization through the live dashboard.
                </p>

              </div>

              <a
                href={dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-resource-button"
              >
                Open Dashboard
                <ExternalLink size={15} />
              </a>

            </div>

            <div className="evsa-dashboard-frame">

              <iframe
                title="eVSA Dashboard"
                src={dashboardUrl}
                frameBorder="0"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />

            </div>

          </div>

          {/* =========================================
              PRESENTATION
          ========================================= */}

          <div className="evsa-resource-section">

            <div className="evsa-resource-heading">

              <div>

                <span className="evsa-resource-label">
                  LEARNING MATERIAL
                </span>

                <h3>
                  eVSA Presentation
                </h3>

                <p>
                  Review the eVSA presentation for orientation,
                  training, and planning reference.
                </p>

              </div>

              <a
                href={presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-resource-button"
              >
                Open Presentation
                <ExternalLink size={15} />
              </a>

            </div>

            <div className="evsa-presentation-frame">

              <iframe
                title="eVSA Presentation"
                src={presentationUrl}
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          PLANNING CONNECTION
      ========================================= */}

      <section className="evsa-information" id="information">

        <div className="evsa-container">

          <div className="evsa-information-grid">

            <div>

              <span className="evsa-section-label">
                eVSA IN PLANNING
              </span>

              <h2>
                Connect spatial evidence with investment decisions.
              </h2>

              <p>
                eVSA supports PRDP planning by providing evidence that
                can help identify suitable areas, understand vulnerability,
                compare locations, and prioritize interventions for
                agricultural commodities.
              </p>

              <div className="evsa-info-list">

                <div>
                  <Layers3 size={18} />
                  <span>
                    Agricultural suitability information
                  </span>
                </div>

                <div>
                  <ShieldCheck size={18} />
                  <span>
                    Vulnerability and climate-related factors
                  </span>
                </div>

                <div>
                  <Database size={18} />
                  <span>
                    Socio-economic indicators
                  </span>
                </div>

                <div>
                  <BarChart3 size={18} />
                  <span>
                    Ranking for planning and prioritization
                  </span>
                </div>

                <div>
                  <Map size={18} />
                  <span>
                    Spatial visualization of results
                  </span>
                </div>

              </div>

            </div>

            <div className="evsa-info-panel">

              <div className="evsa-info-panel-icon">
                <Sprout size={21} />
              </div>

              <span>
                DA-PRDP PLANNERS' PORTAL
              </span>

              <h3>
                eVSA Decision Support
              </h3>

              <p>
                Use eVSA as part of the evidence base for commodity
                planning, Value Chain Analysis, Provincial Commodity
                Investment Planning, and related agricultural investment
                decisions.
              </p>

              <a
                href={onlineEvsaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="evsa-panel-button"
              >
                Launch eVSA
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          SOURCE NOTE
      ========================================= */}

      <section className="evsa-source">

        <div className="evsa-container">

          <div className="evsa-source-inner">

            <Info size={16} />

            <p>
              eVSA information and workflow presented on this page are
              based on official DA-PRDP eVSA documentation and users'
              guide.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Evsa
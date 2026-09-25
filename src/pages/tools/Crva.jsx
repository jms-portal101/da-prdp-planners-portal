import {
  ShieldCheck,
  CloudRain,
  ThermometerSun,
  Waves,
  Mountain,
  BarChart3,
  Map,
  Database,
  ExternalLink,
  ArrowLeft,
  Info,
  CheckCircle2,
  Presentation,
  PlayCircle,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Globe2,
  Layers3,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import './Crva.css'

/* =========================================
   EXTERNAL CRVA RESOURCES
========================================= */

const crvaUrl =
  'https://www.daprdp-plannersportal.net/crao'

const ciatUrl =
  'https://ciatph.github.io/#/home'

const presentationUrl =
  'https://drive.google.com/file/d/1XfinkZwY8F8ofqnQwgj5mG5s7NGcTac0/view'

const videoUrl =
  'https://www.youtube.com/embed/1Yj8FVm7TJg'

const overallDashboardUrl =
  'https://datastudio.google.com/embed/reporting/49953235-fd20-4d55-afdd-74b3d1982644/page/tg9mC'

const hazardDashboardUrl =
  'https://datastudio.google.com/embed/reporting/d5d4eb88-224b-4f91-970f-753742a716bd/page/209mC'

const adaptiveCapacityDashboardUrl =
  'https://datastudio.google.com/embed/reporting/9d36e2c0-2696-49b0-a634-79ce6e1d2e92/page/UPAnC'

const overallMapUrl =
  'https://geomapping.da.gov.ph/prdp/webgis/crva'

const hazardMapUrl =
  'https://geomapping.da.gov.ph/prdp/webgis/crva/hazard'

const adaptiveCapacityMapUrl =
  'https://geomapping.da.gov.ph/prdp/webgis/crva/adaptive-capacity'

const sensitivityMapUrl =
  'https://geomapping.da.gov.ph/prdp/webgis/crva/sensitivity'

const climateProfileUrl =
  'https://cgspace.cgiar.org/server/api/core/bitstreams/6b842948-e6d2-4c8e-8555-445ea47e2d14/content'

const pcipTemplateUrl =
  'https://drive.google.com/drive/folders/1xRyZECtg67LvsV44CZU-wuPYqzeBZGKW'


function Crva() {

  /* =========================================
     HAZARDS
  ========================================= */

  const hazards = [
    {
      name: 'Typhoon',
      icon: CloudRain,
    },
    {
      name: 'Flood',
      icon: Waves,
    },
    {
      name: 'Drought',
      icon: ThermometerSun,
    },
    {
      name: 'Soil Erosion',
      icon: Mountain,
    },
    {
      name: 'Landslide',
      icon: Mountain,
    },
    {
      name: 'Salt Water Intrusion',
      icon: Waves,
    },
    {
      name: 'Storm Surge',
      icon: Waves,
    },
    {
      name: 'Sea Level Rise',
      icon: ThermometerSun,
    },
  ]


  return (
    <main className="crva-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="crva-hero">
        <div className="crva-hero-glow crva-glow-one"></div>
        <div className="crva-hero-glow crva-glow-two"></div>

        <div className="crva-container">
          <Link to="/tools" className="crva-back">
            <ArrowLeft size={15} />
            Back to Planning Tools
          </Link>

          <div className="crva-hero-grid">

            <div className="crva-hero-content">

              <div className="crva-hero-icon">
                <ShieldCheck size={29} strokeWidth={1.7} />
              </div>

              <span className="crva-eyebrow">
                DA-PRDP CLIMATE RISK TOOL
              </span>

              <h1>
                Climate Risk
                <br />
                <span>Vulnerability Assessment</span>
              </h1>

              <p>
                Climate Risk Vulnerability Assessment (CRVA) provides
                climate-related information and analysis to support
                resilience-building initiatives and strengthen geographic
                targeting for agricultural planning.
              </p>

              <div className="crva-hero-actions">

                <a
                  href="#overall-crva-dashboard"
                  className="crva-primary-button"
                >
                  Open Overall CRVA Dashboard
                  <LayoutDashboard size={15} />
                </a>

                <a
                  href={ciatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crva-secondary-button"
                >
                  CIAT Resource
                  <ExternalLink size={15} />
                </a>

              </div>

              <div className="crva-meta">

                <div>
                  <strong>03</strong>
                  <span>CRVA PARAMETERS</span>
                </div>

                <div>
                  <strong>08</strong>
                  <span>CLIMATE HAZARDS</span>
                </div>

                <div>
                  <strong>2050</strong>
                  <span>SCENARIO HORIZON</span>
                </div>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="crva-hero-visual">

              <div className="crva-visual-header">
                <span>CRVA INTELLIGENCE</span>

                <span className="crva-status">
                  <span></span>
                  ACTIVE RESOURCE
                </span>
              </div>

              <div className="crva-visual-content">

                <div className="crva-visual-main-icon">
                  <ShieldCheck size={46} />
                </div>

                <span className="crva-visual-label">
                  CLIMATE RISK
                </span>

                <h3>
                  Evidence for
                  <br />
                  climate-resilient planning
                </h3>

                <p>
                  Hazards, sensitivity, adaptive capacity, and vulnerability
                  information for planning.
                </p>

              </div>

              <div className="crva-visual-footer">

                <div>
                  <CloudRain size={14} />
                  <span>HAZARDS</span>
                </div>

                <div>
                  <ThermometerSun size={14} />
                  <span>SENSITIVITY</span>
                </div>

                <div>
                  <BarChart3 size={14} />
                  <span>ADAPTIVE CAPACITY</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          ABOUT CRVA
      ========================================= */}

      <section className="crva-overview">
        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                ABOUT CRVA
              </span>

              <h2>
                Climate risk as an
                <br />
                added planning layer.
              </h2>
            </div>

            <p>
              CRVA enriches PCIP preparation by providing additional
              climate-risk information for understanding hazards, adaptive
              capacity, climate suitability, and vulnerability.
            </p>

          </div>


          <div className="crva-parameter-grid">

            {/* CROP SENSITIVITY */}

            <article className="crva-parameter-card parameter-blue">

              <div className="crva-card-icon">
                <ThermometerSun size={23} />
              </div>

              <span>01</span>

              <h3>Crop Sensitivity</h3>

              <p>
                Examines increases or decreases in the climatic suitability of
                selected crops resulting from changes in temperature and
                precipitation.
              </p>

            </article>


            {/* ADAPTIVE CAPACITY */}

            <article className="crva-parameter-card parameter-green">

              <div className="crva-card-icon">
                <BarChart3 size={23} />
              </div>

              <span>02</span>

              <h3>Adaptive Capacity</h3>

              <p>
                Considers the ability of systems to adjust to climate change,
                climate variability, and extremes, and to cope with potential
                consequences.
              </p>

            </article>


            {/* HAZARDS */}

            <article className="crva-parameter-card parameter-red">

              <div className="crva-card-icon">
                <CloudRain size={23} />
              </div>

              <span>03</span>

              <h3>Hazards</h3>

              <p>
                Uses validated datasets describing major climate-related hazards
                relevant to agricultural planning and geographic targeting.
              </p>

            </article>


            {/* VULNERABILITY */}

            <article className="crva-parameter-card parameter-purple">

              <div className="crva-card-icon">
                <ShieldCheck size={23} />
              </div>

              <span>04</span>

              <h3>Vulnerability Assessment</h3>

              <p>
                Brings together climate sensitivity, hazards, and adaptive
                capacity to support vulnerability analysis and climate-resilient
                planning.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================
          PRESENTATION
      ========================================= */}

      <section className="crva-resource-section">
        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                CRVA REFERENCE
              </span>

              <h2>
                Climate-resilient
                <br />
                agriculture presentation.
              </h2>
            </div>

            <p>
              Access the CIAT presentation material used to introduce Climate
              Risk Vulnerability Assessment and its application to
              climate-resilient agricultural planning.
            </p>

          </div>


          <div className="crva-presentation-card">

            <div className="crva-presentation-icon">
              <Presentation size={30} />
            </div>

            <div className="crva-presentation-content">

              <span>CIAT PRESENTATION MATERIAL</span>

              <h3>
                Climate Risk Vulnerability Assessment
              </h3>

              <p>
                View or download the presentation material from the DA-PRDP CRVA
                resource.
              </p>

            </div>

            <a
              href={presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="crva-resource-button"
            >
              Open Presentation
              <ExternalLink size={15} />
            </a>

          </div>

        </div>
      </section>


      {/* =========================================
          VIDEO
      ========================================= */}

      <section className="crva-video-section">
        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                VIDEO PRESENTATION
              </span>

              <h2>
                Learn more about CRVA.
              </h2>
            </div>

            <p>
              Watch the CRVA video presentation for an overview of the
              assessment approach and its application to planning.
            </p>

          </div>


          <div className="crva-video-wrapper">

            <iframe
              src={videoUrl}
              title="CRVA Video Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </section>


      {/* =========================================
          OVERALL DASHBOARD
      ========================================= */}

      <section
        className="crva-dashboard-section"
        id="overall-crva-dashboard"
      >

        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                CRVA DASHBOARD
              </span>

              <h2>
                Overall CRVA
                <br />
                results.
              </h2>
            </div>

            <p>
              Explore overall CRVA information and results related to hazards,
              adaptive capacity, sensitivity, and vulnerability.
            </p>

          </div>


          <div className="crva-dashboard-card">

            <div className="crva-embed-header">

              <div className="crva-embed-title">

                <div className="crva-embed-icon">
                  <LayoutDashboard size={21} />
                </div>

                <div>
                  <span>INTERACTIVE DASHBOARD</span>

                  <h3>
                    Overall CRVA Dashboard
                  </h3>
                </div>

              </div>


              <a
                href={overallDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-embed-open"
              >
                Open Full Dashboard
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="crva-dashboard-frame">

              <iframe
                src={overallDashboardUrl}
                title="Overall CRVA Dashboard"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          SPATIAL INTELLIGENCE
      ========================================= */}

      <section className="crva-map-section">
        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                SPATIAL INTELLIGENCE
              </span>

              <h2>
                Explore CRVA
                <br />
                spatial results.
              </h2>
            </div>

            <p>
              Explore the spatial distribution of CRVA results through the
              DA-PRDP Enhanced Geomapping System.
            </p>

          </div>


          {/* OVERALL VULNERABILITY */}

          <div className="crva-map-card crva-map-card-large">

            <div className="crva-embed-header">

              <div className="crva-embed-title">

                <div className="crva-embed-icon map-icon">
                  <Globe2 size={21} />
                </div>

                <div>
                  <span>DA-PRDP ENHANCED GEOMAPPING</span>

                  <h3>
                    Overall / Composite Vulnerability Map
                  </h3>
                </div>

              </div>


              <a
                href={overallMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-embed-open"
              >
                Open Full Map
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="crva-map-frame crva-map-frame-large">

              <iframe
                src={overallMapUrl}
                title="Overall CRVA Vulnerability Map"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>


          {/* MAP GRID */}

          <div className="crva-map-grid">

            {/* HAZARD MAP */}

            <div className="crva-map-card">

              <div className="crva-embed-header">

                <div className="crva-embed-title">

                  <div className="crva-embed-icon hazard-map-icon">
                    <CloudRain size={20} />
                  </div>

                  <div>
                    <span>CRVA SPATIAL RESULT</span>

                    <h3>
                      Hazard Result Map
                    </h3>
                  </div>

                </div>


                <a
                  href={hazardMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crva-embed-open"
                >
                  Open
                  <ExternalLink size={13} />
                </a>

              </div>


              <div className="crva-map-frame">

                <iframe
                  src={hazardMapUrl}
                  title="CRVA Hazard Result Map"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </div>

            </div>


            {/* ADAPTIVE CAPACITY MAP */}

            <div className="crva-map-card">

              <div className="crva-embed-header">

                <div className="crva-embed-title">

                  <div className="crva-embed-icon adaptive-map-icon">
                    <BarChart3 size={20} />
                  </div>

                  <div>
                    <span>CRVA SPATIAL RESULT</span>

                    <h3>
                      Adaptive Capacity Map
                    </h3>
                  </div>

                </div>


                <a
                  href={adaptiveCapacityMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crva-embed-open"
                >
                  Open
                  <ExternalLink size={13} />
                </a>

              </div>


              <div className="crva-map-frame">

                <iframe
                  src={adaptiveCapacityMapUrl}
                  title="CRVA Adaptive Capacity Map"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </div>

            </div>


            {/* SENSITIVITY MAP */}

            <div
              className="crva-map-card crva-map-card-full"
              id="sensitivity-result-map"
            >

              <div className="crva-embed-header">

                <div className="crva-embed-title">

                  <div className="crva-embed-icon sensitivity-map-icon">
                    <ThermometerSun size={20} />
                  </div>

                  <div>
                    <span>CRVA SPATIAL RESULT</span>

                    <h3>
                      Sensitivity Result Map
                    </h3>
                  </div>

                </div>


                <a
                  href={sensitivityMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crva-embed-open"
                >
                  Open
                  <ExternalLink size={13} />
                </a>

              </div>


              <div className="crva-map-frame">

                <iframe
                  src={sensitivityMapUrl}
                  title="CRVA Sensitivity Result Map"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          HAZARD ASSESSMENT
      ========================================= */}

      <section className="crva-hazards">
        <div className="crva-container">

          <div className="crva-hazards-heading">

            <div>
              <span className="crva-section-label">
                HAZARD ASSESSMENT
              </span>

              <h2>
                Eight climate-related
                <br />
                hazard layers.
              </h2>
            </div>

            <p>
              CRVA uses validated datasets for major climate-related hazards
              relevant to agricultural planning and geographic targeting.
            </p>

          </div>


          <div className="crva-hazard-grid">

            {hazards.map((hazard, index) => {

              const Icon = hazard.icon;

              return (
                <div
                  className="crva-hazard-item"
                  key={hazard.name}
                >

                  <div className="crva-hazard-icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {hazard.name}
                    </strong>
                  </div>

                </div>
              );

            })}

          </div>

        </div>
      </section>


      {/* =========================================
          HAZARD DASHBOARD
      ========================================= */}

      <section className="crva-dashboard-section crva-dashboard-alt">

        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                HAZARD DASHBOARD
              </span>

              <h2>
                Explore hazard
                <br />
                information.
              </h2>
            </div>

            <p>
              Review hazard-related CRVA information and overall results through
              the interactive dashboard.
            </p>

          </div>


          <div className="crva-dashboard-card">

            <div className="crva-embed-header">

              <div className="crva-embed-title">

                <div className="crva-embed-icon hazard-dashboard-icon">
                  <CloudRain size={21} />
                </div>

                <div>
                  <span>INTERACTIVE DASHBOARD</span>

                  <h3>
                    Hazard CRVA Dashboard
                  </h3>
                </div>

              </div>


              <a
                href={hazardDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-embed-open"
              >
                Open Full Dashboard
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="crva-dashboard-frame">

              <iframe
                src={hazardDashboardUrl}
                title="CRVA Hazard Dashboard"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CLIMATE SENSITIVITY
      ========================================= */}

      <section className="crva-detail-section">

        <div className="crva-container">

          <div className="crva-detail-grid">

            <div className="crva-detail-icon">
              <ThermometerSun size={27} />
            </div>


            <div>

              <span className="crva-section-label">
                CLIMATE SENSITIVITY
              </span>

              <h2>
                Crop suitability under
                <br />
                future climate scenarios.
              </h2>

              <p>
                CRVA sensitivity analysis examines changes in the climatic
                suitability of selected crops in response to changes in
                temperature and precipitation.
              </p>


              {/* =========================================
                  CLICKABLE CROP-SCENARIO PROJECTIONS
              ========================================= */}

              <a
                href="#sensitivity-result-map"
                className="crva-detail-stat"
              >

                <div>

                  <strong>20</strong>

                  <span>
                    crop-scenario projections
                    <br />
                    up to 2050
                  </span>

                </div>

                <ExternalLink size={15} />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ADAPTIVE CAPACITY DASHBOARD
      ========================================= */}

      <section className="crva-dashboard-section crva-dashboard-alt">

        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                ADAPTIVE CAPACITY DASHBOARD
              </span>

              <h2>
                Explore adaptive
                <br />
                capacity results.
              </h2>
            </div>

            <p>
              Review adaptive capacity information through the interactive CRVA
              dashboard.
            </p>

          </div>


          <div className="crva-dashboard-card">

            <div className="crva-embed-header">

              <div className="crva-embed-title">

                <div className="crva-embed-icon adaptive-dashboard-icon">
                  <BarChart3 size={21} />
                </div>

                <div>
                  <span>INTERACTIVE DASHBOARD</span>

                  <h3>
                    Adaptive Capacity CRVA Dashboard
                  </h3>
                </div>

              </div>


              <a
                href={adaptiveCapacityDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-embed-open"
              >
                Open Full Dashboard
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="crva-dashboard-frame">

              <iframe
                src={adaptiveCapacityDashboardUrl}
                title="CRVA Adaptive Capacity Dashboard"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ADAPTIVE CAPACITY
      ========================================= */}

      <section className="crva-adaptive-section">

        <div className="crva-container">

          <div className="crva-adaptive-grid">

            <div>

              <span className="crva-section-label">
                ADAPTIVE CAPACITY
              </span>

              <h2>
                Understanding the ability
                <br />
                to adapt.
              </h2>

              <p>
                CRVA addresses vulnerability through the incorporation of
                Adaptive Capacity, which considers the ability of a system to
                adjust to climate change, climate variability, and extremes, and
                to cope with potential consequences.
              </p>

            </div>


            <div className="crva-capacity-list">

              <div>
                <CheckCircle2 size={17} />
                <span>Economic</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Natural</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Social</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Physical</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Anticipatory</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Institutional</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Human</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          REFERENCE DOCUMENTS
      ========================================= */}

      <section className="crva-reference-section">

        <div className="crva-container">

          <div className="crva-section-heading">

            <div>
              <span className="crva-section-label">
                REFERENCE MATERIALS
              </span>

              <h2>
                Climate-resilient
                <br />
                planning resources.
              </h2>
            </div>

            <p>
              Supporting references and planning materials for integrating
              climate-risk information into agricultural and investment
              planning.
            </p>

          </div>


          <div className="crva-reference-grid">

            {/* CLIMATE PROFILE */}

            <article className="crva-reference-card">

              <div className="crva-reference-icon">
                <FileText size={24} />
              </div>

              <span>
                REFERENCE DOCUMENT
              </span>

              <h3>
                Climate-Resilient Agriculture in the Philippines Profile
              </h3>

              <p>
                Access the climate-resilient agriculture profile providing
                supporting information for climate-risk and agricultural
                planning.
              </p>

              <a
                href={climateProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-reference-button"
              >
                View Document
                <ExternalLink size={14} />
              </a>

            </article>


            {/* PCIP TEMPLATE */}

            <article className="crva-reference-card">

              <div className="crva-reference-icon">
                <FolderOpen size={24} />
              </div>

              <span>
                PCIP PLANNING RESOURCE
              </span>

              <h3>
                Enhanced PCIP Suggested Template
              </h3>

              <p>
                Access the suggested PCIP template and supporting materials for
                enhanced planning and climate-risk integration.
              </p>

              <a
                href={pcipTemplateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-reference-button"
              >
                Open Resource Folder
                <ExternalLink size={14} />
              </a>

            </article>


            {/* ORIGINAL CRVA */}

            <article className="crva-reference-card">

              <div className="crva-reference-icon">
                <Layers3 size={24} />
              </div>

              <span>
                ORIGINAL RESOURCE
              </span>

              <h3>
                DA-PRDP CRVA Resource Page
              </h3>

              <p>
                Visit the original CRVA resource page for the legacy
                presentation and supporting information.
              </p>

              <a
                href={crvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crva-reference-button"
              >
                Open Original Page
                <ExternalLink size={14} />
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          PLANNING CONNECTION
      ========================================= */}

      <section className="crva-planning-section">

        <div className="crva-container">

          <div className="crva-planning-box">

            <div className="crva-planning-icon">
              <ShieldCheck size={25} />
            </div>

            <div className="crva-planning-content">

              <span>
                PLANNING CONNECTION
              </span>

              <h2>
                Use CRVA evidence to strengthen climate-resilient investment
                planning.
              </h2>

              <p>
                CRVA provides complementary climate-risk evidence that can be
                considered alongside commodity, infrastructure, spatial,
                socio-economic, and investment information during PCIP
                preparation.
              </p>

            </div>

            <Link
              to="/tools"
              className="crva-planning-button"
            >
              Back to Planning Tools
              <ArrowLeft size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          SOURCE
      ========================================= */}

      <section className="crva-source">

        <div className="crva-container">

          <div className="crva-source-inner">

            <div className="crva-source-icon">
              <Info size={15} />
            </div>

            <p>
              Data Source: Climate-Resilient Agriculture Office (CRAO) and
              International Center for Tropical Agriculture (CIAT). CRVA is
              presented as a complementary analytical layer supporting PCIP
              preparation and climate-resilient agricultural planning.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


export default Crva
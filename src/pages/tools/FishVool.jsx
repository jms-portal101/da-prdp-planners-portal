import {
  Fish,
  ShieldCheck,
  Waves,
  ThermometerSun,
  BarChart3,
  Map,
  ExternalLink,
  ArrowLeft,
  Info,
  CheckCircle2,
  FileText,
  PlayCircle,
  Database,
  Globe2,
  Anchor,
  Sprout,
  Layers3,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import './FishVool.css'


/* =========================================
   FISHVOOL RESOURCES
========================================= */

const projectReportUrl =
  'https://drive.google.com/file/d/1sxzcNDhngIn3bTmMWwrXwOO2HgR3oumY/view?usp=sharing'


const suitabilityMapUrl =
  'https://geomapping.maps.arcgis.com/apps/webappviewer/index.html?id=0310fee4355443c398ed474872f6753e'


const vulnerabilityMapUrl =
  'https://geomapping.maps.arcgis.com/apps/webappviewer/index.html?id=6eaa2100e366477d9a65e876c2f54dd0'


const fishvoolManualUrl =
  'https://repository.nfrdi.da.gov.ph/items/dd1d0372-a974-4319-9868-fa3c8b7556a4/full'


const fishvoolArticleUrl =
  'https://nfrdi.da.gov.ph/2022/12/15/fishvool-equipping-philippine-fisheries-to-manage-hazard-effects-of-climate-change/'


const fishvoolVideoUrl =
  'https://www.youtube.com/watch?v=qxKURIGxrss'


function FishVool() {

  /* =========================================
     VULNERABILITY COMPONENTS
  ========================================= */

  const vulnerabilityComponents = [
    {
      number: '01',
      title: 'Exposure',
      icon: Waves,
      description:
        'Describes the extent to which fisheries and aquaculture systems are exposed to climate-related hazards and environmental pressures.',
      className: 'fishvool-component-exposure',
    },
    {
      number: '02',
      title: 'Sensitivity',
      icon: ThermometerSun,
      description:
        'Considers characteristics and conditions of fisheries and aquaculture systems that influence how they may be affected by climate-related changes.',
      className: 'fishvool-component-sensitivity',
    },
    {
      number: '03',
      title: 'Adaptive Capacity',
      icon: BarChart3,
      description:
        'Considers the ability of fisheries communities and systems to adjust, cope with impacts, and respond to climate-related changes.',
      className: 'fishvool-component-adaptive',
    },
  ]


  /* =========================================
     FISHERY SECTORS
  ========================================= */

  const fisherySectors = [
    {
      number: '01',
      title: 'Capture Fisheries',
      icon: Fish,
      description:
        'Assessment of fisheries that depend on natural aquatic ecosystems, including vulnerability and suitability information for selected capture-fishery commodities.',
    },
    {
      number: '02',
      title: 'Aquaculture',
      icon: Sprout,
      description:
        'Assessment of fish and aquatic production systems, including vulnerability and suitability information for selected aquaculture commodities.',
    },
  ]


  /* =========================================
     PRIORITY COMMODITIES
  ========================================= */

  const captureCommodities = [
    'Indian mackerel',
    'Skipjack tuna',
    'Bigeye scad',
    'Yellowfin tuna',
    'Dolphinfish',
    'Yellowtail scad',
  ]


  const aquacultureCommodities = [
    'Milkfish',
    'Tilapia',
  ]


  return (
    <main className="fishvool-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="fishvool-hero">

        <div className="fishvool-hero-glow fishvool-glow-one"></div>
        <div className="fishvool-hero-glow fishvool-glow-two"></div>

        <div className="fishvool-container">

          <Link
            to="/tools"
            className="fishvool-back"
          >
            <ArrowLeft size={15} />
            Back to Planning Tools
          </Link>


          <div className="fishvool-hero-grid">

            {/* HERO CONTENT */}

            <div className="fishvool-hero-content">

              <div className="fishvool-hero-icon">
                <Fish
                  size={31}
                  strokeWidth={1.7}
                />
              </div>


              <span className="fishvool-eyebrow">
                DA-NFRDI FISHERIES CLIMATE TOOL
              </span>


              <h1>
                Fisheries
                <br />
                <span>Vulnerability Assessment</span>
              </h1>


              <p>
                FishVool is a fisheries vulnerability assessment tool developed
                by the National Fisheries Research and Development Institute
                (NFRDI) to assess potential climate-change impacts on fisheries
                and aquaculture and identify areas that may be highly vulnerable.
              </p>


              <div className="fishvool-hero-actions">

                <a
                  href="#fishvool-results"
                  className="fishvool-primary-button"
                >
                  Explore FishVool Results
                  <Map size={15} />
                </a>


                <a
                  href={projectReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fishvool-secondary-button"
                >
                  Project Report
                  <ExternalLink size={15} />
                </a>

              </div>


              <div className="fishvool-meta">

                <div>
                  <strong>03</strong>
                  <span>VULNERABILITY COMPONENTS</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>FISHERY SECTORS</span>
                </div>

                <div>
                  <strong>MAPS</strong>
                  <span>VULNERABILITY & SUITABILITY</span>
                </div>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="fishvool-hero-visual">

              <div className="fishvool-visual-header">

                <span>
                  FISHVOOL INTELLIGENCE
                </span>

                <span className="fishvool-status">
                  <span></span>
                  ACTIVE RESOURCE
                </span>

              </div>


              <div className="fishvool-visual-content">

                <div className="fishvool-visual-main-icon">
                  <Fish size={48} />
                </div>


                <span className="fishvool-visual-label">
                  FISHERIES CLIMATE RISK
                </span>


                <h3>
                  Evidence for
                  <br />
                  climate-resilient fisheries
                </h3>


                <p>
                  Vulnerability and suitability information supporting
                  fisheries planning, investment targeting, and adaptation.
                </p>

              </div>


              <div className="fishvool-visual-footer">

                <div>
                  <ShieldCheck size={14} />
                  <span>VULNERABILITY</span>
                </div>

                <div>
                  <Map size={14} />
                  <span>SUITABILITY</span>
                </div>

                <div>
                  <Fish size={14} />
                  <span>FISHERIES</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ABOUT FISHVOOL
      ========================================= */}

      <section className="fishvool-overview">

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                ABOUT FISHVOOL
              </span>

              <h2>
                Climate risk as an
                <br />
                added fisheries planning layer.
              </h2>

            </div>


            <p>
              FishVool provides a fisheries-specific approach for assessing
              vulnerability to climate change. It was developed by NFRDI and
              supports the identification of areas that may require climate
              adaptation and resilience measures.
            </p>

          </div>


          <div className="fishvool-info-grid">

            {/* VULNERABILITY */}

            <article className="fishvool-info-card">

              <div className="fishvool-info-icon fishvool-icon-blue">
                <ShieldCheck size={23} />
              </div>

              <span>01</span>

              <h3>
                Vulnerability Assessment
              </h3>

              <p>
                FishVool assesses fisheries vulnerability using exposure,
                sensitivity, and adaptive capacity to help identify areas and
                sectors that may be more vulnerable to climate-change impacts.
              </p>

            </article>


            {/* SUITABILITY */}

            <article className="fishvool-info-card">

              <div className="fishvool-info-icon fishvool-icon-green">
                <Map size={23} />
              </div>

              <span>02</span>

              <h3>
                Suitability Assessment
              </h3>

              <p>
                Suitability assessment provides spatial information that can
                help identify areas with potential for catching or farming
                selected fishery commodities.
              </p>

            </article>


            {/* PLANNING */}

            <article className="fishvool-info-card">

              <div className="fishvool-info-icon fishvool-icon-orange">
                <Database size={23} />
              </div>

              <span>03</span>

              <h3>
                Planning Information
              </h3>

              <p>
                Results can support the targeting of fisheries-related
                investments, programs, interventions, and climate adaptation
                strategies.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          VULNERABILITY FRAMEWORK
      ========================================= */}

      <section className="fishvool-framework">

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                VULNERABILITY FRAMEWORK
              </span>

              <h2>
                Three components
                <br />
                of fisheries vulnerability.
              </h2>

            </div>


            <p>
              The FishVool assessment follows a three-component vulnerability
              framework consisting of exposure, sensitivity, and adaptive
              capacity.
            </p>

          </div>


          <div className="fishvool-component-grid">

            {vulnerabilityComponents.map((component) => {

              const Icon = component.icon

              return (
                <article
                  key={component.title}
                  className={`fishvool-component-card ${component.className}`}
                >

                  <div className="fishvool-component-top">

                    <span>
                      {component.number}
                    </span>

                    <div className="fishvool-component-icon">
                      <Icon size={22} />
                    </div>

                  </div>


                  <h3>
                    {component.title}
                  </h3>


                  <p>
                    {component.description}
                  </p>

                </article>
              )

            })}

          </div>


          <div className="fishvool-framework-note">

            <div className="fishvool-note-icon">
              <Info size={17} />
            </div>

            <p>
              FishVool uses scoring rubrics to guide the assessment of the
              three vulnerability parameters and generates vulnerability
              indices that can be translated into spatial results.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          FISHERY SECTORS
      ========================================= */}

      <section className="fishvool-sectors">

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                FISHERY SECTORS
              </span>

              <h2>
                Capture fisheries
                <br />
                and aquaculture.
              </h2>

            </div>


            <p>
              The nationwide assessment applies vulnerability and suitability
              information to both capture fisheries and aquaculture sectors.
            </p>

          </div>


          <div className="fishvool-sector-grid">

            {fisherySectors.map((sector) => {

              const Icon = sector.icon

              return (
                <article
                  key={sector.title}
                  className="fishvool-sector-card"
                >

                  <div className="fishvool-sector-number">
                    {sector.number}
                  </div>


                  <div className="fishvool-sector-icon">
                    <Icon size={26} />
                  </div>


                  <h3>
                    {sector.title}
                  </h3>


                  <p>
                    {sector.description}
                  </p>

                </article>
              )

            })}

          </div>

        </div>

      </section>


      {/* =========================================
          INTERACTIVE RESULTS
      ========================================= */}

      <section
        className="fishvool-results"
        id="fishvool-results"
      >

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                INTERACTIVE FISHVOOL RESULTS
              </span>

              <h2>
                Explore vulnerability
                <br />
                and suitability maps.
              </h2>

            </div>


            <p>
              Explore the spatial results of the nationwide fisheries
              vulnerability and suitability assessment through the interactive
              mapping applications.
            </p>

          </div>


          {/* =========================================
              VULNERABILITY MAP
          ========================================= */}

          <div className="fishvool-map-card">

            <div className="fishvool-embed-header">

              <div className="fishvool-embed-title">

                <div className="fishvool-embed-icon vulnerability-map-icon">
                  <ShieldCheck size={21} />
                </div>


                <div>

                  <span>
                    FISHVOOL SPATIAL RESULT
                  </span>

                  <h3>
                    Vulnerability for Capture Fisheries and Aquaculture
                  </h3>

                </div>

              </div>


              <a
                href={vulnerabilityMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-embed-open"
              >
                Open Full Map
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="fishvool-map-frame">

              <iframe
                src={vulnerabilityMapUrl}
                title="FishVool Vulnerability for Capture Fisheries and Aquaculture"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>


          {/* =========================================
              SUITABILITY MAP
          ========================================= */}

          <div className="fishvool-map-card">

            <div className="fishvool-embed-header">

              <div className="fishvool-embed-title">

                <div className="fishvool-embed-icon suitability-map-icon">
                  <Map size={21} />
                </div>


                <div>

                  <span>
                    FISHVOOL SPATIAL RESULT
                  </span>

                  <h3>
                    Suitability for Capture Fisheries and Aquaculture
                  </h3>

                </div>

              </div>


              <a
                href={suitabilityMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-embed-open"
              >
                Open Full Map
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="fishvool-map-frame">

              <iframe
                src={suitabilityMapUrl}
                title="FishVool Suitability for Capture Fisheries and Aquaculture"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PRIORITY COMMODITIES
      ========================================= */}

      <section className="fishvool-commodities">

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                PRIORITY FISHERY COMMODITIES
              </span>

              <h2>
                Fisheries commodities
                <br />
                assessed for climate risk.
              </h2>

            </div>


            <p>
              The nationwide assessment generated vulnerability and suitability
              information for selected priority commodities in capture
              fisheries and aquaculture.
            </p>

          </div>


          <div className="fishvool-commodity-grid">

            {/* CAPTURE */}

            <article className="fishvool-commodity-card">

              <div className="fishvool-commodity-header">

                <div className="fishvool-commodity-icon">
                  <Anchor size={23} />
                </div>

                <div>

                  <span>
                    CAPTURE FISHERIES
                  </span>

                  <h3>
                    Selected capture-fishery commodities
                  </h3>

                </div>

              </div>


              <div className="fishvool-commodity-list">

                {captureCommodities.map((commodity) => (

                  <div
                    className="fishvool-commodity-item"
                    key={commodity}
                  >

                    <CheckCircle2 size={15} />

                    <span>
                      {commodity}
                    </span>

                  </div>

                ))}

              </div>

            </article>


            {/* AQUACULTURE */}

            <article className="fishvool-commodity-card">

              <div className="fishvool-commodity-header">

                <div className="fishvool-commodity-icon aquaculture-icon">
                  <Sprout size={23} />
                </div>

                <div>

                  <span>
                    AQUACULTURE
                  </span>

                  <h3>
                    Selected aquaculture commodities
                  </h3>

                </div>

              </div>


              <div className="fishvool-commodity-list">

                {aquacultureCommodities.map((commodity) => (

                  <div
                    className="fishvool-commodity-item"
                    key={commodity}
                  >

                    <CheckCircle2 size={15} />

                    <span>
                      {commodity}
                    </span>

                  </div>

                ))}

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          PLANNING APPLICATION
      ========================================= */}

      <section className="fishvool-planning">

        <div className="fishvool-container">

          <div className="fishvool-planning-grid">

            <div>

              <span className="fishvool-section-label">
                PLANNING APPLICATION
              </span>


              <h2>
                From fisheries
                <br />
                assessment to investment planning.
              </h2>


              <p>
                FishVool results can provide supporting evidence for identifying
                vulnerable fisheries areas, evaluating potential production
                areas, and developing climate-resilient interventions and
                investment strategies.
              </p>

            </div>


            <div className="fishvool-planning-list">

              <div>

                <div className="fishvool-planning-list-icon">
                  <Map size={17} />
                </div>

                <div>
                  <strong>
                    Geographic Targeting
                  </strong>

                  <span>
                    Identify areas where vulnerability and suitability
                    information can inform planning.
                  </span>
                </div>

              </div>


              <div>

                <div className="fishvool-planning-list-icon">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <strong>
                    Climate Adaptation
                  </strong>

                  <span>
                    Support the identification of adaptation options for
                    vulnerable fisheries systems.
                  </span>
                </div>

              </div>


              <div>

                <div className="fishvool-planning-list-icon">
                  <Database size={17} />
                </div>

                <div>
                  <strong>
                    Investment Planning
                  </strong>

                  <span>
                    Provide additional evidence for fisheries-related
                    investments and programs.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          REFERENCE MATERIALS
      ========================================= */}

      <section className="fishvool-references">

        <div className="fishvool-container">

          <div className="fishvool-section-heading">

            <div>

              <span className="fishvool-section-label">
                REFERENCE MATERIALS
              </span>

              <h2>
                FishVool resources
                <br />
                and documentation.
              </h2>

            </div>


            <p>
              Access project documentation, the official FishVool instructional
              manual, and additional NFRDI materials.
            </p>

          </div>


          <div className="fishvool-reference-grid">

            {/* PROJECT REPORT */}

            <article className="fishvool-reference-card">

              <div className="fishvool-reference-icon">
                <FileText size={24} />
              </div>


              <span>
                PROJECT DOCUMENT
              </span>


              <h3>
                FishVool Project Report
              </h3>


              <p>
                Access the project report containing supporting information for
                the nationwide fisheries vulnerability and suitability
                assessment.
              </p>


              <a
                href={projectReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-reference-button"
              >
                Open Project Report
                <ExternalLink size={14} />
              </a>

            </article>


            {/* INSTRUCTION MANUAL */}

            <article className="fishvool-reference-card">

              <div className="fishvool-reference-icon">
                <FileText size={24} />
              </div>


              <span>
                NFRDI REFERENCE
              </span>


              <h3>
                FishVool Instruction Manual
              </h3>


              <p>
                Official NFRDI instructional material describing the FishVool
                Excel tool and its application for processing fisheries
                vulnerability assessment data.
              </p>


              <a
                href={fishvoolManualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-reference-button"
              >
                View Manual
                <ExternalLink size={14} />
              </a>

            </article>


            {/* NFRDI ARTICLE */}

            <article className="fishvool-reference-card">

              <div className="fishvool-reference-icon">
                <Globe2 size={24} />
              </div>


              <span>
                DA-NFRDI RESOURCE
              </span>


              <h3>
                FishVool Project Feature
              </h3>


              <p>
                Read the NFRDI feature article describing the nationwide
                vulnerability and suitability assessment and its application
                to climate-resilient fisheries.
              </p>


              <a
                href={fishvoolArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-reference-button"
              >
                Read NFRDI Article
                <ExternalLink size={14} />
              </a>

            </article>


            {/* VIDEO */}

            <article className="fishvool-reference-card">

              <div className="fishvool-reference-icon">
                <PlayCircle size={24} />
              </div>


              <span>
                NFRDI ON-AIR
              </span>


              <h3>
                FishVool with Dr. Mudjekeewis Santos
              </h3>


              <p>
                Watch the NFRDI discussion introducing FishVool and its
                application to fisheries and aquaculture climate-change
                assessment.
              </p>


              <a
                href={fishvoolVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fishvool-reference-button"
              >
                Watch Video
                <ExternalLink size={14} />
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          PLANNING CONNECTION
      ========================================= */}

      <section className="fishvool-connection">

        <div className="fishvool-container">

          <div className="fishvool-connection-box">

            <div className="fishvool-connection-icon">
              <Fish size={25} />
            </div>


            <div className="fishvool-connection-content">

              <span>
                PLANNING CONNECTION
              </span>


              <h2>
                Integrate fisheries climate-risk evidence into investment
                planning.
              </h2>


              <p>
                FishVool complements agricultural and spatial planning by
                providing fisheries-specific information that can help inform
                geographic targeting, vulnerability reduction, and
                climate-resilient fisheries investments.
              </p>

            </div>


            <Link
              to="/tools"
              className="fishvool-connection-button"
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

      <section className="fishvool-source">

        <div className="fishvool-container">

          <div className="fishvool-source-inner">

            <div className="fishvool-source-icon">
              <Info size={15} />
            </div>


            <p>
              FishVool information presented on this page is based on materials
              from the Department of Agriculture – National Fisheries Research
              and Development Institute (DA-NFRDI), including the FishVool
              Instruction Manual and nationwide fisheries vulnerability and
              suitability assessment resources.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}


export default FishVool
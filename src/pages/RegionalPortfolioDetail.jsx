import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Map,
  Layers3,
  FileText,
} from 'lucide-react'

import './RegionalPortfolioDetail.css'
import regions from '../data/regions'


/* =========================================
   COMMODITY ICONS
   ========================================= */

function getCommodityIcon(commodity) {
  const name = commodity.toLowerCase()

  if (name.includes('rice')) return '🌾'
  if (name.includes('corn')) return '🌽'
  if (name.includes('coconut')) return '🥥'
  if (name.includes('coffee')) return '☕'
  if (name.includes('mango')) return '🥭'
  if (name.includes('banana')) return '🍌'
  if (name.includes('cacao')) return '🍫'
  if (name.includes('swine')) return '🐖'
  if (name.includes('hog')) return '🐖'
  if (name.includes('chicken')) return '🐔'
  if (name.includes('cattle')) return '🐄'
  if (name.includes('beef')) return '🐄'
  if (name.includes('fish')) return '🐟'
  if (name.includes('bangus')) return '🐟'
  if (name.includes('seaweed')) return '🌿'
  if (name.includes('cassava')) return '🌱'
  if (name.includes('vegetable')) return '🥬'
  if (name.includes('onion')) return '🧅'
  if (name.includes('tomato')) return '🍅'
  if (name.includes('peanut')) return '🥜'
  if (name.includes('rubber')) return '🌳'
  if (name.includes('sugarcane')) return '🎋'
  if (name.includes('abaca')) return '🌿'
  if (name.includes('heirloom')) return '🌾'
  if (name.includes('pili')) return '🌰'
  if (name.includes('calamansi')) return '🍋'
  if (name.includes('cashew')) return '🥜'
  if (name.includes('oyster')) return '🦪'
  if (name.includes('muscovado')) return '🎋'
  if (name.includes('seaweeds')) return '🌿'
  if (name.includes('durian')) return '🥭'
  if (name.includes('cardava')) return '🍌'
  if (name.includes('dairy')) return '🐄'
  if (name.includes('highland')) return '🥬'
  if (name.includes('lowland')) return '🥬'

  return '🌱'
}


function RegionalPortfolioDetail() {

  const { regionId } = useParams()


  /* =========================================
     FIND REGION
     ========================================= */

  const region = useMemo(() => {

    return regions.find(
      (item) => item.id === regionId
    )

  }, [regionId])


  /* =========================================
     REGION NOT FOUND
     ========================================= */

  if (!region) {

    return (

      <main className="regional-detail-page">

        <div className="regional-detail-not-found">

          <span className="section-eyebrow">
            REGIONAL PORTFOLIO
          </span>

          <h1>
            Regional Portfolio Not Found
          </h1>

          <p>
            The regional portfolio you are looking for
            could not be found.
          </p>

          <Link
            to="/regional-portfolio"
            className="regional-back-button"
          >

            <ArrowLeft
              size={15}
              strokeWidth={2}
            />

            Back to Regional Portfolios

          </Link>

        </div>

      </main>

    )
  }


  return (

    <main className="regional-detail-page">


      {/* =========================================
          HERO
          ========================================= */}

      <section className="regional-detail-hero">

        <div className="regional-detail-hero-inner">


          {/* BACK */}

          <Link
            to="/regional-portfolio"
            className="regional-detail-back"
          >

            <ArrowLeft
              size={14}
              strokeWidth={2}
            />

            Back to Regional Portfolios

          </Link>


          {/* HERO CONTENT */}

          <div className="regional-detail-hero-content">

            <span className="regional-detail-code">
              REGIONAL INVESTMENT PORTFOLIO
            </span>

            <h1>
              {region.name}
            </h1>

            <h2>
              {region.fullName}
            </h2>

            <p>
              Explore the agriculture and fisheries
              investment portfolio, priority commodities,
              and regional investment information.
            </p>

          </div>


          {/* BACKGROUND REGION MARK */}

          <div className="regional-detail-hero-mark">
            {region.name}
          </div>

        </div>

      </section>


      {/* =========================================
          REGIONAL OVERVIEW
          ========================================= */}

      <section className="regional-detail-overview">

        <div className="regional-detail-overview-inner">


          {/* HEADER */}

          <div className="regional-detail-overview-header">

            <div>

              <span className="section-eyebrow">
                REGIONAL OVERVIEW
              </span>

              <h2>
                Agriculture & Fisheries
                <br />
                Investment Profile
              </h2>

            </div>

            <p>
              A consolidated view of the region's
              priority agriculture and fisheries
              commodities and investment portfolio.
            </p>

          </div>


          {/* STATS */}

          <div className="regional-detail-stats">


            {/* REGION */}

            <div className="regional-detail-stat">

              <div className="regional-detail-stat-icon">

                <Map
                  size={18}
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <span>
                  REGION
                </span>

                <strong>
                  {region.name}
                </strong>

              </div>

            </div>


            {/* COMMODITIES */}

            <div className="regional-detail-stat">

              <div className="regional-detail-stat-icon">

                <Layers3
                  size={18}
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <span>
                  PRIORITY COMMODITIES
                </span>

                <strong>
                  {region.commodities.length}
                </strong>

              </div>

            </div>


            {/* RAFIP */}

            <div className="regional-detail-stat">

              <div className="regional-detail-stat-icon">

                <FileText
                  size={18}
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <span>
                  REGIONAL RAFIP
                </span>

                <strong>
                  Available
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PRIORITY COMMODITIES
          ========================================= */}

      <section className="regional-detail-commodities">

        <div className="regional-detail-commodities-inner">


          {/* SECTION HEADER */}

          <div className="regional-detail-section-header">

            <div>

              <span className="section-eyebrow">
                INVESTMENT FOCUS
              </span>

              <h2>
                Priority Commodities
              </h2>

            </div>

            <p>
              Priority agriculture and fisheries
              commodities identified for the region.
            </p>

          </div>


          {/* COMMODITY LIST */}

          <div className="regional-detail-commodity-grid">

            {region.commodities.map(
              (commodity, index) => {

                const icon =
                  getCommodityIcon(commodity)

                return (

                  <div
                    key={index}
                    className="regional-detail-commodity"
                  >

                    <span className="commodity-icon">
                      {icon}
                    </span>

                    <span className="commodity-name">
                      {commodity}
                    </span>

                  </div>

                )
              }
            )}

          </div>

        </div>

      </section>


      {/* =========================================
          RAFIP
          ========================================= */}

      <section className="regional-detail-rafip">

        <div className="regional-detail-rafip-inner">


          {/* RAFIP HEADER */}

          <div className="regional-detail-rafip-header">

            <div>

              <span className="section-eyebrow">
                REGIONAL AGRICULTURE & FISHERIES
              </span>

              <h2>
                Investment Portfolio
              </h2>

              <p>
                Explore the complete Regional Agriculture
                and Fisheries Investment Portfolio for
                {` ${region.fullName}`}.
              </p>

            </div>


            {/* OPEN BUTTON */}

            <a
              href={region.flipbookUrl}
              target="_blank"
              rel="noreferrer"
              className="rafip-open-button"
            >

              View Fullscreen

              <ArrowUpRight
                size={15}
                strokeWidth={2}
              />

            </a>

          </div>


          {/* FLIPBOOK */}

          <div className="regional-detail-flipbook">

            <iframe
              src={region.flipbookUrl}
              title={`${region.name} Regional Agriculture and Fisheries Investment Portfolio`}
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </section>


      {/* =========================================
          FOOTER NAVIGATION
          ========================================= */}

      <section className="regional-detail-footer">

        <Link
          to="/regional-portfolio"
          className="regional-detail-footer-button"
        >

          <ArrowLeft
            size={15}
            strokeWidth={2}
          />

          Explore Other Regional Portfolios

        </Link>

      </section>

    </main>

  )
}

export default RegionalPortfolioDetail
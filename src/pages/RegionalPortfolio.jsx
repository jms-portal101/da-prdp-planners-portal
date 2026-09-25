import { useMemo, useState } from 'react'
import {
  Search,
  Map,
  Layers3,
  ArrowUpRight,
} from 'lucide-react'

import './RegionalPortfolio.css'
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
  if (name.includes('durian')) return '🥭'
  if (name.includes('cardava')) return '🍌'
  if (name.includes('dairy')) return '🐄'
  if (name.includes('highland')) return '🥬'
  if (name.includes('lowland')) return '🥬'

  return '🌱'
}


/* =========================================
   REGIONAL PORTFOLIO
   ========================================= */

function RegionalPortfolio() {

  const [searchTerm, setSearchTerm] = useState('')


  /* =========================================
     FILTER REGIONS
     ========================================= */

  const filteredRegions = useMemo(() => {

    const search = searchTerm
      .toLowerCase()
      .trim()

    if (!search) {
      return regions
    }

    return regions.filter((region) => {

      const regionName =
        region.name.toLowerCase()

      const fullName =
        region.fullName.toLowerCase()

      const commodities =
        region.commodities
          .join(' ')
          .toLowerCase()

      return (
        regionName.includes(search) ||
        fullName.includes(search) ||
        commodities.includes(search)
      )

    })

  }, [searchTerm])


  return (

    <main className="regional-portfolio-page">


      {/* =========================================
          HERO
          ========================================= */}

      <section className="regional-portfolio-hero">

        <div className="regional-portfolio-hero-inner">


          <div className="regional-portfolio-heading">

            <span className="section-eyebrow">
              REGIONAL INVESTMENT INTELLIGENCE
            </span>

            <h1>
              Regional Agriculture & Fisheries
              <br />
              <span>
                Investment Portfolio
              </span>
            </h1>

            <p>
              Explore regional agriculture and fisheries
              investment opportunities, priority commodities,
              and investment information across the Philippines.
            </p>

          </div>


          {/* =========================================
              HERO STATS
              ========================================= */}

          <div className="regional-portfolio-stats">


            <div className="regional-stat">

              <div className="regional-stat-icon">

                <Map
                  size={18}
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <strong>
                  17
                </strong>

                <span>
                  REGIONS
                </span>

              </div>

            </div>


            <div className="regional-stat">

              <div className="regional-stat-icon">

                <Layers3
                  size={18}
                  strokeWidth={1.7}
                />

              </div>

              <div>

                <strong>
                  57
                </strong>

                <span>
                  PRIORITY COMMODITIES
                </span>

              </div>

            </div>


            <div className="regional-stat">

              <div className="regional-stat-icon">
                📘
              </div>

              <div>

                <strong>
                  17
                </strong>

                <span>
                  REGIONAL RAFIPs
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          REGIONAL EXPLORER
          ========================================= */}

      <section className="regional-portfolio-explorer">

        <div className="regional-portfolio-explorer-header">


          <div>

            <span className="section-eyebrow">
              EXPLORE REGIONAL PORTFOLIOS
            </span>

            <h2>
              Investment Opportunities by Region
            </h2>

            <p>
              Select a region to explore its priority
              commodities and Regional Agriculture &
              Fisheries Investment Portfolio.
            </p>

          </div>


          {/* SEARCH */}

          <div className="regional-search">

            <Search
              size={17}
              strokeWidth={1.8}
            />

            <input
              type="text"
              placeholder="Search region or commodity..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>

        </div>


        {/* =========================================
            REGION CARDS
            ========================================= */}

        <div className="regional-portfolio-grid">

          {filteredRegions.map(
            (region, index) => (

              <a
                key={region.id}
                href={`/regional-portfolio/${region.id}`}
                className="regional-portfolio-card"
              >


                {/* CARD TOP */}

                <div className="regional-card-top">

                  <span className="regional-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="regional-card-arrow">

                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                    />

                  </span>

                </div>


                {/* REGION NAME */}

                <div className="regional-card-content">

                  <h3>
                    {region.name}
                  </h3>

                  <p>
                    {region.fullName}
                  </p>

                </div>


                {/* COMMODITY COUNT */}

                <div className="regional-card-bottom">

                  <span>
                    PRIORITY COMMODITIES
                  </span>

                  <strong>
                    {region.commodities.length}
                  </strong>

                </div>


                {/* =================================
                    ALL PRIORITY COMMODITIES
                    ================================= */}

                <div className="regional-card-commodities">

                  {region.commodities.map(
                    (commodity, commodityIndex) => (

                      <span
                        key={commodityIndex}
                        className="regional-card-commodity"
                      >

                        <span className="regional-card-commodity-icon">
                          {getCommodityIcon(commodity)}
                        </span>

                        <span>
                          {commodity}
                        </span>

                      </span>

                    )
                  )}

                </div>

              </a>

            )
          )}

        </div>


        {/* =========================================
            NO RESULTS
            ========================================= */}

        {filteredRegions.length === 0 && (

          <div className="regional-no-results">

            <Search
              size={25}
              strokeWidth={1.5}
            />

            <h3>
              No regional portfolio found
            </h3>

            <p>
              Try searching for another region or commodity.
            </p>

          </div>

        )}

      </section>

    </main>

  )
}

export default RegionalPortfolio
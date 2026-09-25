import { useEffect, useRef, useState } from 'react'
import './RegionalExplorer.css'
import regions from '../data/regions'

const commodityIcons = {
  rice: '🌾',
  corn: '🌽',
  onion: '🧅',
  mango: '🥭',
  coffee: '☕',
  peanut: '🥜',
  tomato: '🍅',
  hogs: '🐖',
  swine: '🐖',
  chicken: '🐔',
  'native chicken': '🐔',
  'broiler chicken': '🐔',
  cattle: '🐄',
  'beef cattle': '🐄',
  carabao: '🐃',
  'carabao & carabao-based products': '🐃',
  banana: '🍌',
  'cardaba banana': '🍌',
  coconut: '🥥',
  cacao: '🍫',
  cassava: '🥔',
  coffee: '☕',
  citrus: '🍊',
  calamansi: '🍋',
  seaweed: '🌿',
  seaweeds: '🌿',
  rubber: '🌳',
  abaca: '🌿',
  jackfruit: '🍈',
  pili: '🌰',
  'dairy cattle': '🐄',
  oyster: '🦪',
  muscovado: '🌱',
  'highland vegetables': '🥬',
  'lowland vegetables': '🥬',
  ampalaya: '🥒',
  sugarcane: '🌱',
  durian: '🥭',
  tuna: '🐟',
  bangus: '🐟',
  'bangus (milkfish)': '🐟',
  'commercial rice': '🌾',
  'heirloom rice': '🌾',
  'yellow corn': '🌽',
}
function getCommodityIcon(commodity) {
  const key = commodity.toLowerCase().trim()

  return commodityIcons[key] || '🌱'
}

function RegionalExplorer() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const selectedRegionRef = useRef(null)

  useEffect(() => {
    if (selectedRegion && selectedRegionRef.current) {
      const navbarHeight = 90

      const elementTop =
        selectedRegionRef.current.getBoundingClientRect().top

      const scrollTop =
        window.pageYOffset + elementTop - navbarHeight - 20

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      })
    }
  }, [selectedRegion])

  return (
    <section className="regional-explorer" id="regions">
      {/* HEADER */}

      <div className="regional-header">
        <div>
          <span className="section-eyebrow">REGIONAL PORTFOLIO</span>

          <h2>Explore by Region</h2>
        </div>

        <p>
          Select a region to explore its agriculture and fisheries investment
          portfolio.
        </p>
      </div>

      {/* REGION CARDS */}

      <div className="regional-grid">
        {regions.map((region, index) => (
          <button
            type="button"
            className={`region-card ${
              selectedRegion?.id === region.id ? "selected" : ""
            }`}
            key={region.id}
            onClick={() => setSelectedRegion(region)}
          >
            <span className="region-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{region.name}</h3>

              <p className="region-full-name">{region.fullName}</p>

              {region.commodities?.length > 0 && (
                <div className="card-commodities">
                  <span className="card-commodities-label">
                    PRIORITY COMMODITIES
                  </span>

                  <div className="commodity-list">
                    {region.commodities.map((commodity, index) => (
                      <span className="commodity-item" key={index}>
                        <span className="commodity-icon">
                          {getCommodityIcon(commodity)}
                        </span>

                        {commodity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <span className="region-arrow">→</span>
          </button>
        ))}
      </div>

      {/* SELECTED REGION */}

      {selectedRegion && (
        <div className="selected-region" ref={selectedRegionRef}>
          {/* FLIPBOOK HEADER */}

          <div className="regional-flipbook-header">
            <div>
              <h3>
                {selectedRegion.name} — {selectedRegion.fullName}
              </h3>
            </div>

            <a
              href={selectedRegion.flipbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flipbook-open-button"
            >
              Open Fullscreen ↗
            </a>
          </div>

          {/* FLIPBOOK */}

          <div className="flipbook-frame">
            <iframe
              src={selectedRegion.flipbookUrl}
              title={`${selectedRegion.name} Regional Portfolio`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default RegionalExplorer
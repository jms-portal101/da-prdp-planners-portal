import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Package,
  MapPinned,
  Sprout,
  Coins,
} from 'lucide-react'

import './RegionalRafipPage.css'
import { RAFIP_LIBRARY } from './RafipLibrary'
import {
  loadRAFIPData,
  getRegionalRAFIPData,
  formatMoney,
} from '../data/rafipData'

/* =========================================================
   COMMODITY ICONS
========================================================= */

function getCommodityIcon(commodity = '') {

  const name = String(commodity).toLowerCase()

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

function RegionalRafipPage() {
  const { regionSlug } = useParams()

  const region = RAFIP_LIBRARY.find(
    item => item.slug === regionSlug
  )

  const [rafipData, setRafipData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      try {
        setLoading(true)
        setError('')

        const data = await loadRAFIPData()

        if (mounted) {
          setRafipData(data)
        }
      } catch (err) {
        console.error('RAFIP regional data error:', err)

        if (mounted) {
          setError(
            'Unable to load RAFIP investment data.'
          )
          setRafipData([])
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [])

  const regionalData = useMemo(() => {
    if (!region || !rafipData.length) {
      return null
    }

    return getRegionalRAFIPData(
      rafipData,
      region.code
    )
  }, [rafipData, region])

  if (!region) {
    return (
      <main className="regional-rafip-page">
        <section className="regional-rafip-not-found">
          <h1>Regional RAFIP Not Found</h1>

          <p>
            The requested regional RAFIP page does not
            exist.
          </p>

          <a
            href="/rafip-library"
            className="regional-rafip-secondary-button"
          >
            <ArrowLeft size={17} />
            Back to RAFIP Library
          </a>
        </section>
      </main>
    )
  }

  const commodities =
    regionalData?.commodities || []

  const investmentRequirement =
    regionalData?.investmentRequirement || 0

  const investmentPackages =
    regionalData?.investmentPackages || 0

  const priorityCommodities =
    regionalData?.priorityCommodities || 0

  const priorityAreas =
    regionalData?.priorityAreas || 0

  const maxInvestment =
    commodities.length > 0
      ? Math.max(
          ...commodities.map(
            item => item.investment || 0
          )
        )
      : 0

  return (
    <main className="regional-rafip-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="regional-rafip-hero">
        <div className="regional-rafip-hero-inner">
          <div className="regional-rafip-breadcrumb">
            <a href="/rafip-library">
              <ArrowLeft size={16} />
              RAFIP Regional Library
            </a>
          </div>

          <div className="regional-rafip-hero-content">
            <div className="regional-rafip-hero-copy">
              <span className="regional-rafip-region-code">{region.code}</span>

              <h1>{region.name}</h1>

              <p>Regional Agriculture and Fisheries Investment Portfolio</p>

              <div className="regional-rafip-edition">
                RAFIP {region.edition} Edition
              </div>

              <div className="regional-rafip-hero-actions">
                <a
                  href={region.flipbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="regional-rafip-primary-button"
                >
                  <ExternalLink size={17} />
                  View RAFIP Flipbook
                </a>

                <a
                  href={region.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="regional-rafip-secondary-button"
                >
                  <Download size={17} />
                  Download Regional RAFIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <section className="regional-rafip-content">
        {loading && (
          <div className="regional-rafip-loading">
            <div className="regional-rafip-loading-spinner" />

            <p>Loading regional investment data...</p>
          </div>
        )}

        {!loading && error && (
          <div className="regional-rafip-error">
            <h3>Unable to Load Data</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading &&
          !error &&
          regionalData &&
          regionalData.records.length === 0 && (
            <div className="regional-rafip-error">
              <h3>No RAFIP Records Found</h3>

              <p>No investment package records were found for {region.code}.</p>
            </div>
          )}

        {!loading &&
          !error &&
          regionalData &&
          regionalData.records.length > 0 && (
            <>
              {/* =================================================
                  REGIONAL OVERVIEW
                  ================================================= */}

              <section className="regional-rafip-section">
                <div className="regional-rafip-section-heading">
                  <span>REGIONAL OVERVIEW</span>

                  <h2>{region.name}</h2>

                  <p>
                    Investment information derived from the RAFIP investment
                    package database.
                  </p>
                </div>

                <div className="regional-rafip-metrics">
                  <div className="regional-rafip-metric-card">
                    <div className="regional-rafip-metric-icon">
                      <Coins size={21} />
                    </div>

                    <div>
                      <span>Investment Requirement</span>

                      <strong>{formatMoney(investmentRequirement)}</strong>
                    </div>
                  </div>

                  <div className="regional-rafip-metric-card">
                    <div className="regional-rafip-metric-icon">
                      <Sprout size={21} />
                    </div>

                    <div>
                      <span>Priority Commodities</span>

                      <strong>{priorityCommodities}</strong>
                    </div>
                  </div>

                  <div className="regional-rafip-metric-card">
                    <div className="regional-rafip-metric-icon">
                      <Package size={21} />
                    </div>

                    <div>
                      <span>Investment Packages</span>

                      <strong>{investmentPackages}</strong>
                    </div>
                  </div>

                  <div className="regional-rafip-metric-card">
                    <div className="regional-rafip-metric-icon">
                      <MapPinned size={21} />
                    </div>

                    <div>
                      <span>Priority Areas</span>

                      <strong>{priorityAreas}</strong>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  PRIORITY COMMODITIES
                  ================================================= */}

              <section className="regional-rafip-section">
                <div className="regional-rafip-section-heading">
                  <span>PRIORITY COMMODITIES</span>

                  <h2>Investment by Commodity</h2>

                  <p>
                    Commodity-level investment requirements based on the
                    regional RAFIP records.
                  </p>
                </div>

                <div className="regional-rafip-commodity-grid">
                  {commodities.map((commodity, index) => {
                    const width =
                      maxInvestment > 0
                        ? Math.max(
                            8,
                            (commodity.investment / maxInvestment) * 100,
                          )
                        : 0;

                    return (
                      <div
                        className="regional-rafip-commodity-card"
                        key={`${commodity.name}-${index}`}
                      >
                        <div className="regional-rafip-commodity-top">
                          <div className="regional-rafip-commodity-info">
                            <div className="regional-rafip-commodity-icon">
                              {getCommodityIcon(commodity.name)}
                            </div>

                            <div className="regional-rafip-commodity-details">
                              <h3>{commodity.name}</h3>

                              <span>
                                {commodity.packages} package
                                {commodity.packages !== 1 ? "s" : ""}
                              </span>
                            </div>
                          </div>

                          <div className="regional-rafip-commodity-investment">
                            <span>Investment</span>

                            <strong>{formatMoney(commodity.investment)}</strong>
                          </div>
                        </div>

                        <div className="regional-rafip-bar">
                          <div
                            className="regional-rafip-bar-fill"
                            style={{
                              width: `${width}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* =================================================
                  INVESTMENT PACKAGE SUMMARY
                  ================================================= */}

              <section className="regional-rafip-section">
                <div className="regional-rafip-section-heading">
                  <span>INVESTMENT PACKAGES</span>

                  <h2>Regional Package Summary</h2>

                  <p>
                    {regionalData.records.length.toLocaleString()} RAFIP
                    database records were loaded for {region.code}.
                  </p>
                </div>

                <div className="regional-rafip-summary-box">
                  <div>
                    <span>Total Investment</span>

                    <strong>{formatMoney(investmentRequirement)}</strong>
                  </div>

                  <div>
                    <span>Unique Packages</span>

                    <strong>{investmentPackages.toLocaleString()}</strong>
                  </div>

                  <div>
                    <span>Commodities</span>

                    <strong>{priorityCommodities}</strong>
                  </div>

                  <div>
                    <span>Areas / Locations</span>

                    <strong>{priorityAreas}</strong>
                  </div>
                </div>
              </section>
              {/* =================================================
                    REGIONAL RAFIP PACKAGE LIST
                  ================================================= */}

              <section className="regional-rafip-section">
                <div className="regional-rafip-section-heading">
                  <span>RAFIP INVESTMENT PACKAGES</span>

                  <h2>Regional Package List</h2>

                  <p>
                    Detailed investment packages included in the regional RAFIP
                    database.
                  </p>
                </div>

                <div className="regional-rafip-package-table-wrap">
                  <div className="regional-rafip-package-table">
                    {/* TABLE HEADER */}

                    <div className="regional-rafip-package-row regional-rafip-package-header">
                      <div>Package ID</div>

                      <div>Package Title</div>

                      <div>Commodity</div>

                      <div>Intervention</div>

                      <div>Location</div>

                      <div>Estimated Cost</div>
                    </div>

                    {/* TABLE ROWS */}

                    {regionalData.records.map((item, index) => (
                      <div
                        className="regional-rafip-package-row"
                        key={item.packageId || `${item.packageTitle}-${index}`}
                      >
                        <div className="regional-rafip-package-id">
                          <strong>{item.packageId || "—"}</strong>
                        </div>

                        <div className="regional-rafip-package-title">
                          <strong>
                            {item.packageTitle || "Untitled Package"}
                          </strong>
                        </div>

                        <div className="regional-rafip-package-commodity">
                          <span>{item.commodity || "—"}</span>
                        </div>

                        <div className="regional-rafip-package-intervention">
                          <span>{item.interventionType || "—"}</span>
                        </div>

                        <div className="regional-rafip-package-location">
                          <span>{item.location || item.coverage || "—"}</span>
                        </div>

                        <div className="regional-rafip-package-cost">
                          <strong>{formatMoney(item.estimatedCost)}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="regional-rafip-package-count">
                  Showing{" "}
                  <strong>
                    {regionalData.records.length.toLocaleString()}
                  </strong>{" "}
                  RAFIP package records for <strong>{region.code}</strong>
                </div>
              </section>
            </>
          )}
      </section>
    </main>
  );
}

export default RegionalRafipPage
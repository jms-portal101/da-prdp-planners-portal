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
  X,
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

/* =========================================================
   REGIONAL BANNERS
========================================================= */

const REGION_BANNERS = {
  'region-i': '/images/Banner/Region 1.jpeg',
  'region-ii': '/images/Banner/Region 2.jpeg',
  'region-iii': '/images/Banner/Region 3.jpeg',
  'region-iv-a': '/images/Banner/Region 4A.jpeg',
  'region-iv-b': '/images/Banner/Region 4B.jpeg',
  'region-v': '/images/Banner/Region 5.jpeg',
  'region-vi': '/images/Banner/Region 6.jpeg',
  'region-vii': '/images/Banner/Region 7.jpeg',
  'region-viii': '/images/Banner/Region 8.jpeg',
  'region-ix': '/images/Banner/Region 9.jpeg',
  'region-x': '/images/Banner/Region 10.jpeg',
  'region-xi': '/images/Banner/Region 11.jpeg',
  'region-xii': '/images/Banner/Region 12.jpeg',
  'region-xiii': '/images/Banner/Region 13.jpeg',

  car: '/images/Banner/CAR.jpeg',
  nir: '/images/Banner/NIR.jpeg',
  barmm: '/images/Banner/BARMM.jpeg',
}

/* =========================================================
   NORMALIZE COMMODITY
========================================================= */

function normalizeCommodity(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
}

/* =========================================================
   REGIONAL RAFIP PAGE
========================================================= */

function RegionalRafipPage() {
  const { regionSlug } = useParams()

  const region = RAFIP_LIBRARY.find(
    item => item.slug === regionSlug
  )

  const regionBanner =
    REGION_BANNERS[
      String(region?.slug || '').toLowerCase()
    ]

  const [rafipData, setRafipData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  /*
    null = All Commodities
    string = selected commodity
  */
  const [selectedCommodity, setSelectedCommodity] =
    useState(null)

  /* =========================================================
     LOAD RAFIP DATA
  ========================================================= */

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
        console.error(
          'RAFIP regional data error:',
          err
        )

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

  /* =========================================================
     RESET FILTER WHEN REGION CHANGES
  ========================================================= */

  useEffect(() => {
    setSelectedCommodity(null)
  }, [regionSlug])

  /* =========================================================
     REGIONAL DATA
  ========================================================= */

  const regionalData = useMemo(() => {
    if (!region || !rafipData.length) {
      return null
    }

    return getRegionalRAFIPData(
      rafipData,
      region.code
    )
  }, [rafipData, region])

  /* =========================================================
     FILTERED PACKAGE RECORDS
  ========================================================= */

  const filteredRecords = useMemo(() => {
    if (!regionalData?.records) {
      return []
    }

    if (!selectedCommodity) {
      return regionalData.records
    }

    const selected = normalizeCommodity(
      selectedCommodity
    )

    return regionalData.records.filter(item => {
      const recordCommodity =
        normalizeCommodity(item.commodity)

      return recordCommodity === selected
    })
  }, [
    regionalData,
    selectedCommodity,
  ])

  /* =========================================================
     SORTED PACKAGE RECORDS
  ========================================================= */

  const displayedRecords = useMemo(() => {
    return [...filteredRecords].sort(
      (a, b) =>
        Number(b.estimatedCost || 0) -
        Number(a.estimatedCost || 0)
    )
  }, [filteredRecords])

  /* =========================================================
     REGION NOT FOUND
  ========================================================= */

  if (!region) {
    return (
      <main className="regional-rafip-page">
        <section className="regional-rafip-not-found">

          <h1>
            Regional RAFIP Not Found
          </h1>

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

  /* =========================================================
     REGIONAL METRICS
  ========================================================= */

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

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="regional-rafip-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="regional-rafip-hero"
        style={{
          backgroundImage: regionBanner
            ? `url("${regionBanner}")`
            : 'none',
        }}
      >
        <div className="regional-rafip-hero-overlay" />

        <div className="regional-rafip-hero-inner">

          {/* BREADCRUMB */}

          <div className="regional-rafip-breadcrumb">
            <a href="/rafip-library">
              <ArrowLeft size={16} />
              RAFIP Regional Library
            </a>
          </div>

          {/* HERO CONTENT */}

          <div className="regional-rafip-hero-content">

            <div className="regional-rafip-hero-copy">

              <span className="regional-rafip-region-code">
                {region.code}
              </span>

              <h1>{region.name}</h1>

              <p>
                Regional Agriculture and Fisheries
                Investment Portfolio
              </p>

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

        {/* LOADING */}

        {loading && (
          <div className="regional-rafip-loading">

            <div className="regional-rafip-loading-spinner" />

            <p>
              Loading regional investment data...
            </p>

          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="regional-rafip-error">

            <h3>
              Unable to Load Data
            </h3>

            <p>
              {error}
            </p>

          </div>
        )}

        {/* NO REGIONAL DATA */}

        {!loading &&
          !error &&
          regionalData &&
          regionalData.records.length === 0 && (
            <div className="regional-rafip-error">

              <h3>
                No RAFIP Records Found
              </h3>

              <p>
                No investment package records were
                found for {region.code}.
              </p>

            </div>
          )}

        {/* ===================================================
            DATA CONTENT
        =================================================== */}

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

                  <span>
                    REGIONAL OVERVIEW
                  </span>

                  <h2>
                    {region.name}
                  </h2>

                  <p>
                    Investment information derived from
                    the RAFIP investment package database.
                  </p>

                </div>

                <div className="regional-rafip-metrics">

                  {/* INVESTMENT */}

                  <div className="regional-rafip-metric-card">

                    <div className="regional-rafip-metric-icon">
                      <Coins size={21} />
                    </div>

                    <div>

                      <span>
                        Investment Requirement
                      </span>

                      <strong>
                        {formatMoney(
                          investmentRequirement
                        )}
                      </strong>

                    </div>

                  </div>

                  {/* COMMODITIES */}

                  <div className="regional-rafip-metric-card">

                    <div className="regional-rafip-metric-icon">
                      <Sprout size={21} />
                    </div>

                    <div>

                      <span>
                        Priority Commodities
                      </span>

                      <strong>
                        {priorityCommodities}
                      </strong>

                    </div>

                  </div>

                  {/* PACKAGES */}

                  <div className="regional-rafip-metric-card">

                    <div className="regional-rafip-metric-icon">
                      <Package size={21} />
                    </div>

                    <div>

                      <span>
                        Investment Packages
                      </span>

                      <strong>
                        {investmentPackages}
                      </strong>

                    </div>

                  </div>

                  {/* AREAS */}

                  <div className="regional-rafip-metric-card">

                    <div className="regional-rafip-metric-icon">
                      <MapPinned size={21} />
                    </div>

                    <div>

                      <span>
                        Priority Areas
                      </span>

                      <strong>
                        {priorityAreas}
                      </strong>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  PRIORITY COMMODITIES
              ================================================= */}

              <section className="regional-rafip-section">

                <div className="regional-rafip-section-heading">

                  <span>
                    PRIORITY COMMODITIES
                  </span>

                  <h2>
                    Investment by Commodity
                  </h2>

                  <p>
                    Click a commodity to filter the
                    investment packages below.
                  </p>

                </div>

                {/* ALL COMMODITIES */}

                <div className="regional-rafip-commodity-filter">

                  <button
                    type="button"
                    className={`regional-rafip-all-button ${
                      selectedCommodity === null
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setSelectedCommodity(null)
                    }
                  >
                    <Sprout size={15} />
                    All Commodities
                  </button>

                </div>

                {/* COMMODITY CARDS */}

                <div className="regional-rafip-commodity-grid">

                  {commodities.map(
                    (commodity, index) => {

                      const isActive =
                        normalizeCommodity(
                          selectedCommodity
                        ) ===
                        normalizeCommodity(
                          commodity.name
                        )

                      const width =
                        maxInvestment > 0
                          ? Math.max(
                              8,
                              (commodity.investment /
                                maxInvestment) *
                                100
                            )
                          : 0

                      return (
                        <button
                          type="button"
                          className={`regional-rafip-commodity-card ${
                            isActive
                              ? 'active'
                              : ''
                          }`}
                          key={`${commodity.name}-${index}`}
                          onClick={() => {
                            setSelectedCommodity(
                              isActive
                                ? null
                                : commodity.name
                            )
                          }}
                          aria-pressed={isActive}
                        >

                          <div className="regional-rafip-commodity-top">

                            <div className="regional-rafip-commodity-info">

                              <div className="regional-rafip-commodity-icon">
                                {getCommodityIcon(
                                  commodity.name
                                )}
                              </div>

                              <div className="regional-rafip-commodity-details">

                                <h3>
                                  {commodity.name}
                                </h3>

                                <span>
                                  {commodity.packages}{' '}
                                  package
                                  {commodity.packages !== 1
                                    ? 's'
                                    : ''}
                                </span>

                              </div>

                            </div>

                            <div className="regional-rafip-commodity-investment">

                              <span>
                                Investment
                              </span>

                              <strong>
                                {formatMoney(
                                  commodity.investment
                                )}
                              </strong>

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

                        </button>
                      )
                    }
                  )}

                </div>

              </section>

              {/* =================================================
                  REGIONAL RAFIP PACKAGE LIST
              ================================================= */}

              <section className="regional-rafip-section">

                <div className="regional-rafip-section-heading">

                  <span>
                    RAFIP INVESTMENT PACKAGES
                  </span>

                  <h2>
                    {selectedCommodity
                      ? `${selectedCommodity} Packages`
                      : 'Regional Package List'}
                  </h2>

                  <p>
                    {selectedCommodity
                      ? `Showing investment packages classified under ${selectedCommodity}.`
                      : 'Detailed investment packages included in the regional RAFIP database.'}
                  </p>

                </div>

                {/* ACTIVE FILTER */}

                {selectedCommodity && (
                  <div className="regional-rafip-active-filter">

                    <div>

                      <span>
                        FILTERED BY COMMODITY
                      </span>

                      <strong>
                        {getCommodityIcon(
                          selectedCommodity
                        )}{' '}
                        {selectedCommodity}
                      </strong>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCommodity(null)
                      }
                    >
                      Clear Filter
                      <X size={15} />
                    </button>

                  </div>
                )}

                {/* PACKAGE RESULTS */}

                {displayedRecords.length > 0 ? (
                  <>

                    <div className="regional-rafip-package-table-wrap">

                      <div className="regional-rafip-package-table">

                        {/* TABLE HEADER */}

                        <div className="regional-rafip-package-row regional-rafip-package-header">

                          <div>
                            Package ID
                          </div>

                          <div>
                            Package Title
                          </div>

                          <div>
                            Commodity
                          </div>

                          <div>
                            Intervention
                          </div>

                          <div>
                            Location
                          </div>

                          <div>
                            Estimated Cost
                          </div>

                        </div>

                        {/* TABLE ROWS */}

                        {displayedRecords.map(
                          (item, index) => (

                            <div
                              className="regional-rafip-package-row"
                              key={
                                item.packageId ||
                                `${item.packageTitle}-${index}`
                              }
                            >

                              <div className="regional-rafip-package-id">

                                <strong>
                                  {item.packageId || '—'}
                                </strong>

                              </div>

                              <div className="regional-rafip-package-title">

                                <strong>
                                  {item.packageTitle ||
                                    'Untitled Package'}
                                </strong>

                              </div>

                              <div className="regional-rafip-package-commodity">

                                <span>
                                  {item.commodity || '—'}
                                </span>

                              </div>

                              <div className="regional-rafip-package-intervention">

                                <span>
                                  {item.interventionType ||
                                    '—'}
                                </span>

                              </div>

                              <div className="regional-rafip-package-location">

                                <span>
                                  {item.location ||
                                    item.coverage ||
                                    '—'}
                                </span>

                              </div>

                              <div className="regional-rafip-package-cost">

                                <strong>
                                  {formatMoney(
                                    item.estimatedCost
                                  )}
                                </strong>

                              </div>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                    {/* PACKAGE COUNT */}

                    <div className="regional-rafip-package-count">

                      Showing{' '}

                      <strong>
                        {displayedRecords.length.toLocaleString()}
                      </strong>{' '}

                      RAFIP package
                      {displayedRecords.length !== 1
                        ? 's'
                        : ''}

                      {selectedCommodity && (
                        <>
                          {' '}for{' '}

                          <strong>
                            {selectedCommodity}
                          </strong>
                        </>
                      )}

                      {!selectedCommodity && (
                        <>
                          {' '}for{' '}

                          <strong>
                            {region.code}
                          </strong>
                        </>
                      )}

                    </div>

                  </>
                ) : (

                  /* =================================================
                     NO FILTER RESULTS
                  ================================================= */

                  <div className="regional-rafip-no-packages">

                    <div className="regional-rafip-no-packages-icon">
                      <Package size={25} />
                    </div>

                    <h3>
                      No Packages Found
                    </h3>

                    <p>
                      No RAFIP investment packages
                      were found for{' '}

                      <strong>
                        {selectedCommodity}
                      </strong>{' '}

                      in {region.code}.
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCommodity(null)
                      }
                    >
                      View All Packages
                    </button>

                  </div>
                )}

              </section>

            </>
          )}

      </section>

    </main>
  )
}

export default RegionalRafipPage
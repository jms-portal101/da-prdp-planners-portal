import React, { useMemo, useState } from 'react'
import './InvestmentSpatialMap.css'
import regionalBoundaries from '../data/regional_boundaries.json'

// ============================================================================
// INVESTMENT SPATIAL MAP
// ============================================================================
// Local regional boundary source:
//
// src/data/regional_boundaries.json
//
// This component renders the Philippine regional boundaries as SVG.
// No external map tiles or external GeoJSON services are used.
// ============================================================================


// ============================================================================
// REGION NORMALIZATION
// ============================================================================

const normalizeRegion = (value = '') => {
  const text = String(value)
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim()

  if (!text) return ''

  // NCR
  if (
    text === 'NCR' ||
    text.includes('NATIONAL CAPITAL') ||
    text.includes('METRO MANILA')
  ) {
    return 'NCR'
  }

  // CAR
  if (
    text === 'CAR' ||
    text.includes('CORDILLERA')
  ) {
    return 'CAR'
  }

  // Region I
  if (
    text === 'REGION I' ||
    text === 'REGION 1' ||
    text.includes('ILOCOS')
  ) {
    return 'Region I'
  }

  // Region II
  if (
    text === 'REGION II' ||
    text === 'REGION 2' ||
    text.includes('CAGAYAN VALLEY')
  ) {
    return 'Region II'
  }

  // Region III
  if (
    text === 'REGION III' ||
    text === 'REGION 3' ||
    text.includes('CENTRAL LUZON')
  ) {
    return 'Region III'
  }

  // Region IV-A
  if (
    text.includes('IV-A') ||
    text.includes('IV A') ||
    text.includes('4-A') ||
    text.includes('4A') ||
    text.includes('CALABARZON')
  ) {
    return 'Region IV-A'
  }

  // Region IV-B
  if (
    text.includes('IV-B') ||
    text.includes('IV B') ||
    text.includes('4-B') ||
    text.includes('4B') ||
    text.includes('MIMAROPA')
  ) {
    return 'Region IV-B'
  }

  // Region V
  if (
    text === 'REGION V' ||
    text === 'REGION 5' ||
    text.includes('BICOL')
  ) {
    return 'Region V'
  }

  // NIR
  if (
    text === 'NIR' ||
    text.includes('NEGROS ISLAND')
  ) {
    return 'NIR'
  }

  // Region VI
  if (
    text === 'REGION VI' ||
    text === 'REGION 6' ||
    text.includes('WESTERN VISAYAS')
  ) {
    return 'Region VI'
  }

  // Region VII
  if (
    text === 'REGION VII' ||
    text === 'REGION 7' ||
    text.includes('CENTRAL VISAYAS')
  ) {
    return 'Region VII'
  }

  // Region VIII
  if (
    text === 'REGION VIII' ||
    text === 'REGION 8' ||
    text.includes('EASTERN VISAYAS')
  ) {
    return 'Region VIII'
  }

  // Region IX
  if (
    text === 'REGION IX' ||
    text === 'REGION 9' ||
    text.includes('ZAMBOANGA')
  ) {
    return 'Region IX'
  }

  // Region X
  if (
    text === 'REGION X' ||
    text === 'REGION 10' ||
    text.includes('NORTHERN MINDANAO')
  ) {
    return 'Region X'
  }

  // Region XI
  if (
    text === 'REGION XI' ||
    text === 'REGION 11' ||
    text.includes('DAVAO')
  ) {
    return 'Region XI'
  }

  // Region XII
  if (
    text === 'REGION XII' ||
    text === 'REGION 12' ||
    text.includes('SOCCSKSARGEN')
  ) {
    return 'Region XII'
  }

  // Region XIII
  if (
    text === 'REGION XIII' ||
    text === 'REGION 13' ||
    text.includes('CARAGA')
  ) {
    return 'Region XIII'
  }

  // BARMM
  if (
    text === 'BARMM' ||
    text.includes('BANGSAMORO')
  ) {
    return 'BARMM'
  }

  return text
}


// ============================================================================
// INVESTMENT CLASS
// ============================================================================

const getInvestmentClass = (value) => {
  const billions =
    (Number(value) || 0) / 1_000_000_000

  if (billions > 30) {
    return 'investment-red'
  }

  if (billions >= 20) {
    return 'investment-orange'
  }

  if (billions >= 10) {
    return 'investment-yellow'
  }

  if (billions >= 5) {
    return 'investment-green'
  }

  return 'investment-blue'
}


// ============================================================================
// INVESTMENT COLOR
// ============================================================================

const getInvestmentColor = (value) => {
  const billions =
    (Number(value) || 0) / 1_000_000_000

  if (billions > 30) {
    return '#dc2626'
  }

  if (billions >= 20) {
    return '#f97316'
  }

  if (billions >= 10) {
    return '#eab308'
  }

  if (billions >= 5) {
    return '#16a34a'
  }

  return '#2563eb'
}


// ============================================================================
// FORMAT INVESTMENT
// ============================================================================

const formatInvestment = (value) => {
  const billions =
    (Number(value) || 0) / 1_000_000_000

  if (billions === 0) {
    return '₱ 0 B'
  }

  return `₱ ${billions.toFixed(1)} B`
}


// ============================================================================
// GEOJSON COORDINATE HELPERS
// ============================================================================

const getCoordinates = (geometry) => {
  if (!geometry) {
    return []
  }

  if (geometry.type === 'Polygon') {
    return geometry.coordinates || []
  }

  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates
      ? geometry.coordinates.flat(1)
      : []
  }

  return []
}


// ============================================================================
// GET MAP BOUNDS
// ============================================================================

const getBounds = (features) => {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  features.forEach((feature) => {
    const rings =
      getCoordinates(feature.geometry)

    rings.forEach((ring) => {
      if (!Array.isArray(ring)) {
        return
      }

      ring.forEach((coordinate) => {
        if (!Array.isArray(coordinate)) {
          return
        }

        const [x, y] = coordinate

        if (
          typeof x !== 'number' ||
          typeof y !== 'number'
        ) {
          return
        }

        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
      })
    })
  })

  if (
    !Number.isFinite(minX) ||
    !Number.isFinite(minY) ||
    !Number.isFinite(maxX) ||
    !Number.isFinite(maxY)
  ) {
    return null
  }

  return {
    minX,
    minY,
    maxX,
    maxY,
  }
}


// ============================================================================
// PROJECT GEOGRAPHIC COORDINATE TO SVG
// ============================================================================

const projectPoint = (
  [longitude, latitude],
  bounds,
  width,
  height,
  padding = 30
) => {
  const rangeX =
    bounds.maxX - bounds.minX

  const rangeY =
    bounds.maxY - bounds.minY

  const safeRangeX =
    rangeX === 0 ? 1 : rangeX

  const safeRangeY =
    rangeY === 0 ? 1 : rangeY

  const usableWidth =
    width - padding * 2

  const usableHeight =
    height - padding * 2

  const x =
    padding +
    ((longitude - bounds.minX) /
      safeRangeX) *
      usableWidth

  const y =
    height -
    padding -
    ((latitude - bounds.minY) /
      safeRangeY) *
      usableHeight

  return [x, y]
}


// ============================================================================
// RING TO SVG PATH
// ============================================================================

const ringToPath = (
  ring,
  bounds,
  width,
  height,
  padding
) => {
  if (!ring || ring.length === 0) {
    return ''
  }

  return (
    ring
      .map(
        ([longitude, latitude], index) => {
          const [x, y] =
            projectPoint(
              [longitude, latitude],
              bounds,
              width,
              height,
              padding
            )

          return `${
            index === 0 ? 'M' : 'L'
          } ${x.toFixed(2)} ${y.toFixed(2)}`
        }
      )
      .join(' ') + ' Z'
  )
}


// ============================================================================
// GEOMETRY TO SVG PATH
// ============================================================================

const geometryToPath = (
  geometry,
  bounds,
  width,
  height,
  padding
) => {
  if (!geometry || !bounds) {
    return ''
  }

  // Polygon
  if (geometry.type === 'Polygon') {
    return (
      geometry.coordinates || []
    )
      .map((ring) =>
        ringToPath(
          ring,
          bounds,
          width,
          height,
          padding
        )
      )
      .join(' ')
  }

  // MultiPolygon
  if (geometry.type === 'MultiPolygon') {
    return (
      geometry.coordinates || []
    )
      .map((polygon) =>
        (polygon || [])
          .map((ring) =>
            ringToPath(
              ring,
              bounds,
              width,
              height,
              padding
            )
          )
          .join(' ')
      )
      .join(' ')
  }

  return ''
}


// ============================================================================
// REGION LABEL POSITIONS
// ============================================================================

const regionLabels = {
  'Region I': {
    x: 205,
    y: 170,
  },

  CAR: {
    x: 300,
    y: 190,
  },

  'Region II': {
    x: 430,
    y: 145,
  },

  'Region III': {
    x: 355,
    y: 245,
  },

  NCR: {
    x: 355,
    y: 315,
  },

  'Region IV-A': {
    x: 365,
    y: 365,
  },

  'Region IV-B': {
    x: 250,
    y: 410,
  },

  'Region V': {
    x: 510,
    y: 430,
  },

  NIR: {
    x: 560,
    y: 570,
  },

  'Region VI': {
    x: 455,
    y: 520,
  },

  'Region VII': {
    x: 560,
    y: 545,
  },

  'Region VIII': {
    x: 685,
    y: 500,
  },

  'Region IX': {
    x: 445,
    y: 700,
  },

  'Region X': {
    x: 610,
    y: 675,
  },

  'Region XI': {
    x: 715,
    y: 765,
  },

  'Region XII': {
    x: 560,
    y: 765,
  },

  'Region XIII': {
    x: 745,
    y: 625,
  },

  BARMM: {
    x: 490,
    y: 805,
  },
}


// ============================================================================
// GET REGION NAME FROM GEOJSON FEATURE
// ============================================================================

const getFeatureRegion = (feature) => {
  const properties =
    feature?.properties || {}

  /*
    Different GeoJSON datasets use different
    property names. We check several common ones.
  */

  const possibleNames = [
    properties.region,
    properties.REGION,
    properties.Region,

    properties.reg_name,
    properties.REG_NAME,

    properties.region_name,
    properties.REGION_NAME,
    properties.REGION_NAM,

    properties.RegionName,
    properties.Region_Name,

    properties.name,
    properties.NAME,
    properties.Name,

    properties.NAME_1,
    properties.name_1,

    properties.ADM1_EN,
    properties.ADM1_NAME,

    properties.province,
    properties.PROVINCE,
  ]

  for (const name of possibleNames) {
    if (
      name !== undefined &&
      name !== null &&
      String(name).trim() !== ''
    ) {
      const normalized =
        normalizeRegion(name)

      if (normalized) {
        return normalized
      }
    }
  }

  return ''
}


// ============================================================================
// MAIN COMPONENT
// ============================================================================

function InvestmentSpatialMap({
  data = [],
}) {
  const [hoveredRegion, setHoveredRegion] =
    useState(null)

  // SVG canvas
  const width = 900
  const height = 900
  const padding = 35

  // --------------------------------------------------------------------------
  // LOCAL GEOJSON
  // --------------------------------------------------------------------------

  const geoData = regionalBoundaries

  // --------------------------------------------------------------------------
  // INVESTMENT DATA
  // --------------------------------------------------------------------------

  const regionalInvestment = useMemo(() => {
    const totals = {}

    data.forEach((item) => {
      const region =
        normalizeRegion(
          item.region ||
            item.Region ||
            item.regionName ||
            item.RegionName ||
            item.regionalOffice ||
            item.region_code ||
            item.RegionCode
        )

      if (!region) {
        return
      }

      const rawCost =
        item.estimatedCost ??
        item.EstimatedCost ??
        item['Estimated Cost'] ??
        item.cost ??
        0

      let cost = 0

      if (
        typeof rawCost === 'number'
      ) {
        cost = rawCost
      } else {
        const cleaned =
          String(rawCost)
            .replace(/₱/g, '')
            .replace(/PHP/gi, '')
            .replace(/,/g, '')
            .trim()

        cost =
          Number(cleaned) || 0
      }

      totals[region] =
        (totals[region] || 0) +
        cost
    })

    return totals
  }, [data])

  // --------------------------------------------------------------------------
  // GEOJSON FEATURES
  // --------------------------------------------------------------------------

  const features = useMemo(() => {
    if (!geoData) {
      return []
    }

    if (
      geoData.type ===
      'FeatureCollection'
    ) {
      return Array.isArray(
        geoData.features
      )
        ? geoData.features
        : []
    }

    return []
  }, [geoData])

  // --------------------------------------------------------------------------
  // MAP BOUNDS
  // --------------------------------------------------------------------------

  const bounds = useMemo(() => {
    if (!features.length) {
      return null
    }

    return getBounds(features)
  }, [features])

  // --------------------------------------------------------------------------
  // CREATE MAP FEATURES
  // --------------------------------------------------------------------------

  const mapFeatures = useMemo(() => {
    if (!bounds) {
      return []
    }

    return features.map(
      (feature, index) => {
        const region =
          getFeatureRegion(
            feature
          )

        const investment =
          regionalInvestment[
            region
          ] || 0

        return {
          id:
            feature.id ||
            feature.properties
              ?.OBJECTID ||
            feature.properties
              ?.FID ||
            `region-${index}`,

          feature,

          region,

          investment,

          className:
            getInvestmentClass(
              investment
            ),

          color:
            getInvestmentColor(
              investment
            ),

          path:
            geometryToPath(
              feature.geometry,
              bounds,
              width,
              height,
              padding
            ),
        }
      }
    )
  }, [
    features,
    bounds,
    regionalInvestment,
  ])

  // --------------------------------------------------------------------------
  // SAFETY CHECK
  // --------------------------------------------------------------------------

  if (
    !geoData ||
    !bounds ||
    !mapFeatures.length
  ) {
    return (
      <div className="investment-map-container">

        <div className="investment-map-header">

          <span className="section-eyebrow">
            SPATIAL INVESTMENT INTELLIGENCE
          </span>

          <h2>
            Investment Requirement by Region
          </h2>

          <p>
            Regional investment requirements
            across the Philippines.
          </p>

        </div>

        <div className="investment-map-error">

          <strong>
            Unable to render regional map
          </strong>

          <span>
            No valid regional boundary
            features were found in
            regional_boundaries.json.
          </span>

        </div>

      </div>
    )
  }

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <div className="investment-map-container">

      {/* ================================================================== */}
      {/* MAP HEADER                                                        */}
      {/* ================================================================== */}

      <div className="investment-map-header">

        <span className="section-eyebrow">
          SPATIAL INVESTMENT INTELLIGENCE
        </span>

        <h2>
          Investment Requirement by Region
        </h2>

        <p>
          Regional investment requirements
          across the Philippines.
        </p>

      </div>


      {/* ================================================================== */}
      {/* MAP                                                                */}
      {/* ================================================================== */}

      <div className="investment-map-wrapper">

        <svg
          className="philippines-investment-map"
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="Philippines regional investment requirement map"
        >

          {/* ============================================================ */}
          {/* REGIONAL BOUNDARIES                                          */}
          {/* ============================================================ */}

          <g className="philippines-regions">

            {mapFeatures.map(
              ({
                id,
                path,
                region,
                investment,
              }) => {

                const color =
                  getInvestmentColor(
                    investment
                  )

                return (
                  <path
                    key={id}
                    d={path}
                    className={`philippines-region ${getInvestmentClass(
                      investment
                    )}`}
                    fill={color}
                    stroke="#ffffff"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"

                    onMouseEnter={() =>
                      setHoveredRegion({
                        region,
                        investment,
                      })
                    }

                    onMouseLeave={() =>
                      setHoveredRegion(null)
                    }

                    onFocus={() =>
                      setHoveredRegion({
                        region,
                        investment,
                      })
                    }

                    tabIndex={0}
                  />
                )
              }
            )}

          </g>


          {/* ============================================================ */}
          {/* REGION LABELS                                                */}
          {/* ============================================================ */}

          <g className="region-labels">

            {Object.entries(
              regionLabels
            ).map(
              ([region, position]) => {

                const investment =
                  regionalInvestment[
                    region
                  ] || 0

                const color =
                  getInvestmentColor(
                    investment
                  )

                return (
                  <g
                    key={region}
                    transform={`translate(${position.x}, ${position.y})`}
                    className="region-marker"

                    onMouseEnter={() =>
                      setHoveredRegion({
                        region,
                        investment,
                      })
                    }

                    onMouseLeave={() =>
                      setHoveredRegion(null)
                    }
                  >

                    {/* Region dot */}
                    <circle
                      r="8"
                      fill={color}
                      stroke="#ffffff"
                      strokeWidth="3"
                    />

                    {/* Region name */}
                    <rect
                      x="-45"
                      y="13"
                      width="90"
                      height="24"
                      rx="7"
                      fill="#ffffff"
                      stroke="#d7e3de"
                    />

                    <text
                      x="0"
                      y="29"
                      textAnchor="middle"
                      className="region-label-text"
                    >
                      {region}
                    </text>

                    {/* Investment value */}
                    <text
                      x="0"
                      y="51"
                      textAnchor="middle"
                      className="region-value-text"
                    >
                      {formatInvestment(
                        investment
                      )}
                    </text>

                  </g>
                )
              }
            )}

          </g>


          {/* ============================================================ */}
          {/* PHILIPPINES LABEL                                            */}
          {/* ============================================================ */}

          <g
            transform="translate(450 865)"
            className="country-label"
          >

            <rect
              x="-78"
              y="-18"
              width="156"
              height="36"
              rx="18"
              fill="#ffffff"
              stroke="#d7e3de"
            />

            <text
              x="0"
              y="6"
              textAnchor="middle"
              className="country-label-text"
            >
              PHILIPPINES
            </text>

          </g>

        </svg>


        {/* ================================================================ */}
        {/* HOVER TOOLTIP                                                   */}
        {/* ================================================================ */}

        {hoveredRegion && (
          <div className="investment-map-tooltip">

            <div className="tooltip-region">
              {hoveredRegion.region ||
                'Philippine Region'}
            </div>

            <div className="tooltip-value">
              {formatInvestment(
                hoveredRegion.investment
              )}
            </div>

            <div className="tooltip-description">
              Estimated investment requirement
            </div>

          </div>
        )}

      </div>


      {/* ================================================================== */}
      {/* LEGEND                                                             */}
      {/* ================================================================== */}

      <div className="investment-map-legend">

        <div className="legend-title">
          Investment Requirement
        </div>

        <div className="legend-items">

          <div className="legend-item">
            <span className="legend-dot investment-red" />
            <span>
              &gt; ₱30 B
            </span>
          </div>

          <div className="legend-item">
            <span className="legend-dot investment-orange" />
            <span>
              ₱20 – 30 B
            </span>
          </div>

          <div className="legend-item">
            <span className="legend-dot investment-yellow" />
            <span>
              ₱10 – 20 B
            </span>
          </div>

          <div className="legend-item">
            <span className="legend-dot investment-green" />
            <span>
              ₱5 – 10 B
            </span>
          </div>

          <div className="legend-item">
            <span className="legend-dot investment-blue" />
            <span>
              &lt; ₱5 B
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default InvestmentSpatialMap
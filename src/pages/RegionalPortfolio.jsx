import {
  useEffect,
  useMemo,
  useState,
  useDeferredValue,
} from 'react'

import {
  Search,
  Map as MapIcon,
  ArrowUpRight,
  PlayCircle,
  Package,
  Coins,
  Leaf,
  BarChart3,
  MapPinned,
  X,
  RotateCcw,
  Maximize2,
  ExternalLink,
} from 'lucide-react'

import './RegionalPortfolio.css'
import regions from '../data/regions'

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
   MONEY
========================================================= */

function parseCost(value) {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return 0
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0
  }

  const cleaned = String(value)
    .replace(/₱/g, '')
    .replace(/PHP/gi, '')
    .replace(/,/g, '')
    .replace(/\s/g, '')
    .trim()

  const number = Number(cleaned)

  return Number.isFinite(number) ? number : 0
}

function formatMoney(value) {
  const amount = Number(value) || 0

  if (amount >= 1_000_000_000) {
    return `₱ ${(amount / 1_000_000_000).toFixed(1)} B`
  }

  if (amount >= 1_000_000) {
    return `₱ ${(amount / 1_000_000).toFixed(1)} M`
  }

  if (amount >= 1_000) {
    return `₱ ${(amount / 1_000).toFixed(0)} K`
  }

  return `₱ ${amount.toLocaleString()}`
}

function formatBillions(value) {
  return `${(Number(value) || 0).toFixed(1)} B`
}

/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
}

/* =========================================================
   REGIONAL RAFIP FLIPBOOKS

   NCR intentionally has no entry because no NCR
   flipbook URL was provided.
========================================================= */

const regionalFlipbooks = {
  CAR: 'https://heyzine.com/flip-book/a2d491661c.html',
  'Region I': 'https://heyzine.com/flip-book/804745dd14.html',
  'Region II': 'https://heyzine.com/flip-book/9f0d9e85b7.html',
  'Region III': 'https://heyzine.com/flip-book/9c22d653d4.html',
  'Region IV-A': 'https://heyzine.com/flip-book/e86b589dc3.html',
  'Region IV-B': 'https://heyzine.com/flip-book/b8ce6424e8.html',
  'Region V': 'https://heyzine.com/flip-book/f7dc544b9e.html',
  'Region VI': 'https://heyzine.com/flip-book/03591fc5b6.html',
  'Region VII': 'https://heyzine.com/flip-book/ff3128d0fb.html',
  'Region VIII': 'https://heyzine.com/flip-book/16aa3c429b.html',
  NIR: 'https://heyzine.com/flip-book/5bfd5bfa71.html',
  'Region IX': 'https://heyzine.com/flip-book/273fe675fb.html',
  'Region X': 'https://heyzine.com/flip-book/f2fa6a0788.html',
  'Region XI': 'https://heyzine.com/flip-book/93f0ef8282.html',
  'Region XII': 'https://heyzine.com/flip-book/f77b363939.html',
  'Region XIII': 'https://heyzine.com/flip-book/9d026474f5.html',
  BARMM: 'https://heyzine.com/flip-book/13e9e61cc9.html',
}

/* =========================================================
   REGION CODE
========================================================= */

function getRegionCode(regionName = '') {
  const raw = String(regionName || '').trim()

  if (!raw) {
    return ''
  }

  const text = normalizeText(raw)

  const exactCodes = [
    'car',
    'ncr',
    'region i',
    'region ii',
    'region iii',
    'region iv-a',
    'region iv-b',
    'region v',
    'region vi',
    'region vii',
    'region viii',
    'region ix',
    'region x',
    'region xi',
    'region xii',
    'region xiii',
    'nir',
    'barmm',
  ]

  const exactCodeMatch = exactCodes.find(
    code => text === code
  )

  if (exactCodeMatch) {
    return canonicalRegionCode(exactCodeMatch)
  }

  const parentheticalMatch = raw.match(
    /\((CAR|NCR|NIR|BARMM|Region\s+[IVX]+(?:-[AB])?)\)/i
  )

  if (parentheticalMatch) {
    return canonicalRegionCode(
      parentheticalMatch[1]
    )
  }

  const explicitRegionMatch = raw.match(
    /\b(Region\s+[IVX]+(?:-[AB])?)\b/i
  )

  if (explicitRegionMatch) {
    return canonicalRegionCode(
      explicitRegionMatch[1]
    )
  }

  const fullNameMappings = [
    ['cordillera administrative region', 'CAR'],
    ['national capital region', 'NCR'],
    ['ilocos region', 'Region I'],
    ['cagayan valley', 'Region II'],
    ['central luzon', 'Region III'],
    ['calabarzon', 'Region IV-A'],
    ['mimaropa', 'Region IV-B'],
    ['bicol region', 'Region V'],
    ['western visayas', 'Region VI'],
    ['central visayas', 'Region VII'],
    ['eastern visayas', 'Region VIII'],
    ['zamboanga peninsula', 'Region IX'],
    ['northern mindanao', 'Region X'],
    ['davao region', 'Region XI'],
    ['davao', 'Region XI'],
    ['soccsksargen', 'Region XII'],
    ['caraga', 'Region XIII'],
    ['negros island region', 'NIR'],
    ['bangsamoro', 'BARMM'],
  ]

  const fullNameMatch =
    fullNameMappings.find(
      ([name]) => text === name
    )

  if (fullNameMatch) {
    return fullNameMatch[1]
  }

  const extendedMatch =
    fullNameMappings.find(
      ([name]) =>
        text.startsWith(`${name} `) ||
        text.endsWith(` ${name}`)
    )

  if (extendedMatch) {
    return extendedMatch[1]
  }

  return raw
}

/* =========================================================
   CANONICAL REGION CODE
========================================================= */

function canonicalRegionCode(value = '') {
  const text = normalizeText(value)

  const map = {
    car: 'CAR',
    ncr: 'NCR',
    nir: 'NIR',
    barmm: 'BARMM',
    'region i': 'Region I',
    'region ii': 'Region II',
    'region iii': 'Region III',
    'region iv-a': 'Region IV-A',
    'region iv-b': 'Region IV-B',
    'region v': 'Region V',
    'region vi': 'Region VI',
    'region vii': 'Region VII',
    'region viii': 'Region VIII',
    'region ix': 'Region IX',
    'region x': 'Region X',
    'region xi': 'Region XI',
    'region xii': 'Region XII',
    'region xiii': 'Region XIII',
  }

  return map[text] || value
}

/* =========================================================
   EXACT REGION MATCH
========================================================= */

function regionMatches(
  itemRegion,
  selectedRegion
) {
  if (
    !selectedRegion ||
    selectedRegion === 'ALL'
  ) {
    return true
  }

  const itemCode =
    getRegionCode(itemRegion)

  const selectedCode =
    getRegionCode(selectedRegion)

  return (
    normalizeText(itemCode) ===
    normalizeText(selectedCode)
  )
}

/* =========================================================
   RAFIP DATA NORMALIZATION
========================================================= */

function normalizeRAFIPData(data) {
  if (Array.isArray(data)) {
    return data
  }

  if (Array.isArray(data?.data)) {
    return data.data
  }

  if (Array.isArray(data?.records)) {
    return data.records
  }

  if (Array.isArray(data?.rows)) {
    return data.rows
  }

  return []
}

/* =========================================================
   DONUT COLORS
========================================================= */

const donutColors = [
  '#126b45',
  '#e0a52b',
  '#3b82a0',
  '#d96c4f',
  '#7b61a8',
  '#2d8c68',
  '#c47f32',
  '#5c9b76',
]

/* =========================================================
   REGIONAL PORTFOLIO
========================================================= */

function RegionalPortfolio() {
  const [searchTerm, setSearchTerm] =
    useState('')

  const [rafipData, setRafipData] =
    useState([])

  const deferredRafipData =
    useDeferredValue(rafipData)

  const [dataLoading, setDataLoading] =
    useState(true)

  const [dataError, setDataError] =
    useState('')

  const [selectedRegion, setSelectedRegion] =
    useState(null)

  const [dashboardRegion, setDashboardRegion] =
    useState('ALL')

  const [selectedCluster, setSelectedCluster] =
    useState('ALL')

  const [selectedCommodity, setSelectedCommodity] =
    useState('ALL')

  const [showVideoMessage, setShowVideoMessage] =
    useState(false)

  const [
    isFlipbookFullscreen,
    setIsFlipbookFullscreen,
  ] = useState(false)

  const [showMoreRegions, setShowMoreRegions] =
    useState(false)

  const [
    showMoreCommodities,
    setShowMoreCommodities,
  ] = useState(false)

  /* =======================================================
     LOAD RAFIP JSON
  ======================================================= */

  useEffect(() => {
    let mounted = true

    async function loadRAFIPData() {
      try {
        setDataLoading(true)
        setDataError('')

        const response = await fetch(
          '/data/RAFIP_Investment_Packages_20260928.json'
        )

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}`
          )
        }

        const json =
          await response.json()

        if (mounted) {
          setRafipData(
            normalizeRAFIPData(json)
          )
        }
      } catch (error) {
        console.error(
          'RAFIP data loading error:',
          error
        )

        if (mounted) {
          setDataError(
            'Unable to load RAFIP investment data.'
          )

          setRafipData([])
        }
      } finally {
        if (mounted) {
          setDataLoading(false)
        }
      }
    }

    loadRAFIPData()

    return () => {
      mounted = false
    }
  }, [])

  /* =======================================================
     PREPARE DATA
  ======================================================= */

  const preparedData = useMemo(() => {
    return deferredRafipData
      .map(item => {
        const region =
          item.Region ??
          item.region ??
          ''

        const regionCode =
          getRegionCode(region)

        const cluster =
          item.Cluster ??
          item.cluster ??
          ''

        const commodity =
          item.Commodity ??
          item.commodity ??
          ''

        const interventionType =
          item['Intervention Type'] ??
          item.InterventionType ??
          item.interventionType ??
          ''

        const packageId =
          item['Package ID'] ??
          item.PackageID ??
          item.packageId ??
          ''

        const packageTitle =
          item['Package Title'] ??
          item.PackageTitle ??
          item.packageTitle ??
          ''

        const location =
          item.Location ??
          item.location ??
          ''

        const coverage =
          item.Coverage ??
          item.coverage ??
          ''

        const estimatedCost =
          parseCost(
            item['Estimated Cost'] ??
              item.EstimatedCost ??
              item.estimatedCost
          )

        const validationStatus =
          item['Validation Status'] ??
          item.ValidationStatus ??
          item.validationStatus ??
          ''

        return {
          ...item,
          region,
          regionCode,
          cluster,
          commodity,
          interventionType,
          packageId,
          packageTitle,
          location,
          coverage,
          estimatedCost,
          validationStatus,
        }
      })
      .filter(item => item.region)
  }, [deferredRafipData])

  /* =======================================================
     CLUSTER OPTIONS
  ======================================================= */

  const clusterOptions = useMemo(() => {
    return [
      ...new Set(
        preparedData
          .map(item => item.cluster)
          .filter(Boolean)
      ),
    ].sort()
  }, [preparedData])

  /* =======================================================
     COMMODITY OPTIONS
  ======================================================= */

  const commodityOptions = useMemo(() => {
    return [
      ...new Set(
        preparedData
          .map(item => item.commodity)
          .filter(Boolean)
      ),
    ].sort((a, b) =>
      String(a).localeCompare(
        String(b)
      )
    )
  }, [preparedData])

  /* =======================================================
     FILTERED DASHBOARD DATA
  ======================================================= */

  const dashboardData = useMemo(() => {
    return preparedData.filter(item => {
      const clusterMatch =
        selectedCluster === 'ALL' ||
        normalizeText(item.cluster) ===
          normalizeText(selectedCluster)

      const regionMatch =
        dashboardRegion === 'ALL' ||
        regionMatches(
          item.regionCode,
          dashboardRegion
        )

      const commodityMatch =
        selectedCommodity === 'ALL' ||
        normalizeText(item.commodity) ===
          normalizeText(selectedCommodity)

      return (
        clusterMatch &&
        regionMatch &&
        commodityMatch
      )
    })
  }, [
    preparedData,
    selectedCluster,
    dashboardRegion,
    selectedCommodity,
  ])

  /* =======================================================
     NATIONAL TOTALS
  ======================================================= */

  const totalInvestment = useMemo(() => {
    return preparedData.reduce(
      (sum, item) =>
        sum + item.estimatedCost,
      0
    )
  }, [preparedData])

  const totalPackages =
    preparedData.length

  const totalCommodities = useMemo(() => {
    return new Set(
      preparedData
        .map(item => item.commodity)
        .filter(Boolean)
    ).size
  }, [preparedData])

  /* =======================================================
     FILTERED TOTAL INVESTMENT
  ======================================================= */

  const filteredInvestment = useMemo(() => {
    return dashboardData.reduce(
      (sum, item) =>
        sum + item.estimatedCost,
      0
    )
  }, [dashboardData])

  /* =======================================================
     REGIONAL SUMMARY
  ======================================================= */

  const regionalSummary = useMemo(() => {
    const summary = {}

    dashboardData.forEach(item => {
      const code =
        getRegionCode(item.region)

      if (!code) return

      if (!summary[code]) {
        summary[code] = {
          code,
          region: item.region,
          investment: 0,
          packages: 0,
          commodities: new Set(),
        }
      }

      summary[code].investment +=
        item.estimatedCost

      summary[code].packages += 1

      if (item.commodity) {
        summary[code].commodities.add(
          item.commodity
        )
      }
    })

    return Object.values(summary)
      .map(item => ({
        ...item,
        commodities:
          item.commodities.size,
      }))
      .sort(
        (a, b) =>
          b.investment -
          a.investment
      )
  }, [dashboardData])

  const maxRegionalInvestment =
    useMemo(() => {
      return Math.max(
        ...regionalSummary.map(
          item => item.investment
        ),
        1
      )
    }, [regionalSummary])

  /* =======================================================
     COMMODITY SUMMARY
  ======================================================= */

  const commoditySummary = useMemo(() => {
    const summary = {}

    dashboardData.forEach(item => {
      const commodity =
        item.commodity || 'Others'

      if (!summary[commodity]) {
        summary[commodity] = {
          commodity,
          investment: 0,
          packages: 0,
        }
      }

      summary[commodity].investment +=
        item.estimatedCost

      summary[commodity].packages += 1
    })

    return Object.values(summary)
      .sort(
        (a, b) =>
          b.investment -
          a.investment
      )
  }, [dashboardData])

  const topCommodities =
    commoditySummary.slice(0, 10)

  const displayedCommodities =
    showMoreCommodities
      ? commoditySummary
      : topCommodities

  /* =======================================================
     DONUT
  ======================================================= */

  const donutSegments = useMemo(() => {
    const total =
      commoditySummary.reduce(
        (sum, item) =>
          sum + item.investment,
        0
      )

    if (!total) {
      return []
    }

    let cumulative = 0

    return topCommodities.map(
      (item, index) => {
        const percentage =
          (item.investment / total) *
          100

        const start = cumulative

        cumulative += percentage

        return {
          ...item,
          percentage,
          start,
          end: cumulative,
          color:
            donutColors[
              index %
                donutColors.length
            ],
        }
      }
    )
  }, [
    commoditySummary,
    topCommodities,
  ])

  const donutGradient = useMemo(() => {
    if (!donutSegments.length) {
      return 'conic-gradient(#e5ece8 0deg 360deg)'
    }

    const parts =
      donutSegments.map(segment => {
        const start =
          (segment.start / 100) *
          360

        const end =
          (segment.end / 100) *
          360

        return `${segment.color} ${start}deg ${end}deg`
      })

    return `conic-gradient(${parts.join(', ')})`
  }, [donutSegments])

  /* =======================================================
     INTERVENTION SUMMARY
  ======================================================= */

  const interventionSummary =
    useMemo(() => {
      const summary = {}

      dashboardData.forEach(item => {
        const types =
          String(
            item.interventionType || ''
          )
            .split('|')
            .map(type =>
              type.trim()
            )
            .filter(Boolean)

        types.forEach(type => {
          if (!summary[type]) {
            summary[type] = {
              type,
              investment: 0,
              packages: 0,
            }
          }

          summary[type].investment +=
            item.estimatedCost

          summary[type].packages += 1
        })
      })

      return Object.values(summary)
        .sort(
          (a, b) =>
            b.investment -
            a.investment
        )
        .slice(0, 5)
    }, [dashboardData])

  const maxInterventionInvestment =
    Math.max(
      ...interventionSummary.map(
        item => item.investment
      ),
      1
    )

  /* =======================================================
     SEARCH REGIONS
  ======================================================= */

  const filteredRegions = useMemo(() => {
    const search =
      searchTerm
        .toLowerCase()
        .trim()

    if (!search) {
      return regions
    }

    return regions.filter(region => {
      const regionName =
        String(
          region.name || ''
        ).toLowerCase()

      const fullName =
        String(
          region.fullName || ''
        ).toLowerCase()

      const commodities =
        Array.isArray(
          region.commodities
        )
          ? region.commodities
              .join(' ')
              .toLowerCase()
          : ''

      return (
        regionName.includes(search) ||
        fullName.includes(search) ||
        commodities.includes(search)
      )
    })
  }, [searchTerm])

  /* =======================================================
     FIND REGION OBJECT
  ======================================================= */

  function findRegionObject(
    codeOrName
  ) {
    if (
      !codeOrName ||
      codeOrName === 'ALL'
    ) {
      return null
    }

    const targetCode =
      getRegionCode(codeOrName)

    return (
      regions.find(region => {
        const regionCode =
          getRegionCode(
            region.name
          )

        const fullCode =
          getRegionCode(
            region.fullName
          )

        return (
          normalizeText(
            regionCode
          ) ===
            normalizeText(
              targetCode
            ) ||
          normalizeText(
            fullCode
          ) ===
            normalizeText(
              targetCode
            )
        )
      }) || null
    )
  }

  /* =======================================================
     SELECT REGION
  ======================================================= */

  function selectRegion(
    codeOrName
  ) {
    if (
      !codeOrName ||
      codeOrName === 'ALL'
    ) {
      setDashboardRegion('ALL')
      setSelectedRegion(null)
      setSelectedCommodity('ALL')
      setIsFlipbookFullscreen(false)
      return
    }

    const code =
      getRegionCode(codeOrName)

    const regionObject =
      findRegionObject(code)

    setDashboardRegion(code)

    /*
      Keep the selected commodity so Region +
      Cluster + Commodity can work together.
    */

    if (regionObject) {
      setSelectedRegion(
        regionObject
      )
    } else {
      setSelectedRegion({
        name: code,
        fullName: code,
        commodities: [],
      })
    }
  }

  /* =======================================================
     SELECT COMMODITY
  ======================================================= */

  function selectCommodity(
    commodity
  ) {
    const value = String(
      commodity || ''
    ).trim()

    if (!value) return

    setSelectedCommodity(
      previous => {
        if (
          normalizeText(previous) ===
          normalizeText(value)
        ) {
          return 'ALL'
        }

        return value
      }
    )
  }

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  function resetDashboard() {
    setSelectedCluster('ALL')
    setDashboardRegion('ALL')
    setSelectedRegion(null)
    setSelectedCommodity('ALL')
    setIsFlipbookFullscreen(false)
    setShowMoreRegions(false)
    setShowMoreCommodities(false)
  }

  /* =======================================================
     SELECTED REGION DATA
  ======================================================= */

  const selectedRegionData =
    useMemo(() => {
      if (
        !selectedRegion ||
        dashboardRegion === 'ALL'
      ) {
        return null
      }

      const selectedCode =
        getRegionCode(
          dashboardRegion
        )

      const regionPackages =
        preparedData.filter(item => {
          const regionMatch =
            getRegionCode(
              item.region
            ) === selectedCode

          const clusterMatch =
            selectedCluster ===
              'ALL' ||
            normalizeText(
              item.cluster
            ) ===
              normalizeText(
                selectedCluster
              )

          return (
            regionMatch &&
            clusterMatch
          )
        })

      const packages =
        regionPackages
          .filter(item => {
            if (
              selectedCommodity ===
              'ALL'
            ) {
              return true
            }

            return (
              normalizeText(
                item.commodity
              ) ===
              normalizeText(
                selectedCommodity
              )
            )
          })
          .sort(
            (a, b) =>
              b.estimatedCost -
              a.estimatedCost
          )

      const investment =
        packages.reduce(
          (sum, item) =>
            sum + item.estimatedCost,
          0
        )

      const commodities = [
        ...new Set(
          regionPackages
            .map(
              item =>
                item.commodity
            )
            .filter(Boolean)
        ),
      ]

      return {
        packages,
        investment,
        commodities,
        totalRegionPackages:
          regionPackages.length,
      }
    }, [
      selectedRegion,
      dashboardRegion,
      selectedCluster,
      selectedCommodity,
      preparedData,
    ])

  const dashboardTitle =
    dashboardRegion === 'ALL'
      ? 'National Total'
      : dashboardRegion

  /* =======================================================
     RAFIP FLIPBOOK
  ======================================================= */

  const selectedFlipbook =
    dashboardRegion !== 'ALL'
      ? regionalFlipbooks[
          dashboardRegion
        ]
      : null

  const selectedFlipbookRegion =
    dashboardRegion !== 'ALL'
      ? dashboardRegion
      : null

  function openFlipbookFullscreen() {
    setIsFlipbookFullscreen(true)
  }

  function closeFlipbookFullscreen() {
    setIsFlipbookFullscreen(false)
  }

  /* =======================================================
     HANDLE REGION CARD CLICK
  ======================================================= */

  function handleRegionClick(
    region
  ) {
    const code =
      getRegionCode(
        region.name
      )

    setDashboardRegion(code)
    setSelectedCluster('ALL')
    setSelectedRegion(region)

    setTimeout(() => {
      const target =
        document.getElementById(
          'regional-details'
        )

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 120)
  }

  /* =======================================================
     HANDLE COMMODITY CLICK
  ======================================================= */

  function handleCommodityClick(
    event,
    region,
    commodity
  ) {
    event.stopPropagation()

    const code =
      getRegionCode(
        region.name
      )

    setDashboardRegion(code)
    setSelectedCluster('ALL')
    setSelectedRegion(region)
    setSelectedCommodity(
      commodity
    )

    setTimeout(() => {
      const target =
        document.getElementById(
          'regional-details'
        )

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 120)
  }

  /* =======================================================
     CLOSE REGION DETAILS
  ======================================================= */

  function closeRegionDetails() {
    setSelectedRegion(null)
    setDashboardRegion('ALL')
    setSelectedCommodity('ALL')
    setIsFlipbookFullscreen(false)
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="regional-portfolio-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="regional-portfolio-hero">
        <div className="regional-portfolio-hero-overlay" />

        <div className="regional-portfolio-hero-inner">
          <div className="regional-portfolio-hero-content">

            <span className="section-eyebrow hero-eyebrow">
              REGIONAL AGRICULTURE & FISHERIES
            </span>

            <h1>
              Regional Agriculture and
              <br />
              <span>
                Fisheries Investment Portfolio Dashboard
              </span>
            </h1>

            <p className="regional-portfolio-hero-description">
              A national view of priority commodities,
              strategic investments, and regional investment
              requirements for a more productive, competitive,
              and resilient agriculture and fisheries sector.
            </p>

            <div className="regional-hero-actions">
              <a
                href="/rafip-library"
                className="regional-primary-button"
              >
                Explore RAFIP
                <ArrowUpRight size={17} />
              </a>

              <button
                type="button"
                className="regional-video-button"
                onClick={() =>
                  setShowVideoMessage(true)
                }
              >
                <PlayCircle size={18} />
                Watch Video
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="regional-stat-strip">

        <div className="regional-stat-card">
          <div className="regional-stat-icon green">
            <MapIcon size={22} />
          </div>

          <div>
            <strong>17</strong>
            <span>
              Regional Investment Portfolios
            </span>
          </div>
        </div>

        <div className="regional-stat-card">
          <div className="regional-stat-icon leaf">
            <Leaf size={22} />
          </div>

          <div>
            <strong>
              {dataLoading
                ? '—'
                : totalCommodities}
            </strong>

            <span>
              Priority Commodities
            </span>
          </div>
        </div>

        <div className="regional-stat-card">
          <div className="regional-stat-icon gold">
            <Coins size={22} />
          </div>

          <div>
            <strong>
              {dataLoading
                ? '—'
                : formatMoney(
                    totalInvestment
                  )}
            </strong>

            <span>
              Total Investment Requirement
            </span>
          </div>
        </div>

        <div className="regional-stat-card">
          <div className="regional-stat-icon blue">
            <Package size={22} />
          </div>

          <div>
            <strong>
              {dataLoading
                ? '—'
                : totalPackages.toLocaleString()}
            </strong>

            <span>
              Priority Investment Packages
            </span>
          </div>
        </div>

      </section>

      {/* =====================================================
          INVESTMENT INTELLIGENCE
      ===================================================== */}

      <section
        id="regional-investment"
        className="regional-investment-overview"
      >

        <div className="portfolio-section-heading">
          <div>

            <span className="section-eyebrow">
              INVESTMENT INTELLIGENCE
            </span>

            <h2>
              Regional Investment Requirements
            </h2>

            <p>
              Regional investment requirements,
              priority commodities, and investment
              packages consolidated from the 2026
              RAFIP data.
            </p>

          </div>
        </div>

        {dataError && (
          <div className="regional-data-warning">
            <BarChart3 size={18} />
            {dataError}
          </div>
        )}

        <div className="investment-dashboard-grid">

          {/* =================================================
              TOTAL INVESTMENT
          ================================================= */}

          <div className="investment-panel region-investment-panel">

            <div className="investment-panel-header">
              <div>
                <h3>
                  Total Investment Requirement
                </h3>

                <p>
                  By Region
                </p>
              </div>

              <MapPinned size={20} />
            </div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="investment-inline-filters">

              {/* CLUSTER */}

              <label>
                <span>
                  Cluster
                </span>

                <select
                  value={selectedCluster}
                  onChange={event =>
                    setSelectedCluster(
                      event.target.value
                    )
                  }
                >
                  <option value="ALL">
                    All Clusters
                  </option>

                  {clusterOptions.map(
                    cluster => (
                      <option
                        key={cluster}
                        value={cluster}
                      >
                        {cluster}
                      </option>
                    )
                  )}
                </select>
              </label>

              {/* REGION */}

              <label>
                <span>
                  Region
                </span>

                <select
                  value={dashboardRegion}
                  onChange={event =>
                    selectRegion(
                      event.target.value
                    )
                  }
                >
                  <option value="ALL">
                    All Regions
                  </option>

                  {regions.map(region => {
                    const code =
                      getRegionCode(
                        region.name
                      )

                    return (
                      <option
                        key={region.id}
                        value={code}
                      >
                        {region.name}
                      </option>
                    )
                  })}
                </select>
              </label>

              {/* COMMODITY */}

              <label>
                <span>
                  Commodity
                </span>

                <select
                  value={selectedCommodity}
                  onChange={event =>
                    setSelectedCommodity(
                      event.target.value
                    )
                  }
                >
                  <option value="ALL">
                    All Commodities
                  </option>

                  {commodityOptions.map(
                    commodity => (
                      <option
                        key={commodity}
                        value={commodity}
                      >
                        {commodity}
                      </option>
                    )
                  )}
                </select>
              </label>

              {/* RESET */}

              {(selectedCluster !== 'ALL' ||
                dashboardRegion !== 'ALL' ||
                selectedCommodity !== 'ALL') && (
                <button
                  type="button"
                  className="investment-reset-button"
                  onClick={
                    resetDashboard
                  }
                  title="Reset filters"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}

            </div>

            {/* =================================================
                FILTERED TOTAL
            ================================================= */}

            <div className="investment-total">
              <span>
                {dashboardTitle}
              </span>

              <strong>
                {dataLoading
                  ? 'Loading...'
                  : formatMoney(
                      filteredInvestment
                    )}
              </strong>
            </div>

            {/* =================================================
                REGIONAL BARS
            ================================================= */}

            <div className="regional-bar-list">

              {regionalSummary
                .slice(
                  0,
                  showMoreRegions
                    ? regionalSummary.length
                    : 5
                )
                .map(item => {

                  const width =
                    (item.investment /
                      maxRegionalInvestment) *
                    100

                  const isActive =
                    dashboardRegion !==
                      'ALL' &&
                    getRegionCode(
                      dashboardRegion
                    ) === item.code

                  return (
                    <button
                      type="button"
                      className={`regional-bar-row ${
                        isActive
                          ? 'active'
                          : ''
                      }`}
                      key={item.code}
                      onClick={() =>
                        selectRegion(
                          item.code
                        )
                      }
                    >
                      <div className="regional-bar-label">
                        <span>
                          {item.code}
                        </span>

                        <strong>
                          {formatBillions(
                            item.investment /
                              1_000_000_000
                          )}
                        </strong>
                      </div>

                      <div className="regional-bar-track">
                        <div
                          className="regional-bar-fill"
                          style={{
                            width: `${Math.max(
                              width,
                              3
                            )}%`,
                          }}
                        />
                      </div>
                    </button>
                  )
                })}

              {!dataLoading &&
                regionalSummary.length >
                  5 && (
                <button
                  type="button"
                  className="dashboard-see-more-button"
                  onClick={() =>
                    setShowMoreRegions(
                      previous =>
                        !previous
                    )
                  }
                >
                  {showMoreRegions
                    ? 'Show Less'
                    : `See More (${
                        regionalSummary.length -
                        5
                      })`}
                </button>
              )}

              {!dataLoading &&
                regionalSummary.length ===
                  0 && (
                <div className="empty-dashboard-state">
                  No regional investment
                  data found for the
                  selected filters.
                </div>
              )}

            </div>
          </div>

          {/* =================================================
              COMMODITY
          ================================================= */}

          <div className="investment-panel commodity-panel">

            <div className="investment-panel-header">
              <div>
                <h3>
                  By Commodity
                </h3>

                <p>
                  Investment requirement
                  distribution
                </p>
              </div>

              <Leaf size={20} />
            </div>

            <div className="commodity-dashboard">

              <div className="commodity-donut-wrapper">

                <div
                  className="commodity-donut"
                  style={{
                    background:
                      donutGradient,
                  }}
                >
                  <div className="commodity-donut-hole">

                    <div className="commodity-donut-center">

                      <strong>
                        {dataLoading
                          ? '—'
                          : formatMoney(
                              filteredInvestment
                            )}
                      </strong>

                      <span>
                        {dashboardRegion ===
                        'ALL'
                          ? 'Total'
                          : dashboardRegion}
                      </span>

                    </div>
                  </div>
                </div>

              </div>

              <div className="commodity-legend">

                {displayedCommodities.map(
                  (item, index) => {

                    const share =
                      filteredInvestment >
                      0
                        ? (item.investment /
                            filteredInvestment) *
                          100
                        : 0

                    return (
                      <div
                        className="commodity-legend-item"
                        key={
                          item.commodity
                        }
                      >

                        <span
                          className="commodity-dot"
                          style={{
                            background:
                              donutColors[
                                index %
                                  donutColors.length
                              ],
                          }}
                        />

                        <span className="commodity-icon">
                          {getCommodityIcon(
                            item.commodity
                          )}
                        </span>

                        <span className="commodity-name">
                          {item.commodity}
                        </span>

                        <strong>
                          {formatMoney(
                            item.investment
                          )}
                        </strong>

                        <span className="commodity-percentage">
                          {share.toFixed(0)}%
                        </span>

                      </div>
                    )
                  }
                )}

                {!dataLoading &&
                  commoditySummary.length >
                    10 && (
                  <button
                    type="button"
                    className="dashboard-see-more-button"
                    onClick={() =>
                      setShowMoreCommodities(
                        previous =>
                          !previous
                      )
                    }
                  >
                    {showMoreCommodities
                      ? 'Show Less'
                      : `See More (${
                          commoditySummary.length -
                          10
                        })`}
                  </button>
                )}

                {!dataLoading &&
                  commoditySummary.length ===
                    0 && (
                  <div className="empty-dashboard-state">
                    No commodity data found.
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* =================================================
              INTERVENTION
          ================================================= */}

          <div className="investment-panel intervention-panel">

            <div className="investment-panel-header">
              <div>
                <h3>
                  By Intervention Type
                </h3>

                <p>
                  Priority investment
                  categories
                </p>
              </div>

              <BarChart3 size={20} />
            </div>

            <div className="intervention-list">

              {interventionSummary.map(
                item => {

                  const width =
                    (item.investment /
                      maxInterventionInvestment) *
                    100

                  return (
                    <div
                      className="intervention-row"
                      key={item.type}
                    >

                      <div className="intervention-row-top">
                        <span>
                          {item.type}
                        </span>

                        <strong>
                          {formatMoney(
                            item.investment
                          )}
                        </strong>
                      </div>

                      <div className="intervention-track">

                        <div
                          className="intervention-fill"
                          style={{
                            width: `${Math.max(
                              width,
                              3
                            )}%`,
                          }}
                        />

                      </div>
                    </div>
                  )
                }
              )}

              {!dataLoading &&
                interventionSummary.length ===
                  0 && (
                <div className="empty-dashboard-state">
                  No intervention data
                  found.
                </div>
              )}

            </div>
          </div>

        </div>

        {/* =================================================
            SELECTED REGIONAL PORTFOLIO
        ================================================= */}

        {selectedRegion && (
          <section
            id="regional-details"
            className="selected-regional-portfolio"
          >

            <div className="selected-regional-header">

              <div>
                <span className="section-eyebrow">
                  REGIONAL INVESTMENT
                  PORTFOLIO
                </span>

                <h2>
                  {selectedRegion.name}
                </h2>

                <p>
                  {selectedRegion.fullName}
                </p>
              </div>

              <button
                type="button"
                className="details-close-button"
                onClick={
                  closeRegionDetails
                }
              >
                <X size={18} />
              </button>

            </div>

            {/* =================================================
                REGIONAL STATS
            ================================================= */}

            <div className="regional-details-stats">

              <div>
                <span>
                  Investment Requirement
                </span>

                <strong>
                  {formatMoney(
                    selectedRegionData?.investment ||
                      0
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Investment Packages
                </span>

                <strong>
                  {selectedRegionData?.packages
                    ?.length || 0}
                </strong>
              </div>

              <div>
                <span>
                  Priority Commodities
                </span>

                <strong>
                  {selectedRegionData
                    ?.commodities
                    ?.length || 0}
                </strong>
              </div>

            </div>

            <div className="regional-details-body">

              {/* =================================================
                  PRIORITY COMMODITIES
              ================================================= */}

              <div>

                <h3>
                  Priority Commodities
                </h3>

                <p className="commodity-click-hint">
                  Click a commodity to view
                  its investment packages.
                </p>

                <div className="details-commodity-list">

                  {(selectedRegionData
                    ?.commodities || []
                  ).map(commodity => {

                    const isActive =
                      normalizeText(
                        selectedCommodity
                      ) ===
                      normalizeText(
                        commodity
                      )

                    return (
                      <button
                        type="button"
                        key={commodity}
                        className={`details-commodity ${
                          isActive
                            ? 'active'
                            : ''
                        }`}
                        onClick={() =>
                          selectCommodity(
                            commodity
                          )
                        }
                      >
                        <span>
                          {getCommodityIcon(
                            commodity
                          )}
                        </span>

                        {commodity}
                      </button>
                    )
                  })}

                  {!selectedRegionData
                    ?.commodities
                    ?.length && (
                    <span className="details-empty">
                      No commodity records
                      found for this
                      region.
                    </span>
                  )}

                </div>
              </div>

              {/* =================================================
                  INVESTMENT PACKAGES
              ================================================= */}

              <div>

                <h3>
                  Investment Packages
                </h3>

                <p className="package-sort-note">
                  {selectedCommodity !==
                  'ALL'
                    ? `Investment packages for ${selectedCommodity}, arranged from highest to lowest investment requirement.`
                    : 'Arranged from highest to lowest investment requirement.'}
                </p>

                <div className="package-preview-list">

                  {(selectedRegionData
                    ?.packages || []
                  ).map(item => (
                    <div
                      className="package-preview"
                      key={
                        item.packageId ||
                        `${item.packageTitle}-${item.commodity}-${item.estimatedCost}`
                      }
                    >

                      <div>

                        <span className="package-commodity">
                          {getCommodityIcon(
                            item.commodity
                          )}{' '}
                          {item.commodity}
                        </span>

                        <h4>
                          {item.packageTitle ||
                            'Investment Package'}
                        </h4>

                        <p>
                          {item.location ||
                            item.coverage ||
                            'Regional investment package'}
                        </p>

                      </div>

                      <strong>
                        {formatMoney(
                          item.estimatedCost
                        )}
                      </strong>

                    </div>
                  ))}

                  {!selectedRegionData
                    ?.packages
                    ?.length && (
                    <div className="details-empty">
                      {selectedCommodity !==
                      'ALL'
                        ? `No investment packages found for ${selectedCommodity} in ${selectedRegion.name}.`
                        : 'No investment packages found for this region.'}
                    </div>
                  )}

                </div>
              </div>

            </div>
          </section>
        )}

        {/* =================================================
            NATIONAL MESSAGE
        ================================================= */}

        {!selectedRegion && (
          <div className="national-portfolio-message">

            <div className="national-message-icon">
              <MapIcon size={25} />
            </div>

            <div>
              <strong>
                National Investment Portfolio
              </strong>

              <p>
                Select a region from the
                filter or click a regional
                bar above to view its
                detailed investment
                portfolio.
              </p>
            </div>

          </div>
        )}

        {/* =================================================
            REGIONAL RAFIP FLIPBOOK
        ================================================= */}

        <div className="regional-rafip-flipbook-section">

          <div className="regional-rafip-flipbook-header">

            <div>

              <span className="section-eyebrow">
                2026 RAFIP INVESTMENT PACKAGE
              </span>

              <h3>
                {selectedFlipbookRegion
                  ? `${selectedFlipbookRegion} Regional RAFIP`
                  : 'Regional RAFIP Investment Portfolio'}
              </h3>

              <p>
                {selectedFlipbookRegion
                  ? selectedFlipbook
                    ? `View the 2026 Regional Agriculture and Fisheries Investment Portfolio for ${selectedFlipbookRegion}.`
                    : `No flipbook is currently available for ${selectedFlipbookRegion}.`
                  : 'Select a region above to view its corresponding 2026 RAFIP investment portfolio.'}
              </p>

            </div>

            {selectedFlipbook && (
              <div className="regional-rafip-flipbook-actions">

                <button
                  type="button"
                  className="rafip-fullscreen-button"
                  onClick={
                    openFlipbookFullscreen
                  }
                >
                  <Maximize2 size={16} />
                  View Full Screen
                </button>

                <a
                  href={selectedFlipbook}
                  target="_blank"
                  rel="noreferrer"
                  className="rafip-open-button"
                >
                  <ExternalLink size={16} />
                  Open
                </a>

              </div>
            )}

          </div>

          {/* FLIPBOOK AVAILABLE */}

          {selectedFlipbook ? (
            <div className="regional-rafip-flipbook-frame">

              <iframe
                key={selectedFlipbook}
                src={selectedFlipbook}
                title={`${selectedFlipbookRegion} 2026 RAFIP Investment Portfolio`}
                loading="lazy"
                allow="fullscreen"
                className="regional-rafip-flipbook-iframe"
              />

            </div>

          ) : selectedFlipbookRegion ? (

            /* REGION SELECTED BUT NO FLIPBOOK */

            <div className="regional-rafip-flipbook-empty">

              <div className="regional-rafip-empty-icon">
                <MapPinned size={32} />
              </div>

              <h4>
                No Flipbook Available
              </h4>

              <p>
                A 2026 RAFIP flipbook is not
                currently available for{' '}
                <strong>
                  {selectedFlipbookRegion}
                </strong>.
              </p>

            </div>

          ) : (

            /* NO REGION SELECTED */

            <div className="regional-rafip-flipbook-empty">

              <div className="regional-rafip-empty-icon">
                <MapPinned size={32} />
              </div>

              <h4>
                Select a Region to View the RAFIP
              </h4>

              <p>
                Choose a region from the filter
                above or click a regional investment
                bar to display its 2026 RAFIP
                investment portfolio.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          RAFIP FLIPBOOK FULLSCREEN
      ===================================================== */}

      {isFlipbookFullscreen &&
        selectedFlipbook && (
          <div className="rafip-fullscreen-backdrop">

            <div className="rafip-fullscreen-container">

              <div className="rafip-fullscreen-header">

                <div>
                  <span>
                    2026 RAFIP INVESTMENT PORTFOLIO
                  </span>

                  <strong>
                    {selectedFlipbookRegion}
                  </strong>
                </div>

                <button
                  type="button"
                  className="rafip-fullscreen-close"
                  onClick={
                    closeFlipbookFullscreen
                  }
                  aria-label="Close fullscreen RAFIP viewer"
                >
                  <X size={21} />
                </button>

              </div>

              <div className="rafip-fullscreen-viewer">

                <iframe
                  key={`fullscreen-${selectedFlipbook}`}
                  src={selectedFlipbook}
                  title={`${selectedFlipbookRegion} Fullscreen RAFIP Investment Portfolio`}
                  allow="fullscreen"
                  className="rafip-fullscreen-iframe"
                />

              </div>

            </div>
          </div>
        )}

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {showVideoMessage && (
        <div
          className="regional-video-overlay"
          onClick={() => setShowVideoMessage(false)}
        >
          <div
            className="regional-video-modal"
            onClick={event => event.stopPropagation()}
          >

            {/* VIDEO HEADER */}
            <div className="regional-video-header">

              <div>
                <span className="regional-video-eyebrow">
                  RAFIP
                </span>

                <h3>
                  RAFIP Investment Portfolio
                </h3>
              </div>

              <button
                type="button"
                className="regional-video-close"
                onClick={() => setShowVideoMessage(false)}
                aria-label="Close video"
              >
                <X size={20} />
              </button>

            </div>


            {/* VIDEO */}
            <div className="regional-video-player-wrapper">

              <video
                className="regional-video-player"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source
                  src="/video/Interim-RAFIP%20Promotional%20AVP.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

            </div>


            {/* VIDEO FOOTER */}
            <div className="regional-video-footer">

              <div className="regional-video-footer-text">

                <strong>
                  Regional Agriculture and Fisheries
                  Investment Portfolio
                </strong>

                <span>
                  RAFIP Promotional AVP
                </span>

              </div>

              <button
                type="button"
                className="regional-video-close-button"
                onClick={() => setShowVideoMessage(false)}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          SOURCE
      ===================================================== */}

      <div className="regional-portfolio-source">
        <span>Data Source:</span> PRDP SIDLAN
      </div>

    </main>
  )
}

export default RegionalPortfolio
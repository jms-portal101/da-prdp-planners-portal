const RAFIP_JSON_PATH =
  '/data/RAFIP_Investment_Packages_20260928.json'

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
}

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

export function getRegionCode(regionName = '') {
  const raw = String(regionName || '').trim()

  if (!raw) return ''

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
    return canonicalRegionCode(parentheticalMatch[1])
  }

  const explicitRegionMatch = raw.match(
    /\b(Region\s+[IVX]+(?:-[AB])?)\b/i
  )

  if (explicitRegionMatch) {
    return canonicalRegionCode(explicitRegionMatch[1])
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

  const fullNameMatch = fullNameMappings.find(
    ([name]) => text === name
  )

  if (fullNameMatch) {
    return fullNameMatch[1]
  }

  const extendedMatch = fullNameMappings.find(
    ([name]) =>
      text.startsWith(`${name} `) ||
      text.endsWith(` ${name}`)
  )

  if (extendedMatch) {
    return extendedMatch[1]
  }

  return raw
}

export function parseCost(value) {
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

export function formatMoney(value) {
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

function normalizeRAFIPData(data) {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.data)) return data.data
  if (Array.isArray(data?.records)) return data.records
  if (Array.isArray(data?.rows)) return data.rows

  return []
}

function getField(item, ...names) {
  for (const name of names) {
    if (
      item?.[name] !== undefined &&
      item?.[name] !== null &&
      item?.[name] !== ''
    ) {
      return item[name]
    }
  }

  return ''
}

export function normalizeRAFIPRecord(item) {
  const region = getField(
    item,
    'Region',
    'region'
  )

  const cluster = getField(
    item,
    'Cluster',
    'cluster'
  )

  const commodity = getField(
    item,
    'Commodity',
    'commodity'
  )

  const interventionType = getField(
    item,
    'Intervention Type',
    'InterventionType',
    'interventionType'
  )

  const packageId = getField(
    item,
    'Package ID',
    'PackageID',
    'packageId'
  )

  const packageTitle = getField(
    item,
    'Package Title',
    'PackageTitle',
    'packageTitle'
  )

  const location = getField(
    item,
    'Location',
    'location'
  )

  const coverage = getField(
    item,
    'Coverage',
    'coverage'
  )

  const estimatedCost = parseCost(
    getField(
      item,
      'Estimated Cost',
      'EstimatedCost',
      'estimatedCost'
    )
  )

  const validationStatus = getField(
    item,
    'Validation Status',
    'ValidationStatus',
    'validationStatus'
  )

  return {
    ...item,

    region,
    regionCode: getRegionCode(region),

    cluster,
    commodity: String(commodity).trim(),

    interventionType,

    packageId: String(packageId).trim(),
    packageTitle,

    location,
    coverage,

    estimatedCost,

    validationStatus,
  }
}

export async function loadRAFIPData() {
  const response = await fetch(RAFIP_JSON_PATH)

  if (!response.ok) {
    throw new Error(
      `Unable to load RAFIP data. HTTP ${response.status}`
    )
  }

  const json = await response.json()

  return normalizeRAFIPData(json)
    .map(normalizeRAFIPRecord)
    .filter(item => item.region)
}

function uniqueValues(items, field) {
  return new Set(
    items
      .map(item => String(item[field] || '').trim())
      .filter(Boolean)
  )
}

function getUniquePackageCount(items) {
  const packageIds = uniqueValues(items, 'packageId')

  if (packageIds.size > 0) {
    return packageIds.size
  }

  return items.length
}

function getPriorityAreas(items) {
  const areas = new Set()

  items.forEach(item => {
    const location = String(item.location || '').trim()
    const coverage = String(item.coverage || '').trim()

    if (location) {
      areas.add(location)
    }

    if (coverage) {
      areas.add(coverage)
    }
  })

  return areas.size
}

export function getRegionalRAFIPData(
  records,
  regionCode
) {
  const targetCode = getRegionCode(regionCode)

  const regionalRecords = records.filter(
    item =>
      normalizeText(item.regionCode) ===
      normalizeText(targetCode)
  )

  const investmentRequirement = regionalRecords.reduce(
    (total, item) =>
      total + (Number(item.estimatedCost) || 0),
    0
  )

  const commoditiesMap = new Map()

  regionalRecords.forEach(item => {
    const commodity = String(
      item.commodity || ''
    ).trim()

    if (!commodity) return

    if (!commoditiesMap.has(commodity)) {
      commoditiesMap.set(commodity, {
        name: commodity,
        investment: 0,
        packages: 0,
      })
    }

    const entry = commoditiesMap.get(commodity)

    entry.investment +=
      Number(item.estimatedCost) || 0
  })

  commoditiesMap.forEach(entry => {
    const commodityRecords = regionalRecords.filter(
      item =>
        normalizeText(item.commodity) ===
        normalizeText(entry.name)
    )

    entry.packages =
      getUniquePackageCount(commodityRecords)
  })

  const commodities = Array.from(
    commoditiesMap.values()
  )
    .sort((a, b) => b.investment - a.investment)

  return {
    regionCode: targetCode,

    records: regionalRecords,

    investmentRequirement,

    investmentRequirementFormatted:
      formatMoney(investmentRequirement),

    investmentPackages:
      getUniquePackageCount(regionalRecords),

    priorityCommodities:
      commodities.length,

    priorityAreas:
      getPriorityAreas(regionalRecords),

    commodities,
  }
}

export function getAllRegionalRAFIPData(records) {
  const regionMap = new Map()

  records.forEach(item => {
    const code = item.regionCode

    if (!code) return

    if (!regionMap.has(code)) {
      regionMap.set(code, [])
    }

    regionMap.get(code).push(item)
  })

  return Array.from(regionMap.entries()).map(
    ([regionCode, regionalRecords]) => ({
      ...getRegionalRAFIPData(
        records,
        regionCode
      ),
      regionCode,
    })
  )
}
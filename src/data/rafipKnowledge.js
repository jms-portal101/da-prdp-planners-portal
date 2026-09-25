/* =========================================================
   AIPLAN — RAFIP KNOWLEDGE LOADER & SEARCH ENGINE
   ========================================================= */

const RAFIP_BASE_PATH = '/rafip'

/*
  Region configuration

  For now CAR is our first real RAFIP knowledge source.
  Additional regions can be added later without changing
  the search engine.
*/

const RAFIP_REGIONS = {
  CAR: {
    code: 'CAR',
    name: 'Cordillera Administrative Region',
    file: 'CAR.txt',
  },

  // Future regions:
  // REGION_01: {
  //   code: 'Region 1',
  //   name: 'Ilocos Region',
  //   file: 'region-01.txt',
  // },
}

/* =========================================================
   TEXT NORMALIZATION
   ========================================================= */

function normalizeText(text = '') {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/* =========================================================
   STOP WORDS
   ========================================================= */

const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'from',
  'that',
  'this',
  'what',
  'which',
  'where',
  'when',
  'how',
  'are',
  'was',
  'were',
  'has',
  'have',
  'had',
  'into',
  'about',
  'their',
  'there',
  'they',
  'them',
  'then',
  'than',
  'also',
  'can',
  'could',
  'would',
  'should',
  'may',
  'might',

  // English question words
  'who',
  'why',
  'does',
  'did',
  'will',
  'what',
  'which',

  // Filipino
  'ang',
  'ng',
  'mga',
  'sa',
  'at',
  'na',
  'para',
  'ito',
  'iyon',
  'ano',
  'kung',
  'saan',
  'paano',
  'may',
  'ay',
  'naman',
  'din',
  'rin',
  'ba',
  'po',
  'ito',
  'yung',
  'yong',
])

/* =========================================================
   TOKENIZATION
   ========================================================= */

function tokenize(text = '') {
  return normalizeText(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .map(word => word.trim())
    .filter(word => {
      return word.length > 2 && !STOP_WORDS.has(word)
    })
}

/* =========================================================
   QUERY SYNONYMS
   ========================================================= */

const QUERY_SYNONYMS = {
  commodity: [
    'commodity',
    'commodities',
    'priority commodity',
    'priority commodities',
    'priority products',
    'products',
    'prime commodity',
    'prime commodities',
  ],

  investment: [
    'investment',
    'investments',
    'investment opportunity',
    'investment opportunities',
    'investment portfolio',
    'investment portfolios',
    'investment project',
    'investment projects',
    'investment package',
    'investment packages',
    'priority investment',
    'priority investments',
    'priority investment package',
    'priority investment packages',
  ],

  agriculture: [
    'agriculture',
    'agricultural',
    'farming',
    'farm',
    'crop',
    'crops',
  ],

  fisheries: [
    'fishery',
    'fisheries',
    'fishing',
    'aquaculture',
  ],

  market: [
    'market',
    'markets',
    'marketing',
    'market assessment',
    'market opportunity',
    'market opportunities',
    'market access',
  ],

  valuechain: [
    'value chain',
    'value-chain',
    'value chain analysis',
    'vca',
    'value chain constraints',
  ],

  infrastructure: [
    'infrastructure',
    'farm to market road',
    'farm-to-market road',
    'fmr',
    'irrigation',
    'warehouse',
    'post harvest',
    'post-harvest',
    'processing facility',
    'facility',
  ],

  climate: [
    'climate',
    'climate resilient',
    'climate resilience',
    'hazard',
    'disaster',
    'vulnerability',
  ],

  support: [
    'support action',
    'support actions',
    'proposed support action',
    'proposed support actions',
    'technical support',
    'government support',
  ],
}

/* =========================================================
   COMMODITY KEYWORDS
   ========================================================= */

const RAFIP_COMMODITIES = {
  highlandVegetables: [
    'highland vegetable',
    'highland vegetables',
    'vegetable',
    'vegetables',
  ],

  coffee: [
    'coffee',
    'arabica',
    'robusta',
    'excelsa',
    'liberica',
  ],

  heirloomRice: [
    'heirloom rice',
    'heirloom',
    'tinawon',
    'balatinaw',
    'gilgilang',
  ],

  hogs: [
    'hog',
    'hogs',
    'pig',
    'pigs',
    'swine',
    'pork',
  ],

  rice: [
    'rice',
    'commercial rice',
    'palay',
  ],

  corn: [
    'corn',
    'maize',
  ],

  cardavaBanana: [
    'cardava',
    'cardava banana',
    'banana',
  ],

  mango: [
    'mango',
    'mangoes',
  ],
}

/* =========================================================
   INVESTMENT SECTION MARKERS
   ========================================================= */

/*
  These are deliberately explicit.

  The CAR RAFIP uses headings such as:

    Priority Investments for Highland Vegetables
    Priority Investments for Coffee
    Priority Investments for Heirloom Rice
    Priority Investments for Hogs
    Priority Investments for Rice
    Priority Investments for Corn
    Priority Investments for Cardava Banana
    Priority Investment Packages

  These should outrank generic mentions of "investment"
  in the Foreword.
*/

const INVESTMENT_SECTION_MARKERS = [
  'priority investments',
  'priority investment',
  'priority investment packages',
  'investment packages',
  'proposed investments',
  'proposed investment',
  'priority investments for',
  'priority investment for',
  'investment opportunity',
  'investment opportunities',
]

/* =========================================================
   GENERAL SECTION MARKERS
   ========================================================= */

const SECTION_MARKERS = [
  'industry profile',
  'priority constraints',
  'priority investments',
  'priority investment packages',
  'proposed support actions',
  'summary of proposed partnerships',
  'multi-commodity interventions',
  'regional commodity map',
  'competitiveness vision',
]

/* =========================================================
   QUERY INTENT DETECTION
   ========================================================= */

function detectQueryIntent(query = '') {
  const lower = normalizeText(query).toLowerCase()

  const intent = {
    investment: false,
    commodity: false,
    market: false,
    valueChain: false,
    infrastructure: false,
    climate: false,
    support: false,
    generalRAFIP: false,
    commodityKey: null,
  }

  /*
    Investment intent
  */

  const investmentTerms = [
    'investment',
    'investments',
    'investment opportunity',
    'investment opportunities',
    'investment package',
    'investment packages',
    'priority investment',
    'priority investments',
    'priority investment package',
    'priority investment packages',
    'proposed investment',
    'proposed investments',
    'what projects',
    'what project',
  ]

  if (
    investmentTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.investment = true
  }

  /*
    Commodity intent
  */

  const commodityTerms = [
    'commodity',
    'commodities',
    'priority commodity',
    'priority commodities',
    'prime commodity',
    'prime commodities',
  ]

  if (
    commodityTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.commodity = true
  }

  /*
    Market intent
  */

  const marketTerms = [
    'market',
    'markets',
    'marketing',
    'market opportunity',
    'market opportunities',
    'market access',
  ]

  if (
    marketTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.market = true
  }

  /*
    Value chain intent
  */

  const valueChainTerms = [
    'value chain',
    'value-chain',
    'vca',
    'value chain analysis',
  ]

  if (
    valueChainTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.valueChain = true
  }

  /*
    Infrastructure intent
  */

  const infrastructureTerms = [
    'infrastructure',
    'irrigation',
    'farm to market road',
    'farm-to-market road',
    'fmr',
    'facility',
    'facilities',
    'warehouse',
    'processing',
    'post harvest',
    'post-harvest',
    'tramline',
    'footbridge',
  ]

  if (
    infrastructureTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.infrastructure = true
  }

  /*
    Climate intent
  */

  const climateTerms = [
    'climate',
    'climate resilient',
    'climate resilience',
    'hazard',
    'disaster',
    'vulnerability',
  ]

  if (
    climateTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.climate = true
  }

  /*
    Support intent
  */

  const supportTerms = [
    'support action',
    'support actions',
    'proposed support',
    'technical support',
    'government support',
    'partners',
    'partnership',
  ]

  if (
    supportTerms.some(term =>
      lower.includes(term)
    )
  ) {
    intent.support = true
  }

  /*
    General RAFIP intent
  */

  intent.generalRAFIP =
    lower.includes('rafip') ||
    lower.includes('cordillera') ||
    lower.includes(' car ') ||
    lower === 'car'

  /*
    Detect specific commodity
  */

  for (const [key, terms] of Object.entries(
    RAFIP_COMMODITIES
  )) {
    if (
      terms.some(term =>
        lower.includes(term)
      )
    ) {
      intent.commodityKey = key
      break
    }
  }

  return intent
}

/* =========================================================
   EXPAND QUERY
   ========================================================= */

function expandQuery(query) {
  const lowerQuery = query.toLowerCase()

  const expanded = new Set(tokenize(query))

  Object.values(QUERY_SYNONYMS).forEach(group => {
    const matched = group.some(term =>
      lowerQuery.includes(term.toLowerCase())
    )

    if (matched) {
      group.forEach(term => {
        tokenize(term).forEach(token =>
          expanded.add(token)
        )
      })
    }
  })

  return Array.from(expanded)
}

/* =========================================================
   CHUNK TEXT
   ========================================================= */

function createChunks(text, options = {}) {
  const chunkSize = options.chunkSize || 900
  const overlap = options.overlap || 150

  const normalized = normalizeText(text)

  if (!normalized) {
    return []
  }

  const paragraphs = normalized
    .split(/\n\s*\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)

  const chunks = []

  let current = ''

  paragraphs.forEach(paragraph => {
    if (
      current &&
      `${current}\n\n${paragraph}`.length >
        chunkSize
    ) {
      chunks.push(current.trim())

      const words = current.split(/\s+/)

      const overlapWords = words.slice(
        Math.max(
          0,
          words.length -
            Math.floor(overlap / 6)
        )
      )

      current = `${overlapWords.join(
        ' '
      )}\n\n${paragraph}`
    } else {
      current = current
        ? `${current}\n\n${paragraph}`
        : paragraph
    }
  })

  if (current.trim()) {
    chunks.push(current.trim())
  }

  return chunks.map((content, index) => ({
    id: index + 1,
    content,
    tokens: tokenize(content),
  }))
}

/* =========================================================
   LOAD REGION
   ========================================================= */

const regionCache = new Map()

export async function loadRAFIPRegion(
  region = 'CAR'
) {
  const regionKey = region.toUpperCase()

  const config = RAFIP_REGIONS[regionKey]

  if (!config) {
    throw new Error(
      `RAFIP region "${region}" is not configured.`
    )
  }

  if (regionCache.has(regionKey)) {
    return regionCache.get(regionKey)
  }

  const response = await fetch(
    `${RAFIP_BASE_PATH}/${config.file}`,
    {
      cache: 'no-cache',
    }
  )

  if (!response.ok) {
    throw new Error(
      `Unable to load RAFIP file: ${config.file}`
    )
  }

  const rawText = await response.text()

  const text = normalizeText(rawText)

  const chunks = createChunks(text)

  const knowledge = {
    code: config.code,
    name: config.name,
    file: config.file,
    text,
    chunks,
    loadedAt: new Date().toISOString(),
  }

  regionCache.set(regionKey, knowledge)

  return knowledge
}

/* =========================================================
   CLEAR CACHE
   ========================================================= */

export function clearRAFIPCache() {
  regionCache.clear()
}

/* =========================================================
   CHECK COMMODITY MATCH
   ========================================================= */

function chunkMatchesCommodity(
  lowerContent,
  commodityKey
) {
  if (!commodityKey) {
    return false
  }

  const terms =
    RAFIP_COMMODITIES[commodityKey] || []

  return terms.some(term =>
    lowerContent.includes(term)
  )
}

/* =========================================================
   SCORE INVESTMENT SECTION
   ========================================================= */

function scoreInvestmentSection(
  lowerContent,
  intent
) {
  if (!intent.investment) {
    return 0
  }

  let score = 0

  /*
    Very strong signals.
  */

  if (
    lowerContent.includes(
      'priority investments'
    )
  ) {
    score += 30
  }

  if (
    lowerContent.includes(
      'priority investment packages'
    )
  ) {
    score += 35
  }

  if (
    lowerContent.includes(
      'investment packages'
    )
  ) {
    score += 25
  }

  /*
    Specific commodity investment heading.
  */

  if (
    intent.commodityKey &&
    chunkMatchesCommodity(
      lowerContent,
      intent.commodityKey
    )
  ) {
    score += 20
  }

  /*
    Actual project language.
  */

  const projectTerms = [
    'establishment of',
    'construction of',
    'repair/upgrading',
    'establishment/',
    'provision of',
    'development of',
    'improvement of',
    'project',
    'facility',
    'training',
  ]

  projectTerms.forEach(term => {
    if (lowerContent.includes(term)) {
      score += 3
    }
  })

  return score
}

/* =========================================================
   PENALIZE GENERIC INTRODUCTION / FOREWORD
   ========================================================= */

function scoreInvestmentNoise(
  lowerContent,
  intent
) {
  if (!intent.investment) {
    return 0
  }

  let penalty = 0

  /*
    The Foreword contains many generic uses of
    "investment" but is not the answer to an
    investment-opportunity question.
  */

  if (
    lowerContent.includes(
      'foreword'
    )
  ) {
    penalty += 25
  }

  if (
    lowerContent.includes(
      'message from the regional executive director'
    )
  ) {
    penalty += 25
  }

  /*
    Generic planning language.
  */

  const genericTerms = [
    'planning reference',
    'regional instrument',
    'resource mobilization',
    'national frameworks',
    'structured and evidence-driven approach',
  ]

  genericTerms.forEach(term => {
    if (lowerContent.includes(term)) {
      penalty += 4
    }
  })

  /*
    If the chunk contains only generic investment
    language and no priority-investment marker,
    reduce its relevance.
  */

  const hasActualInvestmentHeading =
    lowerContent.includes(
      'priority investments'
    ) ||
    lowerContent.includes(
      'priority investment packages'
    ) ||
    lowerContent.includes(
      'investment packages'
    )

  if (
    lowerContent.includes('investment') &&
    !hasActualInvestmentHeading
  ) {
    penalty += 8
  }

  return penalty
}

/* =========================================================
   SCORE COMMODITY QUESTION
   ========================================================= */

function scoreCommodityIntent(
  lowerContent,
  intent
) {
  if (!intent.commodity) {
    return 0
  }

  let score = 0

  /*
    Strongly prioritize the section describing
    CAR's prime/priority commodities.
  */

  if (
    lowerContent.includes(
      "car's prime commodities"
    )
  ) {
    score += 30
  }

  if (
    lowerContent.includes(
      'overview of the prime commodities'
    )
  ) {
    score += 25
  }

  if (
    lowerContent.includes(
      'eight commodities were selected'
    )
  ) {
    score += 35
  }

  if (
    lowerContent.includes(
      'selected for targeted investment'
    )
  ) {
    score += 25
  }

  /*
    Strong exact phrase.
  */

  if (
    lowerContent.includes(
      'priority commodities'
    )
  ) {
    score += 20
  }

  if (
    lowerContent.includes(
      'prime commodities'
    )
  ) {
    score += 15
  }

  return score
}

/* =========================================================
   SCORE CHUNK
   ========================================================= */

function scoreChunk(
  chunk,
  query
) {
  const queryTokens =
    expandQuery(query)

  if (!queryTokens.length) {
    return 0
  }

  const lowerContent =
    chunk.content.toLowerCase()

  const lowerQuery =
    query.toLowerCase()

  const intent =
    detectQueryIntent(query)

  let score = 0

  /* -------------------------------------------------------
     1. NORMAL TOKEN MATCHING
     ------------------------------------------------------- */

  queryTokens.forEach(token => {
    const tokenCount =
      chunk.tokens.filter(
        chunkToken =>
          chunkToken === token
      ).length

    if (tokenCount > 0) {
      score +=
        Math.min(tokenCount, 4) * 2
    }

    if (
      lowerContent.includes(token)
    ) {
      score += 1
    }
  })

  /* -------------------------------------------------------
     2. EXACT QUERY PHRASE
     ------------------------------------------------------- */

  const queryPhrases = [
    lowerQuery.trim(),
  ]

  queryPhrases.forEach(phrase => {
    if (
      phrase.length > 4 &&
      lowerContent.includes(phrase)
    ) {
      score += 10
    }
  })

  /* -------------------------------------------------------
     3. COMMODITY QUESTION BOOST
     ------------------------------------------------------- */

  score += scoreCommodityIntent(
    lowerContent,
    intent
  )

  /* -------------------------------------------------------
     4. INVESTMENT QUESTION BOOST
     ------------------------------------------------------- */

  score += scoreInvestmentSection(
    lowerContent,
    intent
  )

  /* -------------------------------------------------------
     5. INVESTMENT QUESTION NOISE PENALTY
     ------------------------------------------------------- */

  score -= scoreInvestmentNoise(
    lowerContent,
    intent
  )

  /* -------------------------------------------------------
     6. SPECIFIC COMMODITY BOOST
     ------------------------------------------------------- */

  if (
    intent.commodityKey &&
    chunkMatchesCommodity(
      lowerContent,
      intent.commodityKey
    )
  ) {
    score += 12
  }

  /* -------------------------------------------------------
     7. GENERAL RAFIP TERMINOLOGY
     ------------------------------------------------------- */

  const importantTerms = [
    'priority commodity',
    'priority commodities',
    'prime commodities',
    'investment',
    'value chain',
    'commodity',
    'market',
    'development',
    'project',
    'strategy',
    'intervention',
  ]

  importantTerms.forEach(term => {
    if (
      lowerContent.includes(term) &&
      lowerQuery.includes(
        term.split(' ')[0]
      )
    ) {
      score += 3
    }
  })

  /* -------------------------------------------------------
     8. SECTION HEADING BOOST
     ------------------------------------------------------- */

  SECTION_MARKERS.forEach(marker => {
    if (
      lowerContent.includes(marker)
    ) {
      /*
        Small general boost.
      */

      score += 2
    }
  })

  /* -------------------------------------------------------
     9. SPECIAL INVESTMENT SECTION BOOST
     ------------------------------------------------------- */

  if (intent.investment) {
    INVESTMENT_SECTION_MARKERS.forEach(
      marker => {
        if (
          lowerContent.includes(marker)
        ) {
          score += 5
        }
      }
    )
  }

  /* -------------------------------------------------------
     10. SPECIFIC COMMODITY + INVESTMENT
     ------------------------------------------------------- */

  if (
    intent.investment &&
    intent.commodityKey
  ) {
    const commodityMatched =
      chunkMatchesCommodity(
        lowerContent,
        intent.commodityKey
      )

    const hasInvestmentHeading =
      lowerContent.includes(
        'priority investments'
      ) ||
      lowerContent.includes(
        'priority investment packages'
      ) ||
      lowerContent.includes(
        'investment packages'
      )

    if (
      commodityMatched &&
      hasInvestmentHeading
    ) {
      /*
        This is the ideal chunk.
      */

      score += 40
    }
  }

  return score
}

/* =========================================================
   SEARCH RAFIP
   ========================================================= */

export async function searchRAFIP(
  query,
  options = {}
) {
  const {
    region = 'CAR',
    limit = 5,
    minScore = 2,
  } = options

  if (
    !query ||
    !query.trim()
  ) {
    return []
  }

  const knowledge =
    await loadRAFIPRegion(region)

  const results =
    knowledge.chunks
      .map(chunk => ({
        ...chunk,
        score: scoreChunk(
          chunk,
          query
        ),
        region:
          knowledge.code,
        regionName:
          knowledge.name,
      }))
      .filter(
        result =>
          result.score >=
          minScore
      )
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(
        0,
        limit
      )

  return results
}

/* =========================================================
   SEARCH ALL AVAILABLE REGIONS
   ========================================================= */

export async function searchAllRAFIP(
  query,
  options = {}
) {
  const regions =
    Object.keys(
      RAFIP_REGIONS
    )

  const results = []

  for (
    const region of regions
  ) {
    try {
      const regionResults =
        await searchRAFIP(
          query,
          {
            ...options,
            region,
          }
        )

      results.push(
        ...regionResults
      )
    } catch (error) {
      console.warn(
        `RAFIP search skipped ${region}:`,
        error
      )
    }
  }

  return results
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(
      0,
      options.limit || 8
    )
}

/* =========================================================
   GET RAFIP CONTEXT
   ========================================================= */

export async function getRAFIPContext(
  query,
  options = {}
) {
  const results =
    await searchRAFIP(
      query,
      {
        region:
          options.region ||
          'CAR',
        limit:
          options.limit ||
          5,
        minScore:
          options.minScore ||
          2,
      }
    )

  if (
    !results.length
  ) {
    return {
      found: false,
      context: '',
      results: [],
    }
  }

  const context =
    results
      .map(
        (
          result,
          index
        ) =>
          `[RAFIP SOURCE ${
            index + 1
          }]\n${result.content}`
      )
      .join(
        '\n\n---\n\n'
      )

  return {
    found: true,
    context,
    results,
  }
}

/* =========================================================
   REGION DETECTION
   ========================================================= */

export function detectRAFIPRegion(
  query = ''
) {
  const lower =
    query.toLowerCase()

  if (
    lower.includes('car') ||
    lower.includes(
      'cordillera'
    ) ||
    lower.includes(
      'cordillera administrative region'
    )
  ) {
    return 'CAR'
  }

  /*
    Future region detection can
    be added here.
  */

  return 'CAR'
}

/* =========================================================
   RAFIP QUESTION DETECTION
   ========================================================= */

export function isRAFIPQuestion(
  query = ''
) {
  const lower =
    query.toLowerCase()

  const keywords = [
    'rafip',
    'commodity',
    'commodities',
    'investment',
    'investments',
    'investment opportunity',
    'investment opportunities',
    'investment package',
    'investment packages',
    'priority investment',
    'priority investments',
    'priority investment package',
    'priority investment packages',
    'portfolio',
    'value chain',
    'value-chain',
    'priority',
    'market',
    'agriculture',
    'fisheries',
    'intervention',
    'project',
    'projects',
    'regional',
    'car',
    'cordillera',
    'highland vegetables',
    'coffee',
    'heirloom rice',
    'hogs',
    'rice',
    'corn',
    'cardava',
    'banana',
    'mango',
  ]

  return keywords.some(
    keyword =>
      lower.includes(keyword)
  )
}

/* =========================================================
   EXPORT CONFIG
   ========================================================= */

export {
  RAFIP_REGIONS,
  RAFIP_COMMODITIES,
  QUERY_SYNONYMS,
  INVESTMENT_SECTION_MARKERS,
  detectQueryIntent,
  normalizeText,
  tokenize,
  createChunks,
}

export default {
  loadRAFIPRegion,
  searchRAFIP,
  searchAllRAFIP,
  getRAFIPContext,
  detectRAFIPRegion,
  isRAFIPQuestion,
  detectQueryIntent,
}
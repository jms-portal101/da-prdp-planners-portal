/* =========================================================
   AIPLAN — PLANNERS' PORTAL KNOWLEDGE
   =========================================================
   This file contains the portal-level knowledge used by
   AIPLAN.

   IMPORTANT:
   AIPLAN should only answer portal questions when the
   information exists in this knowledge base.

   This is intentionally separate from RAFIP knowledge.
   ========================================================= */


/* =========================================================
   PORTAL TOOLS
   ========================================================= */

const PORTAL_KNOWLEDGE = [

  /* -------------------------------------------------------
     INVESTMENT PORTFOLIO
  ------------------------------------------------------- */

  {
    id: 'investment-portfolio',

    title: 'Investment Portfolio',

    category: 'Planning and Investment',

    keywords: [
      'investment portfolio',
      'investment portfolios',
      'investment',
      'investments',
      'portfolio',
      'portfolios',
      'investment opportunities',
    ],

    description:
      'The Investment Portfolio section provides information related to agricultural and fisheries investment priorities and opportunities available through the Planners’ Portal.',

    questions: [
      'What is the Investment Portfolio?',
      'Where can I find investment information?',
      'What are investment opportunities?',
      'What is the investment portfolio section?',
    ],
  },


  /* -------------------------------------------------------
     RAFIP
  ------------------------------------------------------- */

  {
    id: 'rafip',

    title: 'RAFIP',

    category: 'Planning and Investment',

    keywords: [
      'rafip',
      'regional agriculture and fisheries investment plan',
      'regional agriculture fisheries investment plan',
      'agriculture and fisheries investment plan',
    ],

    description:
      'RAFIP provides regional agriculture and fisheries investment planning information, including priority commodities, investment opportunities, value-chain information, constraints, and proposed support actions.',

    questions: [
      'What is RAFIP?',
      'What information is available in RAFIP?',
      'What can I find in RAFIP?',
      'What is the purpose of RAFIP?',
    ],
  },


  /* -------------------------------------------------------
     CRVA
  ------------------------------------------------------- */

  {
    id: 'crva',

    title: 'CRVA',

    category: 'Climate and Risk',

    keywords: [
      'crva',
      'climate risk',
      'climate risk vulnerability',
      'vulnerability assessment',
      'climate vulnerability',
    ],

    description:
      'CRVA is a climate-related decision-support resource available through the Planners’ Portal for examining climate risks and vulnerability in agricultural planning.',

    questions: [
      'What is CRVA?',
      'What is CRVA used for?',
      'Where can I find climate risk information?',
      'What tool can I use for climate vulnerability?',
    ],
  },


  /* -------------------------------------------------------
     FISHVOOL
  ------------------------------------------------------- */

  {
    id: 'fishvool',

    title: 'FishVool',

    category: 'Fisheries',

    keywords: [
      'fishvool',
      'fish vulnerability',
      'fisheries vulnerability',
      'fisheries',
      'fishery',
    ],

    description:
      'FishVool is a fisheries-related decision-support resource available through the Planners’ Portal.',

    questions: [
      'What is FishVool?',
      'What is FishVool used for?',
      'Where can I find fisheries information?',
      'What tool is available for fisheries planning?',
    ],
  },


  /* -------------------------------------------------------
     GEOAGRI
  ------------------------------------------------------- */

  {
    id: 'geoagri',

    title: 'GeoAgri',

    category: 'Geospatial Planning',

    keywords: [
      'geoagri',
      'geo agri',
      'geospatial agriculture',
      'agricultural mapping',
      'agriculture mapping',
    ],

    description:
      'GeoAgri is a geospatial planning resource available through the Planners’ Portal for agriculture-related mapping and spatial information.',

    questions: [
      'What is GeoAgri?',
      'What is GeoAgri used for?',
      'What tool can I use for agricultural mapping?',
    ],
  },


  /* -------------------------------------------------------
     NCCAG
  ------------------------------------------------------- */

  {
    id: 'nccag',

    title: 'NCCAG',

    category: 'Climate and Agriculture',

    keywords: [
      'nccag',
      'climate change agriculture',
      'climate agriculture',
      'climate change',
    ],

    description:
      'NCCAG is a climate and agriculture-related decision-support resource available through the Planners’ Portal.',

    questions: [
      'What is NCCAG?',
      'What is NCCAG used for?',
      'What tool is available for climate and agriculture?',
    ],
  },


  /* -------------------------------------------------------
     HAZARD HUNTER
  ------------------------------------------------------- */

  {
    id: 'hazard-hunter',

    title: 'Hazard Hunter',

    category: 'Hazard and Risk',

    keywords: [
      'hazard hunter',
      'hazard',
      'hazards',
      'hazard assessment',
      'risk',
      'disaster risk',
    ],

    description:
      'Hazard Hunter is a hazard and risk information resource available through the Planners’ Portal.',

    questions: [
      'What is Hazard Hunter?',
      'What is Hazard Hunter used for?',
      'Where can I check hazard information?',
      'What tool can I use for hazards?',
    ],
  },


  /* -------------------------------------------------------
     PRDP MIS
  ------------------------------------------------------- */

  {
    id: 'prdp-mis',

    title: 'PRDP MIS',

    category: 'Project Information',

    keywords: [
      'prdp mis',
      'mis',
      'project monitoring',
      'project information',
      'prdp',
    ],

    description:
      'PRDP MIS is a project information and management resource associated with the Philippine Rural Development Project.',

    questions: [
      'What is PRDP MIS?',
      'What is PRDP MIS used for?',
      'Where can I find PRDP project information?',
    ],
  },


  /* -------------------------------------------------------
     SES DASHBOARD
  ------------------------------------------------------- */

  {
    id: 'ses-dashboard',

    title: 'SES Dashboard',

    category: 'Monitoring and Information',

    keywords: [
      'ses dashboard',
      'ses',
      'dashboard',
      'monitoring dashboard',
      'monitoring',
    ],

    description:
      'The SES Dashboard is a monitoring and information resource available through the Planners’ Portal.',

    questions: [
      'What is the SES Dashboard?',
      'What is the SES Dashboard used for?',
      'Where can I find the monitoring dashboard?',
    ],
  },


  /* -------------------------------------------------------
     VALUE CHAIN
  ------------------------------------------------------- */

  {
    id: 'value-chain',

    title: 'Value Chain Development',

    category: 'Planning Framework',

    keywords: [
      'value chain',
      'value-chain',
      'value chain development',
      'value chain analysis',
      'vca',
    ],

    description:
      'The Planners’ Portal provides resources related to value-chain development and agricultural investment planning.',

    questions: [
      'What is value chain development?',
      'What is value chain analysis?',
      'Where can I find value chain information?',
    ],
  },


  /* -------------------------------------------------------
     PLANNERS' PORTAL
  ------------------------------------------------------- */

  {
    id: 'planners-portal',

    title: 'Planners’ Portal',

    category: 'Portal',

    keywords: [
      'planners portal',
      'planners’ portal',
      'portal',
      'planning portal',
      'agricultural planning portal',
    ],

    description:
      'The Planners’ Portal brings together agricultural planning information, investment resources, geospatial resources, decision-support tools, and monitoring resources for planners.',

    questions: [
      'What is the Planners’ Portal?',
      'What can I find in the portal?',
      'What tools are available in the portal?',
      'What is the purpose of the portal?',
    ],
  },

]


/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalizePortalText(text = '') {

  return text
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

}


/* =========================================================
   SEARCH PORTAL KNOWLEDGE
   ========================================================= */

export function searchPortalKnowledge(
  query = '',
  options = {}
) {

  const {
    limit = 5,
    minScore = 1,
  } = options


  const normalizedQuery =
    normalizePortalText(query)


  if (!normalizedQuery) {
    return []
  }


  const queryWords =
    normalizedQuery
      .split(/\s+/)
      .filter(word =>
        word.length > 2
      )


  const results =
    PORTAL_KNOWLEDGE
      .map(item => {

        const searchableText =
          normalizePortalText(
            [
              item.title,
              item.category,
              item.description,
              ...item.keywords,
              ...item.questions,
            ].join(' ')
          )


        let score = 0


        /* -----------------------------------------------
           Exact title match
        ----------------------------------------------- */

        if (
          normalizedQuery.includes(
            normalizePortalText(
              item.title
            )
          )
        ) {

          score += 10

        }


        /* -----------------------------------------------
           Keyword match
        ----------------------------------------------- */

        item.keywords.forEach(
          keyword => {

            const normalizedKeyword =
              normalizePortalText(
                keyword
              )


            if (
              normalizedQuery.includes(
                normalizedKeyword
              )
            ) {

              score += 5

            }

          }
        )


        /* -----------------------------------------------
           Word matching
        ----------------------------------------------- */

        queryWords.forEach(
          word => {

            if (
              searchableText.includes(
                word
              )
            ) {

              score += 1

            }

          }
        )


        /* -----------------------------------------------
           Question similarity
        ----------------------------------------------- */

        item.questions.forEach(
          question => {

            const normalizedQuestion =
              normalizePortalText(
                question
              )


            if (
              normalizedQuery ===
              normalizedQuestion
            ) {

              score += 15

            }

          }
        )


        return {
          ...item,
          score,
        }

      })
      .filter(
        result =>
          result.score >= minScore
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
   GET PORTAL CONTEXT
   ========================================================= */

export function getPortalContext(
  query = '',
  options = {}
) {

  const results =
    searchPortalKnowledge(
      query,
      options
    )


  if (!results.length) {

    return {
      found: false,
      context: '',
      results: [],
    }

  }


  const context =
    results
      .map(
        result =>
          `[PORTAL SOURCE]\n\n` +
          `Title: ${result.title}\n` +
          `Category: ${result.category}\n\n` +
          `${result.description}`
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
   DETECT PORTAL QUESTION
   ========================================================= */

export function isPortalQuestion(
  query = ''
) {

  const lowerQuery =
    normalizePortalText(
      query
    )


  const portalKeywords = [

    'portal',

    'planners',

    'planning',

    'tool',

    'tools',

    'dashboard',

    'resource',

    'resources',

    'investment',

    'portfolio',

    'rafip',

    'crva',

    'fishvool',

    'geoagri',

    'nccag',

    'hazard hunter',

    'prdp mis',

    'ses dashboard',

    'value chain',

    'commodity',

    'commodities',

    'climate risk',

    'hazard',

    'fisheries',

  ]


  return portalKeywords.some(
    keyword =>
      lowerQuery.includes(
        keyword
      )
  )

}


/* =========================================================
   GET PORTAL TOOLS
   ========================================================= */

export function getPortalTools() {

  return PORTAL_KNOWLEDGE.filter(
    item =>
      item.id !==
      'planners-portal'
  )

}


/* =========================================================
   EXPORT
   ========================================================= */

export {
  PORTAL_KNOWLEDGE,
  normalizePortalText,
}


export default {
  PORTAL_KNOWLEDGE,
  searchPortalKnowledge,
  getPortalContext,
  isPortalQuestion,
  getPortalTools,
}
import { useState } from 'react'

import {
  Bot,
  Send,
  Sparkles,
  RotateCcw,
  User,
  ArrowRight,
  BookOpen,
} from 'lucide-react'

import './AIPlanningAssistant.css'


/* =========================================================
   AIPLAN — PLANNERS' PORTAL ASSISTANT
   =========================================================

   IMPORTANT:

   This version is intentionally NOT a general AI assistant.

   AIPLAN only answers questions about the resources,
   tools, sections, and functions available in the
   Planners' Portal.

   It does NOT:
   - generate agricultural recommendations
   - invent RAFIP information
   - summarize unknown documents
   - answer unrelated general questions
   - make up statistics
   - pretend to be an AI knowledge model

   This is a controlled Portal Knowledge Assistant.
   ========================================================= */


/* =========================================================
   PORTAL TOOLS
   ========================================================= */

const PORTAL_TOOLS = [

  {
    id: 'investment-portfolio',
    name: 'Investment Portfolio',
    keywords: [
      'investment portfolio',
      'investment portfolios',
      'investment',
      'investments',
      'portfolio',
      'portfolios',
    ],
    description:
      'The Investment Portfolio section provides information related to agricultural and fisheries investment priorities and opportunities available through the Planners’ Portal.',
  },

  {
    id: 'crva',
    name: 'CRVA',
    keywords: [
      'crva',
      'climate risk',
      'climate vulnerability',
      'climate resilience',
      'climate assessment',
    ],
    description:
      'CRVA is a climate-related decision-support resource available through the Planners’ Portal for examining climate risks and vulnerability in agricultural planning.',
  },

  {
    id: 'fishvool',
    name: 'FishVool',
    keywords: [
      'fishvool',
      'fish tool',
      'fisheries tool',
      'fisheries',
    ],
    description:
      'FishVool is a fisheries-related decision-support resource available through the Planners’ Portal.',
  },

  {
    id: 'geoagri',
    name: 'GeoAgri',
    keywords: [
      'geoagri',
      'geo agri',
      'geospatial agriculture',
      'agriculture mapping',
      'spatial information',
    ],
    description:
      'GeoAgri is a geospatial planning resource available through the Planners’ Portal for agriculture-related mapping and spatial information.',
  },

  {
    id: 'nccag',
    name: 'NCCAG',
    keywords: [
      'nccag',
      'climate agriculture',
      'climate and agriculture',
    ],
    description:
      'NCCAG is a climate and agriculture-related decision-support resource available through the Planners’ Portal.',
  },

  {
    id: 'hazard-hunter',
    name: 'Hazard Hunter',
    keywords: [
      'hazard hunter',
      'hazard',
      'hazards',
      'risk information',
      'risk',
    ],
    description:
      'Hazard Hunter is a hazard and risk information resource available through the Planners’ Portal.',
  },

  {
    id: 'ses-dashboard',
    name: 'SES Dashboard',
    keywords: [
      'ses dashboard',
      'ses',
      'dashboard',
      'monitoring',
    ],
    description:
      'The SES Dashboard is a monitoring and information resource available through the Planners’ Portal.',
  },

  {
    id: 'value-chain',
    name: 'Value Chain Development',
    keywords: [
      'value chain',
      'value-chain',
      'value chain development',
    ],
    description:
      'The Planners’ Portal provides resources related to value-chain development and agricultural investment planning.',
  },

  {
    id: 'rafip',
    name: 'RAFIP',
    keywords: [
      'rafip',
      'regional agriculture and fisheries investment portfolio',
      'agriculture and fisheries investment portfolio',
    ],
    description:
      'RAFIP provides regional agriculture and fisheries investment planning information, including priority commodities, investment opportunities, value-chain information, constraints, and proposed support actions.',
  },

]


/* =========================================================
   PORTAL KNOWLEDGE
   ========================================================= */

const PORTAL_KNOWLEDGE = {

  tools:
    'The Planners’ Portal includes several planning and decision-support resources, including Investment Portfolio, CRVA, FishVool, GeoAgri, NCCAG, Hazard Hunter, SES Dashboard, Value Chain Development resources, and RAFIP.',

  investment:
    'The Investment Portfolio section provides information related to agricultural and fisheries investment priorities and opportunities available through the Planners’ Portal.',

  crva:
    'CRVA is a climate-related decision-support resource available through the Planners’ Portal for examining climate risks and vulnerability in agricultural planning.',

  fishvool:
    'FishVool is a fisheries-related decision-support resource available through the Planners’ Portal.',

  geoagri:
    'GeoAgri is a geospatial planning resource available through the Planners’ Portal for agriculture-related mapping and spatial information.',

  nccag:
    'NCCAG is a climate and agriculture-related decision-support resource available through the Planners’ Portal.',

  hazardHunter:
    'Hazard Hunter is a hazard and risk information resource available through the Planners’ Portal.',

  ses:
    'The SES Dashboard is a monitoring and information resource available through the Planners’ Portal.',

  valueChain:
    'The Planners’ Portal provides resources related to value-chain development and agricultural investment planning.',

  rafip:
    'RAFIP provides regional agriculture and fisheries investment planning information, including priority commodities, investment opportunities, value-chain information, constraints, and proposed support actions.',

}


/* =========================================================
   NORMALIZE QUESTION
   ========================================================= */

function normalizeQuestion(question = '') {

  return question
    .toLowerCase()
    .replace(/[?!.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

}


/* =========================================================
   DETECT PORTAL QUESTION
   ========================================================= */

function isPortalQuestion(question = '') {

  const lower =
    normalizeQuestion(question)


  const portalTerms = [

    'portal',
    'planner',
    'planners portal',
    "planners' portal",

    'tool',
    'tools',

    'resource',
    'resources',

    'investment portfolio',
    'investment',

    'crva',

    'fishvool',

    'geoagri',

    'nccag',

    'hazard hunter',

    'ses dashboard',

    'value chain',

    'rafip',

    'commodity',
    'commodities',

    'planning tool',

    'decision support',

    'decision-support',

  ]


  return portalTerms.some(term =>
    lower.includes(term)
  )

}


/* =========================================================
   DETECT TOOL
   ========================================================= */

function detectPortalTool(question = '') {

  const lower =
    normalizeQuestion(question)


  /*
    Check longer/more specific terms first.
  */

  const orderedTools = [
    ...PORTAL_TOOLS,
  ].sort(
    (a, b) => {

      const aLongest =
        Math.max(
          ...a.keywords.map(
            keyword =>
              keyword.length
          )
        )

      const bLongest =
        Math.max(
          ...b.keywords.map(
            keyword =>
              keyword.length
          )
        )

      return bLongest - aLongest

    }
  )


  for (const tool of orderedTools) {

    const matched =
      tool.keywords.some(
        keyword =>
          lower.includes(
            keyword.toLowerCase()
          )
      )


    if (matched) {
      return tool
    }

  }


  return null

}


/* =========================================================
   DETECT QUESTION TYPE
   ========================================================= */

function detectQuestionType(question = '') {

  const lower =
    normalizeQuestion(question)


  /*
    TOOL LIST
  */

  if (
    lower.includes('what tools') ||
    lower.includes('which tools') ||
    lower.includes('available tools') ||
    lower.includes('what resources') ||
    lower.includes('which resources') ||
    lower.includes('available resources')
  ) {

    return 'tool-list'

  }


  /*
    WHAT IS / WHAT DOES
  */

  if (
    lower.startsWith('what is') ||
    lower.startsWith('what are') ||
    lower.startsWith('what does') ||
    lower.includes('tell me about')
  ) {

    return 'tool-description'

  }


  /*
    WHERE / FIND / ACCESS
  */

  if (
    lower.includes('where') ||
    lower.includes('find') ||
    lower.includes('access') ||
    lower.includes('open') ||
    lower.includes('locate')
  ) {

    return 'navigation'

  }


  /*
    HOW
  */

  if (
    lower.startsWith('how') ||
    lower.includes('how do i') ||
    lower.includes('how can i')
  ) {

    return 'how-to'

  }


  /*
    DEFAULT
  */

  return 'general-portal'

}


/* =========================================================
   FORMAT TOOL LIST
   ========================================================= */

function getToolListResponse() {

  return {

    content:
      `The Planners’ Portal includes the following planning and decision-support resources:

• Investment Portfolio — Agricultural and fisheries investment priorities and opportunities.

• CRVA — Climate-related decision-support resource for examining climate risks and vulnerability.

• FishVool — Fisheries-related decision-support resource.

• GeoAgri — Geospatial planning resource for agriculture-related mapping and spatial information.

• NCCAG — Climate and agriculture-related decision-support resource.

• Hazard Hunter — Hazard and risk information resource.

• SES Dashboard — Monitoring and information resource.

• Value Chain Development — Resources related to value-chain development and agricultural investment planning.

• RAFIP — Regional agriculture and fisheries investment planning information, including priority commodities, investment opportunities, value-chain information, constraints, and proposed support actions.`,

    source:
      'Planners’ Portal Knowledge',

  }

}


/* =========================================================
   FORMAT TOOL DESCRIPTION
   ========================================================= */

function getToolDescriptionResponse(tool) {

  if (!tool) {
    return null
  }


  return {

    content:
      `${tool.name}\n\n${tool.description}`,

    source:
      'Planners’ Portal Knowledge',

    tool:
      tool.id,

  }

}


/* =========================================================
   RAFIP PORTAL RESPONSE
   ========================================================= */

function getRAFIPPortalResponse(question) {

  const lower =
    normalizeQuestion(question)


  /*
    IMPORTANT:

    We deliberately do NOT search CAR.txt here.

    We only answer what RAFIP is as a PORTAL resource.
  */

  if (
    lower.includes('what is rafip') ||
    lower.includes('what are rafip') ||
    lower === 'rafip' ||
    lower.includes('about rafip') ||
    lower.includes('rafip tool') ||
    lower.includes('rafip resource')
  ) {

    return {

      content:
        `RAFIP is a regional agriculture and fisheries investment planning resource available through the Planners’ Portal.

It provides regional investment planning information, including:

• Priority commodities
• Investment opportunities
• Value-chain information
• Constraints
• Proposed support actions

This assistant is currently using RAFIP as a portal-level resource and does not generate additional RAFIP content beyond the available portal knowledge.`,

      source:
        'Planners’ Portal Knowledge',

      tool:
        'rafip',

    }

  }


  return null

}


/* =========================================================
   NAVIGATION RESPONSE
   ========================================================= */

function getNavigationResponse(
  question,
  tool
) {

  if (tool) {

    return {

      content:
        `${tool.name} is one of the resources available through the Planners’ Portal.

You can use the portal's corresponding section or tool to access its available planning and decision-support functions.`,

      source:
        'Planners’ Portal Knowledge',

      tool:
        tool.id,

    }

  }


  return {

    content:
      'The Planners’ Portal contains several planning and decision-support resources. You can ask me about Investment Portfolio, CRVA, FishVool, GeoAgri, NCCAG, Hazard Hunter, SES Dashboard, Value Chain Development, or RAFIP.',

    source:
      'Planners’ Portal Knowledge',

  }

}


/* =========================================================
   GENERAL PORTAL RESPONSE
   ========================================================= */

function getGeneralPortalResponse(
  question,
  tool
) {

  if (tool) {

    return getToolDescriptionResponse(
      tool
    )

  }


  return {

    content:
      'I can help you explore the resources and tools available in the Planners’ Portal. Try asking about Investment Portfolio, CRVA, FishVool, GeoAgri, NCCAG, Hazard Hunter, SES Dashboard, Value Chain Development, or RAFIP.',

    source:
      'Planners’ Portal Knowledge',

  }

}


/* =========================================================
   GET PORTAL RESPONSE
   ========================================================= */

function getPortalResponse(question) {

  /*
    First determine whether this is actually
    a portal question.
  */

  if (
    !isPortalQuestion(question)
  ) {

    return {

      content:
        `I’m currently focused on the Planners’ Portal.

I can answer questions about the portal's tools, resources, sections, and their documented purposes.

Try asking:
• What tools are available in the Planners’ Portal?
• What is CRVA?
• What is FishVool?
• What is GeoAgri?
• What is RAFIP?
• What is the Investment Portfolio?`,

      source:
        'AIPLAN • Portal Knowledge',

    }

  }


  const type =
    detectQuestionType(question)


  const tool =
    detectPortalTool(question)


  /*
    TOOL LIST
  */

  if (
    type === 'tool-list'
  ) {

    return getToolListResponse()

  }


  /*
    RAFIP

    Handle this before generic tool description.
  */

  if (
    tool &&
    tool.id === 'rafip'
  ) {

    const rafipResponse =
      getRAFIPPortalResponse(
        question
      )


    if (rafipResponse) {

      return rafipResponse

    }

  }


  /*
    NAVIGATION
  */

  if (
    type === 'navigation'
  ) {

    return getNavigationResponse(
      question,
      tool
    )

  }


  /*
    TOOL DESCRIPTION
  */

  if (
    type === 'tool-description' &&
    tool
  ) {

    return getToolDescriptionResponse(
      tool
    )

  }


  /*
    GENERAL PORTAL QUESTION
  */

  return getGeneralPortalResponse(
    question,
    tool
  )

}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

function AIPlanningAssistant() {

  /* =======================================================
     SUGGESTED QUESTIONS
  ======================================================= */

  const suggestedQuestions = [

    'What tools are available in the Planners’ Portal?',

    'What is CRVA?',

    'What is FishVool?',

    'What is RAFIP?',

  ]


  /* =======================================================
     INITIAL MESSAGE
  ======================================================= */

  const [messages, setMessages] = useState([

    {

      id: 1,

      role: 'assistant',

      content:
        "Hi, I'm AIPLAN. 👋 I can help you explore the tools and resources available in the DA-PRDP Planners’ Portal.",

      source:
        'AIPLAN • Portal Knowledge',

    },

  ])


  const [input, setInput] =
    useState('')


  const [isTyping, setIsTyping] =
    useState(false)


  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = (
    messageText = input
  ) => {

    const trimmedMessage =
      messageText.trim()


    if (
      !trimmedMessage ||
      isTyping
    ) {

      return

    }


    /* -----------------------------------------------------
       USER MESSAGE
    ----------------------------------------------------- */

    const userMessage = {

      id:
        Date.now(),

      role:
        'user',

      content:
        trimmedMessage,

    }


    setMessages(previous => [

      ...previous,

      userMessage,

    ])


    setInput('')

    setIsTyping(true)


    /* -----------------------------------------------------
       SMALL RESPONSE DELAY
    ----------------------------------------------------- */

    setTimeout(() => {

      let response


      try {

        response =
          getPortalResponse(
            trimmedMessage
          )

      } catch (error) {

        console.error(
          'AIPLAN portal error:',
          error
        )


        response = {

          content:
            'I encountered a problem while processing the portal question. Please try again.',

          source:
            'AIPLAN',

        }

      }


      /* ---------------------------------------------------
         ASSISTANT MESSAGE
      --------------------------------------------------- */

      const assistantMessage = {

        id:
          Date.now() + 1,

        role:
          'assistant',

        content:
          response.content,

        source:
          response.source || null,

        tool:
          response.tool || null,

      }


      setMessages(previous => [

        ...previous,

        assistantMessage,

      ])


      setIsTyping(false)

    }, 450)

  }


  /* =======================================================
     ENTER KEY
     ======================================================= */

  const handleKeyDown = (
    event
  ) => {

    if (
      event.key === 'Enter' &&
      !event.shiftKey
    ) {

      event.preventDefault()

      sendMessage()

    }

  }


  /* =======================================================
     SUGGESTION
     ======================================================= */

  const handleSuggestion = (
    question
  ) => {

    sendMessage(question)

  }


  /* =======================================================
     CLEAR
  ======================================================= */

  const clearConversation = () => {

    setMessages([

      {

        id:
          Date.now(),

        role:
          'assistant',

        content:
          "Hi, I'm AIPLAN. 👋 I can help you explore the tools and resources available in the DA-PRDP Planners’ Portal.",

        source:
          'AIPLAN • Portal Knowledge',

      },

    ])


    setInput('')

    setIsTyping(false)

  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <section
      className="ai-planning-section"
      id="ai-planning"
    >

      <div className="ai-planning-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="ai-planning-header">

          <div className="ai-planning-heading">

            <span className="ai-planning-eyebrow">
              PLANNING INTELLIGENCE
            </span>

            <h2>
              Meet AIPLAN
            </h2>

            <p>
              Agricultural Intelligence & Planning Assistant
              for exploring the resources and tools available
              in the DA-PRDP Planners’ Portal.
            </p>

          </div>


          <div className="ai-planning-status">

            <span className="ai-status-dot"></span>

            <span>
              AIPLAN • ACTIVE
            </span>

          </div>

        </div>


        {/* =================================================
            MAIN PANEL
        ================================================= */}

        <div className="ai-planning-panel">


          {/* =================================================
              PANEL HEADER
          ================================================= */}

          <div className="ai-panel-header">

            <div className="ai-panel-identity">

              <div className="ai-panel-icon">

                <Bot
                  size={20}
                  strokeWidth={1.8}
                />

              </div>


              <div>

                <strong>
                  AIPLAN
                </strong>

                <span>
                  Agricultural Intelligence & Planning Assistant
                </span>

              </div>

            </div>


            <button
              type="button"
              className="ai-clear-button"
              onClick={
                clearConversation
              }
              title="Clear conversation"
            >

              <RotateCcw
                size={14}
                strokeWidth={1.8}
              />

              <span>
                Clear
              </span>

            </button>

          </div>


          {/* =================================================
              CHAT AREA
          ================================================= */}

          <div className="ai-chat-area">

            {messages.map(
              message => (

                <div
                  key={
                    message.id
                  }
                  className={
                    `ai-message ai-message-${message.role}`
                  }
                >

                  <div className="ai-message-avatar">

                    {message.role ===
                    'assistant' ? (

                      <Bot
                        size={15}
                        strokeWidth={1.8}
                      />

                    ) : (

                      <User
                        size={15}
                        strokeWidth={1.8}
                      />

                    )}

                  </div>


                  <div className="ai-message-content">

                    <span className="ai-message-label">

                      {
                        message.role ===
                        'assistant'
                          ? 'AIPLAN'
                          : 'YOU'
                      }

                    </span>


                    <p>
                      {message.content}
                    </p>


                    {message.role ===
                      'assistant' &&
                      message.source && (

                        <div className="ai-message-source">

                          <BookOpen
                            size={11}
                            strokeWidth={1.8}
                          />

                          <span>
                            {message.source}
                          </span>

                        </div>

                      )}

                  </div>

                </div>

              )
            )}


            {/* =================================================
                TYPING
            ================================================= */}

            {isTyping && (

              <div className="ai-message ai-message-assistant">

                <div className="ai-message-avatar">

                  <Bot
                    size={15}
                    strokeWidth={1.8}
                  />

                </div>


                <div className="ai-message-content">

                  <span className="ai-message-label">
                    AIPLAN
                  </span>


                  <div className="ai-typing">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              </div>

            )}

          </div>


          {/* =================================================
              SUGGESTIONS
          ================================================= */}

          <div className="ai-suggestions">

            <div className="ai-suggestions-heading">

              <Sparkles
                size={13}
                strokeWidth={1.8}
              />

              <span>
                ASK AIPLAN
              </span>

            </div>


            <div className="ai-suggestions-list">

              {suggestedQuestions.map(
                question => (

                  <button
                    type="button"
                    className="ai-suggestion"
                    key={question}
                    onClick={() =>
                      handleSuggestion(
                        question
                      )
                    }
                    disabled={
                      isTyping
                    }
                  >

                    <span>
                      {question}
                    </span>

                    <ArrowRight
                      size={13}
                      strokeWidth={1.8}
                    />

                  </button>

                )
              )}

            </div>

          </div>


          {/* =================================================
              INPUT
          ================================================= */}

          <div className="ai-input-area">

            <div className="ai-input-wrapper">

              <textarea
                value={
                  input
                }
                onChange={
                  event =>
                    setInput(
                      event.target.value
                    )
                }
                onKeyDown={
                  handleKeyDown
                }
                placeholder="Ask AIPLAN about the Planners’ Portal..."
                rows={1}
                disabled={
                  isTyping
                }
              />


              <button
                type="button"
                className="ai-send-button"
                onClick={() =>
                  sendMessage()
                }
                disabled={
                  !input.trim() ||
                  isTyping
                }
                aria-label="Send message"
              >

                <Send
                  size={17}
                  strokeWidth={2}
                />

              </button>

            </div>


            <p className="ai-input-note">
              AIPLAN • Planners’ Portal Knowledge
            </p>

          </div>

        </div>

      </div>

    </section>

  )

}


export default AIPlanningAssistant
import React, { useEffect, useMemo, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Search,
  ExternalLink,
} from 'lucide-react'

import './ContactUs.css'

const CONTACTS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWE6bGfyp6ftJdMvP2lwYE3ZnFG9U2OW75KMBPVSaO-Uc7-6SAD7oSl_Q2EE5j3RrgYWfT2BU9zE-z/pub?output=csv'

// =========================================================
// CSV PARSER
// =========================================================

function parseCSV(text) {
  const rows = []
  let row = []
  let value = ''
  let insideQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '"') {
      if (insideQuotes && next === '"') {
        value += '"'
        i++
      } else {
        insideQuotes = !insideQuotes
      }
    } else if (char === ',' && !insideQuotes) {
      row.push(value)
      value = ''
    } else if (
      (char === '\n' || char === '\r') &&
      !insideQuotes
    ) {
      if (char === '\r' && next === '\n') {
        i++
      }

      row.push(value)
      value = ''

      if (row.some((item) => item.trim() !== '')) {
        rows.push(row)
      }

      row = []
    } else {
      value += char
    }
  }

  if (value !== '' || row.length > 0) {
    row.push(value)

    if (row.some((item) => item.trim() !== '')) {
      rows.push(row)
    }
  }

  if (!rows.length) {
    return []
  }

  const headers = rows[0].map((header) =>
    header.replace(/^\uFEFF/, '').trim()
  )

  return rows.slice(1).map((row) => {
    const object = {}

    headers.forEach((header, index) => {
      object[header] = (row[index] || '').trim()
    })

    return object
  })
}

// =========================================================
// HELPERS
// =========================================================

function cleanValue(value) {
  if (!value) return ''
  return String(value).trim()
}

function normalizeText(value) {
  return cleanValue(value).toLowerCase()
}

// =========================================================
// REGION INFORMATION
// =========================================================

const REGION_INFO = {
  CAR: {
    name: 'Cordillera Administrative Region',
    island: 'Luzon',
    cluster: 'North Luzon',
  },

  'Region I': {
    name: 'Ilocos Region',
    island: 'Luzon',
    cluster: 'North Luzon',
  },

  'Region II': {
    name: 'Cagayan Valley',
    island: 'Luzon',
    cluster: 'North Luzon',
  },

  'Region III': {
    name: 'Central Luzon',
    island: 'Luzon',
    cluster: 'North Luzon',
  },

  'Region IV-A': {
    name: 'CALABARZON',
    island: 'Luzon',
    cluster: 'South Luzon',
  },

  'Region IV-B': {
    name: 'MIMAROPA',
    island: 'Luzon',
    cluster: 'South Luzon',
  },

  'Region V': {
    name: 'Bicol Region',
    island: 'Luzon',
    cluster: 'South Luzon',
  },

  'Region VI': {
    name: 'Western Visayas',
    island: 'Visayas',
    cluster: 'Visayas',
  },

  'Region VII': {
    name: 'Central Visayas',
    island: 'Visayas',
    cluster: 'Visayas',
  },

  'Region VIII': {
    name: 'Eastern Visayas',
    island: 'Visayas',
    cluster: 'Visayas',
  },

  NIR: {
    name: 'Negros Island Region',
    island: 'Visayas',
    cluster: 'Visayas',
  },

  'Region IX': {
    name: 'Zamboanga Peninsula',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },

  'Region X': {
    name: 'Northern Mindanao',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },

  'Region XI': {
    name: 'Davao Region',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },

  'Region XII': {
    name: 'SOCCSKSARGEN',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },

  'Region XIII': {
    name: 'Caraga',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },

  BARMM: {
    name: 'Bangsamoro Autonomous Region in Muslim Mindanao',
    island: 'Mindanao',
    cluster: 'Mindanao',
  },
}

// =========================================================
// PSO CLUSTERS
// =========================================================

const PSO_CLUSTERS = [
  {
    name: 'North Luzon',
    regions: [
      'CAR',
      'Region I',
      'Region II',
      'Region III',
    ],
  },

  {
    name: 'South Luzon',
    regions: [
      'Region IV-A',
      'Region IV-B',
      'Region V',
    ],
  },

  {
    name: 'Visayas',
    regions: [
      'Region VI',
      'Region VII',
      'Region VIII',
      'NIR',
    ],
  },

  {
    name: 'Mindanao',
    regions: [
      'Region IX',
      'Region X',
      'Region XI',
      'Region XII',
      'Region XIII',
      'BARMM',
    ],
  },
]

// =========================================================
// COMPONENT
// =========================================================

function ContactUs() {
  const [contacts, setContacts] = useState([])

  const [activeLevel, setActiveLevel] = useState('NPCO')

  const [searchTerm, setSearchTerm] = useState('')

  // Exact region selected from PSO
  const [selectedRegion, setSelectedRegion] = useState('')

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  // =======================================================
  // LOAD GOOGLE SHEET
  // =======================================================

  useEffect(() => {
    async function loadContacts() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(CONTACTS_CSV_URL)

        if (!response.ok) {
          throw new Error(
            'Unable to load contact directory.'
          )
        }

        const csvText = await response.text()

        const rows = parseCSV(csvText)

        console.log(
          'DA-PRDP Contact Directory:',
          rows
        )

        setContacts(rows)
      } catch (err) {
        console.error(err)

        setError(
          'Unable to load the contact directory.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadContacts()
  }, [])

  // =======================================================
  // NPCO
  // =======================================================

  const npcoContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        normalizeText(contact.Level) === 'npco'
    )
  }, [contacts])

  // =======================================================
  // PSO
  // =======================================================

  const psoContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        normalizeText(contact.Level) === 'pso'
    )
  }, [contacts])

  // =======================================================
  // RPCO
  // =======================================================

  const rpcoContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        normalizeText(contact.Level) === 'rpco'
    )
  }, [contacts])

  // =======================================================
  // GROUP RPCO BY REGION
  // =======================================================

  const regions = useMemo(() => {
    const grouped = {}

    rpcoContacts.forEach((contact) => {
      const regionCode = cleanValue(
        contact.Region
      )

      if (!regionCode) return

      if (!grouped[regionCode]) {
        const info =
          REGION_INFO[regionCode] || {}

        grouped[regionCode] = {
          code: regionCode,
          name:
            info.name || regionCode,
          island:
            info.island || '',
          cluster:
            info.cluster || '',
          contacts: [],
        }
      }

      grouped[regionCode].contacts.push(
        contact
      )
    })

    return Object.values(grouped)
  }, [rpcoContacts])

  // =======================================================
  // FILTER RPCO
  // =======================================================

  const filteredRegions = useMemo(() => {

    // Exact selection from PSO
    if (selectedRegion) {
      return regions.filter(
        (region) =>
          region.code === selectedRegion
      )
    }

    const term =
      normalizeText(searchTerm)

    if (!term) {
      return regions
    }

    return regions.filter((region) => {
      return (
        normalizeText(
          region.code
        ).includes(term) ||
        normalizeText(
          region.name
        ).includes(term) ||
        normalizeText(
          region.cluster
        ).includes(term)
      )
    })
  }, [
    regions,
    selectedRegion,
    searchTerm,
  ])

  // =======================================================
  // CLICK PSO REGION
  // =======================================================

  const handlePsoRegionClick = (
    regionCode
  ) => {

    console.log(
      'Selected RPCO Region:',
      regionCode
    )

    setSelectedRegion(regionCode)

    setSearchTerm('')

    setActiveLevel('RPCO')

    setTimeout(() => {
      document
        .querySelector(
          '.contact-rpco-section'
        )
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 150)
  }

  // =======================================================
  // LEVEL CHANGE
  // =======================================================

  const handleLevelChange = (
    level
  ) => {
    setActiveLevel(level)

    setSelectedRegion('')

    setSearchTerm('')
  }

  // =======================================================
  // SEARCH
  // =======================================================

  const handleSearchChange = (
    value
  ) => {
    setSelectedRegion('')

    setSearchTerm(value)
  }

  // =======================================================
  // CLEAR
  // =======================================================

  const clearFilters = () => {
    setSelectedRegion('')

    setSearchTerm('')
  }

  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <main className="contact-page">

        <section className="contact-hero">

          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              DA-PRDP Planners' Portal
            </span>

            <h1>
              Contact Us
            </h1>

            <p>
              Loading the DA-PRDP
              contact directory...
            </p>

          </div>

        </section>

      </main>
    )
  }

  // =======================================================
  // ERROR
  // =======================================================

  if (error) {
    return (
      <main className="contact-page">

        <section className="contact-hero">

          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              DA-PRDP Planners' Portal
            </span>

            <h1>
              Contact Us
            </h1>

            <p>
              {error}
            </p>

            <button
              type="button"
              className="contact-reset-button"
              onClick={() =>
                window.location.reload()
              }
            >
              Retry
            </button>

          </div>

        </section>

      </main>
    )
  }

  // =======================================================
  // PAGE
  // =======================================================

  return (
    <main className="contact-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            DA-PRDP Planners' Portal
          </span>

          <h1>
            Contact Us
          </h1>

          <p>
            Connect with the DA-PRDP offices
            and component teams supporting
            planning, implementation,
            monitoring, and coordination.
          </p>

        </div>

      </section>

      {/* ===================================================
          CONTACT NETWORK
      =================================================== */}

      <section className="contact-network">

        <div className="contact-container">

          <div className="contact-heading">

            <span className="contact-section-label">
              Contact Network
            </span>

            <h2>
              Find the right DA-PRDP office
            </h2>

            <p>
              Explore contacts across the
              National Project Coordination
              Office, Project Support Offices,
              and Regional Project Coordination
              Offices.
            </p>

          </div>

          {/* =================================================
              LEVEL NAVIGATION
          ================================================= */}

          <div className="contact-level-navigation">

            <button
              type="button"
              className={
                activeLevel === 'NPCO'
                  ? 'contact-level-button active'
                  : 'contact-level-button'
              }
              onClick={() =>
                handleLevelChange('NPCO')
              }
            >

              <Building2 size={18} />

              <span>
                NPCO
                <small>
                  National
                </small>
              </span>

            </button>

            <button
              type="button"
              className={
                activeLevel === 'PSO'
                  ? 'contact-level-button active'
                  : 'contact-level-button'
              }
              onClick={() =>
                handleLevelChange('PSO')
              }
            >

              <Building2 size={18} />

              <span>
                PSO
                <small>
                  Project Support
                </small>
              </span>

            </button>

            <button
              type="button"
              className={
                activeLevel === 'RPCO'
                  ? 'contact-level-button active'
                  : 'contact-level-button'
              }
              onClick={() =>
                handleLevelChange('RPCO')
              }
            >

              <MapPin size={18} />

              <span>
                RPCO
                <small>
                  Regional
                </small>
              </span>

            </button>

          </div>

          {/* =================================================
              NPCO
          ================================================= */}

          {activeLevel === 'NPCO' && (

            <section className="contact-level-section">

              <div className="contact-level-header">

                <div>

                  <span className="contact-section-label">
                    National Level
                  </span>

                  <h3>
                    National Project Coordination Office
                  </h3>

                  <p>
                    DA-PRDP National Project
                    Coordination Office and
                    its component teams.
                  </p>

                </div>

              </div>

              {/* GENERAL NPCO */}

              {npcoContacts.length > 0 && (

                <div className="contact-main-card">

                  <div className="contact-card-icon">
                    <Building2 size={24} />
                  </div>

                  <div className="contact-card-content">

                    <span className="contact-card-label">
                      National Project Coordination Office
                    </span>

                    <h4>
                      {npcoContacts[0].Office}
                    </h4>

                    <div className="contact-details">

                      {npcoContacts[0].Email && (
                        <div>
                          <Mail size={16} />
                          <span>
                            {npcoContacts[0].Email}
                          </span>
                        </div>
                      )}

                      {npcoContacts[0].Phone && (
                        <div>
                          <Phone size={16} />
                          <span>
                            {npcoContacts[0].Phone}
                          </span>
                        </div>
                      )}

                      {npcoContacts[0].Address && (
                        <div>
                          <MapPin size={16} />
                          <span>
                            {npcoContacts[0].Address}
                          </span>
                        </div>
                      )}

                    </div>

                  </div>

                </div>
              )}

              {/* NPCO COMPONENTS */}

              <div className="contact-component-grid">

                {npcoContacts
                  .filter(
                    (contact) =>
                      cleanValue(
                        contact['Unit/Division']
                      )
                  )
                  .map(
                    (contact, index) => (

                      <div
                        className="contact-component-card"
                        key={
                          `npco-${index}`
                        }
                      >

                        <span className="contact-card-label">
                          NPCO Component
                        </span>

                        <h4>
                          {
                            contact[
                              'Unit/Division'
                            ]
                          }
                        </h4>

                        {contact.Email && (
                          <div className="contact-info-row">
                            <Mail size={16} />
                            <span>
                              {contact.Email}
                            </span>
                          </div>
                        )}

                        {contact.Phone && (
                          <div className="contact-info-row">
                            <Phone size={16} />
                            <span>
                              {contact.Phone}
                            </span>
                          </div>
                        )}

                      </div>

                    )
                  )}

              </div>

            </section>
          )}

          {/* =================================================
              PSO
          ================================================= */}

          {activeLevel === 'PSO' && (

            <section className="contact-level-section">

              <div className="contact-level-header">

                <div>

                  <span className="contact-section-label">
                    Support Level
                  </span>

                  <h3>
                    Project Support Offices
                  </h3>

                  <p>
                    Explore the PSO clusters,
                    component teams, and their
                    supported Regional Project
                    Coordination Offices.
                  </p>

                </div>

              </div>

              <div className="contact-pso-grid">

                {PSO_CLUSTERS.map(
                  (pso) => {

                    // =======================================
                    // GENERAL PSO CONTACT
                    // =======================================

                    const generalContact =
                      psoContacts.find(
                        (contact) =>
                          normalizeText(
                            contact.Region
                          ) ===
                            normalizeText(
                              pso.name
                            ) &&
                          !cleanValue(
                            contact[
                              'Unit/Division'
                            ]
                          )
                      )

                    // =======================================
                    // PSO COMPONENTS
                    // =======================================

                    const componentContacts =
                      psoContacts.filter(
                        (contact) =>
                          normalizeText(
                            contact.Region
                          ) ===
                            normalizeText(
                              pso.name
                            ) &&
                          cleanValue(
                            contact[
                              'Unit/Division'
                            ]
                          )
                      )

                    return (

                      <div
                        className="contact-pso-card"
                        key={pso.name}
                      >

                        {/* -----------------------------------
                            PSO HEADER
                        ----------------------------------- */}

                        <div className="contact-pso-header">

                          <div className="contact-pso-icon">
                            <Building2
                              size={22}
                            />
                          </div>

                          <div>

                            <span className="contact-card-label">
                              Project Support Office
                            </span>

                            <h4>
                              {pso.name}
                            </h4>

                          </div>

                        </div>

                        {/* -----------------------------------
                            GENERAL CONTACT
                        ----------------------------------- */}

                        {generalContact && (

                          <div className="contact-pso-general">

                            <span className="contact-pso-label">
                              General Contact
                            </span>

                            {generalContact.Email && (
                              <div className="contact-info-row">
                                <Mail size={15} />
                                <span>
                                  {
                                    generalContact.Email
                                  }
                                </span>
                              </div>
                            )}

                            {generalContact.Phone && (
                              <div className="contact-info-row">
                                <Phone size={15} />
                                <span>
                                  {
                                    generalContact.Phone
                                  }
                                </span>
                              </div>
                            )}

                            {generalContact.Address && (
                              <div className="contact-info-row">
                                <MapPin size={15} />
                                <span>
                                  {
                                    generalContact.Address
                                  }
                                </span>
                              </div>
                            )}

                          </div>
                        )}

                        {/* -----------------------------------
                            COMPONENTS
                        ----------------------------------- */}

                        <div className="contact-pso-components">

                          <div className="contact-pso-label">
                            Components
                          </div>

                          {componentContacts.length > 0 ? (

                            <div className="contact-pso-component-list">

                              {componentContacts.map(
                                (
                                  contact,
                                  index
                                ) => (

                                  <div
                                    className="contact-pso-component"
                                    key={
                                      `${pso.name}-component-${index}`
                                    }
                                  >

                                    <div className="contact-pso-component-name">

                                      {
                                        contact[
                                          'Unit/Division'
                                        ]
                                      }

                                    </div>

                                    {contact.Email && (
                                      <div className="contact-info-row">
                                        <Mail size={14} />
                                        <span>
                                          {
                                            contact.Email
                                          }
                                        </span>
                                      </div>
                                    )}

                                    {contact.Phone && (
                                      <div className="contact-info-row">
                                        <Phone size={14} />
                                        <span>
                                          {
                                            contact.Phone
                                          }
                                        </span>
                                      </div>
                                    )}

                                  </div>

                                )
                              )}

                            </div>

                          ) : (

                            <div className="contact-pso-no-components">
                              No component contacts available.
                            </div>

                          )}

                        </div>

                        {/* -----------------------------------
                            REGIONAL OFFICES
                        ----------------------------------- */}

                        <div className="contact-pso-regions">

                          <div className="contact-pso-label">
                            Regional Offices
                          </div>

                          <div className="contact-pso-region-list">

                            {pso.regions.map(
                              (regionCode) => {

                                const info =
                                  REGION_INFO[
                                    regionCode
                                  ]

                                return (

                                  <button
                                    type="button"
                                    className="contact-pso-region-button"
                                    key={
                                      regionCode
                                    }
                                    onClick={() =>
                                      handlePsoRegionClick(
                                        regionCode
                                      )
                                    }
                                  >

                                    <span>
                                      {regionCode}
                                    </span>

                                    <small>
                                      {
                                        info?.name ||
                                        ''
                                      }
                                    </small>

                                    <ExternalLink
                                      size={15}
                                    />

                                  </button>

                                )
                              }
                            )}

                          </div>

                        </div>

                      </div>
                    )
                  }
                )}

              </div>

            </section>
          )}

          {/* =================================================
              RPCO
          ================================================= */}

          {activeLevel === 'RPCO' && (

            <section
              className="contact-level-section contact-rpco-section"
            >

              <div className="contact-level-header">

                <div>

                  <span className="contact-section-label">
                    Regional Level
                  </span>

                  <h3>
                    Regional Project Coordination Offices
                  </h3>

                  <p>
                    Find the DA-PRDP contact
                    details for each Regional
                    Project Coordination Office.
                  </p>

                </div>

              </div>

              {/* SEARCH */}

              <div className="contact-search-panel">

                <div className="contact-search-box">

                  <Search size={18} />

                  <input
                    type="text"
                    placeholder="Search region..."
                    value={searchTerm}
                    onChange={(event) =>
                      handleSearchChange(
                        event.target.value
                      )
                    }
                  />

                </div>

                {(searchTerm ||
                  selectedRegion) && (

                  <button
                    type="button"
                    className="contact-clear-button"
                    onClick={
                      clearFilters
                    }
                  >
                    Clear
                  </button>
                )}

              </div>

              {/* SELECTED REGION */}

              {selectedRegion && (

                <div className="contact-selected-region">

                  <span>
                    Showing:
                  </span>

                  <strong>
                    {selectedRegion}
                  </strong>

                  <span>
                    {
                      REGION_INFO[
                        selectedRegion
                      ]?.name || ''
                    }
                  </span>

                </div>
              )}

              {/* RPCO CARDS */}

              <div className="contact-rpco-grid">

                {filteredRegions.length === 0 ? (

                  <div className="contact-empty-state">

                    <Search size={30} />

                    <h4>
                      No regional office found
                    </h4>

                    <p>
                      Try another region or
                      clear the current filter.
                    </p>

                    <button
                      type="button"
                      onClick={
                        clearFilters
                      }
                    >
                      Clear Filters
                    </button>

                  </div>

                ) : (

                  filteredRegions.map(
                    (region) => (

                      <div
                        className="contact-rpco-card"
                        key={region.code}
                      >

                        {/* REGION HEADER */}

                        <div className="contact-rpco-header">

                          <div>

                            <span className="contact-region-code">
                              {region.code}
                            </span>

                            <h4>
                              {region.name}
                            </h4>

                            {region.cluster && (
                              <span className="contact-region-cluster">
                                {region.cluster}
                              </span>
                            )}

                          </div>

                          <div className="contact-region-icon">
                            <MapPin size={22} />
                          </div>

                        </div>

                        {/* CONTACTS */}

                        <div className="contact-rpco-contacts">

                          {region.contacts.map(
                            (
                              contact,
                              index
                            ) => {

                              const isGeneral =
                                !cleanValue(
                                  contact[
                                    'Unit/Division'
                                  ]
                                )

                              return (

                                <div
                                  className={
                                    isGeneral
                                      ? 'contact-rpco-contact general'
                                      : 'contact-rpco-contact'
                                  }
                                  key={
                                    `${region.code}-${index}`
                                  }
                                >

                                  <div className="contact-rpco-contact-header">

                                    <span className="contact-card-label">

                                      {isGeneral
                                        ? 'Regional Office'
                                        : contact[
                                            'Unit/Division'
                                          ]}

                                    </span>

                                  </div>

                                  <div className="contact-details">

                                    {contact.Email && (
                                      <div>
                                        <Mail
                                          size={16}
                                        />

                                        <span>
                                          {
                                            contact.Email
                                          }
                                        </span>
                                      </div>
                                    )}

                                    {contact.Phone && (
                                      <div>
                                        <Phone
                                          size={16}
                                        />

                                        <span>
                                          {
                                            contact.Phone
                                          }
                                        </span>
                                      </div>
                                    )}

                                    {contact.Address && (
                                      <div>
                                        <MapPin
                                          size={16}
                                        />

                                        <span>
                                          {
                                            contact.Address
                                          }
                                        </span>
                                      </div>
                                    )}

                                  </div>

                                </div>
                              )
                            }
                          )}

                        </div>

                      </div>
                    )
                  )
                )}

              </div>

            </section>
          )}

        </div>

      </section>

      {/* ===================================================
          GRM
      =================================================== */}

      <section className="contact-grm-section">

        <div className="contact-container">

          <div className="contact-grm-card">

            <div className="contact-grm-content">

              <span className="contact-section-label">
                Grievance Redress Mechanism
              </span>

              <h2>
                Need to raise a concern?
              </h2>

              <p>
                For concerns, complaints, or
                requests requiring formal action,
                you may use the DA-PRDP Grievance
                Redress Mechanism.
              </p>

            </div>

            <a
              href="https://sidlan.da.gov.ph/grm-form/create"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-grm-button"
            >
              Submit a Concern
              <ExternalLink size={17} />
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default ContactUs
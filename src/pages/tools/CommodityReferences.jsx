
import {
  Sprout,
  Wheat,
  Coffee,
  Apple,
  Beef,
  Fish,
  Factory,
  Link2,
  ArrowUpRight,
  BookOpen,
  BarChart3,
  ClipboardList,
} from 'lucide-react'

import './CommodityReferences.css'

function CommodityReferences() {
  const commodityGroups = [
    {
      icon: Wheat,
      category: 'MAJOR CROPS',
      title: 'Major Agricultural Commodities',
      description:
        'Commodity references covering major crops that support agricultural investment planning, prioritization, production analysis, and value-chain development.',
      color: 'green',
      items: [
        {
          name: 'Rice',
          description:
            'Production, industry, planning, and value-chain references for rice.',
          tag: 'RICE',
        },
        {
          name: 'Corn',
          description:
            'Commodity and value-chain references for yellow and other corn production systems.',
          tag: 'CORN',
        },
        {
          name: 'Coconut',
          description:
            'Industry, production, value-chain, and development references for coconut.',
          tag: 'COCONUT',
        },
        {
          name: 'Banana',
          description:
            'Production, industry, market, and value-chain references for banana.',
          tag: 'BANANA',
        },
      ],
    },

    {
      icon: Sprout,
      category: 'HIGH-VALUE CROPS',
      title: 'High-Value Crops',
      description:
        'References for high-value and commercially important crops used in commodity assessment, investment planning, and value-chain analysis.',
      color: 'emerald',
      items: [
        {
          name: 'Coffee',
          description:
            'Coffee industry, production, value-chain, and development references.',
          tag: 'COFFEE',
        },
        {
          name: 'Cacao',
          description:
            'Cacao industry, production, processing, and value-chain references.',
          tag: 'CACAO',
        },
        {
          name: 'Mango',
          description:
            'Commodity references covering mango production, markets, and value chains.',
          tag: 'MANGO',
        },
        {
          name: 'Vegetables',
          description:
            'References for vegetable production, industry development, and value chains.',
          tag: 'VEGETABLES',
        },
        {
          name: 'Onion',
          description:
            'Industry and production references supporting onion-related planning.',
          tag: 'ONION',
        },
        {
          name: 'Other HVCs',
          description:
            'Additional high-value and emerging commodities relevant to agricultural planning.',
          tag: 'HVC',
        },
      ],
    },

    {
      icon: Beef,
      category: 'LIVESTOCK & POULTRY',
      title: 'Livestock & Poultry',
      description:
        'Commodity references supporting livestock, poultry, production systems, industry development, and investment planning.',
      color: 'orange',
      items: [
        {
          name: 'Hog',
          description:
            'References for hog production, industry development, and value chains.',
          tag: 'HOG',
        },
        {
          name: 'Poultry',
          description:
            'References for broiler and layer production and industry development.',
          tag: 'POULTRY',
        },
        {
          name: 'Cattle & Carabao',
          description:
            'Livestock production, development, and value-chain references.',
          tag: 'LIVESTOCK',
        },
        {
          name: 'Dairy & Small Ruminants',
          description:
            'References for dairy, goat, sheep, and related livestock systems.',
          tag: 'DAIRY',
        },
      ],
    },

    {
      icon: Fish,
      category: 'FISHERIES & AQUACULTURE',
      title: 'Fisheries & Aquaculture',
      description:
        'References for fisheries and aquaculture commodities supporting production planning, investment analysis, and value-chain development.',
      color: 'blue',
      items: [
        {
          name: 'Milkfish',
          description:
            'Production, aquaculture, market, and value-chain references.',
          tag: 'MILKFISH',
        },
        {
          name: 'Tilapia',
          description:
            'Aquaculture production, industry, and value-chain references.',
          tag: 'TILAPIA',
        },
        {
          name: 'Shrimp',
          description:
            'Shrimp production, aquaculture, market, and industry references.',
          tag: 'SHRIMP',
        },
        {
          name: 'Seaweed',
          description:
            'Seaweed production, processing, industry, and value-chain references.',
          tag: 'SEAWEED',
        },
        {
          name: 'Shellfish',
          description:
            'Shellfish production, aquaculture, and industry references.',
          tag: 'SHELLFISH',
        },
      ],
    },
  ]

  const planningResources = [
    {
      icon: ClipboardList,
      category: 'VALUE CHAIN',
      title: 'Value Chain Analysis',
      description:
        'References supporting commodity value-chain assessment, identification of constraints, opportunities, and potential interventions.',
      color: 'purple',
      href: '#',
    },
    {
      icon: BarChart3,
      category: 'COMMODITY PLANNING',
      title: 'Commodity Prioritization',
      description:
        'Planning references for identifying priority commodities using production, market, socioeconomic, and other relevant indicators.',
      color: 'indigo',
      href: '#',
    },
    {
      icon: Factory,
      category: 'VALUE ADDITION',
      title: 'Processing & Value Addition',
      description:
        'References supporting processing, postharvest, value addition, enterprise development, and market linkage considerations.',
      color: 'teal',
      href: '#',
    },
    {
      icon: BookOpen,
      category: 'TECHNICAL REFERENCES',
      title: 'Production & Technical Guides',
      description:
        'Technical materials and production references that may support commodity assessment and investment planning.',
      color: 'gold',
      href: '#',
    },
  ]

  const officialResources = [
    {
      icon: Link2,
      title: 'DA Commodity Industry Roadmaps',
      description:
        'Official commodity industry roadmaps and related agriculture and fisheries planning references.',
      href: '#',
    },
    {
      icon: Link2,
      title: 'PCAF Commodity References',
      description:
        'Commodity roadmap and stakeholder-oriented references from the Philippine Council for Agriculture and Fisheries.',
      href: '#',
    },
    {
      icon: Link2,
      title: 'DA Publications & Statistics',
      description:
        'Official publications, development plans, commodity references, and related technical materials.',
      href: '#',
    },
  ]

  return (
    <main className="commodity-references">

      {/* HERO */}
      <section className="commodity-hero">
        <div className="commodity-hero-inner">

          <div className="commodity-hero-copy">
            <span className="commodity-eyebrow">
              COMMODITY KNOWLEDGE HUB
            </span>

            <h1>
              Commodity
              <br />
              References
            </h1>

            <p>
              Agriculture and fisheries commodity information,
              value-chain references, and technical resources
              supporting investment planning and commodity
              prioritization.
            </p>

            <div className="commodity-hero-tags">
              <span>AGRICULTURE</span>
              <span>FISHERIES</span>
              <span>VALUE CHAIN</span>
              <span>PLANNING</span>
            </div>
          </div>

          <div className="commodity-hero-visual">
            <div className="commodity-visual-orbit orbit-one" />
            <div className="commodity-visual-orbit orbit-two" />
            <div className="commodity-visual-orbit orbit-three" />

            <div className="commodity-visual-center">
              <Sprout size={46} strokeWidth={1.3} />
            </div>

            <div className="commodity-floating-card floating-card-one">
              <Wheat size={18} />
              <span>CROPS</span>
            </div>

            <div className="commodity-floating-card floating-card-two">
              <Fish size={18} />
              <span>FISHERIES</span>
            </div>

            <div className="commodity-floating-card floating-card-three">
              <Factory size={18} />
              <span>VALUE CHAIN</span>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="commodity-intro">
        <div className="commodity-intro-inner">

          <div className="commodity-intro-label">
            <span>01</span>
            <span>COMMODITY KNOWLEDGE</span>
          </div>

          <div className="commodity-intro-content">
            <h2>
              References for
              <br />
              commodity-based planning
            </h2>

            <p>
              Explore commodity-specific references that can support
              situation analysis, investment planning, value-chain
              assessment, and identification of potential interventions
              across agriculture and fisheries.
            </p>
          </div>

        </div>
      </section>

      {/* COMMODITY GROUPS */}
      <section className="commodity-section">
        <div className="commodity-section-header">
          <div>
            <span className="section-eyebrow">
              COMMODITY REFERENCES
            </span>

            <h2>
              Explore by Commodity
            </h2>
          </div>

          <p>
            Browse agriculture, high-value crop, livestock,
            poultry, fisheries, and aquaculture references.
          </p>
        </div>

        <div className="commodity-groups">

          {commodityGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                className={`commodity-group commodity-group-${group.color}`}
                key={group.title}
              >

                <div className="commodity-group-header">

                  <div className="commodity-group-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <span className="commodity-group-category">
                      {group.category}
                    </span>

                    <h3>
                      {group.title}
                    </h3>
                  </div>

                </div>

                <p className="commodity-group-description">
                  {group.description}
                </p>

                <div className="commodity-items">

                  {group.items.map((item) => (
                    <a
                      href="#"
                      className="commodity-item"
                      key={item.name}
                    >

                      <div className="commodity-item-main">

                        <h4>
                          {item.name}
                        </h4>

                        <p>
                          {item.description}
                        </p>

                      </div>

                      <div className="commodity-item-side">

                        <span>
                          {item.tag}
                        </span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={2}
                        />

                      </div>

                    </a>
                  ))}

                </div>

              </article>
            )
          })}

        </div>
      </section>

      {/* VALUE CHAIN & PLANNING */}
      <section className="commodity-planning">

        <div className="commodity-planning-header">

          <div>
            <span className="section-eyebrow">
              PLANNING RESOURCES
            </span>

            <h2>
              Value Chain & Commodity Planning
            </h2>
          </div>

          <p>
            Supporting references for analyzing commodity systems,
            identifying investment opportunities, and developing
            interventions across the value chain.
          </p>

        </div>

        <div className="commodity-planning-grid">

          {planningResources.map((resource) => {
            const Icon = resource.icon

            return (
              <a
                href={resource.href}
                className={`commodity-planning-card commodity-planning-${resource.color}`}
                key={resource.title}
              >

                <div className="commodity-planning-top">

                  <div className="commodity-planning-icon">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span>
                    {resource.category}
                  </span>

                </div>

                <h3>
                  {resource.title}
                </h3>

                <p>
                  {resource.description}
                </p>

                <div className="commodity-planning-link">
                  <span>
                    Explore Resource
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                  />
                </div>

              </a>
            )
          })}

        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="commodity-official">

        <div className="commodity-official-inner">

          <div className="commodity-official-heading">

            <span className="section-eyebrow">
              OFFICIAL REFERENCES
            </span>

            <h2>
              DA & Agriculture
              <br />
              Reference Sources
            </h2>

            <p>
              Access official commodity roadmaps, publications,
              statistics, and technical references that can support
              agricultural and fisheries planning.
            </p>

          </div>

          <div className="commodity-official-list">

            {officialResources.map((resource) => {
              const Icon = resource.icon

              return (
                <a
                  href={resource.href}
                  className="commodity-official-item"
                  key={resource.title}
                >

                  <div className="commodity-official-icon">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="commodity-official-content">

                    <h3>
                      {resource.title}
                    </h3>

                    <p>
                      {resource.description}
                    </p>

                  </div>

                  <ArrowUpRight
                    className="commodity-official-arrow"
                    size={16}
                    strokeWidth={2}
                  />

                </a>
              )
            })}

          </div>

        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="commodity-note">

        <div className="commodity-note-icon">
          <BookOpen
            size={19}
            strokeWidth={1.8}
          />
        </div>

        <div>
          <span>
            PLANNING REFERENCE NOTE
          </span>

          <p>
            Commodity references are provided as supporting materials
            for planning, assessment, and research. Users should verify
            applicable requirements, targets, statistics, and technical
            guidance against the latest official issuances, approved
            plans, and policies of the Department of Agriculture and
            relevant government agencies.
          </p>
        </div>

      </section>

    </main>
  )
}

export default CommodityReferences


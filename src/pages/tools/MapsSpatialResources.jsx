import {
  Map,
  Layers3,
  ShieldAlert,
  Globe2,
  Route,
  Database,
  ExternalLink,
  ArrowUpRight,
  Info,
} from 'lucide-react'

import './MapsSpatialResources.css'

function MapsSpatialResources() {
  const resources = [
    {
      icon: Map,
      category: 'PRDP MAPPING',
      title: 'Map Generator for Planners',
      description:
        'Create and explore planning maps using PRDP spatial layers including roads, facilities, production areas, hazards, and other reference data.',
      href: 'https://geomapping.da.gov.ph/prdp/map_generator',
      tag: 'PRDP MAP TOOL',
    },
    
    {
      icon: Database,
      category: 'SPATIAL DATA REFERENCE',
      title: 'PRDP Enhanced Geomapping System',
      description:
        'Use the PRDP Enhanced Geomapping System as a central entry point for mapping tools, web GIS applications, documents, and spatial planning resources.',
      href: 'https://geomapping.da.gov.ph/prdp/',
      tag: 'SPATIAL PORTAL',
    },
    
    {
      icon: ShieldAlert,
      category: 'HAZARD MAPPING',
      title: 'HazardHunterPH',
      description:
        'Generate indicative hazard assessments for a selected location covering seismic, volcanic, and hydrometeorological hazards and selected critical facilities.',
      href: 'https://hazardhunter.georisk.gov.ph/map',
      tag: 'HAZARD MAP',
    },
    {
      icon: Globe2,
      category: 'NATIONAL SPATIAL DATA',
      title: 'Geoportal Philippines',
      description:
        'Access a national geospatial information portal with map applications, searchable layers, hazards, and spatial data from participating government agencies.',
      href: 'https://www.geoportal.gov.ph/',
      tag: 'GEO-PORTAL',
    },
    {
      icon: Route,
      category: 'PRDP SPATIAL MONITORING',
      title: 'PRDP Environmental & Safeguard Dashboard',
      description:
        'View spatial screening information for PRDP subprojects, including hazards, SAFDZ, and intersections with Key Biodiversity Areas and Protected Areas.',
      href: 'https://geomapping.da.gov.ph/prdp/ses_dashboard',
      tag: 'SES DASHBOARD',
    },
    
  ]

  return (
    <section className="maps-spatial">
      <div className="maps-spatial-hero">
        <div className="maps-spatial-hero-content">
          <span className="section-eyebrow">KNOWLEDGE & REFERENCES</span>
          <h1>Maps & Spatial Resources</h1>
          <p>
            Mapping platforms, GIS applications, hazard layers, and spatial
            data resources that help planners understand location, context,
            constraints, and opportunities for agricultural and rural
            development.
          </p>

          <a
            href="#spatial-resources"
            className="maps-spatial-primary"
          >
            Explore Spatial Tools
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </div>

        <div className="maps-spatial-hero-visual">
          <div className="map-window">
            <div className="map-window-top">
              <span>SPATIAL PLANNING</span>
              <Layers3 size={17} strokeWidth={1.7} />
            </div>

            <div className="map-grid">
              <span className="map-road road-a"></span>
              <span className="map-road road-b"></span>
              <span className="map-road road-c"></span>
              <span className="map-boundary boundary-a"></span>
              <span className="map-point point-a"></span>
              <span className="map-point point-b"></span>
              <span className="map-point point-c"></span>
              <span className="map-area"></span>
            </div>

            <div className="map-window-bottom">
              <span>LAYERS</span>
              <span>HAZARDS</span>
              <span>FACILITIES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="maps-spatial-intro">
        <div>
          <span className="section-eyebrow">SELECTED SPATIAL RESOURCES</span>
          <h2>See the plan in its place</h2>
        </div>

        <p>
          Use these platforms to visualize project locations, environmental
          and hazard conditions, agricultural areas, infrastructure, and
          other spatial information relevant to planning.
        </p>
      </div>

      <div className="maps-spatial-grid" id="spatial-resources">
        {resources.map((resource) => {
          const Icon = resource.icon

          return (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-spatial-card"
            >
              <div className="maps-spatial-card-top">
                <div className="maps-spatial-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <span className="maps-spatial-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </div>

              <span className="maps-spatial-category">
                {resource.category}
              </span>

              <h3>{resource.title}</h3>
              <p>{resource.description}</p>

              <div className="maps-spatial-footer">
                <span>{resource.tag}</span>
                <ExternalLink size={12} strokeWidth={1.8} />
              </div>
            </a>
          )
        })}
      </div>

      <div className="maps-spatial-note">
        <div className="maps-spatial-note-icon">
          <Info size={19} strokeWidth={1.8} />
        </div>

        <div>
          <strong>Spatial information should be interpreted with its source and purpose in mind.</strong>
          <span>
            Map layers may have different scales, dates, methods, coordinate
            systems, and intended uses. Always check the originating agency,
            metadata, and applicable limitations before using spatial data for
            detailed site assessment or official decisions.
          </span>
        </div>
      </div>
    </section>
  )
}

export default MapsSpatialResources

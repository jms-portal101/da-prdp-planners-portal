import React from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  BarChart3,
  CloudSun,
  Fish,
  Sprout,
  ShieldAlert,
  Database,
  LayoutDashboard,
  MapPinned,
  Wheat,
  ArrowUpRight,
} from 'lucide-react';
import './DecisionTools.css';

function DecisionTools() {
  const tools = [
    {
      icon: Sprout,
      category: "SUITABILITY & AGRICULTURE",
      title: "eVSA",
      description:
        "Explore vulnerability and suitability information to support commodity prioritization and agricultural planning.",
      tag: "VSA",
      color: "green",
      href: "/tools/evsa",
      internal: true,
    },
    {
      icon: CloudSun,
      category: "CLIMATE & RESILIENCE",
      title: "CRVA",
      description:
        "Assess climate-related hazards, sensitivity, adaptive capacity, and vulnerability for agricultural planning.",
      tag: "CLIMATE",
      color: "blue",
      href: "/tools/crva",
      internal: true,
    },
    {
      icon: Fish,
      category: "FISHERIES",
      title: "FishVool",
      description:
        "Access fisheries-related information and spatial data to support planning and investment decisions.",
      tag: "FISHERIES",
      color: "cyan",
      href: "/fishvool",
    },
    {
      icon: Map,
      category: "AGRICULTURAL MAPPING",
      title: "GeoAgri",
      description:
        "Explore geographic and agricultural information for spatial analysis and investment planning.",
      tag: "MAPPING",
      color: "emerald",
      href: "/geoagri",
    },
    {
      icon: ShieldAlert,
      category: "CLIMATE & HAZARDS",
      title: "NCCAG",
      description:
        "Access climate and hazard-related information to help identify risks affecting agricultural areas.",
      tag: "HAZARDS",
      color: "purple",
      href: "/nccag",
    },
    {
      icon: ShieldAlert,
      category: "HAZARD INFORMATION",
      title: "Hazard Hunter",
      description:
        "Explore hazard information and geographic risk layers for planning and decision support.",
      tag: "HAZARDS",
      color: "red",
      href: "/hazard-hunter",
    },
    {
      icon: Database,
      category: "PROJECT MANAGEMENT",
      title: "PRDP MIS",
      description:
        "Access project and management information supporting PRDP monitoring and planning activities.",
      tag: "MIS",
      color: "indigo",
      href: "/prdp-mis",
    },
    {
      icon: LayoutDashboard,
      category: "MONITORING",
      title: "SES Dashboard",
      description:
        "Explore monitoring information and indicators through an interactive dashboard environment.",
      tag: "DASHBOARD",
      color: "teal",
      href: "/ses-dashboard",
    },
  ];

  const additionalTools = [
    {
      icon: BarChart3,
      title: 'I-PLAN Investment Dashboards',
      description:
        'Interactive dashboards for agricultural investment planning and portfolio analysis.',
      color: 'green',
      href: 'https://lookerstudio.google.com/reporting/711f028b-2166-44de-b2f1-84b2c70bf6ff',
    },
    {
      icon: MapPinned,
      title: 'Map Generator for Planners',
      description:
        'Generate maps and spatial outputs that support planning, analysis, and presentation.',
      color: 'blue',
      href: 'https://geomapping.da.gov.ph/prdp/map_generator',
    },
    {
      icon: Wheat,
      title: 'Rice VCA Encoding System',
      description:
        'Access the encoding system supporting rice value chain analysis and planning.',
      color: 'gold',
      href: 'https://prdp-vca.da.gov.ph/login',
    },
  ];

  return (
    <section className="decision-tools" id="tools">
      <div className="decision-tools-header">
        <div>
          <span className="section-eyebrow">DECISION SUPPORT</span>
          <h2>Planning & Decision Tools</h2>
        </div>
        <p>
          Access spatial, agricultural, climate, infrastructure, and investment
          tools designed to support evidence-based planning and decision-making.
        </p>
      </div>

      <div className="decision-tools-grid">
        {tools.map((tool) => {
          const Icon = tool.icon;

          const linkProps = tool.internal
            ? { to: tool.href }
            : {
                href: tool.href,
                target: '_blank',
                rel: 'noopener noreferrer',
              };

          const CardComponent = tool.internal ? Link : 'a';

          return (
            <CardComponent
              {...linkProps}
              className={`decision-tool-card decision-tool-${tool.color}`}
              key={tool.title}
            >
              <div className="decision-tool-top">
                <div className="decision-tool-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="decision-tool-category">
                  {tool.category}
                </span>
              </div>

              <div className="decision-tool-content">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </div>

              <div className="decision-tool-bottom">
                <span>{tool.tag}</span>
                <span className="decision-tool-arrow">
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </span>
              </div>
            </CardComponent>
          );
        })}
      </div>

      <div className="decision-tools-additional">
        <div className="decision-tools-additional-header">
          <div>
            <span>ADDITIONAL PLANNING TOOLS</span>
            <h3>More Tools for Planners</h3>
          </div>
          <p>
            Additional systems and dashboards that support planning, mapping,
            investment analysis, and value chain development.
          </p>
        </div>

        <div className="decision-tools-additional-grid">
          {additionalTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`additional-tool additional-tool-${tool.color}`}
                key={tool.title}
              >
                <div className="additional-tool-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>

                <div className="additional-tool-content">
                  <h4>{tool.title}</h4>
                  <p>{tool.description}</p>
                </div>

                <ArrowUpRight
                  className="additional-tool-arrow"
                  size={18}
                  strokeWidth={2.2}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DecisionTools;
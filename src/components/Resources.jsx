import React from 'react';
// Ginagamit ang Link mula sa react-router-dom para sa internal links
// Kung hindi ka gumagamit ng React Router, palitan ang Link ng 'a' tag.
import { Link } from 'react-router-dom'; 

import {
  BookOpen,
  FileText,
  Map,
  Sprout,
  ClipboardList,
  GraduationCap,
  ExternalLink,
  ArrowUpRight,
  Download,
} from 'lucide-react'

import './Resources.css'

function Resources() {
  const resources = [
    {
      icon: GraduationCap,
      category: "ONLINE COURSEWORK",
      title: "Investment Planning Coursework",
      description:
        "Access cluster-based coursework and learning materials for Investment Planning Tools through Google Classroom.",
      tag: "COURSEWORK",
      color: "green",
      href: "/coursework",
      internal: true,
      featured: true,
    },
    {
      icon: BookOpen,
      category: "GUIDELINES & MANUALS",
      title: "Planning Guidelines",
      description:
        "Guidelines, frameworks, and reference materials supporting agricultural and investment planning.",
      tag: "GUIDELINES",
      color: "blue",
      href: "/planning-guidelines",
      internal: true,
    },
    {
      icon: FileText,
      category: "REPORTS & STUDIES",
      title: "Reports & Studies",
      description:
        "Technical reports, assessments, studies, and analytical documents relevant to planning.",
      tag: "REPORTS",
      color: "purple",
      href: "/reports-studies",
      internal: true,
    },
    {
      icon: Map,
      category: "MAPS & SPATIAL DATA",
      title: "Maps & Spatial Resources",
      description:
        "Maps, geographic information, and spatial references supporting evidence-based planning.",
      tag: "SPATIAL",
      color: "teal",
      href: "/maps-spatial",
      internal: true,
    },
    {
      icon: Sprout,
      category: "COMMODITY REFERENCES",
      title: "Commodity References",
      description:
        "Commodity information, value-chain references, and technical resources supporting agricultural and fisheries planning.",
      tag: "COMMODITIES",
      color: "green",
      href: "/commodity-references",
      internal: true,
    },
    {
      icon: ClipboardList,
      category: "PRDP RESOURCES",
      title: "PRDP Documents",
      description:
        "Project-related references, planning materials, reports, and other PRDP resources.",
      tag: "PRDP",
      color: "indigo",
      href: "/prdp-documents",
    },
  ];

  return (
    <section className="resources" id="resources">
      {/* =========================================
          HEADER
          ========================================= */}
      <div className="resources-header">
        <div>
          <span className="section-eyebrow">
            KNOWLEDGE & REFERENCES
          </span>
          <h2>Resources for Planners</h2>
        </div>
        <p>
          Browse planning references, technical documents,
          agricultural information, spatial resources,
          coursework, and other materials supporting
          evidence-based decision-making.
        </p>
      </div>

      {/* =========================================
          FEATURED RESOURCE (HERO PANEL)
          ========================================= */}
      <div className="resources-featured">
        <div className="resources-featured-content">
          <div className="resources-featured-label">
            <GraduationCap size={16} strokeWidth={2.2} />
            <span>INVESTMENT PLANNING COURSEWORK</span>
          </div>

          <h3>
            Learn the tools,
            <br />
            strengthen the plan.
          </h3>

          <p>
            Access the Investment Planning Tools coursework
            assigned to the different PRDP clusters and NPCO
            through Google Classroom.
          </p>

          <a
            href="/coursework"
            className="resources-featured-button"
          >
            Open Coursework
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
        </div>

        {/* MOCKUP VISUAL */}
        <div className="resources-featured-visual">
          <div className="resource-document-stack">
            <div className="resource-document document-back">
              <span></span><span></span><span></span>
            </div>

            <div className="resource-document document-middle">
              <span></span><span></span><span></span>
            </div>

            <div className="resource-document document-front">
              <div className="document-icon">
                <GraduationCap size={28} strokeWidth={1.8} />
              </div>

              <div className="document-lines">
                <span className="document-line-large"></span>
                <span></span>
                <span></span>
                <span className="document-line-short"></span>
              </div>

              <div className="document-course-label">
                <BookOpen size={12} strokeWidth={1.8} />
                Google Classroom
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          RESOURCE CATEGORIES (GRID)
          ========================================= */}
      <div
        className="resources-section-heading"
        id="resource-categories"
      >
        <div>
          <span>EXPLORE RESOURCES</span>
          <h3>Knowledge & Reference Materials</h3>
        </div>
        <p>
          organized resources for coursework, planning,
          analysis, mapping, and project development.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((resource) => {
          const Icon = resource.icon;

          const linkProps = resource.internal
            ? { to: resource.href }
            : { href: resource.href, target: '_blank', rel: 'noopener noreferrer' };

          const CardComponent = resource.internal ? Link : 'a';

          return (
            <CardComponent
              {...linkProps}
              className={`resource-card resource-${resource.color} ${
                resource.featured ? 'resource-card-featured' : ''
              }`}
              key={resource.title}
            >
              {/* CARD TOP */}
              <div className="resource-card-top">
                <div className="resource-card-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <span className="resource-card-arrow">
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </span>
              </div>

              {/* CATEGORY */}
              <span className="resource-card-category">
                {resource.category}
              </span>

              {/* CONTENT */}
              <div className="resource-card-content">
                <h4>{resource.title}</h4>
                <p>{resource.description}</p>
              </div>

              {/* FOOTER */}
              <div className="resource-card-footer">
                <span>{resource.tag}</span>
                <ExternalLink
                  size={12}
                  strokeWidth={2}
                />
              </div>
            </CardComponent>
          );
        })}
      </div>

    </section>
  );
}

export default Resources;
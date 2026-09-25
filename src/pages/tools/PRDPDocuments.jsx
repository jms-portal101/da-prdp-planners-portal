import {
  BookOpen,
  ClipboardList,
  ShieldCheck,
  FileCheck2,
  GraduationCap,
  Search,
  ArrowUpRight,
  FileText,
} from 'lucide-react'
import './PRDPDocuments.css'

const documentGroups = [
  {
    number: '01',
    icon: ClipboardList,
    category: 'OPERATIONS & IMPLEMENTATION',
    title: 'Operations & Implementation',
    description: 'Core manuals and implementation guidance for PRDP components and project delivery.',
    color: 'green',
    items: ['PRDP Operations Manual', 'I-BUILD operations and implementation references', 'I-REAP operations and implementation references', 'I-PLAN operations references', 'Implementation guidelines'],
  },
  {
    number: '02',
    icon: BookOpen,
    category: 'PLANNING & INVESTMENT',
    title: 'Planning & Investment',
    description: 'References for investment planning, prioritization, and commodity or value-chain analysis.',
    color: 'blue',
    items: ['Investment planning guidelines', 'PCIP-related references', 'Regional investment planning references', 'Commodity and value-chain planning references'],
  },
  {
    number: '03',
    icon: FileCheck2,
    category: 'POLICIES & MEMORANDA',
    title: 'Policies & Memoranda',
    description: 'Policy issuances and memoranda relevant to PRDP planning and implementation.',
    color: 'amber',
    items: ['Department memoranda', 'PRDP memoranda', 'Administrative orders', 'Policy issuances'],
  },
  {
    number: '04',
    icon: ShieldCheck,
    category: 'TECHNICAL & PROCEDURAL',
    title: 'Technical & Procedural References',
    description: 'Technical standards and procedures used across project preparation and delivery.',
    color: 'teal',
    items: ['Procurement references', 'Environmental and social safeguards', 'Financial management', 'Monitoring and evaluation', 'GIS and geomapping references'],
  },
  {
    number: '05',
    icon: GraduationCap,
    category: 'KNOWLEDGE & LEARNING',
    title: 'Knowledge & Learning Materials',
    description: 'Learning resources that support consistent practice, capacity building, and knowledge sharing.',
    color: 'violet',
    items: ['Training materials', 'Workshop presentations', 'Technical guides', 'Frequently used reference materials'],
  },
]

function PRDPDocuments() {
  return (
    <main className="prdp-documents">
      <section className="prdp-documents-hero">
        <div className="prdp-documents-hero-inner">
          <div className="prdp-documents-hero-copy">
            <span className="prdp-eyebrow">PROJECT REFERENCE LIBRARY</span>
            <h1>PRDP<br />Documents</h1>
            <p>Manuals, guidelines, policy issuances, and learning materials supporting PRDP planning and implementation.</p>
            <div className="prdp-hero-tags"><span>OPERATIONS</span><span>PLANNING</span><span>POLICY</span><span>LEARNING</span></div>
          </div>
          <div className="prdp-hero-art" aria-hidden="true">
            <div className="prdp-art-ring ring-a" /><div className="prdp-art-ring ring-b" />
            <div className="prdp-art-center"><FileText size={42} strokeWidth={1.35} /></div>
            <div className="prdp-art-label label-a"><ClipboardList size={17} /><span>GUIDANCE</span></div>
            <div className="prdp-art-label label-b"><ShieldCheck size={17} /><span>STANDARDS</span></div>
            <div className="prdp-art-label label-c"><BookOpen size={17} /><span>KNOWLEDGE</span></div>
          </div>
        </div>
      </section>

      <section className="prdp-documents-intro">
        <div className="prdp-intro-inner">
          <div className="prdp-intro-index"><strong>01</strong><span>DOCUMENT COLLECTION</span></div>
          <div><h2>Find references<br />by document type</h2><p>Browse the collections below to identify the manuals, policies, and technical materials relevant to your work. Document listings are organized by subject for easy reference.</p></div>
        </div>
      </section>

      <section className="prdp-collections">
        <div className="prdp-section-heading">
          <div><span className="prdp-eyebrow">DOCUMENT COLLECTIONS</span><h2>Browse the library</h2></div>
          <p>Five collections cover the key operational, planning, policy, technical, and learning references used across PRDP.</p>
        </div>
        <div className="prdp-collection-grid">
          {documentGroups.map((group) => {
            const Icon = group.icon
            return <article className={`prdp-collection prdp-${group.color}`} key={group.number}>
              <div className="prdp-card-top"><div className="prdp-card-icon"><Icon size={21} strokeWidth={1.7} /></div><span className="prdp-card-number">{group.number}</span></div>
              <span className="prdp-card-category">{group.category}</span>
              <h3>{group.title}</h3>
              <p className="prdp-card-description">{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}><span className="prdp-list-mark" aria-hidden="true" />{item}</li>)}</ul>
              <div className="prdp-collection-status"><span className="prdp-status-dot" />REFERENCE COLLECTION</div>
            </article>
          })}
        </div>
      </section>

      <section className="prdp-library-note">
        <div className="prdp-note-icon"><Search size={20} strokeWidth={1.8} /></div>
        <div><span>USING THIS LIBRARY</span><h2>Check the latest applicable issuance</h2><p>This page outlines the document collections for the portal. Individual files and verified source links can be added to each collection as they become available.</p></div>
        <ArrowUpRight className="prdp-note-arrow" size={19} />
      </section>

      <section className="prdp-document-disclaimer">
        <BookOpen size={18} strokeWidth={1.8} />
        <p><strong>Document reference note</strong><br />Always verify the latest version, amendments, and any superseding memorandum or issuance before using a document for official planning or implementation.</p>
      </section>
    </main>
  )
}

export default PRDPDocuments

import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowUpRight, BookOpen, Search } from 'lucide-react'
import './RafipLibrary.css'

export const RAFIP_LIBRARY = [
  {
    code: 'CAR',
    name: 'Cordillera Administrative Region',
    slug: 'car',
    edition: '2026',
    cover: '/images/rafip-library/car.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/a2d491661c.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1xduzQvRMZwrY2jA7WYWhR2rEmxSy4xPV',
  },
  {
    code: 'Region I',
    name: 'Ilocos Region',
    slug: 'region-i',
    edition: '2026',
    cover: '/images/rafip-library/region-i.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/804745dd14.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1c6WeN9Aw61Vupnc5nPnySxWPcrfVdaNS',
  },
  {
    code: 'Region II',
    name: 'Cagayan Valley',
    slug: 'region-ii',
    edition: '2026',
    cover: '/images/rafip-library/region-ii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/9f0d9e85b7.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=18vupRL9j-iRdgWtgctOAJMWAK1AG3eBW',
  },
  {
    code: 'Region III',
    name: 'Central Luzon',
    slug: 'region-iii',
    edition: '2026',
    cover: '/images/rafip-library/region-iii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/9c22d653d4.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=11drDours46dDvDg3yJj4fYsw--2BxcNA',
  },
  {
    code: 'Region IV-A',
    name: 'CALABARZON',
    slug: 'region-iv-a',
    edition: '2026',
    cover: '/images/rafip-library/region-iv-a.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/e86b589dc3.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1oz_nYpDpHZuPYLx25QXbNYZYfRNOrUUI',
  },
  {
    code: 'Region IV-B',
    name: 'MIMAROPA',
    slug: 'region-iv-b',
    edition: '2026',
    cover: '/images/rafip-library/region-iv-b.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/b8ce6424e8.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=128-iEAIwQsH7NEwAaLEu2Dp-hvWIbOXK',
  },
  {
    code: 'Region V',
    name: 'Bicol Region',
    slug: 'region-v',
    edition: '2026',
    cover: '/images/rafip-library/region-v.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/f7dc544b9e.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1zwKWNogbNBbqHhWHrPutwCTgDXH9Nvd8',
  },
  {
    code: 'Region VI',
    name: 'Western Visayas',
    slug: 'region-vi',
    edition: '2026',
    cover: '/images/rafip-library/region-vi.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/03591fc5b6.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1yXBvkO0ev76SBAU2mGqOUXbZ2Bh2ZnjJ',
  },
  {
    code: 'Region VII',
    name: 'Central Visayas',
    slug: 'region-vii',
    edition: '2026',
    cover: '/images/rafip-library/region-vii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/ff3128d0fb.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1WaOvqsQmOTKI924TiBauiHm0ofCwGMJQ',
  },
  {
    code: 'Region VIII',
    name: 'Eastern Visayas',
    slug: 'region-viii',
    edition: '2026',
    cover: '/images/rafip-library/region-viii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/16aa3c429b.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1Sx9OwYK86SLhhBFe3bkw9Ak48gxJZlKg',
  },
  {
    code: 'NIR',
    name: 'Negros Island Region',
    slug: 'nir',
    edition: '2026',
    cover: '/images/rafip-library/nir.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/5bfd5bfa71.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=15NDNsg7NQNEQwjBiYdGafuRY_ShbRDNY',
  },
  {
    code: 'Region IX',
    name: 'Zamboanga Peninsula',
    slug: 'region-ix',
    edition: '2026',
    cover: '/images/rafip-library/region-ix.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/273fe675fb.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1wk8pjw5d5ANTEqVHPCGvDgs0OwW0EBEo',
  },
  {
    code: 'Region X',
    name: 'Northern Mindanao',
    slug: 'region-x',
    edition: '2026',
    cover: '/images/rafip-library/region-x.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/f2fa6a0788.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=10xNoNz7XuDdSOUjwctun-OEJ_LBoI8qZ',
  },
  {
    code: 'Region XI',
    name: 'Davao Region',
    slug: 'region-xi',
    edition: '2026',
    cover: '/images/rafip-library/region-xi.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/93f0ef8282.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1W6QIvhfgAZmeYiMDgg1qo0GPjFoq1bwC',
  },
  {
    code: 'Region XII',
    name: 'SOCCSKSARGEN',
    slug: 'region-xii',
    edition: '2026',
    cover: '/images/rafip-library/region-xii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/f77b363939.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1xM5Qretaz4WptTbG17aqZzL_F8c2f-pf',
  },
  {
    code: 'Region XIII',
    name: 'Caraga',
    slug: 'region-xiii',
    edition: '2026',
    cover: '/images/rafip-library/region-xiii.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/9d026474f5.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1RdXGeH-V6Dd_K4dvtFITT-dqHZxQugcD',
  },
  {
    code: 'BARMM',
    name: 'Bangsamoro Autonomous Region in Muslim Mindanao',
    slug: 'barmm',
    edition: '2026',
    cover: '/images/rafip-library/barmm.webp',
    flipbookUrl: 'https://heyzine.com/flip-book/13e9e61cc9.html',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1V7eek1eWF6UEeQJjUcUKcj51yMC4BVIp',
  },
]

export default function RafipLibrary() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRegions = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return RAFIP_LIBRARY

    return RAFIP_LIBRARY.filter(region =>
      `${region.code} ${region.name}`.toLowerCase().includes(term)
    )
  }, [searchTerm])

  return (
    <main className="rafip-library-page">
      <section className="rafip-library-hero">
        <div className="rafip-library-hero-pattern rafip-library-hero-pattern-left" />
        <div className="rafip-library-hero-pattern rafip-library-hero-pattern-right" />

        <div className="rafip-library-container">
          <div className="rafip-library-navigation">
            <a
              href="/"
              className="rafip-library-back"
              aria-label="Back to RAFIP Dashboard"
            >
              <ArrowLeft size={17} />
              Back to RAFIP Dashboard
            </a>

            <a
              href="/regional-portfolio"
              className="rafip-library-portfolio-link"
              aria-label="Go to Regional Portfolio"
            >
              Regional Portfolio
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="rafip-library-hero-copy">
            <span className="rafip-library-eyebrow">
              DEPARTMENT OF AGRICULTURE
            </span>
            <h1>
              RAFIP
              <span>Regional Library</span>
            </h1>
            <p>
              Explore the Regional Agriculture and Fisheries Investment
              Portfolio publications for each region of the Philippines.
            </p>

            <a
              href="/regional-portfolio"
              className="rafip-library-regional-button"
            >
              <ArrowLeft size={17} />
              Back to Regional Portfolio Dashboard
            </a>
          </div>

          <div className="rafip-library-hero-badge">
            <BookOpen size={24} />
            <div>
              <strong>Regional RAFIP</strong>
              <span>Investment Portfolio Collection</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rafip-library-content">
        <div className="rafip-library-container">
          <div className="rafip-library-toolbar">
            <div>
              <span className="rafip-library-section-label">
                RAFIP COLLECTION
              </span>
              <h2>
                Regional Agriculture &amp; Fisheries Investment Portfolios
              </h2>
              <p>Select a regional publication to open its RAFIP flipbook.</p>
            </div>

            <label className="rafip-library-search">
              <Search size={18} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search region..."
                aria-label="Search RAFIP region"
              />
            </label>
          </div>

          <div className="rafip-library-grid">
            {filteredRegions.map((region) => (
              <article className="rafip-library-card" key={region.code}>
                <a
                  href={`/rafip-library/${region.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rafip-library-cover-wrap"
                  aria-label={`Open ${region.name} RAFIP`}
                >
                  <img
                    src={region.cover}
                    alt={`${region.name} RAFIP front cover`}
                    className="rafip-library-cover"
                    loading="lazy"
                  />

                  <div className="rafip-library-cover-overlay">
                    <span className="rafip-library-cover-link">
                      <BookOpen size={18} />
                      View RAFIP
                    </span>
                  </div>
                </a>

                <div className="rafip-library-card-body">
                  <div className="rafip-library-card-meta">
                    <span>{region.code}</span>
                    <strong>{region.edition} EDITION</strong>
                  </div>

                  <h3>{region.name}</h3>
                </div>
              </article>
            ))}
          </div>

          {filteredRegions.length === 0 && (
            <div className="rafip-library-empty">
              <Search size={28} />
              <h3>No RAFIP publication found</h3>
              <p>Try another region name or code.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

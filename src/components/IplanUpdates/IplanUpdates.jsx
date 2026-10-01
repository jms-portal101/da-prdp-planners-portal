import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
} from 'lucide-react';


const IPLAN_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2T4uhWDCcmBFKxCrWoH0ygtOgeCITwTJy04Hsfco0e1oOID3MBpp9flQK8QG0GPCm1yvA1684mitM/pub?output=csv';


// =========================================================
// CSV PARSER
// Handles commas inside quoted text
// =========================================================

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      row.push(value.trim());
      value = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }

      row.push(value.trim());

      if (row.some((item) => item !== '')) {
        rows.push(row);
      }

      row = [];
      value = '';
    } else {
      value += char;
    }
  }

  if (value || row.length > 0) {
    row.push(value.trim());

    if (row.some((item) => item !== '')) {
      rows.push(row);
    }
  }

  return rows;
}


// =========================================================
// CONVERT CSV TO OBJECTS
// =========================================================

function csvToObjects(csvText) {
  const rows = parseCSV(csvText);

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) =>
    header.trim().toLowerCase()
  );

  return rows.slice(1).map((row) => {
    const post = {};

    headers.forEach((header, index) => {
      post[header] = row[index] || '';
    });

    return {
      id:
        post['facebook url'] ||
        `${post['date']}-${post['title']}`,

      date: post['date'],
      category: post['category'],
      title: post['title'],
      excerpt: post['excerpt'],
      image: post['image url'],
      facebookUrl: post['facebook url'],
      published: post['published'],
    };
  });
}


// =========================================================
// COMPONENT
// =========================================================

function IplanUpdates() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(IPLAN_SHEET_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load Google Sheet.');
        }

        return response.text();
      })
      .then((csvText) => {
        const data = csvToObjects(csvText);

        const publishedPosts = data
          .filter((post) => {
            const publishedValue = String(post.published || "")
              .trim()
              .toLowerCase();

            return (
              publishedValue === "true" ||
              publishedValue === "yes" ||
              publishedValue === "published"
            );
          })
          .filter((post) => {
            return (
              String(post.title || "").trim() &&
              String(post.facebookUrl || "").trim()
            );
          })
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

        setPosts(publishedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          'iPLAN Google Sheet error:',
          err
        );

        setError(true);
        setLoading(false);
      });
  }, []);


  // =======================================================
  // DATE FORMAT
  // =======================================================

  const formatDate = (date) => {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }
    );
  };


  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <section className="iplan-updates-section">
        <div className="iplan-updates-container">

          <div className="iplan-updates-header">
            <div className="iplan-header-left">

              <span className="iplan-section-label">
                iPLAN
              </span>

              <h2>
                Latest Updates
              </h2>

              <p>
                Recent planning, investment, and
                value chain development updates
                from DA-PRDP.
              </p>

            </div>
          </div>

          <div className="iplan-loading">
            Loading iPLAN updates...
          </div>

        </div>
      </section>
    );
  }


  // =======================================================
  // ERROR
  // =======================================================

  if (error) {
    return (
      <section className="iplan-updates-section">
        <div className="iplan-updates-container">

          <div className="iplan-updates-header">
            <div className="iplan-header-left">

              <span className="iplan-section-label">
                iPLAN
              </span>

              <h2>
                Latest Updates
              </h2>

              <p>
                Recent planning, investment, and
                value chain development updates
                from DA-PRDP.
              </p>

            </div>
          </div>

          <div className="iplan-empty-state">
            <p>
              Unable to load iPLAN updates at
              the moment.
            </p>
          </div>

        </div>
      </section>
    );
  }


  // =======================================================
  // MAIN UI
  // =======================================================

  return (
    <section className="iplan-updates-section">

      <div className="iplan-updates-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="iplan-updates-header">

          <div className="iplan-header-left">

            <span className="iplan-section-label">
              iPLAN
            </span>

            <h2>
              Latest Updates
            </h2>

            <p>
              Recent planning, investment, and
              value chain development updates
              from DA-PRDP.
            </p>

          </div>


          <a
            href="https://www.facebook.com/PRDPNPCO"
            target="_blank"
            rel="noopener noreferrer"
            className="iplan-facebook-link"
          >

            <span className="facebook-mark">
              f
            </span>

            <span>
              Visit Facebook Page
            </span>

            <ArrowUpRight size={16} />

          </a>

        </div>


        {/* =================================================
            POSTS
        ================================================= */}

        {posts.length > 0 ? (

          <div className="iplan-posts-grid">

            {posts.map((post) => (

              <article
                className="iplan-post-card"
                key={post.id}
              >

                {/* IMAGE */}

                <div className="iplan-post-image-wrapper">

                  {post.image ? (

                    <img
                      src={post.image}
                      alt={post.title}
                      className="iplan-post-image"
                      loading="lazy"
                    />

                  ) : (

                    <div className="iplan-image-placeholder">

                      <span>
                        iPLAN
                      </span>

                    </div>

                  )}


                  {post.category && (

                    <span className="iplan-post-category">
                      {post.category}
                    </span>

                  )}

                </div>


                {/* CONTENT */}

                <div className="iplan-post-content">

                  <div className="iplan-post-date">

                    <CalendarDays size={14} />

                    <span>
                      {formatDate(post.date)}
                    </span>

                  </div>


                  <h3>
                    {post.title}
                  </h3>


                  {post.excerpt && (

                    <p>
                      {post.excerpt}
                    </p>

                  )}


                  <a
                    href={post.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="iplan-read-more"
                  >

                    <span>
                      Read on Facebook
                    </span>

                    <ArrowUpRight size={16} />

                  </a>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="iplan-empty-state">

            <p>
              No published iPLAN updates
              available at the moment.
            </p>

          </div>

        )}


        {/* =================================================
            VIEW ALL
        ================================================= */}

        {posts.length > 0 && (

          <div className="iplan-view-all-wrapper">

            <a
              href="https://www.facebook.com/PRDPNPCO"
              target="_blank"
              rel="noopener noreferrer"
              className="iplan-view-all"
            >

              <span>
                View more iPLAN updates
              </span>

              <ChevronRight size={18} />

            </a>

          </div>

        )}

      </div>

    </section>
  );
}

export default IplanUpdates;
// src/components/BlogSection/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import { FaMedium } from 'react-icons/fa';
import './BlogSection.css';

function BlogSection() {
  // Statische Blog-Posts (falls Medium-API nicht verwendet wird)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Eine Einführung in Data Engineering mit Python",
      description: "Entdecke die grundlegenden Konzepte und Tools für Data Engineering mit Python.",
      date: "15. März 2024",
      url: "https://medium.com/@yourusername/intro-to-data-engineering-with-python",
      imageUrl: "/assets/images/blog/data-engineering-python.jpg"
    },
    {
      id: 2,
      title: "ETL vs. ELT: Wann ist welcher Ansatz besser?",
      description: "Ein Vergleich der beiden Data Processing-Paradigmen und wann man welches verwenden sollte.",
      date: "2. Februar 2024",
      url: "https://medium.com/@yourusername/etl-vs-elt",
      imageUrl: "/assets/images/blog/etl-vs-elt.jpg"
    },
    {
      id: 3,
      title: "Datenmodellierung Best Practices für Data Warehouses",
      description: "Lernen Sie, wie Sie effektive Datenmodelle für Ihre Data Warehouse-Implementierungen erstellen.",
      date: "5. Januar 2024",
      url: "https://medium.com/@yourusername/data-modeling-best-practices",
      imageUrl: "/assets/images/blog/data-modeling.jpg"
    }
  ]);
  
  // Alternativ: Medium-API für dynamische Posts
  // Ich kommentiere den Code aus, da er eine API-Integration benötigt
  /*
  useEffect(() => {
    // Funktion zum Abrufen der Medium-Artikel
    const fetchMediumPosts = async () => {
      try {
        // Medium bietet kein offizielles API, aber RSS-Feed kann verwendet werden
        // Du musst einen Proxy-Server verwenden oder eine Third-Party-API
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername');
        const data = await response.json();
        
        if (data.status === 'ok') {
          const formattedPosts = data.items.map((item, index) => ({
            id: index + 1,
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...',
            date: new Date(item.pubDate).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            url: item.link,
            imageUrl: item.thumbnail || '/assets/images/blog/default.jpg'
          }));
          
          setBlogPosts(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };
    
    fetchMediumPosts();
  }, []);
  */

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Blogs & Articles</h2>
        
        <p className="blog-description">
        Here you can find my latest articles on data engineering, analytics and related data topics.
        I regularly share my insights, best practices and solutions to common challenges.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <a href={post.url} target="_blank" rel="noopener noreferrer" key={post.id} className="blog-card">
              <div className="blog-image">
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt={post.title} className="blog-thumbnail" />
                ) : (
                  <div className="blog-thumbnail-placeholder">
                    <FaMedium className="medium-icon" />
                  </div>
                )}
              </div>
              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.description}</p>
              </div>
              <div className="blog-footer">
                <span className="read-more">Keep reading</span>
                <FaMedium className="blog-source-icon" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="blog-footer-link">
          <a 
            href="https://medium.com/@danielowitch97" 
            target="_blank" 
            rel="noopener noreferrer"
            className="medium-profile-link"
          >
            <span>Read all articles on Medium!</span>
            <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
// src/components/BlogSection/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import { FaMedium } from 'react-icons/fa';
import './BlogSection.css';

import MediumImage1 from "../../assets/images2/medium/DWDL.png";
import MediumImage2 from "../../assets/images2/medium/GDB.png";

function BlogSection() {
  // Statische Blog-Posts (falls Medium-API nicht verwendet wird)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "From Data Warehouse to Data Lakehouse",
      description: "Understanding the Evolution of Data Architecture and When to Use Each",
      date: "08. May 2025",
      url: "https://medium.com/@danielowitch97/from-data-warehouse-to-data-lakehouse-8b93eee02497",
      imageUrl: MediumImage1
    },
    {
      id: 2,
      title: "Graph Databases & Knowledge Graphs",
      description: "Powering Recommendation Systems and Advanced Analytics",
      date: "11. May 2025",
      url: "https://medium.com/@danielowitch97/graph-databases-knowledge-graphs-powering-recommendation-systems-and-advanced-analytics-2260c69850aa",
      imageUrl: MediumImage2
    }
  ]);
  
  // Bestimme die passende Grid-Klasse basierend auf der Anzahl der Blog-Posts
  const getBlogGridClass = () => {
    const count = blogPosts.length;
    if (count <= 2) {
      return "blog-grid blog-grid-centered";
    }
    return "blog-grid";
  };

  // Alternativ: Medium-API für dynamische Posts
  // Auskommentierter Code für API-Integration wurde hier entfernt

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Blogs & Articles</h2>
        
        <p className="blog-description">
          Here you can find my latest articles on data engineering, analytics and related data topics.
        </p>
        
        <div className={getBlogGridClass()}>
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
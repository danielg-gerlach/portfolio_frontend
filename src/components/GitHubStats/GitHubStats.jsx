// src/components/GitHubStats/GitHubStats.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaCode } from 'react-icons/fa';
import './GitHubStats.css';

function GitHubStats() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Dein GitHub-Benutzername
  const username = 'danielg-gerlach';
  
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Top Repositories abrufen
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const reposData = await reposResponse.json();
        
        // Sprachstatistiken für jedes Repository abrufen
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            
            // Berechnung der Prozentsätze für jede Sprache
            const totalBytes = Object.values(languagesData).reduce((a, b) => a + b, 0);
            const languages = Object.entries(languagesData).map(([name, bytes]) => ({
              name,
              percentage: Math.round((bytes / totalBytes) * 100)
            }));
            
            return {
              ...repo,
              languages
            };
          })
        );
        
        setRepos(reposWithLanguages);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchGitHubStats();
  }, [username]);
  
  return (
    <section id="github-stats" className="github-stats-section">
      <div className="container">
        <h2 className="section-title">GitHub Activities</h2>
        
        <p className="github-stats-description">
        Here are my current GitHub repositories. My codebase shows my technical skills
        and my approach to problem solving in various projects.
        </p>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading GitHub-Data...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">
            Unfortunately, the GitHub data could not be loaded. Please try again later.
            </p>
            <p className="error-details">{error}</p>
          </div>
        ) : (
          <>
            <div className="github-repos-grid">
              {repos.map(repo => (
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={repo.id}
                  className="github-repo-card"
                >
                  <h3 className="repo-name">{repo.name}</h3>
                  <p className="repo-description">
                    {repo.description || 'No description available.'}
                  </p>
                  
                  <div className="repo-stats">
                    <div className="repo-stat-item">
                      <FaStar className="repo-stat-icon star" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="repo-stat-item">
                      <FaCodeBranch className="repo-stat-icon fork" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="repo-stat-item">
                      <FaEye className="repo-stat-icon watch" />
                      <span>{repo.watchers_count}</span>
                    </div>
                  </div>
                  
                  {repo.languages && repo.languages.length > 0 && (
                    <div className="repo-languages">
                      <div className="languages-bar">
                        {repo.languages.map((language, index) => (
                          <div
                            key={index}
                            className={`language-segment language-${language.name.toLowerCase()}`}
                            style={{ width: `${language.percentage}%` }}
                            title={`${language.name}: ${language.percentage}%`}
                          ></div>
                        ))}
                      </div>
                      <div className="languages-list">
                        {repo.languages.slice(0, 3).map((language, index) => (
                          <span key={index} className="language-tag">
                            <span 
                              className={`language-dot language-${language.name.toLowerCase()}`}
                            ></span>
                            {language.name}
                          </span>
                        ))}
                        {repo.languages.length > 3 && (
                          <span className="language-more">+{repo.languages.length - 3}</span>
                        )}
                      </div>
                    </div>
                  )}
                </a>
              ))}
            </div>
            
            <div className="github-profile-link">
              <a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link"
              >
                <FaGithub className="github-icon" />
                <span>Visit my GitHub Profile</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default GitHubStats;
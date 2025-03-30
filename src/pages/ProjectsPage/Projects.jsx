import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../assets/css/Markdown.css';

function ProjectsPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/pages/ProjectsPage/projects.md')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setContent('# Projects content could not be loaded\nPlease check the console for errors.');
      });
  }, []);

  return (
    <div className="markdown-content">
      {/* Projects header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.3em',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, border: 'none', paddingBottom: 0 }}>Projects</h1>
      </div>
      
      {/* Markdown content */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ProjectsPage;

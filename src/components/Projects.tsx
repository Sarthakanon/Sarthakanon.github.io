import React, { useState } from 'react';

const projects = [
  {
    image: 'https://cdn.dribbble.com/userupload/11111101/file/original-1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a.png?resize=400x400',
    title: 'Weatherly',
    type: 'OPEN SOURCE',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11111102/file/original-2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b.png?resize=400x400',
    title: 'CryptoDash',
    type: 'PERSONAL',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11111103/file/original-3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c.png?resize=400x400',
    title: 'FitTrack',
    type: 'OPEN SOURCE',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11111104/file/original-4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d.png?resize=400x400',
    title: 'RecipeBook',
    type: 'PERSONAL',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11111105/file/original-5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.png?resize=400x400',
    title: 'TravelMate',
    type: 'OPEN SOURCE',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/11111106/file/original-6f6f6f6f6f6f6f6f6f6f6f6f6f6f6f6f.png?resize=400x400',
    title: 'NoteNest',
    type: 'PERSONAL',
  },
];

const CAROUSEL_SIZE = 3;

const Projects: React.FC = () => {
  const [start, setStart] = useState(0);
  const end = start + CAROUSEL_SIZE;
  const visibleProjects = projects.slice(start, end);
  const canPrev = start > 0;
  const canNext = end < projects.length;
  const totalPages = Math.ceil(projects.length / CAROUSEL_SIZE);
  const currentPage = Math.floor(start / CAROUSEL_SIZE);

  const handlePrev = () => {
    if (canPrev) setStart(start - CAROUSEL_SIZE);
  };
  const handleNext = () => {
    if (canNext) setStart(start + CAROUSEL_SIZE);
  };
  const handleDot = (idx: number) => {
    setStart(idx * CAROUSEL_SIZE);
  };

  return (
    <section id="projects" className="projects-section section-band">
      <h2>Projects</h2>
      <div className="projects-carousel-controls modern-carousel-controls">
        <button className="carousel-btn modern-arrow" onClick={handlePrev} disabled={!canPrev}>&#8592;</button>
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${currentPage === idx ? ' active' : ''}`}
              onClick={() => handleDot(idx)}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
        <button className="carousel-btn modern-arrow" onClick={handleNext} disabled={!canNext}>&#8594;</button>
      </div>
      <div className="projects-grid modern-projects-grid">
        {visibleProjects.map((proj, idx) => (
          <div className="modern-project-card" key={proj.title + idx}>
            <div className="modern-project-img-wrap">
              <img src={proj.image} alt={proj.title} className="modern-project-img" />
            </div>
            <div className="modern-project-badge">{proj.type}</div>
            <div className="modern-project-title">{proj.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
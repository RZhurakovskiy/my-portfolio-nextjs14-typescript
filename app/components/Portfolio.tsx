"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface Project {
  href: string;
  imgSrc: string;
  imgSrcSet: string;
  imgAlt: string;
  title: string;
  tag: string;
}

const projectData: Project[] = [
  {
    href: "/portfolio-project/mgc-group",
    imgSrc: "/img/portfolio/mgcgroup-project.jpg",
    imgSrcSet: "/img/portfolio/mgcgroup-project@2x.jpg",
    imgAlt: "Посадочная страница выставки промышленного дизайна в Москве",
    title: "Посадочная страница выставки промышленного дизайна в Москве",
    tag: "Сайт"
  },
  {
    href: "/portfolio-project/immo-expert",
    imgSrc: "/img/portfolio/immoexpert-project.jpg",
    imgSrcSet: "/img/portfolio/immoexpert-project@2x.jpg",
    imgAlt: "Single Page Application - агентство недвижимости",
    title: "Single Page Application - агентство недвижимости",
    tag: "SPA приложение"
  },
  {
    href: "/portfolio-project/delote-beauty",
    imgSrc: "/img/portfolio/delotebeaty-project.jpg",
    imgSrcSet: "/img/portfolio/delotebeaty-project@2x.jpg",
    imgAlt: "Сайт салона красоты",
    title: "Сайт салона красоты",
    tag: "Сайт"
  }
];

const tags = ["Все", "SPA приложение", "Сайт"];

const Portfolio: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("Все");

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects = selectedTag === "Все"
    ? projectData
    : projectData.filter(project => project.tag === selectedTag);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Портфолио</h2>

        <ul className="tabs">
          {tags.map((tag, index) => (
            <li 
              key={index} 
              className={`tab ${tag === selectedTag ? 'active' : ''}`} 
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="projects">
          {filteredProjects.map((project, index) => (
            <article className="project" key={index}>
              <Link href={project.href}>
                <img 
                  className="project-img" 
                  src={project.imgSrc}
                  srcSet={project.imgSrcSet} 
                  alt={project.imgAlt} 
                />
              </Link>
              <h3 className="project-title">
                <Link href={project.href}>{project.title}</Link>
              </h3>
              <p className="project-tag">{project.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

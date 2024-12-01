"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

interface Project {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  tag: string;
}

const projectData: Project[] = [
  {
    href: "/portfolio-project/alliance-realty",
    imgSrc: "/img/portfolio/alliancerealty-project.jpg",
    imgAlt: "Лендиг агенства недвижимости Alliance Realty",
    title: "Лендиг агенства недвижимости Alliance Realty. Собственный дизайн",
    tag: "Сайт"
  },
  {
    href: "/portfolio-project/mgc-group",
    imgSrc: "/img/portfolio/mgcgroup-project.jpg",
    imgAlt: "Посадочная страница выставки промышленного дизайна в Москве",
    title: "Коммерческий проект. Посадочная страница выставки промышленного дизайна в Москве",
    tag: "Сайт"
  },
  {
    href: "/portfolio-project/php-media-player",
    imgSrc: "/img/portfolio/phpmediaplayer-project.jpg",
    imgAlt: "Веб - сервис для удаленной загрузки и проигрывания медиафайлов",
    title: "Коммерческий проект. Веб - сервис для удаленной загрузки и проигрывания медиафайлов",
    tag: "PHP"
  },
  {
    href: "/portfolio-project/immo-expert",
    imgSrc: "/img/portfolio/immoexpert-project.jpg",
    imgAlt: "Single Page Application - агентство недвижимости",
    title: "Single Page Application - агентство недвижимости",
    tag: "SPA приложение"
  },
  {
    href: "/portfolio-project/delote-beauty",
    imgSrc: "/img/portfolio/delotebeaty-project.jpg",
    imgAlt: "Сайт салона красоты",
    title: "Сайт салона красоты",
    tag: "Сайт"
  },
  {
    href: "/portfolio-project/weather-vidjet",
    imgSrc: "/img/portfolio/weatherapp-project.jpg",
    imgAlt: "Виджет прогноза погоды в рамке телефона",
    title: "Виджет прогноза погоды в рамке телефона",
    tag: "SPA приложение"
  }
];

const tags = ["Все", "SPA приложение", "Сайт", "PHP"];

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
                <Image 
                  className="project-img" 
                  src={project.imgSrc}
                  alt={project.imgAlt} 
                  width={1000}
                  height={800}
                />
              </Link>
              <h3 className="project-title">
                <Link href={project.href}>{project.title}</Link>
              </h3>
              <p className="project-tag">{project.tag}</p>
              <Link href={project.href}><button className='project-btn'>ознакомиться подробнее</button></Link>
            </article>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import Image from "next/image";
const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header-row">
        <Image
          src="/img/photo.jpg"
          width={600}
          height={400}
          alt="Photograph of Roman Zhurakovskyi"
          className="header-img"
        />
        <div className="header-desc">
          <h1 className="header-title">Роман Жураковский</h1>
          <p className="header-text">
            Профессиональный веб-разработчик,
            <br /> создание сайтов, SPA-приложений.
          </p>
          <p className="header-text">
            React.js, Next.js, TypeScript, Vue.js 2 oprions api, Vue.js 3
            composition api, php Laravel, php WordPress, SEO
          </p>
          <div className="header-btns">
            <a href="#portfolio" className="btn">
              Портфолио
            </a>
            <a href="#contacts" className="btn-outline">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </div>
    <video
      className="header-video"
      preload="metadata"
      autoPlay
      muted
      playsInline
      loop
    >
      <source type="video/mp4" src="/video/laptop.mp4" />
    </video>
  </header>
);

export default Header;

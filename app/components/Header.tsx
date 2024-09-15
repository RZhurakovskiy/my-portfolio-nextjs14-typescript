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
            Vue.js 2, Vue.js 3, React.js, Next.js, TypeScript, Laravel,
            WordPress
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

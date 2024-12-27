import Image from "next/image";
import Link from "next/link";
import React from "react";

const MgcGroup: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">
            Посадочная страница выставки промышленного дизайна в Москве
          </h1>
          <div className="inner-page-text">
            <p>
              Проект выполнен с использованием HTML, CSS/SCSS и JavaScript.
            </p>

            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <a
                href="https://mgcgroup.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                mgcgroup.ru
              </a>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/mgc-landing-project.jpg"
          alt="Изображение сайта на различных устройствах"
          width={800}
          height={600}
        />

        <Link href="/" className="inner-page-backlink">
          <Image
            src="/img/icons/arrow-left.svg"
            alt="Go Back"
            width={16}
            height={16}
          />
          Назад на главную
        </Link>
      </div>
    </article>
  );
};

export default MgcGroup;

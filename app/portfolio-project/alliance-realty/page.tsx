import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllianceRealty: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">
            Лендинг агентства недвижимости Alliance Realty. Собственный дизайн
          </h1>
          <div className="inner-page-text">
            <p>
              Проект выполнен с использованием HTML, CSS/SCSS и JavaScript, с
              использованием сборки gulp
            </p>
            <p>
              В проекте реализовано модальное окно с формой обратоной связи,
              отображение дареса ч=на карте через Yandex Api, слайдеры с
              описанием недвижимости
            </p>

            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <Link
                href="https://alliance-realty.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                alliance-realty.vercel.app/
              </Link>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/alliancerealty-project.jpg"
          width={800}
          height={600}
          alt="Изображение сайта на разных устройствах"
        />

        <Link href="/" className="inner-page-backlink">
          <Image
            src="/img/icons/arrow-left.svg"
            width={24}
            height={24}
            alt="Go Back"
          />
          Назад на главную
        </Link>
      </div>
    </article>
  );
};

export default AllianceRealty;

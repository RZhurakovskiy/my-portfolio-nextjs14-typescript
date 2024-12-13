import React from "react";
import Image from "next/image";
import Link from "next/link";

const HrAutomotive: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">Сайт вакансий Борского Стекольного завода</h1>
          <div className="inner-page-text">
            <p>Проект выполнен с использованием HTML, CSS/SCSS и JavaScript, сборки gulp</p>
            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <Link
                href="https://hr-automotive.aigrus.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hr-automotive.aigrus.ru
              </Link>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/hr-automotive.jpg"
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

export default HrAutomotive;

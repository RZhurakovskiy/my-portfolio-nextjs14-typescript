import React from "react";
import Image from "next/image";
import Link from "next/link";

const DeloteBeauty: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">Сайт салона красоты DeloteBeauty</h1>
          <div className="inner-page-text">
            <p>Проект выполнен с использованием HTML, CSS/SCSS и JavaScript</p>
            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <Link
                href="https://rzhurakovskiy.github.io/delote-beauty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rzhurakovskiy.github.io/delote-beauty
              </Link>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/delotebeaty-project.jpg"
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

export default DeloteBeauty;

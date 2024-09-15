// app/immo-expert/page.tsx
import Image from "next/image";
import Link from "next/link";

const ImmoExpert: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">
            Single Page Application - агентство недвижимости
          </h1>
          <div className="inner-page-text">
            <p>Проект выполнен на Vue.js 3 + TypeScript</p>
            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <a
                href="https://rzhurakovskiy.github.io/immo-expert-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rzhurakovskiy.github.io/immo-expert-app
              </a>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/immoexpert-project.jpg"
          width={800}
          height={600}
          alt="Сайт магазина мебели"
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

export default ImmoExpert;

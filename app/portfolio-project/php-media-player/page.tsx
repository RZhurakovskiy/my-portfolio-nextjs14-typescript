import React from "react";
import Image from "next/image";
import Link from "next/link";

const PhpMediaPlayer: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">
            Веб - сервис для удаленной загрузки и проигрывания медиафайлов
          </h1>
          <div className="inner-page-text">
            <p>
              Проект выполнен с использованием HTML, CSS, JavaScript, php, pdo,
              PostgreSQL
            </p>
            <p>
              Проект развернут на сервере компании и не доступен для публичного
              просмотра.
            </p>
            <p>
              Цель: обеспечение удаленной загрузки рекламных медиафайлов для
              последующего воспроизведения на дисплеях крупного Российского
              производственного предприятия.
            </p>
            <div className="description-project">
            <p className="description-project-title">
              Реализовано:
              </p>
              <p>- Создание токена для авторизации пользователей, включая
              возможность входа в режиме гостя с ограниченными правами доступа.</p>
            
              <p>- Отображение загруженных медиафайлов в табличном формате.</p>
              <p>- Возможность сортировки и удаления медиафайлов.</p>
              <p>- Периодический опрос базы данных для проверки наличия новых
              медиафайлов и их автоматического отображения без необходимости
              перезагрузки страницы.</p>
            </div>
           
           
            <p className="inner-page-link">
              Исходные файлы проекта доступны по следующему адресу: <br />
              <a
                href="https://github.com/RZhurakovskiy/php-mediaplayer"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/RZhurakovskiy/php-mediaplayer
              </a>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/phpmediaplayer-project.jpg"
          width={800}
          height={600}
          alt="Изображение сайта на разных устройствах"
        />

        <Link href="/" className="inner-page-backlink">
          <img src="/img/icons/arrow-left.svg" alt="Go Back" />
          Назад на главную
        </Link>
      </div>
    </article>
  );
};

export default PhpMediaPlayer;

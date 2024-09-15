// Создайте файл page.tsx в папке app/codemaster для использования маршрутизации App Router
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeatherApp: React.FC = () => {
  return (
    <article className="inner-page">
      <div className="container">
        <div className="inner-page-details">
          <h1 className="inner-page-title">
            Виджет прогноза погоды в рамке телефона
          </h1>
          <div className="inner-page-text">
            <p>Проект выполнен с использованием фреймворка React.js</p>
            <p>
              Релизовано: определение геолокации по клику на кнопку. Индикация
              уровня заряда батареи и индикация подключения зарядного устройства
            </p>

            <p className="warning-message">
              Возможны проблемы с отображением ui элементов на устройствах Apple
            </p>

            <p className="inner-page-link">
              Проект доступен по следующему адресу: <br />
              <a
                href="https://rzhurakovskiy.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rzhurakovskiy.github.io/weather-app
              </a>
            </p>
          </div>
        </div>

        <Image
          className="inner-page-img"
          src="/img/portfolio/weatherapp-project.jpg"
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

export default WeatherApp;

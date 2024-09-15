import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <p>
                        © Роман Жураковский <br />
                        Веб-разработчик, создание сайтов г. Нижний Новгород
                    </p>
                    <p>
                        <a href="https://webcademy.ru/" target="_blank" rel="noopener noreferrer">
                            💻 Дизайн макета Webcademy.ru
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

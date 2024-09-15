import React from 'react';
import Image from 'next/image';

const Contacts: React.FC = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <h2 className="contacts-title">Контакты</h2>
                <div className="messangers">
                    <a href="https://t.me/romanzhurakovskiy" className="messanger" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/icons/telegram.svg" alt="Telegram" width={24} height={24} />
                        Написать в Telegram
                    </a>
              
                    <a href="https://vk.com/romanzhurakovskiy" className="messanger" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/icons/vk.svg" alt="Вконтакте" width={24} height={24} />
                        Связаться Вконтакте
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

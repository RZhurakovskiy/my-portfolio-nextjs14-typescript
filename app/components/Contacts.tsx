import React from 'react';
import Image from 'next/image';
import ContactForm from "../components/ContactForm";
const Contacts: React.FC = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <h2 className="contacts-title">Связаться со мной</h2>
                <p className='contacts-text'>Спасибо за ваш интерес! Если у вас есть вопросы, предложения или вы хотите обсудить возможное сотрудничество, заполните форму ниже, и я постараюсь ответить вам как можно скорее.</p>
                <div className='contact-form-block'>
                    <ContactForm />
                </div>
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

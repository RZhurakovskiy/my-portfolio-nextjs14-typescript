'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success('Ваше сообщение успешно отправлено!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Ошибка при отправке сообщения.');
      }
    } catch (error) {
      toast.error('Произошла ошибка: ' + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className='form-button' type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;

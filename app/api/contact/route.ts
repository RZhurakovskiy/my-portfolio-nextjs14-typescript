import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return new Response('Отсутствуют необходимые данные', { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true, // true для порта 465, false для 587
        auth: {
            user: 'rzhurakovskiy.webdev@yandex.ru',
            pass: 'dmgumtbyewazagnu',  // Убедитесь, что это действительно пароль приложения
        },
        logger: true,
        debug: true,
    });

    const mailOptions = {
        from: 'rzhurakovskiy.webdev@yandex.ru', // Убедитесь, что это адрес вашего почтового ящика
        to: 'rzhurakovskiy.webdev@yandex.ru',
        subject: `Сообщение от ${name}`, // Исправленный синтаксис для шаблонной строки
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Сообщение отправлено', { status: 200 });
    } catch (error: any) {
        console.error('Ошибка при отправке почты:', error);
        return new Response(`Ошибка при отправке сообщения: ${error.message}`, { status: 500 });
    }
}

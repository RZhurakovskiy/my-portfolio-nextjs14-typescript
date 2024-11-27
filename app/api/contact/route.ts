import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return new Response('Отсутствуют необходимые данные', { status: 400 }); 
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'rzhurakovskiy.webdev@yandex.ru',
            pass: 'dmgumtbyewazagnu',
        },
        logger: true,
        debug: true,
    });

    const mailOptions = {
        from: 'Сообщение с сайта',
        to: 'rzhurakovskiy.webdev@yandex.ru',
        subject: `Сообщение от ${name}`,
        email: email,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Сообщение отправлено', { status: 200 });
    } catch (error: unknown) {
        console.error('Ошибка при отправке почты:', error);
        const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
        return new Response(`Ошибка при отправке сообщения: ${errorMessage}`, { status: 500 });
    }
}

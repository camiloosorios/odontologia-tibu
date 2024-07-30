import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, phone, message } = await request.json();

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Puedes usar Gmail o configurar otro servicio SMTP
        auth: {
            user: process.env.EMAIL_USER, // Tu correo electrónico
            pass: process.env.EMAIL_PASS, // Tu contraseña de correo electrónico
        },
    });

    // Configura el correo electrónico
    const mailOptions = {
        from: process.env.EMAIL_USER, // De qué correo se envía
        to: 'bryancamiloos@ufps.edu.co', // Correo del destinatario
        subject: 'Nuevo contacto en pagina web',
        text: `Nombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email enviado con éxito!' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
    }
}

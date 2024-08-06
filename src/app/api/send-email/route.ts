import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { name, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'bryancamiloos@ufps.edu.co',
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

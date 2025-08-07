import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Pablo Hernández <onboarding@resend.dev>',
      to: ['peh7sep@gmail.com'], // poné el email real aquí
      subject: 'Nuevo mensaje desde el formulario',
      react: EmailTemplate({ fullName, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'hugo.costillag@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Artemis <onboarding@resend.dev>';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FIELDS = [
  ['nombreEstancia', 'Estancia / Guardería'],
  ['nombreContacto', 'Directora o Encargada'],
  ['email', 'Correo electrónico'],
  ['telefono', 'Teléfono / WhatsApp'],
  ['municipio', 'Municipio'],
  ['capacidadAlumnos', 'Capacidad de niños'],
] as const;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY no está configurada');
    return NextResponse.json({ error: 'Configuración del servidor incompleta' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
  }

  const data: Record<string, string> = {};
  for (const [key] of FIELDS) {
    const value = body[key];
    data[key] = typeof value === 'string' ? value.trim().slice(0, 200) : '';
    if (!data[key]) {
      return NextResponse.json({ error: `Falta el campo: ${key}` }, { status: 400 });
    }
  }

  if (!EMAIL_REGEX.test(data.email)) {
    return NextResponse.json({ error: 'Correo electrónico inválido' }, { status: 400 });
  }
  if (data.telefono.replace(/\D/g, '').length !== 10) {
    return NextResponse.json({ error: 'Teléfono inválido' }, { status: 400 });
  }

  const rows = FIELDS.map(
    ([key, label]) => `
      <tr>
        <td style="padding:8px 12px;border:1px solid #eee;background:#faf7f5;font-weight:bold;">${label}</td>
        <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(data[key])}</td>
      </tr>`,
  ).join('');

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#3d405b;">
      <h2 style="color:#e07a5f;">Nueva solicitud de demo - Artemis</h2>
      <table style="border-collapse:collapse;width:100%;">${rows}</table>
      <p style="font-size:12px;color:#888;">Recibido el ${new Date().toLocaleString('es-MX', {
        timeZone: 'America/Monterrey',
      })}</p>
      ${JSON.stringify(data, null, 2)}
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `Solicitud de demo: ${data.nombreEstancia}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'No se pudo enviar el correo' }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error enviando demo:', err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

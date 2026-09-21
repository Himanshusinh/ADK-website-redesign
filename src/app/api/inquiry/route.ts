import nodemailer from 'nodemailer';

const FIELDS = ['name', 'company', 'phone', 'email', 'city', 'product', 'message'] as const;

/**
 * Receives quote / catalogue requests and emails them to the ADK inbox.
 * Configure SMTP_* env vars (see .env.example). Returns 501 when not configured,
 * which makes the form fall back to the visitor's email app.
 */
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'bad-request' }, { status: 400 });
  }
  const v = (k: string) => String(data[k] ?? '').slice(0, 2000).trim();
  if (!v('name') || !v('phone') || !/^\S+@\S+\.\S+$/.test(v('email'))) {
    return Response.json({ ok: false, error: 'invalid' }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT = '465', SMTP_USER, SMTP_PASS, INQUIRY_TO = 'inquiry1@adkeng.com' } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json({ ok: false, error: 'not-configured' }, { status: 501 });
  }

  const kind = v('mode') === 'catalogue' ? 'Catalogue Request' : 'Inquiry';
  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: `"ADK Website" <${SMTP_USER}>`,
      to: INQUIRY_TO,
      replyTo: v('email'),
      subject: `${kind}${v('product') ? ` – ${v('product')}` : ''} — ${v('name')}`,
      text: FIELDS.map((k) => `${k[0].toUpperCase()}${k.slice(1)}: ${v(k) || '-'}`).join('\n'),
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('inquiry mail failed', err);
    return Response.json({ ok: false, error: 'send-failed' }, { status: 502 });
  }
}

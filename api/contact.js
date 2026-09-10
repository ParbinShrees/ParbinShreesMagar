import nodemailer from 'nodemailer';

// Escape HTML entities to prevent injection in email templates
const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  // Trim and sanitize all user input
  const safeName    = escapeHtml(String(name).trim());
  const safeEmail   = escapeHtml(String(email).trim());
  const safeMessage = escapeHtml(String(message).trim());

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('No SMTP credentials set — skipping email send.');
    return res.status(200).json({ message: 'Message received (no SMTP credentials configured).' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      // Gmail requires 'from' to be your own authenticated address
      from: `"Parbin Portfolio" <${process.env.SMTP_USER}>`,
      replyTo: `"${safeName}" <${String(email).trim()}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `📬 New Portfolio Message from ${safeName}`,
      text: `You have a new message from your portfolio contact form.\n\nName: ${String(name).trim()}\nEmail: ${String(email).trim()}\n\nMessage:\n${String(message).trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f7; padding: 32px; border-radius: 16px;">
          <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #d2d2d7;">
            <h2 style="margin: 0 0 4px 0; font-size: 22px; color: #1d1d1f;">📬 New Portfolio Message</h2>
            <p style="margin: 0 0 24px 0; color: #86868b; font-size: 14px;">Someone reached out through your portfolio contact form.</p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #86868b; font-size: 13px; font-weight: 600; width: 80px;">NAME</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #1d1d1f; font-size: 15px; font-weight: 500;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #86868b; font-size: 13px; font-weight: 600;">EMAIL</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7;">
                  <a href="mailto:${safeEmail}" style="color: #0071e3; font-size: 15px; font-weight: 500; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
            </table>

            <div style="background: #f5f5f7; border-radius: 10px; padding: 20px;">
              <p style="margin: 0 0 8px 0; color: #86868b; font-size: 13px; font-weight: 600;">MESSAGE</p>
              <p style="margin: 0; color: #1d1d1f; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #d2d2d7;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background: #0071e3; color: white; padding: 10px 22px; border-radius: 20px; font-size: 14px; font-weight: 600; text-decoration: none;">
                Reply to ${safeName}
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #86868b; font-size: 12px; margin-top: 20px;">Parbin Shrees Magar · Portfolio Contact Form</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).json({ message: 'Failed to send message. Please try again.', error: error.message });
  }
}

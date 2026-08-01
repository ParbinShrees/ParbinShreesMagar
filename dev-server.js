// Local development API server — mirrors the Vercel serverless function
// Run with: npm run dev:api
// Then the Vite proxy will forward /api/* requests to this server.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[dev-server] No SMTP credentials in .env — skipping real send.');
    return res.status(200).json({ message: 'Message sent successfully (dev mock — no SMTP credentials set).' });
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
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `📬 New Portfolio Message from ${name}`,
      text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f7; padding: 32px; border-radius: 16px;">
          <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #d2d2d7;">
            <h2 style="margin: 0 0 4px 0; font-size: 22px; color: #1d1d1f;">📬 New Portfolio Message</h2>
            <p style="margin: 0 0 24px 0; color: #86868b; font-size: 14px;">Someone reached out through your portfolio contact form.</p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #86868b; font-size: 13px; font-weight: 600; width: 80px;">NAME</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #1d1d1f; font-size: 15px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7; color: #86868b; font-size: 13px; font-weight: 600;">EMAIL</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f7;">
                  <a href="mailto:${email}" style="color: #0071e3; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>

            <div style="background: #f5f5f7; border-radius: 10px; padding: 20px;">
              <p style="margin: 0 0 8px 0; color: #86868b; font-size: 13px; font-weight: 600;">MESSAGE</p>
              <p style="margin: 0; color: #1d1d1f; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #d2d2d7;">
              <a href="mailto:${email}" style="display: inline-block; background: #0071e3; color: white; padding: 10px 22px; border-radius: 20px; font-size: 14px; font-weight: 600; text-decoration: none;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #86868b; font-size: 12px; margin-top: 20px;">Parbin Shrees Magar · Portfolio Contact Form</p>
        </div>
      `,
    });

    console.log(`[dev-server] Email sent to ${process.env.CONTACT_EMAIL} from ${name} (${email})`);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('[dev-server] Email send error:', error.message);
    return res.status(500).json({ message: 'Failed to send message. Please try again.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n  ✉️  Local API server running at http://localhost:${PORT}`);
  console.log(`  SMTP_USER loaded: ${process.env.SMTP_USER ? '✅ ' + process.env.SMTP_USER : '❌ Not set (check .env)'}\n`);
});

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .header {
              background: linear-gradient(to right, #3b82f6, #8b5cf6);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 0 0 8px 8px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #6b7280;
              font-size: 0.875rem;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <h2>Contact Details:</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h2>Message:</h2>
              <p>${message}</p>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'engr.riazul@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

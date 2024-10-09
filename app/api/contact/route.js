import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'cPanel', // or another email service like 'hotmail', 'yahoo', etc.
      auth: {
        user: 'info@devriazul.com', // Replace with your Gmail email
        pass: 'mahmud529', // Replace with your Gmail app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: email, // Sender address
      to: 'engr.riazul@gmail.com', // Receiver address
      subject: `New message from ${name}`, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to send email', error }), {
      status: 500,
    });
  }
}

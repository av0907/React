// // pages/api/send.js
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const targetEmail = 'mgakshith@gmail.com';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     // Return 405 if not a POST request
//     res.status(405).json({ error: 'Method Not Allowed' });
//     return;
//   }

//   const { email, subject, message } = req.body;

//   try {
//     // Simulate sending email
//     console.log('Sending email to:', targetEmail);
//     console.log('From:', email);
//     console.log('Subject:', subject);
//     console.log('Message:', message);

//     // Simulate email sending success
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email. Please try again later.' });
//   }
// }

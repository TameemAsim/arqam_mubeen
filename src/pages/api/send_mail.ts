import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Invalid phone number"),
  subject: z.string().min(1, "Subject is required"),
  budget: z.string().min(1, "Invalid budget"),
  message: z.string().min(1, "Message is required")
});

type ContactFormData = z.infer<typeof contactSchema>;

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    try {
      const data: ContactFormData = contactSchema.parse(req.body);

      const transporter = nodemailer.createTransport({
        host: process.env.smtpHost,
        port: Number(process.env.smtpPort),
        secure: process.env.smtpSecure === "true",
        auth: {
          user: process.env.smtpUser,
          pass: process.env.smtpPassword,
        },
      });

      // Define the email options
      const mailOptions = {
        from: "tmeemu15@zohomail.com",
        to: "ummetameem24@gmail.com",
        subject: `${data.subject}`,
        text: `Name: ${data.fullName}\nEmail: ${data.email}\nPhone Number: ${data.phoneNumber}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors.map(e => e.message).join(', ') });
      } else {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(data: FormData) {
  // Validate form data
  const validatedFields = formSchema.safeParse(data)

  if (!validatedFields.success) {
    throw new Error("Invalid form data")
  }

  // Replace these with your actual email configuration
  const recipientEmail = process.env.RECIPIENT_EMAIL || "your-email@example.com"

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.example.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER || "your-email@example.com",
      pass: process.env.EMAIL_PASSWORD || "your-password",
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || "ICISN Contact Form <noreply@example.com>",
    to: recipientEmail,
    subject: `ICISN Contact: ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Subject:</strong> ${data.subject}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
      ${data.message.replace(/\n/g, "<br>")}
    </div>
  </div>
  <p style="margin-top: 20px; color: #666; font-size: 12px;">This email was sent from the ICISN 2025 contact form.</p>
</div>
    `,
  }

  // Send email
  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

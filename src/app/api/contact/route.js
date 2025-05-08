// app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject || `New message from ${name}`,
      replyTo: email,
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject || "(no subject)"}

Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error", err);
    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 }
    );
  }
}

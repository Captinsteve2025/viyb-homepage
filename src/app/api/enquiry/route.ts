import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const required = [
      "name",
      "tel",
      "email",
      "age",
      "experience",
      "qualifications",
      "swimmer",
      "medical",
      "goals",
    ];

    for (const key of required) {
      if (!data[key] || String(data[key]).trim().length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${key}` },
          { status: 400 }
        );
      }
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || "info@virginislandsyachtbroker.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, and ENQUIRY_TO_EMAIL environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Training Enquiry: ${data.passage || "No passage selected"}`;

    const html = `
      <h2>Training Enquiry</h2>
      <p><strong>Passage:</strong> ${data.passage || ""}</p>
      <p><strong>Date:</strong> ${data.date || ""}</p>
      <p><strong>Package:</strong> ${data.package || ""}</p>
      <hr />
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Tel:</strong> ${data.tel}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Experience level:</strong> ${data.experience}</p>
      <p><strong>Qualifications & experience:</strong><br/> ${data.qualifications}</p>
      <p><strong>Swimmer:</strong> ${data.swimmer}</p>
      <p><strong>Medical conditions:</strong><br/> ${data.medical}</p>
      <p><strong>Goals:</strong><br/> ${data.goals}</p>
      <hr />
      <p>Submitted at: ${new Date().toISOString()}</p>
    `;

    await transporter.sendMail({
      from: `${data.name} <${smtpUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("ENQUIRY_SEND_ERROR", err);
    const message = err instanceof Error ? err.message : "Failed to send enquiry. Please try again later.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

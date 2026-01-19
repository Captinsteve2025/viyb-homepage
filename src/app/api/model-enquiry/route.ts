import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

function objFromFormData(fd: FormData) {
  const obj: Record<string, unknown> = {};
  for (const [key, value] of fd.entries()) {
    if (key === "interest") {
      const all = fd.getAll("interest");
      obj[key] = all.map(String);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const form = await request.formData();
      // honeypot
      const website = String(form.get("website") || "").trim();
      if (website.length > 0) {
        // Bot detected, pretend success
        const accept = request.headers.get("accept") || "";
        const referer = request.headers.get("referer") || "/";
        if (accept.includes("text/html")) {
          return NextResponse.redirect(`${referer}${referer.includes("?") ? "&" : "?"}enquiry=ok`, { status: 302 });
        }
        return NextResponse.json({ ok: true });
      }
      data = objFromFormData(form);
    }

    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();

    if (!firstName || !lastName || !email) {
      const accept = request.headers.get("accept") || "";
      const referer = request.headers.get("referer") || "/";
      if (accept.includes("text/html")) {
        return NextResponse.redirect(`${referer}${referer.includes("?") ? "&" : "?"}enquiry=error`, { status: 302 });
      }
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, email" },
        { status: 400 }
      );
    }

    const modelName = String(data.modelName || "");
    const modelPrice = String(data.modelPrice || "");
    const deliveryLocation = String(data.deliveryLocation || "");
    const interests = Array.isArray(data.interest) ? (data.interest as string[]) : [];
    const message = String(data.message || "");
    const source = String(data._source || "Bali Detail Page");

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || "info@virginislandsyachtbroker.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      const accept = request.headers.get("accept") || "";
      const referer = request.headers.get("referer") || "/";
      if (accept.includes("text/html")) {
        return NextResponse.redirect(`${referer}${referer.includes("?") ? "&" : "?"}enquiry=config`, { status: 302 });
      }
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

    const subject = `Bali Model Enquiry: ${modelName || "Unknown Model"}`;

    const html = `
      <h2>Bali Model Enquiry</h2>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Model:</strong> ${modelName}</p>
      <p><strong>Base Price:</strong> ${modelPrice}</p>
      <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
      <p><strong>Interests:</strong> ${interests.join(", ")}</p>
      <hr />
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      <hr />
      <p>Submitted at: ${new Date().toISOString()}</p>
    `;

    await transporter.sendMail({
      from: `${firstName} ${lastName} <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    const accept = request.headers.get("accept") || "";
    const referer = request.headers.get("referer") || "/";
    if (accept.includes("text/html")) {
      return NextResponse.redirect(`${referer}${referer.includes("?") ? "&" : "?"}enquiry=ok`, { status: 302 });
    }
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("MODEL_ENQUIRY_SEND_ERROR", err);
    const message = err instanceof Error ? err.message : "Failed to send enquiry. Please try again later.";
    const accept = request.headers.get("accept") || "";
    const referer = request.headers.get("referer") || "/";
    if (accept.includes("text/html")) {
      return NextResponse.redirect(`${referer}${referer.includes("?") ? "&" : "?"}enquiry=error`, { status: 302 });
    }
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

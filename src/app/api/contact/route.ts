import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ritesh.cse03@gmail.com",
      subject: `${name} Sent You a Message`,
      replyTo: email,
      html: `<p>${message}</p>`
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
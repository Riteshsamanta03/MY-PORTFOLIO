import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

   const data = await resend.emails.send({
  from: "Contact Form <onboarding@resend.dev>",
  to: "ritesh.cse03@gmail.com",
  subject: `${name} Sent You a Message`,
  replyTo: email,
 html: `
  <div style="background-color:#f4f4f5;padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <tr>
        <td style="background:#111827;padding:24px;text-align:center;">
          <h2 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">
            Get in Touch
          </h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:30px;">
          
          <p style="margin:0 0 15px 0;font-size:14px;color:#6b7280;">
            You have received a new message from your website contact form.
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#111827;">
            
            <tr>
              <td style="padding:10px 0;font-weight:600;width:120px;">Name:</td>
              <td style="padding:10px 0;">${name}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:600;">Email:</td>
              <td style="padding:10px 0;">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:600;">Phone:</td>
              <td style="padding:10px 0;">${phone || "Not provided"}</td>
            </tr>

          </table>

          <div style="margin-top:20px;padding:15px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <p style="margin:0 0 8px 0;font-weight:600;color:#111827;">Message:</p>
            <p style="margin:0;color:#374151;line-height:1.6;">
              ${message}
            </p>
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f9fafb;padding:20px;text-align:center;font-size:12px;color:#9ca3af;">
          This message was sent from your website contact form.
        </td>
      </tr>

    </table>
  </div>
`
});

console.log("Resend response:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
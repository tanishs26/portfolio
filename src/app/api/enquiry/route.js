import {Resend} from "resend"
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Send email to yourself with the user's email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Enquiries <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "your-email@example.com",
      subject: "New Enquiry from Portfolio",
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Enquiry</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Someone is interested in your services!</strong></p>
            <p><strong>Email:</strong> ${email}</p>
            <p style="color: #666; font-size: 14px;">Reply directly to this email to contact them.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send enquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

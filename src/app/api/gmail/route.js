import { Resend } from "resend";
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
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 8px 0;"><strong style="color: #555;">Email:</strong> ${email}</p>
              </div>
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Sent from your portfolio contact 
              </p>
            </div>
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

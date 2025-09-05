import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, project, plan, category } = body;

    const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: process.env.EMAIL_PORT == 465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false, 
          },
        });

    // Build dynamic HTML for optional fields
    const optionalDetails = `
      ${plan ? `<li><b>Plan:</b> ${plan}</li>` : ""}
      ${category ? `<li><b>Category:</b> ${category}</li>` : ""}
    `;

    // 1. Confirmation email to user
    await transporter.sendMail({
      from: `"TrioDev Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thank you for booking with TrioDev",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thanks for booking your <b>30-min strategy session</b> with us 🚀</p>
        <p>Here are your details:</p>
        <ul>
          ${optionalDetails}
          ${date ? `<li><b>Date:</b> ${date}</li>` : ""}
          ${time ? `<li><b>Time:</b> ${time}</li>` : ""}
        </ul>
        <p>We’ll reach out within <b>24 hours</b> to confirm your call!</p>
        <p>– The TrioDev Team</p>
      `,
    });

    // 2. Send details to Admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Submission – ${name}`,
      html: `
        <h3>New Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
        ${plan ? `<p><b>Plan:</b> ${plan}</p>` : ""}
        ${category ? `<p><b>Category:</b> ${category}</p>` : ""}
        ${date ? `<p><b>Date:</b> ${date}</p>` : ""}
        ${time ? `<p><b>Time:</b> ${time}</p>` : ""}
        ${project ? `<p><b>Project:</b> ${project}</p>` : ""}
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email" }),
      { status: 500 }
    );
  }
}

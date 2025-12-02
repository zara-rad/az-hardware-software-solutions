import { Resend } from "resend";
import ContactMessage from "../models/ContactMessage.js";

export const sendContactForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      budget,
      serialNumber,
      message,
      language = "en",
    } = req.body;


    const autoReplyTemplates = {
      en: {
        subject: (name) => `Thanks for reaching AQBITZ, ${name}!`,
       html: (name, service) => `
<!-- force-refresh-v3 -->
<div style="line-height:1.7;font-size:15px;color:#e0e0e0;">

  <p>Hello <strong>${name}</strong>,</p>

  <p>
    Thank you for contacting <strong>AQBITZ Hardware & Software Solutions</strong>.<br/>
    We’ve successfully received your message${
      service ? ` about <b>${service}</b>` : ""
    }.
  </p>

  <p>We will reply within <strong>48 hours</strong>.</p>

  <div style="margin-top:10px;">
    If your inquiry is urgent, please reach out directly:<br/>
    📞 +49 176 3638 5183<br/>
    📧 contact@aqbitz.de
  </div>

  <p style="margin-top:15px;">Regards,<br/>AQBITZ Support Team</p>

</div>
`,

      },

     de: {
  subject: (name) => `Danke für Ihre Nachricht, ${name}!`,
  html: (name, service) => `
<div style="line-height:1.7;font-size:15px;color:#e0e0e0;">

  <p>Hallo <strong>${name}</strong>,</p>
  <p>Vielen Dank für Ihre Kontaktaufnahme mit AQBITZ Hardware & Software Solutions.</p>
  <p>Wir haben Ihre Nachricht${
    service ? ` bezüglich <b>${service}</b>` : ""
  } erhalten.</p>

  <p>Unser Team meldet sich innerhalb von 48 Stunden.</p>

  <p>
   Falls Ihre Anfrage dringend ist, kontaktieren Sie uns bitte direkt:<br/>
   📞 +49 176 3638 5183<br/>
   📧 contact@aqbitz.de
  </p>

  <p>Mit freundlichen Grüßen,<br/>AQBITZ Support Team</p>

</div>
`,
},

     fa: {
  subject: (name) => `${name} عزیز، پیام شما دریافت شد`,
  html: (name, service) => `
<div style="direction: rtl; text-align: right; font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.9; font-size: 16px; color: #e0e0e0;">

  <p><strong>${name}</strong> عزیز،</p>

  <p>
    از تماس شما با 
    <strong>AQBITZ Hardware & Software Solutions</strong> 
    سپاسگزاریم.
  </p>

  <p>
    پیام شما 
    ${service ? ` درباره <strong>${service}</strong>` : ""}
    با موفقیت دریافت شد.
  </p>

  <p>
    تیم ما درخواست شما را بررسی کرده و حداکثر تا 
    <strong>۴۸ ساعت آینده</strong> 
    با شما تماس خواهد گرفت.
  </p>

  <p>
    در صورتی که موضوع شما فوری است، لطفاً از طریق اطلاعات زیر با ما در ارتباط باشید:
    <br />
    📞  +49 176 3638 5183 <br />
    📧  contact@aqbitz.de
  </p>

  <p>با احترام<br/>تیم پشتیبانی AQBITZ</p>

</div>
<!-- BUTTON MUST BE OUTSIDE RTL BLOCK -->
<div style="text-align:center; margin-top:32px; direction:ltr;">
  <a href="https://aqbitz.de"
     style="
       padding:14px 32px;
       display:inline-block;
       border-radius:10px;
       background:#00e2ad;
       color:#000;
       font-weight:600;
       text-decoration:none;
       box-shadow:0 4px 15px rgba(0,255,200,0.4);
     ">
    Visit Our Website
  </a>
</div>

`,
},

    };

    const template = autoReplyTemplates[language] || autoReplyTemplates.en;

    //     VALIDATION
    if (!name || name.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 5 characters long.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
      });
    }

    //     SAVE MESSAGE IN DB

    await new ContactMessage({
      name,
      email,
      phone,
      service,
      budget,
      message,
      serialNumber,
    }).save();

    const resend = new Resend(process.env.RESEND_API_KEY);

    //     EMAIL TO ADMIN
    await resend.emails.send({
      from: "AQBITZ Contact <contact@aqbitz.de>",
      to: process.env.CONTACT_RECEIVER,
      reply_to: "contact@aqbitz.de",
      subject: `📩 New Contact Message – ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#555;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Serial Number:</strong> ${serialNumber || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    //     AUTO-REPLY TO CUSTOMER
    await resend.emails.send({
      from: "AQBITZ Support <contact@aqbitz.de>",
      to: email,
      reply_to: "contact@aqbitz.de",
      subject: template.subject(name),
      html: `
    <body style="margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif;background-color:#0d1117;color:#e0e0e0;">
      <div style="max-width:600px;margin:40px auto;background:#111820;border-radius:12px;padding:32px;border:1px solid #1f2a35;">

        <div style="text-align:center;margin-bottom:24px;">
          <h2 style="color:#7a7a7a;margin:0;">AQBITZ Hardware & Software Solutions</h2>
        </div>

        <!-- INSERT TRANSLATED TEMPLATE HERE -->
        ${template.html(name, service)}

        <div style="margin-top:32px;text-align:center;">
          <a href="https://aqbitz.de"
            style="
              padding:14px 32px;
              display:inline-block;
              border-radius:10px;
              background:#00e2ad;
              color:#000;
              font-weight:600;
              text-decoration:none;
              box-shadow:0 4px 15px rgba(0,255,200,0.4);
            ">
             Visit Our Website
          </a>
        </div>

        <hr style="margin:40px 0;border:none;border-top:1px solid #1f2a35;">
        <p style="font-size:12px;color:#7a7a7a;text-align:center;">
          This is an automated message — please do not reply directly.<br/>
          © ${new Date().getFullYear()} AQBITZ – Hardware & Software Solutions, Berlin.
        </p>
      </div>
    </body>
  `,
    });

    return res.json({
      success: true,
      message: "Emails sent (admin + auto-reply)",
    });
  } catch (error) {
    console.error("❌ ERROR SENDING EMAIL:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error,
    });
  }
};


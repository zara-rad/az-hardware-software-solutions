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
console.log("BACKEND RECEIVED LANGUAGE:", language);

    // ===============================
    //   1) MULTI-LANGUAGE TEMPLATES
    // ===============================

    const autoReplyTemplates = {
      en: {
        subject: (name) => `Thanks for reaching AQBITZ, ${name}!`,
        html: (name, service) => `
          <p>Hello <strong>${name}</strong>,</p>
          <p>Thank you for contacting AQBITZ Hardware & Software Solutions.</p>
          <p>Your message${
            service ? ` about <b>${service}</b>` : ""
          } has been received.</p>
          <p>We will reply within 48 hours.</p>
          <p>Regards,<br/>AQBITZ Support Team</p>
        `,
      },

      de: {
        subject: (name) => `Danke für Ihre Nachricht, ${name}!`,
        html: (name, service) => `
          <p>Hallo <strong>${name}</strong>,</p>
          <p>Vielen Dank für Ihre Kontaktaufnahme mit AQBITZ Hardware & Software Solutions.</p>
          <p>Wir haben Ihre Nachricht${
            service ? ` bezüglich <b>${service}</b>` : ""
          } erhalten.</p>
          <p>Unser Team meldet sich innerhalb von 48 Stunden.</p>
          <p>Mit freundlichen Grüßen,<br/>AQBITZ Support Team</p>
        `,
      },

      fa: {
        subject: (name) => `پیام شما دریافت شد ${name}!`,
        html: (name, service) => `
          <p><strong>${name}</strong> عزیز،</p>
          <p>از تماس شما با AQBITZ Hardware & Software Solutions سپاسگزاریم.</p>
          <p>پیام شما${
            service ? ` در مورد <b>${service}</b>` : ""
          } با موفقیت دریافت شد.</p>
          <p>تیم ما ظرف ۴۸ ساعت آینده با شما تماس خواهد گرفت.</p>
          <p>با احترام<br/>تیم پشتیبانی AQBITZ</p>
        `,
      },
    };

    // قالب درست را انتخاب کن (اگر نبود → انگلیسی)
    const template = autoReplyTemplates[language] || autoReplyTemplates.en;

    // ===============================
    //     VALIDATION
    // ===============================
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

    // ===============================
    //     SAVE MESSAGE IN DB
    // ===============================

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

    // ===============================
    //     EMAIL TO ADMIN
    // ===============================
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

    // ===============================
    //     AUTO-REPLY TO CUSTOMER
    // ===============================
    // ===============================
//     AUTO-REPLY TO CUSTOMER
// ===============================
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
            🌐 Visit Our Website
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












// import { Resend } from "resend";
// import ContactMessage from "../models/ContactMessage.js";

// export const sendContactForm = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       service,
//       budget,
//       serialNumber,
//       message,
//       language = "en",
//     } = req.body;

//     // ----- VALIDATION -----
//     if (!name || name.trim().length < 5) {
//       return res.status(400).json({
//         success: false,
//         message: "Name must be at least 5 characters long.",
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid email.",
//       });
//     }

//     // ----- SAVE MESSAGE IN DATABASE -----
//     await new ContactMessage({
//       name,
//       email,
//       phone,
//       service,
//       budget,
//       message,
//       serialNumber,
//     }).save();

//     const resend = new Resend(process.env.RESEND_API_KEY);

//     // ===============================
//     //     EMAIL TO ADMIN
//     // ===============================
//     await resend.emails.send({
//       from: "AQBITZ Contact <contact@aqbitz.de>",
//       to: process.env.CONTACT_RECEIVER,
//       reply_to: "contact@aqbitz.de",
//       subject: `📩 New Contact Message – ${name}`,
//       html: `
//         <h2 style="font-family:sans-serif;color:#555;">New Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Budget:</strong> ${budget}</p>
//         <p><strong>Serial Number:</strong> ${serialNumber || "Not provided"}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     // ===============================
//     //     AUTO-REPLY TO CUSTOMER
//     // ===============================
//     await resend.emails.send({
//       from: "AQBITZ Support <contact@aqbitz.de>",
//       to: email,
//       reply_to: "contact@aqbitz.de",
//       subject: `Thanks for reaching AQBITZ, ${name}!`,
//       html: `
//       <body style="margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif;background-color:#0d1117;color:#e0e0e0;">
//         <div style="max-width:600px;margin:40px auto;background:#111820;border-radius:12px;padding:32px;border:1px solid #1f2a35;">
          
//           <div style="text-align:center;margin-bottom:24px;">
//             <h2 style="color:#7a7a7a;margin:0;">AQBITZ Hardware & Software Solutions</h2>
//           </div>

//           <p style="font-size:16px;line-height:1.6;">Hello <strong>${name}</strong>,</p>

//           <p style="font-size:15px;line-height:1.6;">
//             Thank you for contacting <strong>AQBITZ Hardware & Software Solutions</strong>.<br/>
//             We’ve successfully received your message${
//               service ? ` about <b>${service}</b>` : ""
//             }.
//           </p>

//           <p style="font-size:15px;line-height:1.6;">
//             Our team will review your request and get back to you within <strong>48 hours</strong>.
//           </p>

//           <p style="font-size:15px;line-height:1.6;">
//             If your inquiry is urgent, please reach out directly:<br/>
//             📞 +49 176 3638 5183<br/>
//             📧 contact@aqbitz.de
//           </p>

//           <div style="margin-top:32px;text-align:center;">
//            <a 
//           href="https://aqbitz.de"
//           style="
//           padding:14px 32px;
//           display:inline-block;
//           border-radius:10px;
//           background:#00e2ad;
//           color:#000;
//           font-weight:600;
//           font-family:Arial, Helvetica, sans-serif;
//           text-decoration:none;
//            box-shadow:0 4px 15px rgba(0,255,200,0.4);
//           "
//           >
//          🌐 Visit Our Website
//           </a>
//           </div>

//           <hr style="margin:40px 0;border:none;border-top:1px solid #1f2a35;">
//           <p style="font-size:12px;color:#7a7a7a;text-align:center;">
//             This is an automated message — please do not reply directly.<br/>
//             © ${new Date().getFullYear()} AQBITZ – Hardware & Software Solutions, Berlin.
//           </p>
//         </div>
//       </body>
//       `,
//     });

//     return res.json({
//       success: true,
//       message: "Emails sent (admin + auto-reply)",
//     });
//   } catch (error) {
//     console.error("❌ ERROR SENDING EMAIL:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to send email",
//       error,
//     });
//   }
// };

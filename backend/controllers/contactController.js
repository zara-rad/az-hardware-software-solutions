import nodemailer from "nodemailer";
import dns from "dns";
import ContactMessage from "../models/ContactMessage.js";

export const sendContactForm = async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    // 🧩 ✅ مرحله ۱: بررسی اعتبار ورودی‌ها
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
        message: "Please enter a valid email address.",
      });
    }

    // ✅ بررسی دامنه‌ی ایمیل (MX Record)
    const domain = email.split("@")[1];
    const mxRecords = await new Promise((resolve, reject) => {
      dns.resolveMx(domain, (err, addresses) => {
        if (err || !addresses || addresses.length === 0) return reject();
        resolve(addresses);
      });
    }).catch(() => null);

    if (!mxRecords) {
      return res.status(400).json({
        success: false,
        message: "Email domain is invalid or unreachable.",
      });
    }

    // 🧩 ✅ مرحله ۲: ذخیره در دیتابیس
    const newMessage = new ContactMessage({
      name,
      email,
      service,
      budget,
      message,
    });
    await newMessage.save();

    // 🧩 ✅ مرحله ۳: تنظیم SMTP برای ارسال ایمیل
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    // 🧩 ✅ ارسال ایمیل برای ادمین
    await transporter.sendMail({
      from: `"AZ Hardware & Software Solutions" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#16f2b3;">New Contact Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr style="border:none;border-top:1px solid #ccc;margin-top:20px;">
        <p style="color:#888;">This message was sent via AZ Hardware & Software Solutions contact form.</p>
      `,
    });

    // 🧩 ✅ ارسال Auto-Reply برای کاربر
    await transporter.sendMail({
      from: `"AZ Hardware & Software Solutions" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
      <body style="margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif;background-color:#0d1117;color:#e0e0e0;">
        <div style="max-width:600px;margin:40px auto;background:#111820;border-radius:12px;padding:32px;border:1px solid #1f2a35;">
          <div style="text-align:center;margin-bottom:24px;">
            <img src="https://i.ibb.co/9yYcsdR/az-logo-light.png" alt="AZ Hardware & Software Solutions" style="width:120px;margin-bottom:10px;">
            <h2 style="color:#16f2b3;margin:0;">AZ Hardware & Software Solutions</h2>
          </div>

          <p style="font-size:16px;line-height:1.6;">Hello <strong>${name}</strong>,</p>
          <p style="font-size:15px;line-height:1.6;">
            Thank you for contacting <strong>AZ Hardware & Software Solutions</strong>.<br/>
            We’ve successfully received your message${service ? ` about <b>${service}</b>` : ""}.
          </p>

          <p style="font-size:15px;line-height:1.6;">
            Our team will carefully review your request and get back to you within <strong>48 hours</strong>.
          </p>

          <p style="font-size:15px;line-height:1.6;">
            If your inquiry is urgent, please reach out directly via:
            <br/>📞 +49 30 1234567
            <br/>📧 <a href="mailto:info@az-hardware.de" style="color:#16f2b3;text-decoration:none;">info@az-hardware.de</a>
          </p>

          <div style="margin-top:32px;text-align:center;">
            <a href="https://az-hardware.de" style="display:inline-block;padding:12px 30px;background:linear-gradient(90deg,#16f2b3,#06b6d4);color:#fff;text-decoration:none;border-radius:8px;font-weight:600;">
              Visit Our Website
            </a>
          </div>

          <hr style="margin:40px 0;border:none;border-top:1px solid #1f2a35;">
          <p style="font-size:12px;color:#7a7a7a;text-align:center;">
            This is an automated message — please do not reply directly.<br/>
            © ${new Date().getFullYear()} AZ Hardware & Software Solutions, Berlin.
          </p>
        </div>
      </body>
      `,
    });

    // 🧩 ✅ پاسخ نهایی برای فرانت‌اند
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};




// import nodemailer from "nodemailer";
// import ContactMessage from "../models/ContactMessage.js";

// export const sendContactForm = async (req, res) => {
//   try {
//     const { name, email, service, budget, message } = req.body;

//     // ✅ ذخیره در دیتابیس
//     const newMessage = new ContactMessage({
//       name,
//       email,
//       service,
//       budget,
//       message,
//     });
//     await newMessage.save();

//     // ✅ تنظیمات SMTP برای ارسال ایمیل
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.CONTACT_EMAIL,
//         pass: process.env.CONTACT_PASS,
//       },
//     });

//     // ✅ ارسال ایمیل برای ادمین (تو)
//     await transporter.sendMail({
//       from: `"AZ Hardware & Software Solutions" <${process.env.CONTACT_EMAIL}>`,
//       to: process.env.CONTACT_RECEIVER,
//       subject: `📩 New Contact Message from ${name}`,
//       html: `
//         <h2 style="font-family:sans-serif;color:#16f2b3;">New Contact Message Received</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Budget:</strong> ${budget}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//         <hr style="border:none;border-top:1px solid #ccc;margin-top:20px;">
//         <p style="color:#888;">This message was sent via AZ Hardware & Software Solutions contact form.</p>
//       `,
//     });

//     // ✅ ارسال Auto-Reply برای کاربر (نسخه‌ی تم‌دار)
//     await transporter.sendMail({
//       from: `"AZ Hardware & Software Solutions" <${process.env.CONTACT_EMAIL}>`,
//       to: email,
//       subject: `Thanks for reaching out, ${name}!`,
//       html: `
//       <body style="margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif;background-color:#0d1117;color:#e0e0e0;">
//         <div style="max-width:600px;margin:40px auto;background:#111820;border-radius:12px;padding:32px;border:1px solid #1f2a35;">
//           <div style="text-align:center;margin-bottom:24px;">
//             <img src="https://i.ibb.co/9yYcsdR/az-logo-light.png" alt="AZ Hardware & Software Solutions" style="width:120px;margin-bottom:10px;">
//             <h2 style="color:#16f2b3;margin:0;">AZ Hardware & Software Solutions</h2>
//           </div>

//           <p style="font-size:16px;line-height:1.6;">Hello <strong>${name}</strong>,</p>
//           <p style="font-size:15px;line-height:1.6;">
//             Thank you for contacting <strong>AZ Hardware & Software Solutions</strong>.<br/>
//             We’ve successfully received your message${service ? ` about <b>${service}</b>` : ""}.
//           </p>

//           <p style="font-size:15px;line-height:1.6;">
//             Our team will carefully review your request and get back to you within <strong>48 hours</strong>.
//           </p>

//           <p style="font-size:15px;line-height:1.6;">
//             If your inquiry is urgent, please reach out directly via:
//             <br/>📞 +49 30 1234567
//             <br/>📧 <a href="mailto:info@az-hardware.de" style="color:#16f2b3;text-decoration:none;">info@az-hardware.de</a>
//           </p>

//           <div style="margin-top:32px;text-align:center;">
//             <a href="https://az-hardware.de" style="display:inline-block;padding:12px 30px;background:linear-gradient(90deg,#16f2b3,#06b6d4);color:#fff;text-decoration:none;border-radius:8px;font-weight:600;">
//               Visit Our Website
//             </a>
//           </div>

//           <hr style="margin:40px 0;border:none;border-top:1px solid #1f2a35;">
//           <p style="font-size:12px;color:#7a7a7a;text-align:center;">
//             This is an automated message — please do not reply directly.<br/>
//             © ${new Date().getFullYear()} AZ Hardware & Software Solutions, Berlin.
//           </p>
//         </div>
//       </body>
//       `,
//     });

//     // ✅ پاسخ موفق برای فرانت‌اند
//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.error("❌ Error sending email:", error);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// };





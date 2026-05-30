const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const nodemailer = require("nodemailer");

const app = express();

/* ============================================================
   MIDDLEWARE
   ============================================================ */
app.use(cors({
  origin: [
    "https://giant-designs.vercel.app",
    "http://127.0.0.1:5500",
    "http://localhost:5500"
  ],
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

/* ============================================================
   MAILER
   ============================================================ */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ============================================================
   EMAIL SERVICES
   ============================================================ */
async function sendAdminEmail(data) {
  return transporter.sendMail({
    from: `"Giant Designs" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Lead: ${data.name}`,
    html: `
      <div style="font-family:Arial;padding:20px">
        <h2>New Project Inquiry</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Project Type:</b> ${data.projectType}</p>
        <p><b>Location:</b> ${data.location}</p>
        <hr/>
        <p><b>Message:</b><br>${data.message}</p>
      </div>
    `,
  });
}

async function sendAutoReply(data) {
  return transporter.sendMail({
    from: `"Giant Designs" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "We received your message — Giant Designs",
    html: `
      <div style="font-family:Arial;padding:20px">
        <h2>Thank you, ${data.name}</h2>
        <p>We've received your inquiry about <b>${data.projectType}</b>.</p>
        <p>Our team will respond shortly.</p>
        <br/>
        <p style="color:#888;font-size:12px">
          Giant Designs — Designing Spaces, Building Dreams
        </p>
      </div>
    `,
  });
}

/* ============================================================
   ROUTES
   ============================================================ */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, projectType, location, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await sendAdminEmail({ name, email, phone, projectType, location, message });
    await sendAutoReply({ name, email, projectType });

    return res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* ============================================================
   BOOT
   ============================================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
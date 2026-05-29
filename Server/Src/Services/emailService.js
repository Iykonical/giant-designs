const transporter = require("../config/mail");

exports.sendAdminEmail = async (data) => {
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
};

exports.sendAutoReply = async (data) => {
  return transporter.sendMail({
    from: `"Giant Designs" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "We received your message — Giant Designs",
    html: `
      <div style="font-family:Arial;padding:20px">
        <h2>Thank you, ${data.name}</h2>

        <p>We’ve received your inquiry about <b>${data.projectType}</b>.</p>

        <p>Our team will respond shortly.</p>

        <br/>
        <p style="color:#888;font-size:12px">
          Giant Designs — Designing Spaces, Building Dreams
        </p>
      </div>
    `,
  });
};
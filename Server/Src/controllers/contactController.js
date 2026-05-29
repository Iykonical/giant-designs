const emailService = require("../services/emailService");

exports.contactForm = async (req, res) => {
  try {
    const { name, email, phone, projectType, location, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await emailService.sendAdminEmail({
      name,
      email,
      phone,
      projectType,
      location,
      message,
    });

    await emailService.sendAutoReply({
      name,
      email,
      projectType,
    });

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
};
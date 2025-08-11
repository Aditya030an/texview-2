import contactModel from "../models/userContactModels.js";
import nodemailer from "nodemailer";
import consultancyModel from "../models/userConsultancyModels.js";

// POST: /api/contact
const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // console.log("bacjend data", req.body);

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return res
        .status(400)
        .json({
          success: false,
          message: "All required fields must be filled.",
        });
    }

    // Save to DB
    const newContact = new contactModel({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    await newContact.save();

    // Email to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Form submitted successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};

const handleConsultancyForm = async (req, res) => {
  try {
    const { name, email, phone, city, service } = req.body;

    // console.log("backend" , req.body);

    // Save to MongoDB
    const newEntry = new consultancyModel({ name, email, phone, city, service });

     await newEntry.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"TaxView Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: "New Tax Consultancy Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export {handleConsultancyForm , handleContactForm};

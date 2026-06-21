const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dns = require("dns");

const Contact = require("../models/Contact");

// Force IPv4 (helps on Render)
dns.setDefaultResultOrder("ipv4first");

console.log("Creating transporter...");

const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 587,
secure: false,
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS,
},
connectionTimeout: 10000,
greetingTimeout: 10000,
socketTimeout: 10000,
});

router.post("/", async (req, res) => {
console.log("=================================");
console.log("ROUTE HIT");
console.log("Request Body:", req.body);

try {
const { name, email, enquiry } = req.body;

console.log("Creating MongoDB document...");

const contact = await Contact.create({
  name,
  email,
  enquiry,
});

console.log("MongoDB document created");
console.log("BEFORE EMAIL");

const info = await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: "balajitheprogrammer@gmail.com",
  subject: "New Portfolio Enquiry",
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Enquiry:</strong> ${enquiry}</p>
  `,
});

console.log("EMAIL SENT");
console.log("Message ID:", info.messageId);
console.log("Accepted:", info.accepted);
console.log("Rejected:", info.rejected);

console.log("SENDING RESPONSE TO FRONTEND");

return res.status(201).json({
  success: true,
  message: "Enquiry submitted successfully",
  data: contact,
});

} catch (error) {
console.log("ERROR OCCURRED");
console.error(error);

return res.status(500).json({
  success: false,
  message: error.message,
});

}
});

module.exports = router;
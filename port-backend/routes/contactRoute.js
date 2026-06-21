const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const Contact = require("../models/Contact");

console.log("Creating transporter...");

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS,
},
});

transporter.verify((error, success) => {
if (error) {
console.log("VERIFY ERROR:", error);
} else {
console.log("MAIL SERVER READY");
}
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


console.log("BEFORE EMAIL");

res.status(201).json(contact);


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

console.log("SENDING RESPONSE TO FRONTEND");


console.log("RESPONSE SENT");
console.log("=================================");

} catch (error) {
console.log("ERROR OCCURRED");
console.log(error);

res.status(500).json({
  success: false,
  message: error.message,
});

}
});

module.exports = router;
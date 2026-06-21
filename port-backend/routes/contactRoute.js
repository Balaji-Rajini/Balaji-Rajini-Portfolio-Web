const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const Contact = require("../models/Contact");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


router.post("/", async (req, res) => {
  console.log("Route Hitted");

  try {
    const { name, email, enquiry } = req.body;

    console.log("Route Hitted")
    const contact = await Contact.create({
      name,
      email,
      enquiry,
    });

    console.log("Saved:", contact);
console.log("BEfore email")
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: "balajitheprogrammer@gmail.com",
    //   subject: "New Portfolio Enquiry",
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Enquiry:</strong> ${enquiry}</p>
    //   `,
    // });

    console.log("After Email ");

    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
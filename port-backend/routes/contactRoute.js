const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
try {
const { name, email, enquiry } = req.body;

if (!name || !email || !enquiry) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

const contact = await Contact.create({
  name,
  email,
  enquiry,
});

return res.status(201).json({
  success: true,
  message: "Enquiry submitted successfully",
  data: contact,
});

} catch (error) {
console.error("Contact Form Error:", error);

return res.status(500).json({
  success: false,
  message: "Internal Server Error",
});

}
});

module.exports = router;
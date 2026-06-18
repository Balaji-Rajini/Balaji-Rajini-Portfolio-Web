const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
    console.log("Route Hitted")
  try {
    const { name, email, enquiry } = req.body;

    const contact = await Contact.create(req.body)
console.log("Saved" , contact)

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
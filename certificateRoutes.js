const express = require("express");
const router = express.Router();
const Certificate = require("../models/certificate");

// Create
router.post("/", async (req, res) => {
    try {
        const certificate = await Certificate.create(req.body);
        res.status(201).json(certificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All
router.get("/", async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get One
router.get("/:id", async (req, res) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        res.json(certificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(certificate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        await Certificate.findByIdAndDelete(req.params.id);
        res.json({ message: "Certificate Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
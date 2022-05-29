const express = require("express");
const uefa_details = require("../models/uefa_details");
const router = express.Router();

// POST Data To uefa_details collection
router.post("/addplayer", async (req, res) => {
    try {
        const addrecords = await new uefa_details(req.body)
        addrecords.save()
        res.status(201).json({
            message: "Your Player's Record Inserted Successfully"
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
})
module.exports = router
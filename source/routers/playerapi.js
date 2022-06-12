const express = require("express");
const uefa_details = require("../models/uefa_details");
const router = express.Router();

// API-1 : This API is TO POST Data To uefa_details collection
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
// API-2 : This API is TO GET all Data from uefa_details collection
router.get("/all", async (req, res) => {
    try {
        const all = await uefa_details.find();

        res.status(200).json({
            message: "All Players",
            data: all
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
// API-3 : This API is TO GET single Data based on the player id from uefa_details collection
router.get("/all/:id", async (req, res) => {
    try {
        const one = await uefa_details.findById(req.params.id);

        res.status(200).json({
            message: "Player Details",
            data: one
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
// API-4 : This API iS TO GET specific Data from uefa_details collection based on goals
router.get("/goals", async (req, res) => {
    try {
        const goal = await uefa_details.find({ Goals: { $gte: 10 } });
        res.status(200).json({
            message: "These Are The Records Of Those Players Who Did Goals Grater Than Equal To Ten",
            data: goal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
})
// API-5 : This API iS TO GET specific Data from uefa_details collection based on penalties
router.get("/penalties", async (req, res) => {
    try {
        const penalty = await uefa_details.find({ Penalty: { $lte: 10, $gte: 5 } });
        res.status(200).json({
            message: "These Are The Records Of Those Players Who Did Penalty Kicks Greater Than Equal To Five & Less Than Equal To Ten",
            data: penalty
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
})
// API-6 : This API iS TO GET specific Data from uefa_details collection based on yellow cards
router.get("/yellowcards", async (req, res) => {
    try {
        const yellowcard = await uefa_details.find({ Yellow_Card : { $lte: 0 } });

        res.status(200).json({
            message: "These Are The Records Of Those Players Who Got Yellow Cards Less Than Equal To Zero",
            data: yellowcard
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
// API-7 : This API is to update the record with respect to player id to uefa_details collection
router.put("/update/:id", async (req, res) => {
    try {
        const one = await uefa_details.findById(req.params.id);
        const updateone = await one.update(req.body)
        res.status(200).json({
            message: "Player",
            data: updateone
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
// API-8 : This API is to Patch specific data to the uefa_collection
router.patch("/patch/:id", async (req, res) => {
    try {
        const one = await uefa_details.findById(req.params.id);
        one.Goals = req.body.Goals
        const updateone = await one.save()
        res.status(200).json({
            message: "Player",
            data: updateone
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
// API-9 : This API is to delete data based on id from uefa_details collection
router.delete("/delete/:id", async (req, res) => {
    try {
        const one = await uefa_details.findById(req.params.id);
        
        one.delete()
        res.status(200).json({
            message: "Player",
            data: one
        })
    } catch (error) {
        res.status(500).json({

            message: error.message
        })

    }
})
module.exports = router
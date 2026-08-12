const express = require("express");

const router = express.Router();

/* ================================
   CONTACT MESSAGE
================================ */

router.post("/", async(req, res) => {

    const { name, email, message } = req.body;


    // Basic validation

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Name, email and message are required."
        });
    }


    try {

        // Get MongoDB database from Express

        const db = req.app.locals.db;


        // Save contact message

        const result = await db.collection("contacts").insertOne({
            name,
            email,
            message,
            createdAt: new Date()
        });


        console.log("New contact message saved:", result.insertedId);


        res.status(201).json({
            success: true,
            message: "Message received successfully."
        });


    } catch (error) {

        console.error("Failed to save contact message:", error);


        res.status(500).json({
            success: false,
            message: "Failed to save message."
        });

    }

});


module.exports = router;
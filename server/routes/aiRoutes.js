const express = require("express");
const portfolioContext = require("../data/portfolioContext");

const router = express.Router();


/* ================================
   GEMINI AI
================================ */

let ai;

async function getAI() {

    if (!ai) {

        const { GoogleGenAI } =
        await
        import ("@google/genai");

        ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

    }

    return ai;
}


/* ================================
   AI CHAT
================================ */

router.post("/", async(req, res) => {

    const { message } = req.body;


    // Basic validation

    if (!message || !message.trim()) {

        return res.status(400).json({
            success: false,
            message: "Message is required."
        });

    }


    try {

        const client = await getAI();


        const interaction =
            await client.interactions.create({

                model: "gemini-3.6-flash",

                system_instruction: portfolioContext,

                input: message

            });


        const reply = interaction.output_text;


        res.json({

            success: true,
            reply

        });


    } catch (error) {

        console.error(
            "Gemini AI request failed:",
            error
        );


        res.status(500).json({

            success: false,

            message: "Unable to get an AI response."

        });

    }

});


module.exports = router;
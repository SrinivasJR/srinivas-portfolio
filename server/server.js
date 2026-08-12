const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


/* ================================
   MIDDLEWARE
================================ */

app.use(cors());

app.use(express.json());


/* ================================
   MONGODB
================================ */

const client = new MongoClient(
    process.env.MONGODB_URI
);

let db;


async function connectDatabase() {

    try {

        await client.connect();

        db = client.db("srinivas_portfolio");

        app.locals.db = db;

        console.log(
            "MongoDB connected successfully ✅"
        );

        return db;

    } catch (error) {

        console.error(
            "MongoDB connection failed ❌"
        );

        console.error(error.message);

        process.exit(1);
    }
}


/* ================================
   BASIC ROUTES
================================ */

app.get("/", (req, res) => {

    res.json({
        message: "Srinivas Portfolio API is running 🚀"
    });

});


app.get("/api/health", (req, res) => {

    res.json({
        status: "OK",
        message: "Backend is healthy"
    });

});


/* ================================
   API ROUTES
================================ */

app.use(
    "/api/contact",
    contactRoutes
);


app.use(
    "/api/chat",
    aiRoutes
);


/* ================================
   START SERVER
================================ */

async function startServer() {

    await connectDatabase();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(
            `Server running on port ${PORT}`
        );
    });

}


startServer();
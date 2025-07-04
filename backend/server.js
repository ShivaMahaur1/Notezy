import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt); // Log incoming prompt
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );
    console.log("Gemini API response:", response.data); // Log Gemini response
    res.json(response.data);
  } catch (error) {
    console.error("Error from Gemini API:", error.response?.data || error.message); // Log error details
    res.status(500).json({ error: error.message, details: error.response?.data });
  }
});

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
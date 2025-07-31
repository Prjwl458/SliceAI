const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

if (!process.env.API_KEY || process.env.API_KEY === 'YOUR_API_KEY_HERE') {
    console.error('FATAL ERROR: API_KEY is not set in the .env file.');
    console.error('Please set your API key in the .env file and restart the server.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// API endpoint for summarization
app.post('/summarize', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided for summarization.' });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const prompt = `Summarize the following text: ${text}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const summary = response.text();
        res.json({ summary });
    } catch (error) {
        console.error('Error during summarization:', error.message);
        res.status(500).json({ error: 'Failed to summarize text.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

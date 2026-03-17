require('dotenv').config();
const express = require('express');
const multer = require('multer');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// OpenRouter — free vision models, works worldwide
const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/identify', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image provided' });
    }

    const base64Image = req.file.buffer.toString('base64');
    const mimeType = req.file.mimetype;

    const response = await client.chat.completions.create({
      model: 'meta-llama/llama-3.2-11b-vision-instruct',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:${mimeType};base64,${base64Image}` },
            },
            {
              type: 'text',
              text: `Analyze this image and identify any insect present. Respond with ONLY a valid JSON object — no markdown, no code blocks, no extra text, just raw JSON.

If an insect is found:
{
  "found": true,
  "name": "Common name of the insect",
  "scientificName": "Scientific binomial name",
  "emoji": "A single relevant emoji",
  "classification": {
    "order": "Insect order",
    "family": "Family name",
    "genus": "Genus name"
  },
  "description": "2-3 engaging sentences describing this insect",
  "habitat": "Where this insect typically lives",
  "diet": "What this insect eats",
  "size": "Typical size range (e.g. 5-15 mm)",
  "lifespan": "Typical lifespan",
  "dangerLevel": "harmless OR low OR medium OR high",
  "dangerDescription": "Brief description of risks or benefits to humans",
  "interestingFacts": ["Fact 1", "Fact 2", "Fact 3"],
  "confidence": "high OR medium OR low"
}

If no insect is found:
{
  "found": false,
  "message": "Brief explanation of what was seen"
}`,
            },
          ],
        },
      ],
    });

    const text = response.choices[0].message.content.trim();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to identify insect',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🦋 InsectID running at http://localhost:${PORT}`);
});

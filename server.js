const express = require('express');
const path = require('path');
const GeneralReview = require('./feedback-bot-main/models/GeneralReview');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await GeneralReview.find();
    res.json(reviews.map(r => r.toJSON()));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Serve the reviews.html as the main page for reviews
app.get('/reviews', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reviews.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
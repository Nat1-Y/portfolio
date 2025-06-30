// server.js

const express = require('express');
const cors = require('cors'); // ✅ Import cors
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // ✅ Enable CORS for all origins
app.use(express.json());
app.use(express.static('public'));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
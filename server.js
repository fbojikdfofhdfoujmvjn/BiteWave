const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bitewave', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Serve the admin page
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html');
});

// Import and use product routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

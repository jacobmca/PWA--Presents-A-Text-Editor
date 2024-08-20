const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Static Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

// Body Parsing Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes
require('./routes/htmlRoutes')(app);

// Catch-All Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Server Listening
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

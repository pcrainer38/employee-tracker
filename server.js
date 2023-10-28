const express = require('express');
const msql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
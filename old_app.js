const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'html' folder
app.use(express.static(path.join(__dirname, 'html')));

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

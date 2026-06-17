// server.js — HTTP entry point for the 12nov07 tutorial.
// Implements an Express.js application exposing two GET endpoints.
const express = require('express');

// Instantiate the Express application (replaces the deferred native `http` layer).
const app = express();

// Port is configurable via the PORT environment variable; defaults to 3000 for local tutorial use.
const PORT = process.env.PORT || 3000;

// Baseline greeting endpoint — preserves the tutorial's original "Hello world" behavior.
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// New endpoint added per the feature request — returns the literal "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Bind the server to the port and log the listening address.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

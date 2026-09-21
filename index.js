const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'DevOps assignment app' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Only start the server when run directly (node index.js),
// so that require('./index') in tests does not open a listener.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
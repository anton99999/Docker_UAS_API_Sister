const express = require('express');
const app = express();

// Definisikan rute endpoint
app.get('/', (req, res) => {
  res.send('API Berjalan');
});

// Jalankan server pada port tertentu
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
const express = require('express');
const cors = require('cors');
const { initDB } = require('./models');
const uploadRoutes = require('./routes/uploadRoutes');
const positionRoutes = require('./routes/positionRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', uploadRoutes);
app.use('/api', positionRoutes);

initDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to initialize the database:', error);
  });

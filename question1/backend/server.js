const express = require('express');
const cors = require('cors');
const userRoutes = require('./userroute');
const postRoutes = require('./postroute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Social Media Analytics API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
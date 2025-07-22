const express = require('express');
const cors = require('cors');
require('dotenv').config();
console.log("JWT_SECRET loaded:", process.env.JWT_SECRET);

const authRoutes = require('./routes/auth');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});

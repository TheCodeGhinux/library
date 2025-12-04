import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./middlewares/logger.js";
import cors from 'cors'
import mongoose from "mongoose";
import bookRoutes from './routes/book.js'
import authorRoutes from './routes/author.js'
import borrowRoutes from './routes/borrow.js'
import authRoutes from './routes/auth.js';

import dotenv from 'dotenv';

dotenv.config()


const PORT = 3002
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/library-manager-db')
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

// Middlewares
app.use(helmet())
app.use(cors())
app.use(express.json())


app.use(morgan('dev'))
app.use(logger)


app.get('/health', (req, res) => {
  return res.status(200).json({message: 'Welcome to Library'})
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/authors', authorRoutes)
app.use('/api/borrow', borrowRoutes)


app.use((req, res) => {
  res.status(404).json({message: 'Route not found'})
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log('===============================================');
  console.log(`🚀Server started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log('===============================================');
})
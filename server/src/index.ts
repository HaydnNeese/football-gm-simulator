import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import playerRoutes from './routes/playerRoutes';
import teamRoutes from './routes/teamRoutes';
import { Request, Response } from 'express';

dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

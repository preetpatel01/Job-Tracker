import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
//routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
//public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

// Routes
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// Make client files available in public folder
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

// Handle undefined routes
app.use('*', (req, res) => {
    res.status(404).json( { msg: 'Not Found' });
});

// Error handling middleware
app.use(errorHandlerMiddleware);

// Set the port to environment var PORT, if available
const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    // Start server and listen on the specified port
    app.listen(port, () => {
        console.log(`Server running on port ${port}...`);
    });

} catch (error) {
    console.log(error);
    process.exit(1);
}

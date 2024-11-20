const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');

dotenv.config();
connectDB();

const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
const app = express();

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.json());
app.use(cors(corsOptions));
app.use(passport.initialize());

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

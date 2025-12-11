import express from 'express';
import dotenv from 'dotenv';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import db from './db.js';
import Person from './person.js';
import menuItem from './models/menuItem.js';
import router from './routes/personRoutes.js';
dotenv.config();

// router.use('/person', personRoutes);
const app = express(); 
app.use(express.json());
const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send('Hotel Management System API is running');
});

// Use person routes
app.use('/person', personRoutes);

// Use menu routes
app.use('/menu', menuRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

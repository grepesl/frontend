import express from 'express';
import cors from 'cors';

import carsRoutes from './routes/carsRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(`Server started on port 5000.`);
});

app.use('/cars', carsRoutes)
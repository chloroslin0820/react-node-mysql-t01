import express from 'express';
import dotenv from 'dotenv';
import booksRouter from './route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', booksRouter);

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
})

app.get('/', (req, res) => {
    res.json('Hello this is the backend');
})

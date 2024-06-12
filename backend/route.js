import express from 'express';
import { getALlBooks } from './controller.js';
import { createBook } from './controller.js';


const router = express.Router();

router.get('/books', getALlBooks);

router.post('/books', createBook);

export default router;
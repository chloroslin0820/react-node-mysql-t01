import express from 'express';
import { getALlBooks } from './controller.js';
import { createBook } from './controller.js';
import { deleteBook } from './controller.js';
import { updateBook } from './controller.js';


const router = express.Router();

router.get('/books', getALlBooks);

router.post('/books', createBook);

router.delete('/books/:id', deleteBook);

router.put('/books/:id', updateBook);

export default router;
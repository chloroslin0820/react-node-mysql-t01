import express from 'express';
import { getALlBooks } from './controller.js';


const router = express.Router();

router.get('/books', getALlBooks);

export default router;
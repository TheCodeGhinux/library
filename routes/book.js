import express from 'express'
import { requireAuth, requireLibrarian } from '../middlewares/auth.js'
import {createBook, getBookById, getBookByName, getBooks} from '../controller/book.js';


const router = express.Router()

router.post('/', requireAuth, requireLibrarian, createBook);
router.get('/', getBooks);
router.get('/name/:name', getBookByName);
router.get('/:id', getBookById);
// router.put('/:id', requireAuth, requireLibrarian, );
// router.delete('/:id', requireAuth, requireLibrarian, createBook);


export default router
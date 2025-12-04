import express from 'express'
import { requireAuth } from '../middlewares/auth.js';
import { borrowBook } from '../controller/borrow.js';


const router = express.Router();

router.post('/', requireAuth, borrowBook)


export default router
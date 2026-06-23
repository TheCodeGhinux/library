import express from 'express'
import { requireAuth } from '../middlewares/auth.js';
import { login, register } from '../controller/auth.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

router.post('/', register)
router.post('/login', login)



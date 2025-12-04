import express from 'express'
import { createAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from '../controller/author.js'


const router = express.Router()

router.post('/', createAuthor)
router.get('/', getAuthors)
router.get('/:id', getAuthorById)
router.put('/:id', updateAuthor)
router.delete('/:id', deleteAuthor)


export default router
import { Router } from 'express'
import genresRouter from './genres'
import authorsRouter from './author'
import booksRouter from './books'

const router = Router()

router.use('/genre', genresRouter)
router.use('/author', authorsRouter)
router.use('/book',booksRouter)
export default router
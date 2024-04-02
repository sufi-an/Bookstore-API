import { Router } from 'express'
import genresRouter from './genres'
import authorsRouter from './author'
import booksRouter from './books'
import usersRouter from './user'
const router = Router()

router.use('/genre', genresRouter)
router.use('/author', authorsRouter)
router.use('/book',booksRouter)
router.use('/user',usersRouter)
export default router
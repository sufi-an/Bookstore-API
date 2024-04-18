import { Router } from 'express'
import genresRouter from './genres'
import authorsRouter from './author'
import booksRouter from './books'
import usersRouter from './user'
import cartsRouter from './cart'
import ordersRouter from './order'
const router = Router()

router.use('/genre', genresRouter)
router.use('/author', authorsRouter)
router.use('/book',booksRouter)
router.use('/user',usersRouter)
router.use('/cart',cartsRouter)
router.use('/order',ordersRouter)

export default router
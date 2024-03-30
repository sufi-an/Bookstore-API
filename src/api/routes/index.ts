import { Router } from 'express'
import genresRouter from './genres'
import authorsRouter from './author'

const router = Router()

router.use('/genre', genresRouter)
router.use('/author', authorsRouter)

export default router
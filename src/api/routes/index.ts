import { Router } from 'express'
import genresRouter from './genres'

const router = Router()

router.use('/genre', genresRouter)

export default router
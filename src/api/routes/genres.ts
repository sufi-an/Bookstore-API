import { Router, Request, Response} from 'express'

import * as genreController from '../controllers/genre'
import {CreateGenreDTO, FilterGenresDTO, UpdateGenreDTO} from '../dto/genre.dto'

const genresRouter = Router()

genresRouter.get(':/id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await genreController.getById(id)
    return res.status(200).send(result)
})

genresRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateGenreDTO = req.body
    
    const result = await genreController.update(id, payload)
    return res.status(201).send(result)
})

genresRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await genreController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

genresRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateGenreDTO = req.body

    const result = await genreController.create(payload)
    return res.status(200).send(result)
})

genresRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterGenresDTO = req.query

    const results = await genreController.getAll(filters)
    return res.status(200).send(results)
})

export default genresRouter
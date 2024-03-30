import { Router, Request, Response} from 'express'

import * as authorController from '../controllers/Author'
import {CreateAuthorDTO, FilterAuthorsDTO, UpdateAuthorDTO} from '../dto/author.dto'

const authorsRouter = Router()

authorsRouter.get(':/id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await authorController.getById(id)
    return res.status(200).send(result)
})

authorsRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateAuthorDTO = req.body
    
    const result = await authorController.update(id, payload)
    return res.status(201).send(result)
})

authorsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await authorController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

authorsRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateAuthorDTO = req.body

    const result = await authorController.create(payload)
    return res.status(200).send(result)
})

authorsRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterAuthorsDTO = req.query

    const results = await authorController.getAll(filters)
    return res.status(200).send(results)
})

export default authorsRouter
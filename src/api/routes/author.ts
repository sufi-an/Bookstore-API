import { Router, Request, Response} from 'express'

import AuthorController from '../controllers/Author'
import {CreateAuthorDTO, FilterAuthorsDTO, UpdateAuthorDTO} from '../dto/author.dto'

const authorsRouter = Router()
const controller = new AuthorController ()

authorsRouter.get('/:id', async (req: Request, res: Response) => {

    const id = Number(req.params.id)
  
    const result = await controller.getById(id)
    return res.send(result)
})

authorsRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateAuthorDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.send(result)
})

authorsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.send(result)
})

authorsRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateAuthorDTO = req.body

    const result = await controller.create(payload)
    return res.send(result)
})

authorsRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterAuthorsDTO = req.query
    console.log('get all')
    const results = await controller.getAll(filters)
    return res.send(results)
})

export default authorsRouter
import { Router, Request, Response} from 'express'

import AuthorController from '../controllers/Author'
import {CreateAuthorDTO, FilterAuthorsDTO, UpdateAuthorDTO} from '../dto/author.dto'
import {IsAuthenticated} from '../middlewares/authMiddleware'
const booksRouter = Router()
const authorsRouter = Router()
const controller = new AuthorController ()

authorsRouter.get('/:id',IsAuthenticated, async (req: Request, res: Response) => {

    const id = Number(req.params.id)
  
    const result = await controller.getById(id)
    return res.send(result)
})

authorsRouter.put('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateAuthorDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.send(result)
})

authorsRouter.delete('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.send(result)
})

authorsRouter.post('/',IsAuthenticated, async (req: Request, res: Response) => {
    const payload:CreateAuthorDTO = req.body

    const result = await controller.create(payload)
    return res.send(result)
})

authorsRouter.get('/',IsAuthenticated, async (req: Request, res: Response) => {
    const filters:FilterAuthorsDTO = req.query
    console.log('get all')
    const results = await controller.getAll(filters)
    return res.send(results)
})

export default authorsRouter
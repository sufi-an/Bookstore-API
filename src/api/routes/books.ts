import { Router, Request, Response} from 'express'

import BookController from '../controllers/Book'
import {CreateBookDTO, FilterBooksDTO, UpdateBookDTO} from '../dto/book.dto'
import {IsAuthenticated} from '../middlewares/authMiddleware'
const booksRouter = Router()
const controller = new BookController()

booksRouter.get('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await controller.getById(id)
    return res.status(200).send(result)
})

booksRouter.put('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateBookDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.status(201).send(result)
})

booksRouter.delete('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

booksRouter.post('/',IsAuthenticated, async (req: Request, res: Response) => {
    const payload:CreateBookDTO = req.body

    const result = await controller.create(payload)
    return res.status(200).send(result)
})

booksRouter.get('/',IsAuthenticated, async (req: Request, res: Response) => {
    const filters:FilterBooksDTO = req.query

    const results = await controller.getAll(filters)
    return res.status(200).send(results)
})

export default booksRouter
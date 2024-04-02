import { Router, Request, Response} from 'express'

import CartController from '../controllers/Cart'
import {CreateCartDTO, FilterCartsDTO, UpdateCartDTO} from '../dto/cart.dto'
import {IsAuthenticated} from '../middlewares/authMiddleware'
import { RequestWithUserRole } from '../interfaces/user.interface'
const cartsRouter = Router()
const controller = new CartController()

cartsRouter.get('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await controller.getById(id)
    return res.status(200).send(result)
})


cartsRouter.put('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateCartDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.status(201).send(result)
})

cartsRouter.delete('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

cartsRouter.post('/',IsAuthenticated, async (req: RequestWithUserRole, res: Response) => {
    const payload:CreateCartDTO = req.body
    
    payload.userId=req.user!.id

    if(!payload.userId){
        return res.status(400)
    }

    const result = await controller.create(payload)
    return res.status(200).send(result)
})

cartsRouter.get('/',IsAuthenticated, async (req: Request, res: Response) => {
    const filters:FilterCartsDTO = req.query

    const results = await controller.getAll(filters)
    return res.status(200).send(results)
})

export default cartsRouter
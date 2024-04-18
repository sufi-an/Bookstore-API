import { Router, Request, Response} from 'express'

import OrderController from '../controllers/Order'
import {CreateOrderDTO, FilterOrdersDTO, UpdateOrderDTO} from '../dto/order.dto'
import {IsAuthenticated} from '../middlewares/authMiddleware'
import { RequestWithUserRole } from '../interfaces/user.interface'
const ordersRouter = Router()
const controller = new OrderController()

ordersRouter.get('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await controller.getById(id)
    return res.status(200).send(result)
})


ordersRouter.put('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateOrderDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.status(201).send(result)
})

ordersRouter.delete('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

ordersRouter.post('/',IsAuthenticated, async (req: RequestWithUserRole, res: Response) => {
    const payload:CreateOrderDTO = req.body
    
    payload.userId=req.user!.id

    if(!payload.userId){
        return res.status(400)
    }

    const result = await controller.create(payload)
    return res.status(200).send(result)
})

ordersRouter.get('/',IsAuthenticated, async (req: Request, res: Response) => {
    const filters:FilterOrdersDTO = req.query

    const results = await controller.getAll(filters)
    return res.status(200).send(results)
})

export default ordersRouter
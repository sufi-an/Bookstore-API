import { Router, Request, Response} from 'express'

import UserController from '../controllers/User'
import {CreateUserDTO, FilterUsersDTO, UpdateUserDTO} from '../dto/user.dto'
import { IsAuthenticated } from '../middlewares/authMiddleware'
import { RequestWithUserRole } from '../interfaces/user.interface'

const usersRouter = Router()
const controller = new UserController()

usersRouter.get('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await controller.getById(id)
    return res.status(200).send(result)
})

usersRouter.put('/:id', IsAuthenticated,async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateUserDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.status(201).send(result)
})

usersRouter.delete('/:id',IsAuthenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await controller.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

usersRouter.post('/registration', async (req: Request, res: Response) => {
    const payload:CreateUserDTO = req.body

    const result = await controller.registration(payload)
    return res.status(200).send(result)
})
usersRouter.post('/login', async (req: Request, res: Response) => {
    const payload:CreateUserDTO = req.body

    const result = await controller.login(payload)
    return res.status(200).send(result)
})

usersRouter.get('/',IsAuthenticated, async (req: Request, res: Response) => {
    const filters:FilterUsersDTO = req.query

    const results = await controller.getAll(filters)
    return res.status(200).send(results)
})

usersRouter.get('/loggedInUser',IsAuthenticated,async (req: RequestWithUserRole, res: Response) => {
    console.log(req.user);
    
    return res.status(200).send(req.user?req.user:null)
})

export default usersRouter
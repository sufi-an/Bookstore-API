import { UserLoginToken } from '../../../db/models/User';
import * as service from '../../../db/services/userService'
import {CreateUserDTO, UpdateUserDTO, FilterUsersDTO} from '../../dto/user.dto'
import { User } from '../../interfaces';

import * as mapper from './mapper'
import { Get,Post,Put,Delete, Route,Body,Path } from "tsoa";

@Route("user")
export default class UserController {


@Get('/')
public  async getAll(  filters: FilterUsersDTO): Promise<User[]>  {
    // return (await service.getAll(filters)).map(mapper.toUser)
    return await service.getAll(filters)
}
@Post("/registration")
 public async registration(@Body() payload: CreateUserDTO): Promise<User|string>  {
    // return mapper.toUser(await service.create(payload))
    return await service.create(payload)
}
@Post("/login")
 public async login(@Body() payload: CreateUserDTO): Promise<UserLoginToken>  {
    // return mapper.toUser(await service.create(payload))
    return await service.login(payload)
}
@Put('/:id')
 public  async update (id: number, @Body() payload: UpdateUserDTO): Promise<User>  {
    // return mapper.toUser(await service.update(id, payload))
    return await service.update(id, payload)
}
@Get('/:id')
 public  async getById ( id: number): Promise<User|string>  {
    // return mapper.toUser(await service.getById(id))
    console.log('get by id')
    return await service.getById(id)
}
@Delete('/:id')
 public  async deleteById(@Body() id: number): Promise<Boolean>  {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}


}
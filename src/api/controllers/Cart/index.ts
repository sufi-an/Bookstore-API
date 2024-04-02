import * as service from '../../../db/services/cartService'
import {CreateCartDTO, UpdateCartDTO, FilterCartsDTO} from '../../dto/cart.dto'
import { Cart } from '../../interfaces';

import * as mapper from './mapper'
import { Get,Post,Put,Delete, Route,Body,Path } from "tsoa";

@Route("cart")
export default class CartController {


@Get('/')
public  async getAll(  filters: FilterCartsDTO): Promise<Cart[]>  {
    // return (await service.getAll(filters)).map(mapper.toCart)
    return await service.getAll(filters)
}
@Post("/")
 public async create(@Body() payload: CreateCartDTO): Promise<Cart>  {
    // return mapper.toCart(await service.create(payload))
    
    return await service.create(payload)
}
@Put('/:id')
 public  async update (id: number, @Body() payload: UpdateCartDTO): Promise<Cart>  {
    // return mapper.toCart(await service.update(id, payload))
    return await service.update(id, payload)
}
@Get('/:id')
 public  async getById ( id: number): Promise<Cart|string>  {
    // return mapper.toCart(await service.getById(id))
    console.log('get by id')
    return await service.getById(id)
}
@Delete('/:id')
 public  async deleteById(@Body() id: number): Promise<Boolean>  {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}


}
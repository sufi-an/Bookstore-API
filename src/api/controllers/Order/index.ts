
import * as service from '../../../db/services/orderService'
import {CreateOrderDTO, UpdateOrderDTO, FilterOrdersDTO} from '../../dto/order.dto'
import { Order } from '../../interfaces';


import { Get,Post,Put,Delete, Route,Body,Path } from "tsoa";

@Route("order")
export default class OrderController {


@Get('/')
public  async getAll(  filters: FilterOrdersDTO): Promise<Order[]>  {
    // return (await service.getAll(filters)).map(mapper.toOrder)
    return await service.getAll(filters)
}
@Post("/")
 public async create(@Body() payload: CreateOrderDTO): Promise<Order|string>  {
    // return mapper.toOrder(await service.create(payload))
    
    return await service.create(payload)
    // return 'Under Construction'
}
@Put('/:id')
 public  async update (id: number, @Body() payload: CreateOrderDTO): Promise<Order>  {
    // return mapper.toOrder(await service.update(id, payload))
    return await service.update(id, payload)
}
@Get('/:id')
 public  async getById ( id: number): Promise<string>  {
    // return mapper.toOrder(await service.getById(id))
    console.log('get by id')
    return await "service.getById(id)"
}
@Delete('/:id')
 public  async deleteById(@Body() id: number): Promise<Boolean>  {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}


}
import * as service from '../../../db/services/bookService'
import {CreateBookDTO, UpdateBookDTO, FilterBooksDTO} from '../../dto/book.dto'
import { Book } from '../../interfaces';

import * as mapper from './mapper'
import { Get,Post,Put,Delete, Route,Body,Path } from "tsoa";

@Route("book")
export default class BookController {


@Get('/')
public  async getAll(  filters: FilterBooksDTO): Promise<Book[]>  {
    // return (await service.getAll(filters)).map(mapper.toBook)
    return await service.getAll(filters)
}
@Post("/")
 public async create(@Body() payload: CreateBookDTO): Promise<Book>  {
    // return mapper.toBook(await service.create(payload))
    return await service.create(payload)
}
@Put('/:id')
 public  async update (id: number, @Body() payload: UpdateBookDTO): Promise<Book>  {
    // return mapper.toBook(await service.update(id, payload))
    return await service.update(id, payload)
}
@Get('/:id')
 public  async getById ( id: number): Promise<Book|string>  {
    // return mapper.toBook(await service.getById(id))
    console.log('get by id')
    return await service.getById(id)
}
@Delete('/:id')
 public  async deleteById(@Body() id: number): Promise<Boolean>  {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}


}
import * as service from '../../../db/services/authorService'
import {CreateAuthorDTO, UpdateAuthorDTO, FilterAuthorsDTO} from '../../dto/author.dto'
import {Author} from '../../interfaces'
import * as mapper from './mapper'
import { Get,Post,Put,Delete, Route,Body,Path } from "tsoa";

@Route("author")
export default class AuthorController {

@Post("/")
 public async create(@Body() payload: CreateAuthorDTO): Promise<Author>  {
    // return mapper.toAuthor(await service.create(payload))
    return await service.create(payload)
}
@Put('/:id')
 public  async update (id: number, @Body() payload: UpdateAuthorDTO): Promise<Author>  {
    // return mapper.toAuthor(await service.update(id, payload))
    return await service.update(id, payload)
}
@Get('/:id')
 public  async getById ( id: number): Promise<Author|string>  {
    // return mapper.toAuthor(await service.getById(id))
    console.log('get by id')
    return await service.getById(id)
}
@Delete('/:id')
 public  async deleteById(@Body() id: number): Promise<Boolean>  {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}
@Get('/')
public  async getAll(  filters: FilterAuthorsDTO): Promise<Author[]>  {
    // return (await service.getAll(filters)).map(mapper.toAuthor)
    return await service.getAll(filters)
}

}
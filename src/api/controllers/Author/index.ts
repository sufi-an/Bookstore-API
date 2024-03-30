import * as service from '../../../db/services/authorService'
import {CreateAuthorDTO, UpdateAuthorDTO, FilterAuthorsDTO} from '../../dto/author.dto'
import {Author} from '../../interfaces'
import * as mapper from './mapper'

export const create = async(payload: CreateAuthorDTO): Promise<Author> => {
    return mapper.toAuthor(await service.create(payload))
}

export const update = async (id: number, payload: UpdateAuthorDTO): Promise<Author> => {
    return mapper.toAuthor(await service.update(id, payload))
}

export const getById = async (id: number): Promise<Author> => {
    return mapper.toAuthor(await service.getById(id))
}

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

export const getAll = async(filters: FilterAuthorsDTO): Promise<Author[]> => {
    return (await service.getAll(filters)).map(mapper.toAuthor)
}
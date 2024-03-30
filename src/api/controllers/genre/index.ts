import * as service from '../../../db/services/genreService'
import {CreateGenreDTO, UpdateGenreDTO, FilterGenresDTO} from '../../dto/genre.dto'
import {Genre} from '../../interfaces'
import * as mapper from './mapper'

export const create = async(payload: CreateGenreDTO): Promise<Genre> => {
    return mapper.toGenre(await service.create(payload))
}

export const update = async (id: number, payload: UpdateGenreDTO): Promise<Genre> => {
    return mapper.toGenre(await service.update(id, payload))
}

export const getById = async (id: number): Promise<Genre> => {
    return mapper.toGenre(await service.getById(id))
}

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

export const getAll = async(filters: FilterGenresDTO): Promise<Genre[]> => {
    return (await service.getAll(filters)).map(mapper.toGenre)
}
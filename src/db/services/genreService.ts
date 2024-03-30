import * as genreDal from '../dal/genre'
import {GetAllGenresFilters} from '../dal/types'
import {GenreInput, GenreOuput} from '../models/Genre'

export const create = (payload: GenreInput): Promise<GenreOuput> => {
    return genreDal.create(payload)
}
export const update = (id: number, payload: Partial<GenreInput>): Promise<GenreOuput> => {
    return genreDal.update(id, payload)
}
export const getById = (id: number): Promise<GenreOuput> => {
    return genreDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return genreDal.deleteById(id)
}
export const getAll = (filters: GetAllGenresFilters): Promise<GenreOuput[]> => {
    return genreDal.getAll(filters)
}
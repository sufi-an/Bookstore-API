import * as authorDal from '../dal/author'
import {GetAllAuthorFilters} from '../dal/types'
import {AuthorInput, AuthorOuput} from '../models/author'

export const create = (payload: AuthorInput): Promise<AuthorOuput> => {
    return authorDal.create(payload)
}
export const update = (id: number, payload: Partial<AuthorInput>): Promise<AuthorOuput> => {
    return authorDal.update(id, payload)
}
export const getById = (id: number): Promise<AuthorOuput |string> => {
    return authorDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return authorDal.deleteById(id)
}
export const getAll = (filters: GetAllAuthorFilters): Promise<AuthorOuput[]> => {
    return authorDal.getAll(filters)
}
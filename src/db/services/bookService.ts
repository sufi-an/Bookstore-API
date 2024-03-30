import * as bookDal from '../dal/book'
import {GetAllBooksFilters} from '../dal/types'
import {BookInput, BookOuput} from '../models/Book'

export const create = (payload: BookInput): Promise<BookOuput> => {
    return bookDal.create(payload)
}
export const update = (id: number, payload: Partial<BookInput>): Promise<BookOuput> => {
    return bookDal.update(id, payload)
}
export const getById = (id: number): Promise<BookOuput> => {
    return bookDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return bookDal.deleteById(id)
}
export const getAll = (filters: GetAllBooksFilters): Promise<BookOuput[]> => {
    return bookDal.getAll(filters)
}
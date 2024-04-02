import * as cartDal from '../dal/cart'
import {GetAllCartsFilters} from '../dal/types'
import {CartInput, CartOuput} from '../models/Cart'

export const create = (payload: CartInput): Promise<CartOuput> => {
    return cartDal.create(payload)
}
export const update = (id: number, payload: Partial<CartInput>): Promise<CartOuput> => {
    return cartDal.update(id, payload)
}
export const getById = (id: number): Promise<CartOuput> => {
    return cartDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return cartDal.deleteById(id)
}
export const getAll = (filters: GetAllCartsFilters): Promise<CartOuput[]> => {
    return cartDal.getAll(filters)
}
import * as orderDal from '../dal/order'
import {GetAllOrdersFilters} from '../dal/types'
import {OrderInput, OrderOuput} from '../models/Order'

export const create = (payload: OrderInput): Promise<OrderOuput> => {
    return orderDal.create(payload)
}
export const update = (id: number, payload: Partial<OrderInput>): Promise<OrderOuput> => {
    return orderDal.update(id, payload)
}
export const getById = (id: number): Promise<OrderOuput> => {
    return orderDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return orderDal.deleteById(id)
}
export const getAll = (filters: GetAllOrdersFilters): Promise<OrderOuput[]> => {
    return orderDal.getAll(filters)
}
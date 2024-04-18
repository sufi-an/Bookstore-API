import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {Cart, Order} from '../models'
import {GetAllOrdersFilters} from './types'
import {OrderInput, OrderOuput} from '../models/Order'
import { CartInput } from '../models/Cart'
export const create = async (payload: OrderInput): Promise<OrderOuput> => {

    let cart = await Cart.findByPk(payload.cartId)
    let cartUpdate:Partial<CartInput> ={
        status:'ordered'
    } 
    const order = await Order.create(payload)
    let udpated = await cart!.update(cartUpdate)
    console.log(udpated);
    

    return order
}



export const update = async (id: number, payload: Partial<OrderInput>): Promise<OrderOuput> => {
    const order = await Order.findByPk(id)

    if (!order) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedOrder = await order.update(payload)
    return updatedOrder
}

export const getById = async (id: number): Promise<OrderOuput> => {
    const order = await Order.findByPk(id)

    if (!order) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return order
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedOrderCount = await Order.destroy({
        where: {id}
    })

    return !!deletedOrderCount
}

export const getAll = async (
    filters?: GetAllOrdersFilters
  ): Promise<OrderOuput[]> => {
    console.log(filters);
    const userId = filters?.user;
    if (userId) {
      return Order.findAll({
        where: {
          userId,
        },
      });
    } else {
      return Order.findAll({});
    }
  };
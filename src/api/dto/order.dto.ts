import { Optional } from "sequelize/types"

export type CreateOrderDTO = {
    userId: number;

    cartId: number;
    quantity: number;
    totalPrice:number
   

}

export type UpdateOrderDTO = Required<CreateOrderDTO>

export type FilterOrdersDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
import { Optional } from "sequelize/types"

export type CreateCartDTO = {
    userId: number;

    bookId: number;
    quantity: number;
   

}

export type UpdateCartDTO = Required<CreateCartDTO>

export type FilterCartsDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
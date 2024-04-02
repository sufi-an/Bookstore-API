import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    email: string;
    password: string;
   

}

export type UpdateUserDTO = Optional<CreateUserDTO, 'email'>

export type FilterUsersDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
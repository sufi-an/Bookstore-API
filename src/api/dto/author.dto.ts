import { Optional } from "sequelize/types"

export type CreateAuthorDTO = {
    name: string;
   

}

export type UpdateAuthorDTO = Optional<CreateAuthorDTO, 'name'>

export type FilterAuthorsDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
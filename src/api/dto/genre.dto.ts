import { Optional } from "sequelize/types"

export type CreateGenreDTO = {
    name: string;
    slug?: string;
    description?: string;
    foodGroup?: string;
}

export type UpdateGenreDTO = Optional<CreateGenreDTO, 'name'>

export type FilterGenresDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
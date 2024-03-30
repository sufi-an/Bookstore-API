import { Optional } from "sequelize/types"

export type CreateBookDTO = {
    title: string;

    slug: string;
    author: number;
    genre: number;
    publicationDate?: Date;
    price: number

}

export type UpdateBookDTO = Optional<CreateBookDTO, 'title'>

export type FilterBooksDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}
import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {Book} from '../models'
import {GetAllBooksFilters} from './types'
import {BookInput, BookOuput} from '../models/Book'

export const create = async (payload: BookInput): Promise<BookOuput> => {
    const book = await Book.create(payload)

    return book
}

export const findOrCreate = async (payload: BookInput): Promise<BookOuput> => {
    const [book] = await Book.findOrCreate({
        where: {
            title: payload.title
        },
        defaults: payload
    })

    return book
}

export const update = async (id: number, payload: Partial<BookInput>): Promise<BookOuput> => {
    const book = await Book.findByPk(id)

    if (!book) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedBook = await book.update(payload)
    return updatedBook
}

export const getById = async (id: number): Promise<BookOuput> => {
    const book = await Book.findByPk(id)

    if (!book) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const author =  book.author
    console.log(book,author)
    return book
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedBookCount = await Book.destroy({
        where: {id}
    })

    return !!deletedBookCount
}

export const getAll = async (filters?: GetAllBooksFilters): Promise<BookOuput[]> => {
    const books = Book.findAll({
        // where: {
        //     ...(filters?.isDeleted && {deletedAt: { [Op.not]: null }})
        // },
        // ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
        
    })
    return books
}
export const checkSlugExists = async (slug: string): Promise<boolean> => {
    const bookWithSlug = await Book.findOne({
        where: {
            slug
        }
    });

    return !isEmpty(bookWithSlug)
}
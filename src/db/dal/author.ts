import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {Author} from '../models'
import {GetAllAuthorFilters} from './types'
import {AuthorInput, AuthorOuput} from '../models/author'

export const create = async (payload: AuthorInput): Promise<AuthorOuput> => {
    const author = await Author.create(payload)

    return author
}

export const findOrCreate = async (payload: AuthorInput): Promise<AuthorOuput> => {
    const [author] = await Author.findOrCreate({
        where: {
            name: payload.name
        },
        defaults: payload
    })

    return author
}

export const update = async (id: number, payload: Partial<AuthorInput>): Promise<AuthorOuput> => {
    const author = await Author.findByPk(id)

    if (!author) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedAuthor = await author.update(payload)
    return updatedAuthor
}

export const getById = async (id: number): Promise<AuthorOuput> => {
    const author = await Author.findByPk(id)

    if (!author) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return author
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedAuthorCount = await Author.destroy({
        where: {id}
    })

    return !!deletedAuthorCount
}

export const getAll = async (filters?: GetAllAuthorFilters): Promise<AuthorOuput[]> => {
    return Author.findAll({
        // where: {
        //     ...(filters?.isDeleted && {deletedAt: { [Op.not]: null }})
        // },
        // ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

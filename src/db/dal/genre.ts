import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {Genre} from '../models'
import {GetAllGenresFilters} from './types'
import {GenreInput, GenreOuput} from '../models/Genre'

export const create = async (payload: GenreInput): Promise<GenreOuput> => {
    const genre = await Genre.create(payload)

    return genre
}

export const findOrCreate = async (payload: GenreInput): Promise<GenreOuput> => {
    const [genre] = await Genre.findOrCreate({
        where: {
            name: payload.name
        },
        defaults: payload
    })

    return genre
}

export const update = async (id: number, payload: Partial<GenreInput>): Promise<GenreOuput> => {
    const genre = await Genre.findByPk(id)

    if (!genre) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedGenre = await genre.update(payload)
    return updatedGenre
}

export const getById = async (id: number): Promise<GenreOuput> => {
    const genre = await Genre.findByPk(id)

    if (!genre) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return genre
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedGenreCount = await Genre.destroy({
        where: {id}
    })

    return !!deletedGenreCount
}

export const getAll = async (filters?: GetAllGenresFilters): Promise<GenreOuput[]> => {
    return Genre.findAll({
        // where: {
        //     ...(filters?.isDeleted && {deletedAt: { [Op.not]: null }})
        // },
        // ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const checkSlugExists = async (slug: string): Promise<boolean> => {
    const genreWithSlug = await Genre.findOne({
        where: {
            slug
        }
    });

    return !isEmpty(genreWithSlug)
}
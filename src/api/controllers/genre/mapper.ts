import {Genre} from '../../interfaces'
import {GenreOuput} from '../../../db/models/Genre'

export const toGenre = (genre: GenreOuput): Genre => {
    return {
        id: genre.id,
        name: genre.name,
        slug: genre.slug,
        description: genre.description,
  
        createdAt: genre.createdAt,
        updatedAt: genre.updatedAt,
        deletedAt: genre.deletedAt,
    }
}
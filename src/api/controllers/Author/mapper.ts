import {Author} from '../../interfaces'
import {AuthorOuput} from '../../../db/models/author'

export const toAuthor = (author: AuthorOuput): Author => {
    return {
        id: author.id,
        name: author.name,
      
  
        createdAt: author.createdAt,
        updatedAt: author.updatedAt,
        deletedAt: author.deletedAt,
    }
}
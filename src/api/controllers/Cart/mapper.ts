import {Book} from '../../interfaces'
import {BookOuput} from '../../../db/models/Book'

export const toBook = (book: BookOuput): Book => {
    return {
        id: book.id,
        title: book.title,
        slug:book.slug,
        publicationDate:book.publicationDate,
        price:book.price,
        author:book.author,
  
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
        deletedAt: book.deletedAt,
    }
}
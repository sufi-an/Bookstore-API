
export interface Book {
    id: number
    title: string
    slug: string
    author: number
    genre: number
    publicationDate?:Date,
    price:number,

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
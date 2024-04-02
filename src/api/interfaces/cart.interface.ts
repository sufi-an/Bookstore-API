
export interface Cart {
    id: number
    userId: number
    bookId: number
    quantity: number
    

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
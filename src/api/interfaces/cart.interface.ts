
export interface Cart {
    id: number
    user: number
    book: number
    quantity: number
    

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
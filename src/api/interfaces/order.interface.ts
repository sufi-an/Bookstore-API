
export interface Order {
    id: number
    userId: number
    cartId: number
    quantity: number
    totalPrice: number
    

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
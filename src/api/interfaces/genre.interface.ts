export interface Genre {
    id: number
    name: string
    slug: string
    description?: string

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
import { Request } from "express"

export interface User {
    id: number
    email: string
    fullName: string

    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
  interface IDecode {
    id:number,
    email: string,
    iat: number,
    exp: number
  };

 export interface RequestWithUserRole extends Request {
    user?: IDecode,
}
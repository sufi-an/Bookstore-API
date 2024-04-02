
import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'




interface IDecode {
    id:number,
    email: string,
    iat: number,
    exp: number
  };

 interface RequestWithUserRole extends Request {
    user?: IDecode,
}

export const IsAuthenticated=(req:RequestWithUserRole, res:Response, next:NextFunction)=> {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).send({})

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)
    
    req.user = user

    next()
  })
}
import {Op} from 'sequelize'
import {isEmpty} from 'lodash'
import * as bcrypt from 'bcrypt'
import {User} from '../models'
import {GetAllUsersFilters} from './types'
import {UserInput, UserLoginInput, UserLoginToken, UserOuput} from '../models/User'
import  * as jwt from 'jsonwebtoken'

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'../../env' });

const generateAccessToken =(email:string,id:number):any=> {
    const secret:string = process.env.TOKEN_SECRET?process.env.TOKEN_SECRET:''
    const token: string = jwt.sign({email:email,id:id}, secret, { expiresIn: '18000s' });
    return token
}
export const create = async (payload: UserInput): Promise<UserOuput|string> => {
    try {
        const user = await User.create(payload)

        return user
    } catch (error) {
        console.log(error)
        return "Can not create User"
    }
    
}
export const login = async (payload: UserLoginInput): Promise<UserLoginToken> => {
    const user = await User.findOne({
        where: {
            email: payload.email
        }
    })
    let  loginInfo={
        'id':NaN,
        'email':"NotFound",
        'accessToken':'NoToken'
    }
    if (!user){
        return  loginInfo={
            'id':NaN,
            'email':"NotFound",
            'accessToken':'NoToken'
        }
    }
    let passwordHash = user.password?user.password:'';
            if(bcrypt.compareSync(payload.password,passwordHash)){
                const token = generateAccessToken( user.email ,user.id);
                console.log(token);
                
                loginInfo={
                    'id':user.id,
                    'email':user.email,
                    'accessToken': token
                }
            }
            
    return loginInfo
}

export const findOrCreate = async (payload: UserInput): Promise<UserOuput> => {
    const [user] = await User.findOrCreate({
        where: {
            email: payload.email
        },
        defaults: payload
    })

    return user
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
    const user = await User.findByPk(id)

    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedUser = await user.update(payload)
    return updatedUser
}

export const getById = async (id: number): Promise<UserOuput> => {
    const user = await User.findByPk(id)

    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
   
    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: {id}
    })

    return !!deletedUserCount
}

export const getAll = async (filters?: GetAllUsersFilters): Promise<UserOuput[]> => {
    const users = User.findAll({
        // where: {
        //     ...(filters?.isDeleted && {deletedAt: { [Op.not]: null }})
        // },
        // ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
        
    })
    return users
}

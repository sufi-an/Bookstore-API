import * as userDal from '../dal/user'
import {GetAllUsersFilters} from '../dal/types'
import {UserInput, UserLoginInput, UserLoginToken, UserOuput} from '../models/User'
import * as bcrypt from 'bcrypt'
export const create = (payload: UserLoginInput): Promise<UserOuput|string> => {

    const passwordHash = bcrypt.hashSync(payload.password,10);
    payload.password=passwordHash
    return userDal.create(payload)
}
export const login = (payload: UserLoginInput): Promise<UserLoginToken> => {

    
    return userDal.login(payload)
}
export const update = (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
    return userDal.update(id, payload)
}

export const getById = (id: number): Promise<UserOuput> => {
    return userDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return userDal.deleteById(id)
}

export const getAll = (filters: GetAllUsersFilters): Promise<UserOuput[]> => {
    return userDal.getAll(filters)
}
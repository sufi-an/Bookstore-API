import {User} from '../../interfaces'
import {UserOuput} from '../../../db/models/User'

export const toUser = (user: UserOuput): User => {
    return {
        id: user.id,
        email: user.email,
        fullName:user.fullName,
        
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}
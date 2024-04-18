import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Author from './author';
import Genre from './Genre';

interface UserAttributes {
    id: number;
    fullName: string;
    email: string;
    password?: String;
    

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

interface UserViewAttributes {
    id: number;
    fullName?: string;
    email: string;
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

interface UserLoginAttributes{
id: number,
email: string,
accessToken: string
}
interface UserLoginAttribute{
    email: string,
password: string
}

export interface UserInput extends Optional<UserAttributes, 'id'|'fullName' > {}
export interface UserLoginInput extends Required<UserLoginAttribute > {}

export interface UserOuput extends Required<UserViewAttributes> {}
export interface UserLoginToken extends Required<UserLoginAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public fullName!: string
    public email!: string
    public password?: string;
 
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
   
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default User
import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface AuthorAttributes {
    id: number;
    name: string;
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface AuthorInput extends Optional<AuthorAttributes, 'id'> {}

export interface AuthorOuput extends Required<AuthorAttributes> {}

class Author extends Model<AuthorAttributes, AuthorInput> implements AuthorAttributes {
    public id!: number
    public name!: string
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Author.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
   
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Author
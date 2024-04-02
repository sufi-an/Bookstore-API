import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Author from './author';
import Genre from './Genre';
import User from './User';
import Book from './Book';

interface CartAttributes {
    id: number;
    bookId?: number;
    userId?: number;
    quantity: number;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface CartInput extends Optional<CartAttributes, 'id' > {}

export interface CartOuput extends Required<CartAttributes> {}

class Cart extends Model<CartAttributes, CartInput> implements CartAttributes {
    public id!: number
    public bookId!: number
    public userId!: number

    public quantity!: number

    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

Cart.belongsTo(User,{
    as:'user'
})
Cart.belongsTo(Book,{
    as:'book'
})

export default Cart
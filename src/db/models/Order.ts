import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Author from './author';
import Genre from './Genre';
import User from './User';
import Book from './Book';
import Cart from './Cart';

interface OrderAttributes {
    id: number;
    cartId?: number;
    userId?: number;
    quantity: number;
    totalPrice:number
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OrderInput extends Optional<OrderAttributes, 'id' > {}

export interface OrderOuput extends Required<OrderAttributes> {}

class Order extends Model<OrderAttributes, OrderInput> implements OrderAttributes {
    public id!: number
    public cartId!: number
    public userId!: number

    public quantity!: number
    public totalPrice!:number

    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

Order.belongsTo(User,{
    as:'user'
})
Order.belongsTo(Cart,{
    as:'cart'
})

export default Order
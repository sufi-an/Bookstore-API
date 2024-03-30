import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Author from './author';
import Genre from './Genre';

interface BookAttributes {
    id: number;
    title: string;
    slug: string;
    author?: number;
    genre?: number;
    publicationDate?:Date,
    price:number,

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface BookInput extends Optional<BookAttributes, 'id'|'slug' > {}

export interface BookOuput extends Required<BookAttributes> {}

class Book extends Model<BookAttributes, BookInput> implements BookAttributes {
    public id!: number
    public title!: string
    public slug!: string
    public author!: number;
    public genre!: number;
    
    public publicationDate!: Date
    public price!: number

    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // author: {
    //     type: DataTypes.STRING,
    //     allowNull:false
    // },
    // genre: {
    //     type: DataTypes.STRING,
    //     allowNull:false
    // },
    publicationDate: {
        type:DataTypes.DATE
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

Book.belongsTo(Author,{
    as:'author'
})
Book.belongsTo(Genre,{
    as:'genre'
})
export default Book
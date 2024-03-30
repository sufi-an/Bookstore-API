import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface GenreAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface GenreInput extends Optional<GenreAttributes, 'id' | 'slug'> {}

export interface GenreOuput extends Required<GenreAttributes> {}

class Genre extends Model<GenreAttributes, GenreInput> implements GenreAttributes {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string

    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Genre.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
   
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Genre
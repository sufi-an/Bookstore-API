require('dotenv').config()

import {  Genre } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    // Tag.sync({ alter: isDev || isTest }),
    Genre.sync({ alter: isDev || isTest }),
    // Recipe.sync({ alter: isDev || isTest }),
    // Review.sync({ alter: isDev || isTest }),
    // RecipeTag.sync({ alter: isDev || isTest }),
    // RecipeGenre.sync({ alter: isDev || isTest }),
  ])

export default dbInit 
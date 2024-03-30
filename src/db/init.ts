require('dotenv').config()

import {  Author, Genre } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
  
    Genre.sync({ alter: isDev || isTest }),
    Author.sync({alter: isDev || isTest}),
  ])

export default dbInit 
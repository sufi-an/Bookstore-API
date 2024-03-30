require('dotenv').config()

import {  Author, Book, Genre } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
  
    // Genre.sync({ alter: isDev || isTest }),
    Genre.sync(),
    Author.sync(),
    Book.sync()
  ])

export default dbInit 
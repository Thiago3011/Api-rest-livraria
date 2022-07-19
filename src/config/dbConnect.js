import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:admin@livraria.oaqzi.mongodb.net/livraria-node')

let db = mongoose.connection

export default db


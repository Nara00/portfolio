const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080;

// mongoose.connect('mongodb://localhost'), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

app.use(cors())
app.use(express.json())
var database

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/', (req, res) => {
    res.send('Test')
})

app.get('/api/skills', (req, res) => {
    database.collection('skills').find({}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})


app.listen(PORT, () => {
    MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {useNewUrlParser:true}, (error, result) => {
        if(error) throw error
        database = result.db('portfolio')
        console.log('Connection sucessful')
    })
})

// Mongodb comands
// > use portfolio
// > db.skills.insert({"title" : "C++", "category" : "programacion", "description" : "mi primer lenguaje de programación", "level" : "avanzado"})
// > db.skills.insert({"title" : "Figma", "category" : "diseño", "description" : "donde hago mis prototipos", "level" : "intermedio"})
// > db.skills.insert({"title" : "Photoshop", "category" : "diseño", "description" : "software de edición fotográfica", "level" : "avanzado"})
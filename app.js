const express = require('express')
const app = express()
const topicsController = require('./controllers/topicsController')
app.set('view engine', 'ejs')
app.get('/', topicsController.getTopics)
app.listen(3000, () => {    
    console.log('Servidor corriendo en http://localhost:3000')
})
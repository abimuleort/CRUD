const topics = require('../models/topics')

module.exports = {
    getTopics: function (req, res) {
        res.render('topics', {
            topics: topics.topics
        })
    },
    createTopic: function (req,res){
        const nombre = req.body.nombre
        topics.createTopic(nombre)
        res.redirect('/')
    },
    deleteTopic: function (req,res){
        topics.deleteTopic(req.params.id)
        res.redirect('/')
    },
    updateTopic: function (req, res){
        const id = req.params.id
        const nuevoNombre = req.body.nuevoNombre
        topics.updateTopic(id, nuevoNombre)
        res.redirect('/')
    }
}
function createTopic(req, res){
    const nombre = req.body.nombre
    topics.createTopic(nombre)
    res.redirect('/topics')
}
// function deleteTopic(req, res){
//     topics.deleteTopic(req.params.id)
//     res.redirect('/')
// }
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
    }
}
function createTopic(req, res){
    const nombre = req.body.nombre
    topics.createTopic(nombre)
    res.redirect('/topics')
}
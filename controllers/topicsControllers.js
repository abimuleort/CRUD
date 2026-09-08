const topics = require('../models/topics')

module.exports = {
    getTopics: function (req, res) {
        res.render('topics', {
            topics: topics
        })
    }
}
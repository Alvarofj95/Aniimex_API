const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Anime = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    seasons: {
        type: String
    }, 
    description: {
        type: String
    }, 
    url: {
        type: String
    }
}, {
    collection: 'animes'
})

module.exports = mongoose.model('Anime', Anime)
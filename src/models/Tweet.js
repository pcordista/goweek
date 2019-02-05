// Chama o express, o importador de modulos
const mongoose = require('mongoose');


// Cria a estrutura do banco de dados do MongoDB
const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,

    }
})

// Exporta para o Express
module.exports = mongoose.model("Tweet", TweetSchema);
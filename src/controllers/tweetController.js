// Chama o models
const Tweet = require('../models/Tweet');

// exporta o controller
module.exports = {
    // Ativa o assincrono da index ; SELECT
    async index(req, res) {
        // faz um delay no retorno
        const tweets = await Tweet.find({}).sort("-createdAt")

        // retorno do frontend
        return res.json(tweets);

    },

    // Metodo Create
    async store(req, res) {
        // Faz requisiçao da criaçao no corpo do app
        const tweet = await Tweet.create(req.body);

        return res.json(tweet);

    }

};
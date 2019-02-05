// Chama o express, o importador de modulos
const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/tweetController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

module.exports = routes;
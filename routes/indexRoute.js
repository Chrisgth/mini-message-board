const express = require('express');
const app = require('../app');

const indexRouter = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

indexRouter.get('/', (req, res) => {
	res.render('index', {messages})
})

indexRouter.post('/', (req, res) => {
	console.log(req.body)
	messages.push({text: req.body.text, user: req.body.user, added: new Date()})
	res.redirect('/')
})

module.exports = indexRouter

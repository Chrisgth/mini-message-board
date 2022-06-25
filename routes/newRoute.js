const express = require('express');

const newmsgRouter = express.Router();

newmsgRouter.get('/newmsg', (req, res) => {
	res.render('new')
})

module.exports = newmsgRouter
const express = require('express');
const path = require('path');
const app = express();

app.get('/', require('./routes/index'))

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Сервер запущен на порте: ' + server.address().port)
})

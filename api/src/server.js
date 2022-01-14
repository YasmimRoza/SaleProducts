const express = require('express');

const app = express();

app.get('/aqui', (req, res) => res.json({ message: 'pegando caralho' }));

app.listen(3000, console.log('Server ON!'));

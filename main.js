const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.write('<h1>Hello, World</h1>');
  res.end();
});

router.get('/listagem', (req, res) => {
  res.write('<h1>Pedro, Gabriel e Vitor</h1>');
  res.end();
});


router.get('/detalhes', (req, res) => {
  res.write('<h1>Alturas: Pedro = 1.80cm, Gabriel = 1.76cm e Vitor = 1.68cm</h1>');
  res.end();
});

app.use(router);

app.listen(3333, () => {
  console.log('O servidor está rodando na porta 3333');
});
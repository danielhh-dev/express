const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hola desde mi servidor en express');
});

app.get('/productos', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: '$54',
    },
    {
      name: 'producto 2',
      price: '$456',
    },
    {
      name: 'producto 3',
      price: '$4',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

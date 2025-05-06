const express = require('express'); //common js module
const quotes = require('./data/quotes');
const cors = require('cors');

const app = express(); //app is instance of express
const PORT = 3000;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

function randomQuoteAPI() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

app.get('/quotes/random-quote', (req, res) => {
  const randomQuote = randomQuoteAPI();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT}`);
}); //listen - run server or call function

//node (name js file) to run server

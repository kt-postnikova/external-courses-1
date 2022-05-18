const express = require('express');
const cors = require('cors');
const uuid = require('uuid');
const bodyParser = require('body-parser');

const books = require('./db.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: '*/*' }));

app.get('/books', (req, res) => {
  res.send(books);
});

app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = uuid.v4();
  newBook.rating = 0;
  books.push(newBook);
  res.send(newBook);
});

app.put('/books/rating/:bookId', (req, res) => {
  const { bookId } = req.params;
  const bookRating = Number(req.body);
  const foundedBook = books.find((book) => book.id === bookId);
  foundedBook.rating = bookRating;
  res.send(foundedBook);
});

app.listen(PORT, () => {
  console.log(`App's listening on PORT: ${PORT}`);
});

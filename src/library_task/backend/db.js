const uuid = require('uuid');

const books = [
  {
    id: uuid.v4(),
    title: 'Jewels of Nizam',
    author: 'Geeta Devi',
    image: 'images/books/nizam.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Cakes & Bakes',
    author: 'Sanjeev Kapoor',
    image: 'images/books/cakes-bakes.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Jamie\'s Kitchen',
    author: 'Jamie Oliver',
    image: 'images/books/jamie.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Inexpensive Family Meals',
    author: 'Simon Holst',
    image: 'images/books/easy.jpeg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Paleo Slow Cooking',
    author: 'Chrissy Gower',
    image: 'images/books/paloe.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Cook Like an Italian',
    author: 'Tobie Puttock',
    image: 'images/books/italian.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Indian Cooking',
    author: 'Suneeta Vaswani',
    image: 'images/books/indian.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Ministry of Food',
    author: 'Jamie Oliver',
    image: 'images/books/ministry.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Jamie\'s Italy',
    author: 'Jamie Oliver',
    image: 'images/books/jamiesItaly.jpg',
    rating: 0,
  },
  {
    id: uuid.v4(),
    title: 'Vegetables Cookbook',
    author: 'Methew Biggs',
    image: 'images/books/vegetables.jpg',
    rating: 0,
  },
];

module.exports = books;

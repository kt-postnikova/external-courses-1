import {
  bookTemplate, booksContainer, addBookBtn, addBookPopup, addBookForm, searchInput, tagPopular, tagAllBooks, addBookPopupClose
} from './constants.js';

function generateBook(booksData) {
  booksData.map((book) => {
    const bookElement = bookTemplate.querySelector('.book').cloneNode(true);

    bookElement.setAttribute('id', book.id);
    bookElement.querySelector('.book__title').textContent = book.title;
    bookElement.querySelector('.book__author-insert').textContent = book.author;
    bookElement.querySelector('.book__image').src = book.image;

    const ratingBlock = bookElement.querySelector('.book__rate');

    if (book.rating !== 0) {
      Array.from(ratingBlock.children).slice(0, book.rating).forEach((star) => {
        star.classList.remove('rate_type_empty');
        star.classList.add('rate_type_full');
      });
    }

    booksContainer.prepend(bookElement);

    return bookElement;
  });
}

function addNewBook() {
  const inputList = Array.from(addBookForm.querySelectorAll('.form__input'));
  const bookInfoArray = [];
  const bookInfo = {};

  inputList.forEach((input) => {
    bookInfo[input.name] = input.value;
  });

  bookInfoArray.push(bookInfo);

  return bookInfoArray;
}

function setRating() {
  const stars = document.querySelectorAll('.rate');
  Array.from(stars).forEach((star) => {
    star.addEventListener('click', (evt) => {
      const rating = evt.target.id;
      const bookId = evt.target.parentNode.parentNode.id;
      fetch(`http://localhost:3000/books/rating/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: rating,
      })
        .then((res) => res.json())
        .then((book) => {
          const rateArray = Array.from(evt.target.parentNode.children);
          const fullStars = rateArray.filter((starRate) => starRate.id <= book.rating);
          fullStars.forEach((starElement) => {
            starElement.classList.remove('rate_type_empty');
            starElement.classList.add('rate_type_full');
          });
        });
    });
  });
}

function searchBooks() {
  removeBooks();
  const api = getBooks();
  api.then((books) => {
    const foundedBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.value.toLowerCase()));
    generateBook(foundedBooks);
  });
}

function removeBooks() {
  document.querySelectorAll('.book').forEach((book) => {
    book.remove();
  });
}

function getBooks() {
  return fetch('http://localhost:3000/books')
    .then((res) => res.json());
}

function openPopup(popup) {
  const popupElement = popup;
  popupElement.classList.add('popup_opened');
  popupElement.style.transition = 'visibility 0.2s, opacity 0.5s linear';
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

addBookBtn.addEventListener('click', () => {
  openPopup(addBookPopup);
});

addBookPopupClose.addEventListener('click', () => {
  closePopup(addBookPopup);
});

addBookForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const newBook = addNewBook();

  newBook.forEach((book) => {
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        const bookData = [];
        bookData.push(data);
        generateBook(bookData);
        setRating();
      });
  });
  closePopup(addBookPopup);
});

searchInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    searchBooks();
  }
});

tagAllBooks.addEventListener('click', () => {
  removeBooks();
  const api = getBooks();
  api.then((data) => {
    generateBook(data);
    setRating();
  });
});

tagPopular.addEventListener('click', () => {
  removeBooks();
  const api = getBooks();
  api.then((books) => {
    const popularBooks = books.filter((book) => book.rating === 5);
    generateBook(popularBooks);
    console.log(popularBooks);
  });
});

if (document.querySelector('.tags__link').classList.contains('tags__link_active')) {
  const api = getBooks();
  api.then((data) => {
    generateBook(data);
    setRating();
  });
}

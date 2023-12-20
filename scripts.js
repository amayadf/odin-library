//Classes

class Book {
    constructor(title = 'Unknown', author = 'Unknown', pages = '0', isRead = false) {
        this.title = title;
        this.author - author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        if(!isInLibrary(newBook)) {
            this.books.push(newBook);
        }
    }

    removeBook(title, author) {
        this.books = this.books.filter((book) => {
            book.title !== title || book.author !== author;
        });
    }

    getBook(title, author) {
        return this.books.find(book => {
            book.title === title && book.author === author;
        });
    }

    isInLibrary(newBook) {
        return this.books.some((book) => {
            book.title === newBook.title && book.author === newBook.author;
        });
    }
}

const library = new Library();

//Obtaining html elements
let addBookBtn = document.querySelector('.add-book-btn');
let booksGrid = document.querySelector('.books-grid');



//Book grid functions
function resetBookGrid() {
    booksGrid.innerHTML = '';
}

function updateBookGrid() {
    resetBookGrid();
    for(let book of library.books) {
        createBookCard(book);
    }
}

function createBookCard(newBook) {
    //creating card elements
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    //adding their classes
    bookCard.classList.add('book-card');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    removeBtn.classList.add('remove-book-btn');

    //add event handlers to buttons
    readBtn.addEventListener('click', toogleRead);
    removeBtn.addEventListener('click', removeBook)

    //adding their content
    bookTitle.textContent = `"${newBook.title}"`;
    bookAuthor.textContent = newBook.author;
    bookPages.textContent = `${newBook.pages} pages`;
    removeBtn.textContent = 'Remove';

    if(newBook.isRead) {
        readBtn.textContent = 'Read';
        readBtn.classList.add('read');
    }
    else {
        readBtn.textContent = 'Not read';
        readBtn.textContent.add('not-read');
    }

    //adding elements as children of book card
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
}

function createBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    return new Book(title, author, pages, isRead);
}

//Event listeners

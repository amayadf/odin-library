//Classes

class Book {
    constructor(title = 'Unknown', author = 'Unknown', pages = '0', read = 'false') {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        if(!(this.isInLibrary(newBook))) {
            this.books.push(newBook);
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
      }
}

const library = new Library();

//get elements from html
let booksGrid = document.querySelector('.books-grid');
let addBookBtn = document.querySelector('.add-book-btn')
let submitBookBtn = document.querySelector('.submit-book-btn');
let addBookModal = document.querySelector('.add-book-modal');

//event listeners
addBookBtn.addEventListener('click', () => { addBookModal.classList.toggle('hidden');});
submitBookBtn.addEventListener('click', addNewBook);


//books grid functions
function resetBookGrid() {
    booksGrid.innerHTML = '';
}

function updateBookGrid() {
    resetBookGrid();
    for(let book of library.books) {
        createBookCard(book);
    }
}

function createBookCard(book) {
    let bookCard = document.createElement('div');
    let bookInformation = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let bookOptions = document.createElement('div');
    let readBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    bookInformation.classList.add('book-information');
    bookOptions.classList.add('book-options');
    title.classList.add('book-title');

    readBtn.addEventListener('click', toggleRead);
    removeBtn.addEventListener('click', removeBookFromGrid);

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'REMOVE';

    if(book.read) {
        readBtn.textContent = 'READ';
        readBtn.classList.add('read');
    }
    else {
        readBtn.textContent = 'UNREAD';
        readBtn.classList.add('unread');
    }

    bookInformation.appendChild(title);
    bookInformation.appendChild(author);
    bookInformation.appendChild(pages);
    bookOptions.appendChild(readBtn);
    bookOptions.appendChild(removeBtn);
    bookCard.appendChild(bookInformation);
    bookCard.appendChild(bookOptions);
    bookCard.appendChild(bookInformation);
    bookCard.appendChild(bookOptions);
    booksGrid.appendChild(bookCard);
}

//button click event functions 
function addNewBook(e) {
    e.preventDefault();
    const newBook = createBookFromInput();
    library.addBook(newBook);
    updateBookGrid();
}

function toggleRead(e) {
    const title = e.target.parentNode.parentNode.firstChild.firstChild.innerHTML;
    const book = library.getBook(title);
    book.read = !book.read;
    updateBookGrid();
}

function removeBookFromGrid(e) {
    const title = e.target.parentNode.parentNode.firstChild.firstChild.innerHTML;
    library.removeBook(title);
    updateBookGrid();
}

//function to create book
function createBookFromInput() {
    const title = document.getElementById('title').value;;
    const author = document.getElementById('author').value;
    const pages = +document.getElementById('pages').value;
    const read = document.getElementById('is-read').checked;
    return new Book(title, author, pages, read);
}











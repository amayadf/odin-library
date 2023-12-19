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

//User interface 


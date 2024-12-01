import Book from "./Book.js"

const existingBooks = {};

class BookFactory{
    createBook({ title, author, genre, pageCount, publisherID, ISBN }) {
        const existingBook = existingBooks[ISBN];
        if(!!existingBook){
            return existingBook;
        } else {
            const book = new Book({ title, author, genre, pageCount, publisherID, ISBN });
            existingBooks[ISBN] = book;
            return book;
        }
    }
}

export default BookFactory;
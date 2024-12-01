import BookFactory from "./BookFactory.js";

const bookRecordDatabase = {};

class BookRecordManager {
    addBookRecord({ id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability }){
        const bookFactory = new BookFactory();
        const book = bookFactory.createBook({ title, author, genre, pageCount, publisherID, ISBN });
        bookRecordDatabase[id] = {
            checkoutMember,
            checkoutDate,
            dueReturnDate,
            availability,
            book,
        };
    }

    updateCheckoutStatus({ bookID, newStatus, checkoutDate, checkoutMember, newReturnDate }){
        const record = bookRecordDatabase[bookID];
        record.availability = newStatus;
        record.checkoutDate = checkoutDate;
        record.checkoutMember = checkoutMember;
        record.dueReturnDate = newReturnDate;
    }

    extendCheckoutPeriod(bookID, newReturnDate) {
        bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    }

    isPastDue(bookID){
        const currentDate = new Date();
        return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }
}
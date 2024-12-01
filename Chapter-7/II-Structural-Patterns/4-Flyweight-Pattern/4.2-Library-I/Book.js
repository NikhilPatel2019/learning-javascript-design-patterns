class Book {
    constructor(
        id,
        title,
        author,
        genre,
        pageCount,
        publisherID,
        ISBN,
        checkoutDate,
        checkoutMember,
        dueReturnDate,
        availability,
    ){
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = dueReturnDate;
        this.availability = availability;
    }

    getTitle() {
        return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getISBM() {
        return this.ISBN;
    }

    updateCheckoutStatus(
        bookId,
        newStatus,
        checkoutDate,
        checkoutMember,
        newReturnDate
    ){
        this.id = bookId;
        this.availability = newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = newReturnDate;
    }

    extendCheckoutPeriod(bookID, newReturnDate){
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    }

    isPastDue(bookID){
        const currentDate = new Date();

        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
}
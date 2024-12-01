class Book {
    constructor(
        title,
        author,
        genre,
        pageCount,
        publisherID,
        ISBN,
    ){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
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

}

export default Book;
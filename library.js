

const myLibrary = []


function Book(name, author) {

    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.isRead = false;

}


function addBookToLibrary (name,author) {
    const book = new Book(name,author);
    myLibrary.push(book);
}



addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin");
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss");
addBookToLibrary("Never Let Me Go", "Kazuo Ishiguro");
addBookToLibrary("The Three-Body Problem", "Liu Cixin");
addBookToLibrary("The Blade Itself", "Joe Abercrombie");
console.table(myLibrary)
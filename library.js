

const myLibrary = []


function Book(title, author, pageCount) {

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = false;

}


function addBookToLibrary (title,author) {
    const book = new Book(title,author);
    myLibrary.push(book);
}

function showBooks(library) {
    const container = document.querySelector(".display");
    container.innerHTML = "";

    for (const book of library) {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;

        const author = document.createElement("div");
        author.classList.add("author");
        author.textContent = book.author;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.textContent = `${book.pageCount} pages`;

        card.append(title, author, pages);
        container.appendChild(card);     
    }
}

addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 304);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662);
addBookToLibrary("Never Let Me Go", "Kazuo Ishiguro", 288);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 415);
addBookToLibrary("The Blade Itself", "Joe Abercrombie", 515);
console.table(myLibrary);
showBooks(myLibrary);



const myLibrary = []


function Book(title, author, pageCount) {

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = false;

}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;

};

function addBookToLibrary (title,author, pages) {
    const book = new Book(title,author, pages);
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
        
        const readStatus = document.createElement("div");
        readStatus.classList.add("read-status");
        readStatus.textContent = `Status: ${book.isRead ? "Read" : "TBR"}`;

        const cardButtons = document.createElement("div");
        cardButtons.classList.add("remove-read-container");

        const remove = document.createElement("button");
        remove.classList.add("card-btn");
        remove.textContent = "Remove";

        remove.addEventListener("click",() => {
            const index = myLibrary.findIndex(b => b.id == book.id);
            myLibrary.splice(index, 1);
            showBooks(myLibrary);
        })
        
        const read = document.createElement("button");
        read.classList.add("card-btn");
        read.textContent = "Read";

        read.addEventListener("click", () => {
            book.toggleRead();
            showBooks(library);
        });
         
        cardButtons.append(read, remove);
        card.append(title, author, pages, readStatus, cardButtons);
        container.appendChild(card);     
    }
}

const dialog = document.getElementById("book-dialog");
const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("close-dialog");


openBtn.addEventListener ("click", () => {
    dialog.showModal();
});
closeBtn.addEventListener("click", () => {
    dialog.close();
});

const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;

    addBookToLibrary(title,author,pages);
    showBooks(myLibrary);

});
addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 304);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662);
addBookToLibrary("Never Let Me Go", "Kazuo Ishiguro", 288);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 415);
addBookToLibrary("The Blade Itself", "Joe Abercrombie", 515);
console.table(myLibrary);
showBooks(myLibrary);

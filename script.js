const myLibrary = [];
const library = document.querySelector(".library");

const dialog = document.querySelector("dialog");
const addNewBtn = document.querySelector(".btnAddNewBook");
const closeBtn = document.querySelector("dialog button");
const addBtn = document.querySelector(".btnAdd");
const form = document.querySelector("#book-form");


function Book(id, title, author, pages, genre, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(title, author, pages, genre, read) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, genre, read);
    myLibrary.push(book);
    renderLibrary();
}

function renderLibrary() {
    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p>Genre: ${book.genre}</p>
                <div class="read-status ${book.read ? 'read' : 'unread'}">
                    ${book.read ? 'Read' : 'Unread'}
                </div>
                <button class="toggle-read-btn" data-index="${index}">
                    Toggle Read Status
                </button>
                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>
            `;

        library.appendChild(bookCard);
    });
}

addNewBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("inTitle").value;
    const author = document.getElementById("inAuthor").value;
    const pages = document.getElementById("inPages").value;
    const genre = document.getElementById("inGenre").value;
    const isRead = document.getElementById("inRead").checked;
    addBookToLibrary(title, author, pages, genre, isRead);
    showBooks(-1);
    form.reset();
    dialog.close();
});

// addBookToLibrary("48 laws of power", "Robert Greene", 635, "Self-help-book", true);
// addBookToLibrary("Surrounded by idiots", "Thomas Erikson", 320, "Self-help-book", true);
// addBookToLibrary("The Atomic Habits", "James Clear", 291, "Self-help-book", true);
// addBookToLibrary("The Prince", "Niccolo Machiavelli", 126, "Non-fiction", true);
// addBookToLibrary("Ego is the enemy", "Ryan Holiday", 287, "Self-help-book", true);
console.log(library);
showBooks(-1);
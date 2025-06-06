const library = document.querySelector(".library");
const dialog = document.querySelector("dialog");
const addNewBtn = document.querySelector(".btnAddNewBook");
const closeBtn = document.querySelector("dialog button");
const addBtn = document.querySelector(".btnAdd");
const form = document.querySelector("#book-form");
const overlay = document.querySelector(".dialog-overlay");


class Book{
    constructor(id, title, author, pages, genre, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.read = read;
    }
}

class Library{

    constructor(myLibrary){
        this.myLibrary = myLibrary;
    }

    addBookToLibrary(title, author, pages, genre, read) {
        const id = crypto.randomUUID();
        const book = new Book(id, title, author, pages, genre, read);
        this.myLibrary.push(book);
        this.renderLibrary();
    }

    renderLibrary() {
        library.innerHTML = '';
    
        this.myLibrary.forEach((book, index) => {
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
    
    toggleReadStatus(index) {
        this.myLibrary[index].read = !this.myLibrary[index].read;
        this.renderLibrary();
    }
    
    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.renderLibrary();
    }
}

let myLib = [  
        {
            title: "48 laws of power",
            author: "Robert Greene",
            pages: 635,
            read: true,
            genre: "Self-help-book"
        },
        {
            title: "Surrounded by idiots",
            author: "Thomas Erikson",
            pages: 320,
            read: true,
            genre: "Self-help-book"
        },
        {
            title: "The Atomic Habits",
            author: "James Clear",
            pages: 291,
            read: true,
            genre: "Self-help-book"
        },
        {
            title: "The Prince",
            author: "Niccolo Machiavelli",
            pages: 126,
            read: true,
            genre: "Non-fiction"
        },
        {
            title: "Ego is the enemy",
            author: "Ryan Holiday",
            pages: 287,
            read: true,
            genre: "Self-help-book"
        }];
let lib = new Library(myLib);
lib.renderLibrary();

addNewBtn.addEventListener("click", () => {
    dialog.showModal();
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
    overlay.style.display = "none";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("inTitle").value;
    const author = document.getElementById("inAuthor").value;
    const pages = document.getElementById("inPages").value;
    const genre = document.getElementById("inGenre").value;
    const isRead = document.getElementById("inRead").checked;
    lib.addBookToLibrary(title, author, pages, genre, isRead);
    form.reset();
    dialog.close();
    overlay.style.display = "none";
});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("toggle-read-btn")) {
        const index = e.target.dataset.index;
        lib.toggleReadStatus(index);
    }
});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
        lib.removeBook(index);
    }
});
const myLibrary = [];
const library = document.querySelector(".library");

function Book(id, title, author, pages, genre, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(title, author, pages, genre, read){
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, genre, read);
    myLibrary.push(book);
}

function showBooks(){

    for(let i = 0; i<myLibrary.length; i++){
    
        const newBook = document.createElement("div");
        newBook.classList.add("book");
           
            const bookTitle = document.createElement("p");
            bookTitle.classList.add("title");
            bookTitle.textContent = `${myLibrary[i].title}`;
            newBook.appendChild(bookTitle);

            const bookAuthor = document.createElement("p");
            bookAuthor.classList.add("author");
            bookAuthor.textContent = `${myLibrary[i].author}`;
            newBook.appendChild(bookAuthor);

            const bookPages = document.createElement("p");
            bookPages.classList.add("pages");
            bookPages.textContent = `${myLibrary[i].pages}`;
            newBook.appendChild(bookPages);
            
            const bookRead = document.createElement("p");
            bookRead.classList.add("read");
            bookRead.textContent = `${myLibrary[i].read?"Have read before":"Haven't read yet"}`;
            newBook.appendChild(bookRead);

            const btnMarkRead = document.createElement("button");
            btnMarkRead.classList.add("btnRead");
            btnMarkRead.textContent = `Mark Read`;
            newBook.appendChild(btnMarkRead);
           
            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btnDelete");
            btnDelete.textContent = `Delete`;
            newBook.appendChild(btnDelete);

        library.appendChild(newBook);
    }
}

addBookToLibrary("48 laws of power", "Robert Greene", 635, "Self-help-book", true);
addBookToLibrary("Surrounded by idiots", "Thomas Erikson", 320, "Self-help-book", true);
addBookToLibrary("The Atomic Habits", "James Clear", 291, "Self-help-book", true);
addBookToLibrary("The Prince", "Niccolo Machiavelli", 126, "Non-fiction", true);
addBookToLibrary("Ego is the enemy", "Ryan Holiday", 287, "Self-help-book", true);
console.log(library);
showBooks();
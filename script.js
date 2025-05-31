const myLibrary = [];

function Book(id, title, author, pages, genre, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.category = genre;
    this.read = read;
}

function addBookToLibrary(title, author, pages, genre, read){
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, genre, read);
    myLibrary.push(book);
}

function showBooks(){
    for(let i = 0; i<myLibrary.length; i++){
        console.log(`${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages,
             genre:${myLibrary[i].genre}, ${myLibrary[i].read?"Have read before":"Haven't read yet"}`);
    }

    


}

addBookToLibrary("48 laws of power", "Robert Greene", 635, "Self-help-book", true);
addBookToLibrary("Surrounded by idiots", "Thomas Erikson", 320, "Self-help-book", true);
addBookToLibrary("The Atomic Habits", "James Clear", 291, "Self-help-book", true);
addBookToLibrary("The Prince", "Niccolo Machiavelli", 126, "Non-fiction", true);
addBookToLibrary("Ego is the enemy", "Ryan Holiday", 287, "Self-help-book", true);
showBooks();
# Library Management System - JavaScript Project

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Approach](#development-approach)
- [License](#license)

## Description

A browser-based library management application built with HTML, CSS, and JavaScript. This project extends a basic Book constructor into a functional library system where users can add, remove, and track books they've read.

## Features

- Add new books with title, author, page count, and read status
- Display all books in an organized layout
- Toggle read status for each book
- Remove books from the library
- Responsive form for adding new books
- Unique IDs for each book using `crypto.randomUUID()`
- Clean, intuitive user interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-js.git
   ```
2. Open the project directory:
   ```bash
   cd library-js
   ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Click the "New Book" button to open the book entry form
2. Fill in the book details:
   - Title (required)
   - Author (required)
   - Number of pages
   - Read status (checkbox)
3. Click "Add Book" to add it to your library
4. For each book card:
   - Click the "Toggle Read Status" button to mark as read/unread
   - Click the "Remove" button to delete the book from your library

## Project Structure

```
library-js/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # Main JavaScript file
└── README.md           # This file
```

### JavaScript Architecture

The application follows a modular structure with these key components:

1. **Book Constructor**: Creates book objects with unique IDs
   ```javascript
   function Book(title, author, pages, isRead) {
     this.id = crypto.randomUUID();
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.isRead = isRead;
   }
   ```

2. **Library Array**: Stores all book objects
   ```javascript
   const myLibrary = [];
   ```

3. **Core Functions**:
   - `addBookToLibrary()`: Creates and adds new books
   - `displayBooks()`: Renders the library to the DOM
   - Event handlers for form submission and button clicks

4. **Prototype Method**:
   ```javascript
   Book.prototype.toggleRead = function() {
     this.isRead = !this.isRead;
   };
   ```

## Development Approach

This project was developed with these key principles:

1. **Separation of Concerns**:
   - Data management (library array) separate from display logic
   - Form handling separate from book creation

2. **Unique Identification**:
   - Each book gets a unique ID using `crypto.randomUUID()`
   - DOM elements reference books via data attributes

3. **Event-Driven Architecture**:
   - Form submission handled with `preventDefault()`
   - Dynamic event listeners for book cards

4. **Progressive Enhancement**:
   - Core functionality works without persistent storage
   - Clear user feedback for all actions

The development process followed these steps:
1. Set up project files and Git repository
2. Create Book constructor with unique IDs
3. Implement library array and add book functionality
4. Build book display system (cards or table)
5. Add form for new book entry with validation
6. Implement toggle read status functionality
7. Add remove book functionality
8. Polish UI and user experience

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

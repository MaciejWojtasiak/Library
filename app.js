function library() {
    let myLibrary = [];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


    function addBookToLibrary() {
        let title = prompt('Book title: ');
        let author = prompt('Author name: ');
        let pages = prompt('Number of book pages: ');

        let book = new Book(title, author, pages);
        myLibrary.push(book);

        displayBook(book);
    }

    function displayBook(book) {
        const container = document.querySelector('.container');
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML =
            `<span class="book__img"></span>
    <p class="book__author">Author: ${book.author}</p>
    <p class="book__title">Title: ${book.title}</p>  
    <p class="book__pages">No. of pages: ${book.pages}</p>`;
        container.appendChild(card);
    }

    const addBtn = document.querySelector('.buttons__btn--add');
    addBtn.addEventListener('click', addBookToLibrary);

}

document.addEventListener('DOMContentLoaded', library)
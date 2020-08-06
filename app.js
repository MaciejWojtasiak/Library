let myLibrary = [];
const container = document.querySelector('.containter');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = prompt('Book title: ');
    let author = prompt('Author name: ');
    let pages = prompt('Number of book pages: ');

    myLibrary.push(new Book(title, author, pages));
    clearView();
    myLibrary.forEach(book => displayBooks(book));
}

function displayBooks(book) {
    const card = document.createElement('div');
    card.classList.add('book');
    card.id = `${myLibrary.indexOf(book)}`

    card.innerHTML =
        `<span class="book__img"><i class="far fa-times-circle book__img--delete"></i></span>
    <p class="book__author">Author: ${book.author}</p>
    <p class="book__title">Title: ${book.title}</p>  
    <p class="book__pages">No. of pages: ${book.pages}</p>`;

    container.appendChild(card);
}

function deleteBook(el) {
    if (el.target.classList.contains('book__img--delete')) {
        let index = el.target.parentElement.parentElement.id;
        el.target.parentElement.parentElement.remove();
        myLibrary.splice(index, 1);
        clearView();
        myLibrary.forEach(book => displayBooks(book));
    }
}
document.addEventListener('click', deleteBook);

function clearView() {
    container.innerHTML = '';
}

const addBtn = document.querySelector('.header__addBook');
addBtn.addEventListener('click', addBookToLibrary);



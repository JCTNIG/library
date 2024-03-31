const myLibrary = [];

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
  myLibrary.push(book)
  }
};

class Book{
  constructor (name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = false;
  }

  getStatus()  {
    return this.status === true ? 'Read' : 'Unread';
  }
}
let main = document.querySelector('.main');

function displayBook(book) {

  main.innerHTML = '';

  book.forEach((element, index) => {
    const books = document.createElement('div');

    const bookName = document.createElement('div');
    bookName.textContent = 'Tittle: ' + element.name;
    books.appendChild(bookName);

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = 'Author: ' + element.author;
    books.appendChild(bookAuthor);

    const bookPages = document.createElement('div');
    bookPages.textContent = 'Pages: ' + element.pages;
    books.appendChild(bookPages);

    const bookStatus = document.createElement('div');
    bookStatus.textContent = 'Status: ' + element.getStatus();
    books.appendChild(bookStatus);

    const deleteBook = document.createElement('button');
    deleteBook.classList.add('deleteButton');
    deleteBook.textContent = 'Delete';
    books.appendChild(deleteBook);

    const changeStatus = document.createElement('button');
    changeStatus.classList.add('changeButton');
    changeStatus.textContent = 'Change Status';
    books.appendChild(changeStatus);

    let status = myLibrary[index].status

    changeStatus.addEventListener('click', () => {
      status ? status = false : status = true;
      myLibrary[index].status = status
    displayBook(myLibrary)
    })





    books.id = index;
    books.classList.add('book');

    deleteBook.addEventListener('click', () => removeBook(index))

    

    main.appendChild(books);
  })
}

function removeBook(index) {
  myLibrary.splice(index, 1);

  displayBook(myLibrary)
}

function updateStatus(array,property, value) {
  for (let i = 0; i < objects.length; i++){
    if (array[i][property] === value){
      return i;
    }
  }
  return -1


}

const modal = document.querySelector('.modal');

const addBook = document.querySelector('.addBook');

addBook.addEventListener('click', () => {
  modal.showModal();
})

const cancel = document.querySelector('.cancelButton');
cancel.addEventListener('click', () => {
  modal.close();
  form.reset();
});

const form = document.querySelector('.modalForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputName = document.querySelector('.inputName').value;
  
  const inputAuthor = document.querySelector('.inputAuthor').value;
  
  const inputPage = document.querySelector('.inputPage').value;

  const inputStatus = document.querySelector('.inputStatus').checked;

  const newBook = new Book(inputName, inputAuthor, inputPage);


  newBook.status = inputStatus;

  addBookToLibrary(newBook);

  displayBook(myLibrary)
  
  form.reset();
  modal.close();

});
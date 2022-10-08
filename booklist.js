  // Book Class: Represents a Book
    class Book{
      constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
}
}
  // UI class: Handle UI Tasks
  class UI{
  static displayBooks() {
    const StoredBooks = [
    {
    title: 'Book One',
    author: 'Saadu Bayo',
    isbn: '3434434',
  },
  {
    title: 'Book two',
    author: 'Yahaya Abdul-mumeen',
    isbn: '45521',
  },
  {
    title: 'Book three',
    author: 'Abdullah Abdul-Mumeen',
    isbn: '303545',
  },
  {
    title: 'Book Four',
    author: 'Samad Arijo',
    isbn: '593320',
  },
  {
    title: 'Book Five',
    author: 'Oba Mudasheer',
    isbn: '896545',
  }
];

const books = StoredBooks; 

books.forEach((book) => UI.addBookToList(book));
  }

 static addBookToList(book){
 const list = document.getElementById('book-list');
 const row = document.createElement('tr');

 row.innerHTML =`
 <td>${book.title}</td>
 <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href="#" class="btn btn-danger 
 btn-sm delete">X</a></td>
 `;

 list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }
  //<div class="alert alert-success">Whatever the message</div>
  static showAlert(message, className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);

    // /time out in 3 sec
setTimeout(()=> document.querySelector('.alert').remove(), 3000);
}
  static clearFields(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';
   }
}


  // Store Class: Handles Storage

  class Store{
    static getBooks(){
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      }else {
        books =JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }
    static addBook(book){
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
      const books=Store.getBooks();
      book.forEach((book, index) =>{
    if(book.isbn === isbn){
    books.splice(index, 1);
      }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  // Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

  // Event: Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {

  //Prevent actual submit
  e.preventDefault();
  // Get from value
 const title = document.getElementById('title').value;
 const author = document.getElementById('author').value;
 const isbn = document.getElementById('isbn').value;

// validate
if(title === '' || author === '' || isbn ===''){
  UI.showAlert('Please fill in all fields', 'danger');
}else {

// instatiate book
const book = new Book(title, author, isbn);

// Add Book to UI
  UI.addBookToList(book);

  // show success mesage
  UI.showAlert('Book Added', 'success');

  // Clear fields
UI.clearFields();
}
});
  // Event: Remove a Book 

  document.getElementById('book-list').addEventListener('click', (e) =>{
    UI.deleteBook(e.target)

    // show success mesage
  UI.showAlert('Book Removed', 'success');
});


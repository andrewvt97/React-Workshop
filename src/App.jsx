import React, { useState } from 'react';
import './App.css';
import AddBookForm from './AddBookForm'; 


function App() {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel by George Orwell.' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'Novel by F. Scott Fitzgerald.' }
  ]);


  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };


  const addNewBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;


    // Create a new book object with a unique ID
    const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    const bookToAdd = { id: newId, ...newBook };
   
    // Add the new book to the current list
    setBooks(books.concat(bookToAdd));


    // Reset the form fields
    setNewBook({ title: '', author: '', description: '' });
  };


  return (
    <div className="app">
      <div className="centered">
        <h1>Welcome to the Book List App</h1>
        <AddBookForm
          newBook={newBook}
          handleInputChange={handleInputChange}
          addNewBook={addNewBook}
        />
        <ul className="book-list">
          {books.map(book => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
              <p>{book.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;

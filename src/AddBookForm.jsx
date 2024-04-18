import React from 'react';


function AddBookForm({ newBook, handleInputChange, addNewBook }) {
  return (
    <form className="book-form" onSubmit={addNewBook}>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        value={newBook.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newBook.description}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}


export default AddBookForm;



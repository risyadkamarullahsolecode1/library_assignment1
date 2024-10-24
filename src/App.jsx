import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id) => {
    const updatedTitle = prompt("Edit book title");
    if (updatedTitle) {
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, title: updatedTitle } : book
        )
      );
    }
  };

  return (
    <div className="container">
      <Header />
      <h2 className="mt-4">Add a New Book</h2>
      <AddBookForm onSubmit={addBook} />
      <h2 className="mt-3 p-lg-3">Book List</h2>
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <Footer />
    </div>
  );
};


export default App

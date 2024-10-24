import React, { useState } from 'react';

const AddBookForm = ({ onSubmit }) => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    year: '',
    isbn: '',
    category: 'Fiction',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ id: '', title: '', author: '', year: '', isbn: '', category: 'Fiction' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          name="id"
          value={book.id}
          onChange={handleChange}
          placeholder="Book ID"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="year"
          value={book.year}
          onChange={handleChange}
          placeholder="Publication Year"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <select name="category" value={book.category} onChange={handleChange} className="form-control">
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Add Book</button>
    </form>
  );
};

export default AddBookForm;

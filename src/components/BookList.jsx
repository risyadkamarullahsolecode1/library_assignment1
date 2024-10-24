import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Year</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ id, title, author, category, year, isbn }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{author}</td>
              <td>{category}</td>
              <td>{year}</td>
              <td>{isbn}</td>
              <td>
                <button 
                  className="btn btn-warning" 
                  onClick={() => onEdit(id)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

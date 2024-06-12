import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config/BaseLink';
import '../../assets/styles.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="hero">
      <h1>Lama Book Shop</h1>
      
      <div className="books">
        {
          books.map((book) => (
            <div className="grid-container" key={book.id}>
              <div className="book">
                { book.cover && <img src={book.cover} />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
              </div>
              <div>
              <button className="delete">Delete</button>
              <button className="update">Update</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="button-container">
        <button className="add">
          <Link to="/add">Add a new book</Link>
        </button>
      </div>
    </div>
  );
}

export default Books;

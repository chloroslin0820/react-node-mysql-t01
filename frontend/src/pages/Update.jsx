import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../config/BaseLink';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles.css';

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split('/')[2];
  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

  const fetchBook = async () => {
    try {
      const res = await axios.get(BASE_URL);
      const foundBook = res.data.find((book) => book.id === parseInt(bookId));
      if (foundBook) {
        setBook(foundBook);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  const handleInput = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(
          book.title &&
          book.desc && 
          book.price && 
          book.cover
        ) {
        await axios.put(BASE_URL + '/' + bookId, book);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form-container'>
      <form>
        <h1>Update The Book</h1>
        {
          book.id && (
            <>
              <input type="text" placeholder="title" name="title" onChange={handleInput} value={book.title} />
              <input type="text" placeholder="description" name="desc" onChange={handleInput} value={book.desc} />
              <input type="number" placeholder="price" name="price" onChange={handleInput} value={book.price} />
              <input type="text" placeholder="cover" name="cover" onChange={handleInput} value={book.cover} />
              <button className="form-button" onClick={handleSubmit}>Submit</button>
            </>
          )
        }
        <a href="/">Back to Homepage</a>
      </form>
    </div>
  );
}

export default Update;
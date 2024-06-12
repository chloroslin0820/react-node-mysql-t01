import React from 'react';
import { useState } from 'react';
import { BASE_URL } from '../config/BaseLink';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles.css';

const Add = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

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
        await axios.post(BASE_URL, book);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form-container'>
      <form>
        <h1>Add A New Book</h1>
        <input type="text" placeholder="title" name="title" onChange={handleInput} />
        <input type="text" placeholder="description" name="desc" onChange={handleInput} />
        <input type="number" placeholder="price" name="price" onChange={handleInput} />
        <input type="text" placeholder="cover" name="cover" onChange={handleInput} />
        <button className="form-button" onClick={handleSubmit}>Submit</button>
        <a href="/">Back to Homepage</a>
      </form>
    </div>
  );
}

export default Add;

import db from './config.js';

export const getALlBooks = (req, res) => {
    const q = 'SELECT * FROM tbl_books';
    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json(data);
        }
    });
};

export const createBook = (req, res) => {
    const q = 'INSERT INTO tbl_books (`title`, `desc`, `cover`, `price`) VALUES (?)'
    // const values = ["title from backend", "desctiption from backend", "cover pic from backend", 47.50]
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q, [values], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json("Books has been created successfully");
        }
    });
};
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
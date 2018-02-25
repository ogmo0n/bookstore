const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

const Genre = require('./models/genre');
const Book = require('./models/book')

// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/ill-code-it-later');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', function(req, res){
    const genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function(req, res){
    const id = req.params._id;
    const genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function(req, res){
    const id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id', function(req, res){
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.post('/api/books', function(req, res){
    const book = req.body;
    Book.addBook(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', function(req, res){
    const id = req.params._id;
    const book = req.body;
    Book.updateBook(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.delete('/api/books/:_id', function(req, res){
    const id = req.params._id;
    Book.deleteBook(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

const port = 3000;
app.listen(port);

console.log('Listening on port '+ port);
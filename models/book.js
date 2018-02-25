const mongoose = require('mongoose');

// book schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String        
    },
    pages: {
        type: String
    },
    img_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
};

// Get BookById
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
};

// Add book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
};

// Update book
module.exports.updateBook = function(id, book, options, callback){
    const query = {_id: id};
    const update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        img_url: book.img_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete book
module.exports.deleteBook = function(id, callback){
    const query = {_id: id};
    Book.remove(query, callback);
};
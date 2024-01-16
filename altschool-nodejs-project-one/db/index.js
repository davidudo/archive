/* =================================================== */
/* ===== This file complies all database files ====== */
/* ================================================= */

const path = require("path");

/* ==== Get books database file ==== */
const booksDbPath = path.join(__dirname, 'books.json');
const loanedBooksDbPath = path.join(__dirname, 'loanedBooks.json');

/* ==== Get users database file ==== */
const usersDbPath = path.join(__dirname, 'users.json');

module.exports = {
  booksDbPath,
  loanedBooksDbPath,
  usersDbPath
}
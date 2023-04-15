const express = require("express");this

// Database
const database = require("./database");


// Initialise Express

const booky = express();

/*
Route			/
Description		Get all the books
Access			PUBLIC
Parameter 		NONE
Methods 		GET
*/

booky.get("/",(req,res) => {
	return res.json({books: database.books});
})

/*
Route			/is
Description		Get specific bookon isbn
Access			PUBLIC
Parameter 		ISBN
Methods 		GET
*/

booky.get("/is/:isbn",(req,res) => {
	const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn);

	if(getSpecificBook.length===0){
		return res.json({error: `No book found for the ISBN of ${req.params.isbn}`})
	}

	return res.json({book: getSpecificBook});
});

/*
Route			/cat
Description		Get list of books based on category
Access			PUBLIC
Parameter 		category
Methods 		GET
*/

booky.get("/cat/:category",(req,res) => {
	const getSpecificBook = database.books.filter((book) => book.category.includes(req.params.category));

	if(getSpecificBook.length===0){
		return res.json({error: `No book found under the category ${req.params.category}`})
	}getSpecificBook

	return res.json({book: getSpecificBook});
});

/*
Route			/lang
Description		Get list of books based on language
Access			PUBLIC
Parameter 		language
Methods 		GET
*/

booky.get("/lang/:language",(req,res) => {
	const getSpecificBook = database.books.filter((book) => book.language === req.params.language);

	if(getSpecificBook.length === 0){
		return res.json({error: `No book found for the language ${req.params.language}`});	
	}

	return res.json({book: getSpecificBook});
});

/*
Route			/author
Description		Get all the authors
Access			PUBLIC
Parameter 		NONE
Methods 		GET
*/

booky.get("/author",(req,res) => {
	return res.json({author: database.author});
})

/*
Route			/author/name
Description		Get author by name
Access			PUBLIC
Parameter 		name
Methods 		GET
*/

booky.get("/author/:name",(req,res) => {
	const getSpecificAuthor = database.author.filter((author) => author.name === req.params.name);

	if(getSpecificAuthor.length === 0){
		return res.json({error: `No author found for the name ${req.params.name}`});
	}

	return res.json({author: getSpecificAuthor});
});

/*
Route			/author/book
Description		Get author by book
Access			PUBLIC
Parameter 		book
Methods 		GET
*/

booky.get("/author/book/:isbn",(req,res) => {
	const getSpecificAuthor = database.author.filter((author) => author.books.includes(req.params.isbn));

	if(getSpecificAuthor.length === 0){
		return res.json({error: `No author found based on the book ${req.params.isbn}`});
	}

	return res.json({author: getSpecificAuthor});
});

/*
Route			/publications
Description		Get all publications
Access			PUBLIC
Parameter 		NONE
Methods 		GET
*/

booky.get("/publication",(req,res) => {
	return res.json({publications: database.publication})
});

/*
Route			/publications/id
Description		Get specific publication based on id
Access			PUBLIC
Parameter 		id
Methods 		GET
*/

booky.get("/publication/:id",(req,res) => {
	const getSpecificPublication = database.publication.filter((publication) => publication.id === parseInt(req.params.id));

	if(getSpecificPublication.length === 0){
		return res.json({error: `No publications found for the id ${req.params.id}`});
	}

	return res.json({publications: getSpecificPublication});
});

/*
Route			/publications/book
Description		Get list of publications based on books
Access			PUBLIC
Parameter 		book
Methods 		GET
*/

booky.get("/publication/book/:isbn",(req,res) => {
	const getSpecificPublication = database.publication.filter((publication) => publication.books.includes(req.params.isbn));

	if(getSpecificPublication.length === 0){
		return res.json({error: `No publications found for the id ${req.params.isbn}`});
	}

	return res.json({publications: getSpecificPublication});
});

booky.listen(3000,() => {
	console.log("Server is up and running");
});


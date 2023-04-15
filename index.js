const express = require("express");this

// Initialise Express

const booky = express();

booky.listen(3000,() => {
	console.log("Server is up and running");
});
var favoriteBooks = [];
function addFavoriteBook(bookName){
	if (bookName.includes("Great") != true){
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBook(favoriteBooks){
	for (let i =0; i < favoriteBooks.length; i++){
		console.log(favoriteBooks[i]);
	}
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBook(favoriteBooks);


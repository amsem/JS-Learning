class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
                this.favoriteBooks.push(bookName);
        }
	}
	printFavoriteBooks() {
        console.log("Favorite Books:",String(this.favoriteBooks.length));
        for (let bookName of this.favoriteBooks) {
                console.log(bookName);
        	}
	}
}


function loadBooks(theBook) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API,function onBook(bookNames) {
		for (let bookName of bookNames){
				theBook.addFavoriteBook(bookName);
			}
		theBook.printFavoriteBooks();
	});
}


var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

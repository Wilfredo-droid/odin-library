let myBookLibrary = [];


function bookConstructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
};


let book1 = new bookConstructor("The Hobbit", "J.R.R. Tolkien", 295, true);

myBookLibrary.push(book1);


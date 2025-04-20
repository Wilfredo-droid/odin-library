let myBookLibrary = [];


function bookConstructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
};


let cycleThroughLibrary = () => {

    for (let i = 0; i < myBookLibrary.length; i++) {
        let book = myBookLibrary[i];
        console.log(book.title);
    }

}



let book1 = new bookConstructor("The Hobbit", "J.R.R. Tolkien", 295, true);
let book2 = new bookConstructor("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);


myBookLibrary.push(book1);
myBookLibrary.push(book2);

cycleThroughLibrary();


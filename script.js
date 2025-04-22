let myBookLibrary = [];


function bookConstructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;   
    this.id = crypto.randomUUID();
};


let cycleThroughLibrary = () => {

    for (let i = 0; i < myBookLibrary.length; i++) {
        let book = myBookLibrary[i];
        console.log(book.title);
    }

}


//Add books

let book1 = new bookConstructor("The Hobbit", "J.R.R. Tolkien", 295, true);
let book2 = new bookConstructor("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);

let tBody = document.querySelector(".libraryBody");
let addBookButton = document.querySelector(".addBookButton");

addBookButton.addEventListener("click", (e) => {


    
    let title = prompt("Title ?");
    let author = prompt("Author ?");
    let pages = prompt("How many Pages ?");

    const newTr = document.createElement("tr");
    const newTdTitle = document.createElement("td");
    const newTdAuthor = document.createElement("td");
    const newTdPages = document.createElement("td");
    const newTdRead = document.createElement("td");
    const newTdDelete = document.createElement("td");



})


//


myBookLibrary.push(book1);
myBookLibrary.push(book2);

cycleThroughLibrary();


//Add read status
 




// 


//Delete book

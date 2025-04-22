let myBookLibrary = [];


function bookConstructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "No";   
    this.id = crypto.randomUUID();
};


let cycleThroughLibrary = () => {

    for (let i = 0; i < myBookLibrary.length; i++) {
        let book = myBookLibrary[i];
        console.log(book.title);
    }

}


//Add books


let tBody = document.querySelector(".libraryBody");
let addBookButton = document.querySelector(".addBookButton");

addBookButton.addEventListener("click", (e) => {


    
    let title = prompt("Title ?");
    let author = prompt("Author ?");
    let pages = prompt("How many Pages ?");

    let newBook = new bookConstructor(title, author, pages);

    myBookLibrary.push(newBook);

    const newTr = document.createElement("tr");
    const newTdTitle = document.createElement("td");
    const newTdAuthor = document.createElement("td");
    const newTdPages = document.createElement("td");
    const newTdRead = document.createElement("td");
    const newTdId = document.createElement("td");
    const newTdDelete = document.createElement("td");

    const newDeleteButton = document.createElement("button");

    newTdTitle.textContent = newBook.title;
    newTdAuthor.textContent = newBook.author;
    newTdPages.textContent = newBook.pages;
    newTdRead.textContent = newBook.read;
    newTdId.textContent = newBook.id;

    


    tBody.append(newTr);
    newTr.appendChild(newTdTitle);
    newTr.appendChild(newTdAuthor);
    newTr.appendChild(newTdPages);
    newTr.appendChild(newTdRead);
    newTr.appendChild(newTdId);
    newTr.appendChild(newTdDelete);




})


//


myBookLibrary.push(book1);
myBookLibrary.push(book2);

cycleThroughLibrary();


//Add read status
 




// 


//Delete book

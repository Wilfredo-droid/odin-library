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
    const newTdChangeRead = document.createElement("td");

    const newDeleteButton = document.createElement("button");

    const newChangeReadButton =document.createElement("button")

    newTdTitle.textContent = newBook.title;
    newTdAuthor.textContent = newBook.author;
    newTdPages.textContent = newBook.pages;
    newTdRead.textContent = newBook.read;
    newTdId.textContent = newBook.id;


    newDeleteButton.textContent = "Delete";

    newChangeReadButton.textContent = "Change read status";

    newTdTitle.setAttribute("class", "bookTitle");
    newTdAuthor.setAttribute("class", "bookAuthor");
    newTdPages.setAttribute("class", "bookPages");
    newTdRead.setAttribute("class", "isBookRead");
    newTdId.setAttribute("class", "bookId");
    newDeleteButton.setAttribute("class", "deleteBook")
    newDeleteButton.setAttribute("data-id", newBook.id);
    newChangeReadButton.setAttribute("class", "changeRead");


    tBody.append(newTr);
    newTr.appendChild(newTdTitle);
    newTr.appendChild(newTdAuthor);
    newTr.appendChild(newTdPages);
    newTr.appendChild(newTdRead);
    newTr.appendChild(newTdId);
    newTr.appendChild(newTdDelete);
    newTdDelete.appendChild(newDeleteButton);
    newTr.appendChild(newTdChangeRead);
    newTdChangeRead.appendChild(newChangeReadButton);

//Delete book

newDeleteButton.addEventListener("click", (e) => {

    e.target.parentElement.parentElement.remove(); 

    //Removes the grandfather tag of the delete button


    let newBookLibrary = myBookLibrary.filter((book) => {

        return (book.id != e.target.getAttribute("data-id"));

    })

    myBookLibrary = newBookLibrary;

//

//Add read status


//


})



//




})


//



cycleThroughLibrary();





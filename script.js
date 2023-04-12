let myLibrary = [];
const tableRow = document.querySelector(".content_table");
const bookValue = document.querySelector("#book_name");
const authorValue = document.querySelector("#author");
// const selected = document.getElementById("#selected");
const button = document.querySelector(".submit_btn");
const pages = document.querySelector("#pages");
const clearBtn = document.querySelector(".clear_btn");



button.addEventListener("click", function () {
    addBookToLibrary(new Book(bookValue.value, authorValue.value, pages.value, selected.value));
});

clearBtn.addEventListener("click", function(){
    myLibrary = []
    clearLibrary()
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.finsihed = function () {
    if (this.read === true) {
      return "read";
    } else {
      return "not read";
    }
  };

  this.info = function () {
    if (read === true) {
      return `${title} by ${author}, ${pages}, has been read`;
    } else {
      return `${title} by ${author}, ${pages}, not read yet`;
    }
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const gameOfThrones = new Book("Game of Thrones", "George", 300, true);
const myBook = new Book("Song of Ice and Fire", "Random aurthor", 115, false);

function addBookToLibrary(newBook) {
  clearLibrary();
  myLibrary.push(newBook);
  showLibrary();
  console.log(myLibrary);
}

function showLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    const bookEl = document.createElement("tr");
    bookEl.className = "all";
    bookEl.innerHTML = `<td> ${book.title} </td>
                            <td> ${book.author} </td>
                            <td> ${book.pages} </td>
                            <td> ${book.finsihed()} </td>`;

    tableRow.appendChild(bookEl);
  }
}

function clearLibrary() {
  let info = document.querySelectorAll(".all");
  for (let i = 0; i < info.length; i++) {
    info[i].remove();
  }
}

// addBookToLibrary(theHobbit);
// addBookToLibrary(gameOfThrones);
// addBookToLibrary(myBook);

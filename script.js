let myLibrary = [];
const tableRow = document.querySelector(".content_table");
const bookValue = document.querySelector("#book_name");
const authorValue = document.querySelector("#author");
const selected = document.querySelector("#selected");
const button = document.querySelector(".submit_btn");
const pages = document.querySelector("#pages");
const clearBtn = document.querySelector(".clear_btn");
let ident = 0;

function Book(title, author, pages, selected) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.selected = selected;
  this.id = ident;
  ident += 1;
  console.log(ident);
}

function showLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    const bookEl = document.createElement("tr");
    bookEl.className = "all";
    bookEl.id = `book${book.id}`;
    bookEl.innerHTML = `<td> ${book.title} </td>
                            <td> ${book.author} </td>
                            <td> ${book.pages} </td>
                            <td> ${book.selected} </td>
                            <td><button class="clrBtn"> Clear </button> </td>`;

    tableRow.appendChild(bookEl);

    document
      .querySelector(`#book${book.id} td button`)
      .addEventListener("click", () => clearL(book.id));
  }
}

function clearL(bookId) {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    if (book.id === bookId) {
      myLibrary.splice(i, 1);
    }
  }
  clearLibrary();
  showLibrary();
}

function clearLibrary() {
  let info = document.querySelectorAll(".all");
  for (let i = 0; i < info.length; i++) {
    info[i].remove();
  }
}

function addBookToLibrary() {
  if (bookValue.value.length === 0 || authorValue.value.length === 0) {
    alert("Please, fill all the field");
    return;
  }

  clearLibrary();

  const newBook = new Book(
    bookValue.value,
    authorValue.value,
    pages.value,
    selected.value
  );

  myLibrary.push(newBook);
  showLibrary();
  console.log(myLibrary);
}

button.addEventListener("click", function () {
  event.preventDefault();
  addBookToLibrary();
});

clearBtn.addEventListener("click", function () {
  myLibrary = [];
  clearLibrary();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const gameOfThrones = new Book("Game of Thrones", "George", 300, true);
const myBook = new Book("Song of Ice and Fire", "Random aurthor", 115, false);

// addBookToLibrary(theHobbit);
// addBookToLibrary(gameOfThrones);
// addBookToLibrary(myBook);

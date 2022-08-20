//this template retiral is made by ebrima sonko

//import Books 
import Book from "./books.js";



// Book param order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const surveillanceCapitalism = new Book(
  "The Age of Surveillance Capitalism",
  "Shoshana Zuboff",
  9781610395694,
  "2019",
  691,
  691,
  "Finished"
);
console.log(surveillanceCapitalism);


//puting book parameter into Content to display on the browser
//title, author, ISBN, pubYear, pageNumber, currentPage, readStatus

const Content = `
  <main class="container>
    <article id="container-item>
      <h1>Book Contents</h1>
      <ul>
        <li>title: ${surveillanceCapitalism.title}</li>
        <li>author: ${surveillanceCapitalism.author}</li>
        <li>ISBN: ${surveillanceCapitalism.ISBN}</li>
        <li>pubyear: ${surveillanceCapitalism.pubYear}</li>
        <li>pageNumber: ${surveillanceCapitalism.pageNumber}</li>
        <li>currentPage: ${surveillanceCapitalism.currentPage}</li>
        <li>readStatus: ${surveillanceCapitalism.readStatus}</li>
      </ul>
    </article>
  </main>
`
//render the content in the browser page 
document.body.innerHTML = Content;

console.log("surveillanceCapitalism object:", surveillanceCapitalism.title);
console.log("the author of this book:", surveillanceCapitalism.author);
const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const container = document.getElementById('books-container')

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

const API_KEY2 = '8qFT6Xi5uPcRVmtGnsDIsyAUCTHjXcRH'

// const formInput = 'BestSellerBooks'

// const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY}`;

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const formInput = `${year}-${month}-${date}`

  const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY2}`;
  // Fetch bestselling books for date and add top 5 to page
  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);
    for(let i = 0; i < 5; i++) {
      let book = responseJson.results.lists[0].books[i];
      // console.log(article);
      const newLi = document.createElement("li")
      const newUl = document.createElement('ul')
      const spanTitle = document.createElement("span")
      const liAuthor = document.createElement("li")
      const liDesc = document.createElement("li")
      
      const bookTitle = book.title;
      const bookAuthor = book.author;
      const bookDesc = book.description;
      const imgUrl = book.book_image;
     
      spanTitle.innerText = bookTitle;
      liAuthor.innerText = bookAuthor;
      liDesc.innerText = bookDesc
  
      newLi.appendChild(spanTitle)
      newLi.appendChild(newUl)
      newUl.appendChild(liAuthor)
      newUl.appendChild(liDesc)
      container.appendChild(newLi)
      // document.getElementById('img').src = imgUrl
    }
    // if (book1.book_image.length > 0) {
    //   const imgUrl = book1.book_image;
    //   document.getElementById('article-img').src = imgUrl;
    // }
  });
});

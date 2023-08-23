const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

const books = fetch(apiUrl)

books.then(function (data) {
    console.log(data)
});
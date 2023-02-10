const movie = {
    title: 'saktimaan',
    releaseYear: 1999,
    rating: 4.5,
    director: 'mukesh'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);

}
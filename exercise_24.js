const movies = [
    { title: 'a', year: 2018, rating: 4.7 },
    { title: 'b', year: 2019, rating: 4.1 },
    { title: 'c', year: 2020, rating: 4 },
    { title: 'd', year: 2021, rating: 4.3 }
];

const titles = movies
    .filter(m => m.year === 2018 && rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);

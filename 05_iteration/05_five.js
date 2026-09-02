const arr = [1, 2, 3];

//  const value = arr.forEach((element) => {
//     console.log(element);
// });
// console.log(value);
 const value = arr.filter((element) => {
    // console.log(element);
    return element > 2;
});
console.log(value);

// newnums = [];
// arr.forEach((element) =>{
//     if(element > 2){
//         newnums.push(element);
//     }
// })
// console.log(newnums);

 const newnums = arr.forEach((element) =>{
    if(element > 2){
        console.log(element);
    }
})
console.log(newnums);

const myBooks = [
    {
        name: "The Alchemist",
        author: "Paulo Coelho",
        publisher: "HarperCollins",
        genre: "Fiction",
        year: 1988,
        price: 399
    },
    {
        name: "Atomic Habits",
        author: "James Clear",
        publisher: "Avery",
        genre: "Self-Help",
        year: 2018,
        price: 499
    },
    {
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publisher: "Plata Publishing",
        genre: "Finance",
        year: 1997,
        price: 350
    },
    {
        name: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publisher: "Bloomsbury",
        genre: "Fantasy",
        year: 1997,
        price: 599
    },
    {
        name: "Clean Code",
        author: "Robert C. Martin",
        publisher: "Prentice Hall",
        genre: "Programming",
        year: 2008,
        price: 799
    },
    {
        name: "The Psychology of Money",
        author: "Morgan Housel",
        publisher: "Harriman House",
        genre: "Finance",
        year: 2020,
        price: 450
    }
];
myBooks.forEach((book) => {
    console.log(book.name, book.genre, book.price);
});
const programmingBooks = myBooks.filter((book) => {
    return book.genre === "Programming";
});

console.log(programmingBooks);

// const arr = [1, 2, 3, 4, 5];

// const result = arr
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num > 20);

// console.log(result);


const mynums = [1,2,3]
// const myTotal = mynums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = mynums.reduce((acc,currval) => acc + currval, 0)
console.log(myTotal);

const shoppingcart = [
    {
        itemName : "javascript",
        price : 5999

    },
    {
        itemName : "python",
        price: 3999
    },
    {
        itemName : "data science",
        price : 6999
    },
]

const result = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(result);
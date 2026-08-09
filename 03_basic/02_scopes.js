// var c = 300 
// let a = 300
// if(true){
// let  a = 10
// const b = 20
// var c = 30
// console.log("inner:", a);
// }
// console.log(a); // not defined
// console.log(b); // not defined
// console.log(c); 
function one(){
    const username = "ashwani";
    function two(){
        const website = "youtube";
        console.log(username);


    }
    // console.log(website);
    two();

}
one();

// +++++++ ++++++++ +++++++++++++++++++++ ++++++++++++++++++++++++++++ ++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1;

}

addtwo(5) // this  will not run 
const addtwo = function (num) {
    return num + 2;
}
function saymyname(){
   console.log("J");
   console.log("O");
   console.log("H");
   console.log("N");    
}
 saymyname();
// function addtownumbers(num1, num2){
//     console.log(num1 + num2);
// }

// const result = addtownumbers(3,5);
// console.log("result", result); 

function addtownumbers(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("john"); // unreachable code 
}
console.log(addtownumbers(5, 10));


// addtwonumbers(20, "30"); 
// addtwonumbers(3, null);
function loginusermessage(username){ // username = "sam"
    if(username === undefined){ // also we use !username in if (parameter)
        return;
    }
    return `${username} just logged in`
}
console.log(loginusermessage("ashwani"));
console.log(loginusermessage()); // undefined just logged in 

function calculatedprice( val1,val2,...num){  ///... rest operator here also called spread operator
    return num
}
console.log(calculatedprice(200,400,500,1000));
const username = {
    name : "ashwani",
    rollno : 319
    
}
function handleobject(userobject){
    console.log(`name is ${userobject.name} and rollno is ${userobject.rollno}`);
}
// handleobject(username); 
handleobject({
    name: "aman",
    rollno : 333
})

const mynewarray = [200,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,500]));

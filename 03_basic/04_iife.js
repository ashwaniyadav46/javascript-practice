// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`)
})();   // to remove the pollution of the golbal scope  here semicolon is used becasueif you are using anoterh invoked function so that above invoked functio will be terminated 
(() =>{
    console.log(`DB CONNECTED TWO`)
})(); 
((name) =>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Ashwani"); 
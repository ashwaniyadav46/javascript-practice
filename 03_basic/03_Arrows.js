const user = {
    username : "Ashwani" ,
    rollno : 999,
    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
     }
    }
    user.welcomemessage()
    user.username = "Sam" // current context is here the Sam and this indicates the curretn context
    user.welcomemessage()
     console.log(this) // in case no method or function called globally then  this statemnet return {} empty curly braces  and  the golbal objects in javascripts is window object 
     function chai(){
        let name = "ashwani"
        console.log(this.name)
     }
     chai() // this will give the undefined. in function the 'this' is executed like that 
     const arrow = function chai(){
        let name = "ashwani"
        console.log(this.name)
     }
     arrow() // this will also give undefined 
      const arrowfunction = () => {
        let name = "ashwani"
        console.log(this.name)
        console.log(this) // for this result give empty curly braces will be showed unlike the other two above (function and  object with function) where description is showing 
     }
     arrowfunction() // this will also give undefined 
    //  const addtwo = (num1,num2) =>{
    //     return num1 + num2
    //  }
    // implicit return 
    //   const addtwo = (num1,num2) => num1 + num2
          const addtwo = (num1,num2) => ({username : "Ashwani"})

      console.log(addtwo(3,4))
      
     
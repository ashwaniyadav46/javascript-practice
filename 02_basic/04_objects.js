const tinderuser = new Object();
console.log(tinderuser); // Output: {}
const tinderuser1 = {};
console.log(tinderuser1); // Output: {}
tinderuser1.id = 1;
tinderuser1.name = "John";
tinderuser1.age = 25;
console.log(tinderuser1); // Output: { id: 1, name: 'John', age: 25 }
const regularuser = {
  email: "abc@google.com",
  fullname: {
    userfullname: {
      firstname: "John Doe",
      userlastname: "Doe",
    },
  },
};
console.log(regularuser); // Output: { email: ' 
console.log(regularuser.fullname.userfullname.firstname); // Output: John Doe
const object1 = {1:"one", 2:"two", 3:"three"};
const object2 = {4:"four", 5:"five", 6:"six"};
const object5 = Object.assign(object1, object2);
const object6 = Object.assign({},object1, object2); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

const object3 = {...object1, ...object2}; // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

console.log(object3); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

const object4 ={object1, object2};
console.log(object4); // Output: { object1: { '1': 'one', '2': 'two', '3': 'three' }, object2: { '4': 'four', '5': 'five', '6': 'six' } }

const users =[
  {
    id: 1,
    name: "John",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
  }
  
]
console.log(users); // Output: [ { id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 } ]
console.log(users[0].name); // Output: John
console.log(users[1].age); // Output: 30
console.log(Object.keys(users[0])); // Output: [ 'id', 'name', 'age' ]
console.log(Object.values(users[0])); // Output: [ 1, 'John', 25 ]
console.log(Object.entries(users[0])); // Output: [ [ 'id', 1 ], [ 'name', 'John' ], [ 'age', 25 ] ]
console.log(users[0].hasOwnProperty("name")); // Output: true
console.log(users[0].hasOwnProperty("gender")); // Output: false

const user = {
  id: 1,
  name: "John"
}
const {id, name} = user;
console.log(id); // Output: 1
console.log(name); // Output: John
// Destructuring with renaming
const {id: userId, name: userName} = user;
console.log(userId); // Output: 1
console.log(userName); // Output: John
console.log(user); // Output: { id: 1, name: 'John' }

//API JSON Example
// {
//   "customer": {
//     "id": "48631616",
//     "name": "Martina Ratke",
//     "phone": "(584) 432-3315",
//     "address": {
//       "street": "0947 Bernice Ville",
//       "city": "New Leaville",
//       "state": "Nebraska"
//     }
//   }
// }
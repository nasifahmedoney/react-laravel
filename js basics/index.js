//js basics,uncomment the block codes

/* type of
let variable = null;

console.log(typeof variable); */
//----------------------------------------------------
/* js objects syntax
let  user = {
    name: 'nasif',
    age: 100
}
//accessing data various ways
console.log(user.name);
console.log(user['age']); */
//----------------------------------------------------
// arrays
/* 
let a = ['nasif','ahmed','oney'];
console.log(a[1]);
 */
//----------------------------------------------------
// template literals,use `` not single quote
/* let name = "user"
console.log(`the name is ${name}`);
 */
//----------------------------------------------------
//object and array within an object
/* let person = {
    name: 'user',
    address:{
        long: 12,
        lat: 23
    },
    freinds: ['nasif', 'ahmed', 'oney']
}
//console.log(person);
console.log(person.address['lat']);
console.log(person.address.long);
console.log(person.freinds[0]); */
//----------------------------------------------------
// for..in loop 
/* 
let objs = {
    name: 'user',
    age: 100
}
for(let key in objs)
{
    console.log(key,objs[key]); //property, value
}

const arr = [1,2,3,4,5];
for(let key in arr)
{
    console.log(key,arr[key]); //access property and value
}
 */
//----------------------------------------------------
// for..of
/* const arr = [1,2,3,4,5];
for(let key of arr)
{
    console.log(key); //access value only
} */
//----------------------------------------------------
//string methods
/* stringName.chatAt(index),
.toUpperCase(),
toLowerCase(),
includes(),boolean
startsWith(),boolean
endsWith(),boolean
 */
//----------------------------------------------------
//using functions and this keyword inside an object
/* let user = {
    name: 'user',
    displayName: function(){
        console.log(`the user name is ${this.name}.`);
    }
}
user.displayName();
 */
//----------------------------------------------------
//accessing object property and data as array
/* let obj = {
    name: "user",
    age: '100'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
 */
//----------------------------------------------------
//object destructuring
/* const obj = {
    name: "user",
    age: '100',
    newObj: {
        name1: "newuser",
        age1: '100200',
    }   
}

const {name,age} = obj;
const {name1,age1} = obj.newObj;

console.log(age);
console.log(age1);
 */
//----------------------------------------------------
//clone object
/* 
let obj = {
    name: "user",
    age: '100'
}
let copyObj = Object.assign({},obj);//copy all the contents of obj and assign to another object copyObj

console.log(copyObj);
 */
//----------------------------------------------------
//object to JSON and JSON to object

/* let obj = {
    name: "user",
    age: '100'
}

let toJSONdata = JSON.stringify(obj);
let jsonTOobject = JSON.parse(toJSONdata)

console.log(toJSONdata);
console.log(jsonTOobject);
 */
//----------------------------------------------------
//default parameters, assigining values in function parameter
/* 
function sum(num1,num2=10,num3=20){
    return num1+num2+num3;
}

console.log(sum(10));//output: 40
 */
//----------------------------------------------------
//arrow function with examples
//codeacademy cheatsheet
// Arrow function with two arguments 
/* const sum = (firstParam, secondParam) => { 
    return firstParam + secondParam; 
  }; 
  console.log(sum(2,5)); // Prints: 7 
   
  // Arrow function with no arguments 
  const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // Prints: hello
   
  // Arrow functions with a single argument 
  const checkWeight = weight => { 
    console.log(`Baggage weight : ${weight} kilograms.`); 
  }; 
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.
   
   
  // Concise arrow functions
  const multiply = (a, b) => a * b; 
  console.log(multiply(2, 30)); // Prints: 60  */
/* single parameter dont use (),0 or 2+ parameter use (),
single line function body doenst need "return" keyword.
*/ 
//----------------------------------------------------
//rest parameter, args, dynamic array of parameters
/* function multiply(...args){
    let res = 1;
    for(let i = 0;i<args.length;i++)
    {
        res *= args[i]; 
    }
    return res;
}

console.log(multiply(1,2,3,4,5));
 */
//----------------------------------------------------
//callback functions
//calling a function as parameter in another function
/* let result = function(number)
{
    console.log(number);
}

let sum = function(num1,num2, callbackFunction)
{
    let calculateSum = num1+num2;
    callbackFunction(calculateSum);
}
sum(1,2,result);
 */
//----------------------------------------------------
// promises, produce a result or an error
/* let promise = new Promise(function (resolve,reject)
{
    //setTimeout(resolve("done"),2000);
    let x = 1;
    if(x === 0)
    {
        resolve('ok');
    }
    else{
        reject('error');
    }
});

promise.then(
    function(result){console.log(result)},
    function(error){console.log(error)}
);

 */
//----------------------------------------------------
//pass by reference object
// alter object values permanently and add new properties

/* let person = {
    name: 'user',
    age: 100,
    displayInfo: function(){
        console.log(`The person is ${this.name} and ${this.age} years old.`);
    }
};

let changePerson = function(obj){
    obj.age += 100;
    obj.name = 'new user';
    obj.newProperty = 'new property'; 
}

changePerson(person);
person.displayInfo();
console.log(Object.keys(person),Object.values(person));
 */
//----------------------------------------------------
//property value shorthand
//assign values to user object using newFunction parameters

/* function newFunction(val1,val2){
    return {
        val1,
        val2,
        display()
        {
            console.log(`display values ${val1}`);
        }
    }
}

let user = newFunction(1,2);
console.log(user.val1);//output: 1
console.log(user.val2);//output: 2
user.display();//output: console.log
console.log(user)
 */
//----------------------------------------------------

// finding an object inside an array
/* 
const users = [
    {name: 'user1', age: 100},
    {name: 'user2', age: 200},
    {name: 'user3', age: 300}
];

const res = users.find(function(users){
    return users.name = 'user1';
})
console.log(res);
 */

//----------------------------------------------------
//array foreach
/* 
let arr = [1,2,3,4,5];

arr.forEach(function(value,index){
    console.log(value,index);
}); */
//----------------------------------------------------
//array every and some method
/* const arr = [1,5,3,6,4,-1];

let a = arr.every(function(num){
    return num > 1;
});
console.log(a);//output: false, every number is not greater than 1, there is a -1

let b = arr.some(function(num){
    return num < 0;
});
console.log(b);//output: true, there is anumber less than 0, -1.
 */
//----------------------------------------------------
//array map
//returns an array
// array.map(callback function or function body)
/* let a = [
    {firstname: "nasif", lastname: "ahmed"},
    {firstname: "first", lastname: "name"},
    {firstname: "ahmed", lastname: "nasif"}
]; */
//option 1
/* let b = a.map(myFunction);

function myFunction(num)
{
    return [num.firstname,num.lastname].join(' ');
}
console.log(b);
output: array
['nasif ahmed', 'first name', 'ahmed nasif']
 */
//option 2
/* let b = a.map(function(num){
    return num.firstname;
})
console.log(b); */
//output: ['nasif', 'first', 'ahmed']
//----------------------------------------------------
// array filter, filter array elements, returns array
/*  let oddNumbers = [1,2,4,5,3,5,7];
 let users = ['user1','user2','user3'];

 let arrFilter = oddNumbers.filter((numbers) => numbers % 2 !== 0 );
 console.log(arrFilter);//[1, 5, 3, 5, 7]
 
 let usersFilter = users.filter((users) => users === 'user1' );
 console.log(usersFilter);//['user1'] */
 //----------------------------------------------------
//arrar destructure
/* 
let [a,b,c,d] = [1,2,3,4];
console.log(a);//output: 1
 const obj = {
    name: "user",
    age: '100',
    newObj: {
        name1: "newuser",
        age1: '100200',
    }   
}

function testing()
{
    const {name,age,newObj} = obj;
    console.log(`this is ${name} and ${newObj.age1}`);
}
testing();//output: "this is user and 100200"
 */

// Set(), no duplicate values
/* 
let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.delete(100);
//option 1:
set.forEach((elements)=> console.log(elements));
//option 2:
for(let el of set)
{
    console.log(el);
}
 */

// Map(), key value pair
/* 
let map = new Map();

map.set(1,'nasif');
map.set(2,'ahmed');
map.set(3,'oney');

//map.delete(1);

console.log(map.keys());
console.log(map.values());
console.log(map.get(1));//get values using keys

for(let el of map)
{
    console.log(el);//output: every key and value
}
map.forEach((el)=> console.log(el));//output: value of every key
 */
//----------------------------------------------------
//exporting modules works on live server
/* 
import addNumber from './moduleExport.js';

console.log(addNumber(1,2));
 */
// try catch finally
function test(a,b){
    if(b===0)
    {
        throw new Error("second parameter cant be zero");
    }
    return a/b;
}

try {
    console.log(test(4,0));
}
catch(e){
    console.log(e),
    console.log(e.name),
    console.log(e.message)
}
finally{
    console.log('change the second parameter')
}

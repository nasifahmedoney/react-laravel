//js basics,uncomment the block codes

/* type of
let variable = null;

console.log(typeof variable); */
// ------------------------------
/* js objects syntax
let  user = {
    name: 'nasif',
    age: 100
}
//accessing data various ways
console.log(user.name);
console.log(user['age']); */
// --------------------------
// arrays
/* 
let a = ['nasif','ahmed','oney'];
console.log(a[1]);
 */
// --------------------------
// template literals,use `` not single quote
/* let name = "user"
console.log(`the name is ${name}`);
 */
// --------------------------
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
// --------------------------
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
// for..of
/* const arr = [1,2,3,4,5];
for(let key of arr)
{
    console.log(key); //access value only
} */

//string methods
/* stringName.chatAt(index),
.toUpperCase(),
toLowerCase(),
includes(),boolean
startsWith(),boolean
endsWith(),boolean
 */
//using functions and this keyword inside an object
/* let user = {
    name: 'user',
    displayName: function(){
        console.log(`the user name is ${this.name}.`);
    }
}
user.displayName();
 */

//accessing object property and data as array
/* let obj = {
    name: "user",
    age: '100'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
 */
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

//clone object
/* 
let obj = {
    name: "user",
    age: '100'
}
let copyObj = Object.assign({},obj);//copy all the contents of obj and assign to another object copyObj

console.log(copyObj);
 */

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

//default parameters, assigining values in function parameter
/* 
function sum(num1,num2=10,num3=20){
    return num1+num2+num3;
}

console.log(sum(10));//output: 40
 */

//arrow function with examples
/* single parameter dont use (),0 or 2+ parameter use (),
single line function body doenst need "return" keyword.
*/ 

//rest parameter, args, dynamic array of parameters
function multiply(...args){
    let res = 1;
    for(let i = 0;i<args.length;i++)
    {
        res *= args[i]; 
    }
    return res;
}

console.log(multiply(1,2,3,4,5));



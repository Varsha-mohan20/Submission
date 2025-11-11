let first:number = 123;
let second:number = 0x37CF;
let third:number = 0o337
let fourth:number = 0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

var t:number = 3;
var b:boolean = true;
var c:Boolean = true;

console.log(typeof(b));
console.log(typeof(c));

// Array
let fruit: string[] = ['Apple', 'Orange', 'Banana'];
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
let ids: Array<number>;
ids = [23,34,100,124,44];
let arr = [1,3,'Apple', 'Orange', 'Banana', true, false];

//Multi Type Array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
let value: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 

console.log(fruit);
console.log(fruits);
console.log(ids);
console.log(arr);
console.log(values);
console.log(value);

//Tuple
var empId: number = 1;
var empName: string = "Varsha";

var employee: [number,string] = [1, "Varsha"];

var empDetail: [number , string] = [1, "Varsha"];
var person: [number , string, boolean] = [1, "Varsha", true];

var user: [number , string, boolean, number, string]; //Declare tuple variable
user = [1, "Varsha", true, 20, "Developer"]; //Initialize tuple variable

console.log(person);
console.log(user);

//Tuple Array
var emp: [number , string][]; //Declare tuple variable
emp = [[1, "Varsha"], [2, "Hema"], [3, "Shiv"]]; //Initialize tuple variable

console.log(emp);

// //Numeric Enum
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3,
//     Book = 10
// }
// function getPrintMediaCode(mediaName: string): number{
//     if(mediaName === 'newsletter'){
//         return 5;
//     }
// }
// PrintMedia.Newsletter;

// //Enum String
// enum PrintStringMedia {
//     Newspaper = 'NEWSPAPER',
//     Newsletter = 'NEWSLETTER',
//     Magazine = 'MAGAZINE',
//     Book = 'BOOK'
// }

// //Heterogeneous Enum
// enum Status{
//     Active = 'ACTIVE',
//     Deactivate = 1,
//     Pending
// }

//Typescript Union
let code: (string|number);
code = 123;
code = "ABC";
// code = false; // compiler error

function displayType(code: string | number)
{
    if(typeof(code)=== "number")
    console.log("Code is Number");
    else if(typeof(code) === "string")
    console.log("code is string");
}
displayType(123);
displayType("Varsha");

//Typescript Data type -  ANY
let something: any = "Hello World!";
something = 23;
something = true;

let arrAny: any[] = [1, "Varsha", true];
arrAny.push("Smith");
console.log(arrAny)

//Typescript Data type - VOID
function sayHi(): void{
    console.log('Hi!');
}

let speech: void = sayHi();
console.log(speech);

//Typescript Data type - NEVER
function throwError(errorMsg:string):never{
    throw new Error(errorMsg);
}

function keepProcessing():never{
    while(true){
        console.log('I always does something and never ends.');
    }
}

//This works because test1 & test2 takes it type as "any" explictly
var test1;
var test2;
 test1 = "Varsha";
 test2 = 123;
 test1=test2;

 //It will not work
// var test1 = "Varsha";
// var test2 = 123;
//  test1=test2;

//Type Inference in compile object
// var aarr:number[] = [2,3,null,0]; //it works
var barr:(string|number)[] = [2,"varsha",3];

//Type Assertion in typescript
let codes: any = 123;
let employeecode = <number> codes; //or
let employeecodes = codes as number;

//Typescript - Function
let sum = function(x:number, y:number):number{
    return x+y;
}
console.log(sum(3,5));
// console.log(sum(3,"55")); supports in js not in ts

//Typescript - Function Overloading
// function add(a:(string|number),b:(number|string)):(string|number){ // this will not work
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any):any{
    return a+b;
}
console.log(add(3,6));
console.log(add("Varsha ","Mohan"));
// console.log(add("Varsha ",3)); // throw an error when overloading

//Typescript - REST parameters
function Greet(greeting:string, ...names:string[]){
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello","Varsha","Mohan"));
console.log(Greet('Hello'));

// //Dont do like this thow an error
// function Greet(...names:string[], greeting:string){
//     return greeting + " " + names.join(", ") + "!";
// }

function common(a: string, b: string): string;
function common<T>(a: T[], b: T[]): T[];
function common(a: any, b: any): any {
  const result: any[] = [];

  // for strings
  if (typeof a === "string" && typeof b === "string") {
    a = a.toLowerCase();
    b = b.toLowerCase();
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) !== -1 && result.indexOf(a[i]) === -1) {
        result.push(a[i]);
      }
    }
    return result.join('');
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    const flatA = ([] as any[]).concat(...a);
    const flatB = ([] as any[]).concat(...b);
    for (let i = 0; i < flatA.length; i++) {
      if (flatB.indexOf(flatA[i]) !== -1 && result.indexOf(flatA[i]) === -1) {
        result.push(flatA[i]);
      }
    }
    return result;
  }

  return [];
}

console.log(common([1, 2, 3, 4], [4, 6, 2]));     // [2, 4]
console.log(common([1, 2, [3, 4]], [4, 5, 6]));   // [4]
console.log(common("Sriram", "Rajesh"));          // sra
console.log(common(['s','r','i','r','a','m'], ['r','a','j','e','s','h'])); //[ 's', 'r', 'a' ]
console.log("*****************************");

function findCommon(arr1: string,arr2: string):any[];
function findCommon(arr1: number[],arr2: number[]):any;
function findCommon(arr1: any,arr2: any):any{
    let v1;
    let v2;
    if(typeof(arr1)==="string"){
        v1 = [...arr1.toLowerCase()];
        v2 = [...arr2.toLowerCase()];
    }else{
        v1=[...arr1];
        v2=[...arr2];
    }
    console.log(v1);
    var result = new Set();
    for(var i = 0; i < v1.length; i++){
        for(var j = 0; j < v2.length; j++){
            if(v1.findIndex(x => v1[i] == v2[j]) >= 0){
                // console.log("found.." +v1[i]);
                result.add(v1[i]);
                break;
            }
        }
    }
    return [...result];
}

console.log(findCommon("Sriram","Rajesh"));
console.log(findCommon([1, 2, 3, 4], [4, 6, 2]));
console.log("*****************************");

function reverse(a: any): any {
    let rev = ([x, ...y]: any[]): any[] =>
      (y.length >0)? [...rev(y), x] : [x];
  
    if (typeof a === "string") 
        return rev([...a.toLowerCase()]).join('');
    if (typeof a === "number") 
        return Number(rev([...a.toString()]).join(''));
    if (Array.isArray(a)) 
        return rev(a);
  }
  
  console.log(reverse("Sriram")); // marirs
  console.log(reverse([..."Sriram"])); 
  console.log(reverse([1,2,3,4])); // [4,3,2,1]
  console.log(reverse(97)); // 79
  console.log(reverse(57+"")); 
  console.log(reverse(97.39)); 
  console.log(reverse(-97)); 
  
//Class
class Employee{
    empCode:number;
    empName:string;

    constructor(empCode:number,empName:string){
        this.empCode = empCode;
        this.empName = empName;
    }
}
let employees = new Employee(11,"Varsha");

abstract class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }

     display(): void{
        console.log(this.name);
    }
    // abstract find(string):Person;
}
// class Employees {
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
class Employees extends Person {
    constructor(name: string) {
      super(name);
    }
    display(): void {
        console.log(`Employee name: ${this.name}`);
      }
  }
  
  let e: Person = new Employees("Varsha");
  e.display();

//06/11/25 //Typescript - STATIC
class Circle{
  static pi:number = 3.14;
}

// Typescript - MODULE use import and export
//test1.ts
var greeting:string = "Hello world";
//test2.ts
console.log(greeting);
greeting = "New String";

//Generic function
function getArray<T>(item:T[]):T[]{
    return new Array<T>().concat(item);
}

import {fromEvent, iif} from 'rxjs';
import Job from './context';

import {Game, TGame } from './interface';

// fromEvent(document, 'click').subscribe(() => addItem('clicked'));
// [3,4,5,6].map(x => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


// 1. Intro with Class and Interface

interface Person{
    name: string,
    age?: number
}

class Me{
    name: string;
    age: number
    constructor(name: string, age: number){
        this.name  = name;
        this.age = age;
    }
}

let {name, age} = new Me('Jude', 41);
const c: Person = new Me('Simon', 7);
addItem(name);
addItem(age);

// Object.keys(c).map(x => addItem(c[x]));
for(const [key, value] of Object.entries(c)){
    addItem(`${key}: ${value}`)
}

// 2. Basic Types
// primitive non-collections
let isDone: boolean = false;
let num: number = 34;
let str: string = `Hey Jude are you ${num} years old?`;
// addItem(str)

//Non-primitive collections

// i. Array
let people: string[] = ['jude', 'simon', 'mama', 'leanne'];
// also same as 
let friends: Array<string> = [...people];
// friends.map(x => addItem(x))

// ii. Array of objects from basic interface
// could also be written as let workers: Array<Job> =[{...}]
let workers: Job[] = [
    {department: "IT", title: "Full stack", id: 2}, 
    {department: "HR", title: "Manager", id: 5}, 
    {department: "Sales", title: "Associate", id: 9}, 
];
// workers.map(x => addItem(`${x.department}, ${x.title}`))

// iii. Tuple
let x: [number, string];
x = [10, "Jude"];
// x = ["jude", 10] // throws an error
// Array.from(x[1]).map(y => addItem(y))

// iv. Enum
enum Races{
    black,
    white,
    brown
}

let r: string = Races[0];
// Races.white // return 1 that is the index

enum Races2{
    black =1,
    white,
    brown
}

// let r2: string = Races2[2];
// addItem(Races2.brown) // 3

// Never for unreachable endpoints or errors

function error(message: string):never{
    throw new Error(message);
  }
try{
    error("failed messageszz")
}catch(e){
    addItem(e)
}


// Type casting
let someVal: string;
someVal = "This is from Jude";

let numVal: number = (someVal as string).length;
// or
let numVal2: number = (<string>someVal).length;
addItem(numVal);
addItem(numVal2)



for(let [key, value] of Object.entries(TGame())){
    addItem(`${key}: ${value}`)
}



/// comment inside juv branch:wq

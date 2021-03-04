import {fromEvent} from 'rxjs';

// fromEvent(document, 'click').subscribe(() => addItem('clicked'));
// [3,4,5,6].map(x => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


// 1. Class and Interface

interface Person{
    name: string,
    age: number
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






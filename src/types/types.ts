// javascript primitives include:
// string, number, boolean, symbol, undefined, null, bigint, object
// typescript adds the following types:
// Array, Tuple, Enum, Union, Void, Object, Any, Never

//1. Type Annotations
let arrayType: Array<number> =[3,4,5,6]; // number type annotation
let arrayType2: string[] = ["a", "b", "c"]; // string type annotation
let arratType3 = [3, "jude"]; // no type annotation

//2. Parameter Type Annotations - used in functions
function greet(name: string){
    return name
}

//3. Return Type Annotations
function getNumber(): number{
    return 26
}

// 4. Union Types
function printId(id: number | string){
    return id
}
// printId(26), printId("name")
// Narrowing Union Types
function printId2(id: number | string){
    if(typeof id === "string"){
        return id.toUpperCase()
    }
    return id * id;
}

// as named expression
let narrowPID = (x: string | number) => typeof x === "string" ? x.toUpperCase() : x * x;

interface IName{
    name: string;
    age?: number;
}

class Person{
// declare type in class before using
    name: string;
    age: number
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
}
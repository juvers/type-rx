// Javascript types = 8
// The latest ECMAScript standard defines nine types:

// Six Data Types that are primitives, checked by typeof operator:

// 1. Primitive Types: (6)
// undefined : typeof instance === "undefined"
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"

// 2. Structural Types: (2)
// Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
// Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

// 3. Structural Root Primitive: (1)
// null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;


// TS includes the following new types:
// Date, never, any, enum, unknown,

// I - Type Annotation
// i. variables
let name: string = "jude";

// ii. functions 
// b is made optional so if b is not supplied ise the placeholder i.e. 0
export default function add(a: number, b?: number): number {
    return a + b || 0;
}

// II. Type inference. 
// In I-i. TS can infer its a string
// In I-ii. TS can infer the return type as number
// e.g let name = "jude"; // string type is infered

// i. Type inference - let
let date1 = new Date(2021, 2, 7); // type = Date
let name0 = "Leanne" // type = string
let num = 41 // type = number

// ii. Type inference - const
const name1 = "Simon"; // type = "Simon" - string literal type
const num1 = 31 // type = 31 - number literal type
// type of n = "Simon" and not string
// TS infers the type of a string constant to the value of the constant rather than the wider string type. This is because a string constant can only be that value. This is called a string literal type.
// When a constant is initialized from a primitive type, TS infers it to be a literal type of the specific value assigned. However, when a constant is initialized from a non-primitive type, TS only infers it to be of the same type as assigned.

// iii. Type inference - const with non-primitives
const date2 = new Date(2021, 7, 22); // type = Date
// since date2 is not a primitive the Date type is infered

// iv Type inference - const redeclared with let
const last = "Smith"; // type = "Smith"
let surname = last; // type = string
// if we pass the constant into a let then the wider string type will be infered;

// v Type inference - const as expression in template literals 
const first2 = "Bob";
const last2 = "Smith";
const fullName = `${first2} ${last2}`; // type = string

// vi. Type inference - unassigned let declaration
let counter;
counter = 10; // type = any

// vii. Type inference - functions without type annotations
/* function add2(a, b){
    return a + b
}*/
// parameters in functions act like unassigned but declared variables as in #vi. type = any, return type = any

// viii. Type inference - functions without type annotations but with default parameters
function add3(a = 3, b = 5){
    return a + b
}
// default parameters are infered as in #I-i but as optional types
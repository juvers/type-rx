// I. Date
const date1: Date = new Date(2021, 8, 14);
// II. any
let something;
something = "Jude"
something = 33;
something = false;
something = new Date(2019, 5, 8);
// all above types = any cos of the failure of initial assignment
// any opts out of TS 

// i. Use case for any
const formValues: { [field: string]: any } = {
    firstName: "Bob",
    surname: "Smith",
    age: 30,
};

// The type { [field: string]: any } means an object whose property names are of type string, with property values of type any.
// III. void
let whatCanIHold: void;
whatCanIHold = undefined;
/* whatCanIHold = "something"; // type = error as the void type can't hold any data - it can only be undefined (or null if the strictNullChecks compiler option is off) */

//void is only really useful for function return types. It can be inferred, but we can explicitly define it on functions if we prefer.

// IV. Array
// i. empty array = unassigned 
const items = [];
items.push(1);
items.push("two");
items.push(false);

// No error as 'any' is assigned to all items element since it was declared without any assignment
// To avoid 'any' type we can declare array without assigning as ff:
/* const items2: number[] */

// ii. Array generics
const numbers: Array<number> = []; // also same as const numbers: number[] = []
numbers.push(1);
/* numbers.push("two"); // error = only numerics allowed */
/* numbers.push(false); // error = only numerics allowed */

// iii. Type inference
let numbers1 = [4, 5, 6]; // type = number[]
let names1 = ["simon", "lily"]; // type = string[]

// iv. Rest Parameters = array unpacked with ...
function logScores(firstName: string, ...scores: number[]) {
    console.log(firstName, scores);
}
function logScores2(firstName: string, ...scores: number[]) {
    console.log(firstName, scores);
}

// V. Tuples = arrays with fixed number of elements
// used in hooks e.g. const [state, setState] = useState()
const tomScore = ["Tom", 70]; // type = (number | string)[]
// The above is not a tuple. Its an array that can contain string or number element types. To correct it to be a tuples do the ff:

const tomScore1: [string, number] = ["Tom2", 70]; // type = [string, number]

// i. Tuple labeling - just to add description to tuples values
const tomScore2: [name: string, score: number] = ["Tom3", 70];

// ii. Tuple with unending similar data type - rest parameter
// with labels
const tomScores: [name: string, ...scores: number[]] = ["Tom4", 71, 72, 73]
// without labels
const tomScores2: [string, ...number[]] = ["Tom4", 71, 72, 73]
// N.B. as in rest parameter only the last element is extensible so ...el must be used as last entry. Also when using labels, the label holds the

// VI. never
const keepLogging = (message: string) => {
    while (true) {
        console.log(message);
    }
}; // type = never
// N.B. every functions executes a return and an empty return is void. But the above code never returuns cos it is an infinite loop as it never ends to be able to make a return so type = never

// never use case
type Status = "Pending" | "Working" | "Complete";
function doSomeAction(status: Status) {
    switch (status) {
        case "Pending":
            // some code
            break;
        case "Working":
            // some code
            break;
        case "Complete":
            // some code
            break;
    }
}
doSomeAction("Pending");

function neverReached(never: never) { } // useful to complete the default case
function doSomeAction2(status: Status) {
    switch (status) {
        case "Pending":
            // some code
            break;
        case "Working":
            // some code
            break;
        case "Complete":
            // some code
            break;
        default:
            neverReached(status)
    }
}
// adding the default never helps to give a type error that the status value is never going to run

// VII. unknown - typesafe alternative for any
// keywords: TYPE GUARD, TYPE PREDICATE
/* function unknownadd(a: unknown, b: unknown) {
    return a + b;
  } */ // a and b cant be operated on directly. Their types must be clarified
// we cannnot operate directly on type unknown. A type guard must be introduced to clarify the type.

function unknownadd2(a: unknown, b: unknown) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 0;
} // the 'if' is the type guard that clarifies the type

// use case: Fetching data
// fetch data with generic Promise<unknown>
async function getData(path: string): Promise<unknown> {
    const response = await fetch(path);
    return await response.json();
}
// create type to anticpate returned type
type Person = {
    id: string;
    name: string;
};
// create function getPerson to execute the fetch request
/*async function getPerson(id: string): Promise<Person | null> {
    const person = await getData("/people/1");
    if (person) {
        return person; // error here as person cant be operated on such as returned since its type is still unknown and incompatible with the return type Person or null
    }
    return null;
} */

// to solve the error of operation on unknown type person, add a type predicate as ff;

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

// correct code with type predicate
async function getPerson(id: string): Promise<Person | null> {
    const person = await getData("/people/1");
    if (person && isPerson(person)) {
      return person;
    }
    return null;
  }

// use case b - using a 3rd party lib that returns an any type
const thirdPartyCalculation: any = () => {}
function doWork() {
    // convert to unknown to make it type-safe
    const result: unknown = thirdPartyCalculation();
    // use a type guard to convert result
    if (typeof result === "number") {
      return result + 1;
    }
    return undefined;
  }

  // Test cases
  function logMessage(message: string) {
    return console.log(message);
  } // type = void // every function must make a return either void or a value. since console.log(...) never returns a value then it will return void
  

  function outputMessage(message: string) {
    if (typeof message === "string") {
      console.log(message);
    } else {
      let invalid = message;
      console.error(invalid);
    }
  } // type = never // as only string is allowed the else will never run
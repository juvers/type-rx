// base function

// export function prop(obj: {}, key: string){
//     return obj[key]
// }


interface Data {
    id: number,
    text: string,
    due: Date
}


type d2 = keyof Data;

export function prop<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}

const obj1 = {
    a: 2,
    b: 5
}
// Object.entries example
for(const [key, value] of Object.entries(obj1)){
    console.log(`${key}: ${value}`)
}

// export interface ObjEntries{
//     entries<T extends { [key: string]: any}, K extends keyof T>(o: T): [keyof T, T[K]][];
// }


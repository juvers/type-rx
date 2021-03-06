

const genObj: any = {
    g1: <Type>(x: Type) => x, 
    g2: <T>(y: T) => y
};

export default genObj

// function Getv<Type>(x: Type): Type{
//     return x
// }



// Partial

interface UserModel{
    name: string,
    age: number,
    address: string,
    password: string
}


export function CreateUser({name, age}: Partial<UserModel>): Partial<UserModel>{
    return {
        name,
        age
    }
}
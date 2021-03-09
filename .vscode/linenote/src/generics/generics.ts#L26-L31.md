Refer to this:
https://netbasal.com/getting-to-know-the-partial-type-in-typescript-ecfcfbc87cb6


Without partial then all 4 properties of the UserModel must be implemented. 

Under the hood Partial Interface looks like this
type Partial<T> = { [P in keyof T]?: T[P]; };
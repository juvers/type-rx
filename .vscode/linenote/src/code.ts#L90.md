objects are non-primitive but are collections.
primitive types are:
1. string
2. number
3. boolean
4. bigint
5. symbol
6. null
7. undefined

N.B. All primitives are immutable
example
var bar = "baz"
console.log(bar) // baz
bar.toUppercase();
console.log(bar) // baz

but
bar = bar.toUppercase() // (re)assigning the primitive gives it a new value and does not mutate it.


Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:

String for the string primitive.
Number for the number primitive.
BigInt for the bigint primitive.
Boolean for the boolean primitive.
Symbol for the symbol primitive.
The wrapper's valueOf() method returns the primitive value.

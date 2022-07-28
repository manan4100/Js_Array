//First 
const a = ["a",'b',"c"]
const b = a.entries()

console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)

//Second
const c = ["a", "b", "c"];

for (const [index, element] of c.entries()) {
  console.log(index, element);
}



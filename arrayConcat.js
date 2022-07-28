//First
const array1 = ["a","b","c","d"]
const array2 = ["e","f","g","h"]
const array = array1.concat(array2)

console.log(array)

//Second
const alpha = ["a","b","c","d"]
const num = [ 1,2,3,4,5]
const merge = alpha.concat(num)

console.log(merge)

//Third
const num1 = ["1","2","3","4"]
const letter = ["a","b","c","d"]
const name = ["arjun","rohit"]
const join = num1.concat(letter, name)

console.log(join)

//Fourth
const a = ["Sport"]
const b = ["S","p","o","r","t"]
const c = a.concat("car")
const d = b.concat("c","a","r")

console.log(c)
console.log(d)

// Fifth
const  a1 = ["Hello"]
const a2 = ["World"]
//const a3 = concat(a1+a2)

console.log(a1+" "+a2)

//Six
const b1 = [[0]]
const b2 = [2,[3],[4]]
const b3 = b1.concat(b2)

b1[0].push(4,2)
b2[2].push(6)

console.log(b3)
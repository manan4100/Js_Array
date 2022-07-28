//First 
const array = [1,2,3,4,5,6]
console.log(array.fill(0))

//Second
const array1 = [0,1,2,3,4,5,6,8]
const a = array1.fill(2,3)
console.log(a)

//Third
const array2 = [1,2,3,4,5,6,7,8]
console.log(array2.fill(5,1,5))

//Fourth 
const name = Array(5).fill("js",0)
console.log(name)

const number = Array(6).fill(2,0)
console.log(number)

//Fifth 
const string = ["This","is","new","version"]
console.log(string.fill("upgrade",2,3))
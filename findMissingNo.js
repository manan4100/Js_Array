let a = [1,2,3,4,5,6,7,9,10]
let sum = 0 
let sum1 = 0

for(let i=0; i<a.length; i++){
    sum = sum + a[i]
}
// console.log(sum )

for (let i=1; i<=10; i++){
    sum1 = sum1 + i
}
console.log("Missing Number is ",sum1 - sum)
// console.log(sum1)
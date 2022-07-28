// First 
const color = ["Red","Blue","Black","White"]
console.log(color.length)

// Second
const str = "Visual Studio Code"
const len = str.length

console.log(len)

//Third
const num = [1,2,3,4,5,6,7,8]
const count = num.length
for(i=0; i<count; i++){
    num[i] *= 2
}
console.log(num)


//Fourth Shorting array
const a = [1,2,3,4,5,6]
if(a.length>4){
    a.length=5
}
console.log(a)
console.log(a.length)

//Fifth
const string = " This is the New String"
console.log(string.length)
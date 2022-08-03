let alpha = [1,2,3,4,5]
let color = [6,7,8,9]

let merge = alpha.concat(color)
const length = merge.length
let key = 15


// console.log(merge)
console.log(length)
console.log(merge.at(1))

let numSwitch = false

for (let i = 0; i<length; i++ ) {
    let na = merge[i];
    if( na == key){
        numSwitch = true
        break
    }    
            
}
if (numSwitch == true){
    console.log("this value is match")
} 
else {
    console.log("this value is not match")
}



// if(merge == key)
//     console.log("yes")
// else 
//     console.log("No")
//  [1,2,3,4,5,6,7,8,9]
// break
let alpha = [1,2,3,4,5]
let color = [6,7,8,9]

let merge = alpha.concat(color)
const length = merge.length
let key = 5


// console.log(merge)
console.log(length)
console.log(merge.at(1))

for (let i = 0; i<length; i++ ) {
        let na = merge[i];
            if( key == na)
                console.log("this value is match with key ", na)
            else
                console.log("this value is not match with key " , na)
    }



// if(merge == key)
//     console.log("yes")
// else 
//     console.log("No")

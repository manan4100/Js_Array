let a = [5,6,8,6,77,4,5,4,8,2,8]

for(let i = 0; i< a.length; i++){
    count = 0;
    for(let j = 0; j < a.length; j++){
        if(a[j] == a[i]){
            count++;
        }
    }
    if(count == 1){
        console.log(a[i])
    }
}

let maxRepeat = 0
let number = 0
for(let i = 0; i< a.length; i++){
    count = 1;
    for(let j = i+1; j < a.length; j++){
        if(a[j] == a[i]){
            count++;
        }
    }
    if(count>maxRepeat){
        maxRepeat = count
        number=a[i] 
        
    }
    
}
console.log(number,maxRepeat)

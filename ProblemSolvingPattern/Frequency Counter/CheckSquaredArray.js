const naiveSolSame=(arr1,arr2)=>{  //O(n^2)
if (arr1.length!=arr2.length){
    return `Array count doesn't match`
}
else{
    for(let i=0;i<arr1.length;i++){
        let currentIndex=arr2.indexOf(arr1[i]**2)
        if(currentIndex===-1){
            return false
        }
        else{
            arr2.splice(currentIndex,1)
        }
        
    }
}
return true
}

const efficientSol=(arr1,arr2)=>{
    if (arr1.length!=arr2.length){
        return `Array count doesn't match`
    }
    let frequencyList1={}
    let frequencyList2={}

    for(let val of arr1){
        frequencyList1[val]=(frequencyList1[val] || 0)+1
    }
    for(let val of arr2){
        frequencyList2[val]=(frequencyList2[val] || 0)+1
        console.log('check', frequencyList2)
    }
    console.log('freqList',frequencyList2)
    for(key in frequencyList1){
        
        if(!(key**2 in frequencyList2)){
            return false
        }
    }
    for(key in frequencyList1){
        if(frequencyList1[key]!=frequencyList2[key**2]){
            return false
        }
    }
    return true
    
}
arr1=[2,3,4,5]
arr2=[9,25,4,16]
// console.log(naiveSolSame(arr1,arr2))
console.log(efficientSol(arr1,arr2))

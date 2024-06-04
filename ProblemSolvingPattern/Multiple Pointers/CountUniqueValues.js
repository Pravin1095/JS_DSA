// Since the array is sorted multiple pointers will be efficient than freqCount here

const mySol=(arr)=>{
let freqCount={}
for (let i=0;i<arr.length;i++){
    freqCount[arr[i]]=(freqCount[arr[i]] || 0)+1
}
return Object.keys(freqCount).length
}


const multiplePointersSol=(arr)=>{
    let startIndex=0
    let movingIndex=1
    while(movingIndex<arr.length){
        if(arr[startIndex]==arr[movingIndex]){
            movingIndex+=1
        }
        else{
            movingIndex+=1;
            startIndex+=1
            arr[startIndex]=arr[movingIndex-1]
        }
    }
    return startIndex+1
}

console.log(multiplePointersSol([1,1,1,3,4]))
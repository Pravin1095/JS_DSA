// For the sorted array find at what index the given value is found using binary search
// [1, 2, 3, 4, 5, 6],6
// [1, 31],6

//[1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29] ,15


const binarySearch=(arr, val)=>{
    let start=0
    let end=arr.length-1
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if(val>arr[middle]){
            start=middle+1
        }
        else if(val<arr[middle]){
            end=middle-1
        }
        else{
            return middle
        }
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29] ,15))



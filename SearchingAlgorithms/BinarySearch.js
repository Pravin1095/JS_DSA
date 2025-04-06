

const binarySearch = (arr, val)=>{
let start=0;
let end=arr.length-1
let mid
while(start<=end){
    mid=Math.round((end+start)/2)
    console.log("check ", start , end)
    if(arr[mid]==val){
        return mid
    }
    else if(val>arr[mid]){
        start=mid+1
    }
    else{
        end=mid-1
    }
}
return -1
}

console.log(binarySearch([2, 4, 6, 8, 10, 11, 20], 20))
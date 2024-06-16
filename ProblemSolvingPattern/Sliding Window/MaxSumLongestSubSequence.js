const efficientSol=(arr, n)=>{
    let sum=0
    let maxSum=0

    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    maxSum=sum
for(let i=n;i<arr.length;i++){
sum=sum-arr[i-n]+arr[i]
if(sum>maxSum){
    maxSum=sum
}
}
return maxSum
}

console.log(efficientSol([2,6,9,2,1,8,5,6,3], 3))
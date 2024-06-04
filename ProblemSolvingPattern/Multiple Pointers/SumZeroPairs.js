const naiveSol=(arr1)=>{
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]+arr1[j]==0){
            return [arr1[i], arr1[j]]
        }
    }
}
return undefined
}

const EffectiveSol=(arr)=>{
    var startPoint=0
    var endPoint=arr.length-1
while(startPoint<endPoint){
    if(arr[startPoint]+arr[endPoint]==0){
        return [arr[startPoint],arr[endPoint]]
    }
    else if(arr[startPoint]+arr[endPoint]>0){
        endPoint=endPoint-1
    }
    else{
        startPoint=startPoint+1
    }
}
return undefined
}

console.log(EffectiveSol([-4,-3,-2,-1,0,1,5]))
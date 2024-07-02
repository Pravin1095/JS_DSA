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

const EffectiveSol2=(arr)=>{
    let lowIndex=0
    let highIndex=arr.length-1
    let hasNeg=arr.some(num=>num<0)
    console.log('index out', lowIndex, highIndex)
    if(!hasNeg){
        return 'No Pairs'
    }
    else{
        while(lowIndex<highIndex){
            console.log('index',lowIndex,highIndex)
        if(arr[lowIndex]+arr[highIndex]>0){
            highIndex-=1
        }
        else if(arr[lowIndex]+arr[highIndex]<0){
            lowIndex+=1
        }
        else{
            return [arr[lowIndex], arr[highIndex]]
        }
    }
    }
}

console.log(EffectiveSol([-4,-3,-2,-1,0,1,5]))
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output : 6 [4,-1,2,1]

const LinearSol=(arr)=>{
    let maxSum=0
    let currentSol=0
    
    for(let i=0;i<arr.length;i++){
        currentSol +=arr[i]
        if(currentSol>maxSum){
            maxSum=currentSol
        }
        if(currentSol<0){
currentSol=0
        }
        else{
           continue
        }
    }
    return maxSum
}

console.log(LinearSol([-2, 1, -3, 4, -1, 2, 1,-5,4]))
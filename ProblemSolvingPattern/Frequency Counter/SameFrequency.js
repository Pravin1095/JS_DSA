// Given two +ve numbers , find out that the two numbers have same frequency of digits

const sameFrequency=(n1, n2)=>{
let freqList={}
while(n1!==0){
if(n1%10 in freqList){
    freqList[n1%10]+=1
}
else{
    freqList[n1%10]=0
}
n1=Math.floor(n1/10)


}
while(n2!==0){
    if(n2%10 in freqList){
        freqList[n2%10]-=1
    }
    else{
        return false
    }
    n2=Math.floor(n2/10)
}
return true
}


console.log(sameFrequency(3589578, 8598753))
// Given a string s, rearrange the characters so that no two adjacent characters are the same.
// If it's not possible, return an empty string.

// ✅ Example 1:

// Input: "aab"
// Output: "aba"

class MaxHeap{
    constructor(){
        this.data = []
    }
    push=(pair)=>{
this.data.push(pair)
this.data.sort((a,b)=>b[1]-a[1])
    }

    pops=()=>{
        return this.data.shift()
    }

    size=()=>{
        return this.data.length
    }
}

const reOrganizeString = (s)=>{
const charObj = new Map()
let res=''
let prev = null
for(let char of s){
    charObj.set(char, charObj.get(char)+1 || 1)
}

const heapObj = new MaxHeap()
for(let [char, freq] of charObj){
    heapObj.push([char, freq])
}
while(heapObj.size()){

let [char, freq]= heapObj.pops()
res+=char
if(prev && prev[1]>0){
    
    heapObj.push(prev)
}
prev = [char, freq-1]


}

return res.length===s.length ? res : "Not possible"
}

const kFreqElements=(arr,k)=>{
    const arrFreqCount = new Map()
    let resArr = []
    for(let num of arr){
        arrFreqCount.set(num, arrFreqCount.get(num)+1 || 1)
    }
    const numFreq = new MaxHeap()
    for(let [num, freq] of arrFreqCount){
        numFreq.push([num, freq])
    }
    while(k>0){
        let [num ,freq] = numFreq.pops()
resArr.push(num)
k-=1
    }
    return resArr
}

console.log(reOrganizeString('aa'))
console.log(kFreqElements([5,3,1,1,1,3,73,1], 2))
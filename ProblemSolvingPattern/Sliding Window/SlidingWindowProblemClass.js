class SlidingWindow {
    constructor(){

    }
    //My code
//     longestSubString = (s, k)=>{
//         let max = 0
//         let count =0
//         let left=0;
//         let right = 0
//         const charCount = new Map()
// for(let i=0;i<s.length;i++){
//     console.log("check obj length",charCount.size, Object.keys(charCount), charCount)
//     if(charCount.size>k){
//         if(charCount.get(s[left])==1){
//             charCount.delete(s[left])
//         }
//         else{
//         charCount.set(s[left],charCount.get(s[left])-1)
//         }
//         charCount.set(s[i],charCount.get(s[i])+1 || 1)
//         left+=1
//         right+=1
//     }
//     else if(charCount.size==k){
//         console.log("get charCount inside else if", right, left, max)
//         if(right-left>max){
//             max = right-left
//         }
//         charCount.set(s[i],charCount.get(s[i])+1 || 1)
//         right+=1
        
//     }
//     else{
//         console.log("check went in")
//         charCount.set(s[i],charCount.get(s[i])+1 || 1)
//         right+=1
//     }


// }
// console.log("max check", max)
// return max
//     }

//Clean code

longestSubString=(s, k)=>{
    let max = 0;
    let left =0;
    const charCount = new Map()
    for(let right=0;right<s.length;right++){
        charCount.set(s[right], charCount.get(s[right])+1 || 1)
    console.log("check charCount", charCount)
while(charCount.size>k){
    console.log("if inside while")
    if(charCount.get(s[left])==1){
charCount.delete(s[left])
    }
    else{
        charCount.set(s[left], charCount.get(s[left])-1)
    }
    left+=1
}
if(charCount.size<=k){
    max = Math.max(max, (right-left)+1)
}
    }
    return max
}
}

const slidingWindowObj = new SlidingWindow()
console.log("longestSubString", slidingWindowObj.longestSubString("ecebbb", 2))
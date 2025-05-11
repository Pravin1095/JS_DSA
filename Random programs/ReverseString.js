
class RandomPrograms{
    reverse = (s)=>{
        let res =''
        let i =1
    if(s==''){
        return ''
    }
    while(i<=s.length){
    res+=s[s.length-i]
    i+=1
    }
    return res
    }

   vowelCount = (s)=>{
    let string = s.toLowerCase()
let map =new Map();
map.set('a',0)
map.set('e',0)
map.set('i',0)
map.set('o',0)
map.set('u',0)
let count = 0;
for(let i=0;i<s.length;i++){
    if(map.has(s[i])){
        count+=1
    }
    else{
        continue
    }
}
return count
   }

   flattenArray = (arr)=>{
    let res=[]
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        res=res.concat(this.flattenArray(arr[i]))
    }
    else{
      res.push(arr[i])
    }
   
}
return res

   }

   countNestElements = (arr)=>{
    let res = 0
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            if(arr[i].length===0){
                continue
            }
            else{
            res+=this.countNestElements(arr[i])
            }
        }
        else{
            res+=1
        }
    }
    return res
   }

   firstUniqueChar = (s)=>{
let charCount = {}
for(let char of s){
if(char in charCount){
    charCount[char]+=1
}
else{
    charCount[char] = 1
}
}
for (let key in charCount){
    if (charCount[key] === 1){
        return key
    }
}
return null
   }

   twoSum = (arr, target)=>{
    let sumObj = {}
    for(let i=0;i<arr.length;i++){
        if(target-arr[i] in sumObj){
            return ([sumObj[target-arr[i]], i])
        }
        else{
            sumObj[arr[i]]=i
        }
    }
    return null
   }

   validParenthesis = (s)=>{
    if(s.length%2!=0){
return false
    }
    let openBrackets = {}
    const checkOpenBrackets = ['(','{','[']
    const checkClosedBrackets = [')','}',']']

for(let i = 0 ;i<s.length;i++){
if(checkOpenBrackets.includes(s[i])){
    openBrackets[s[i]]= openBrackets[s[i]]+1 || 1
 }
 else if(checkClosedBrackets.includes(s[i])){
    if(Object.keys(openBrackets).length===0){
        return false
    }
    else{
        if(checkOpenBrackets.indexOf(Object.keys(openBrackets)[Object.keys(openBrackets).length-1])=== checkClosedBrackets.indexOf(s[i])){
            if(openBrackets[Object.keys(openBrackets)[Object.keys(openBrackets).length-1]]===1){
                let delteObject =Object.keys(openBrackets)[Object.keys(openBrackets).length-1] 
                delete openBrackets[delteObject]
            }
            else{
                openBrackets[Object.keys(openBrackets)[Object.keys(openBrackets).length-1]]--
            }
        }
        else{
            return false
        }
       

    }
 }
}
return true

   }

   reversePolishNotation = (arr)=>{
const stack = []
let res=0
for(let i=0;i<arr.length;i++){
    console.log("stack", stack)
    if(!Number.isNaN(Number(arr[i]))){
        stack.push(Number(arr[i]))
    }
    else{
        console.log("check else", arr[i])
        let num2 = stack.pop()
        let num1 =stack.pop()
        if(arr[i]==="+"){
res=num1 + num2
        }
        else if(arr[i]==="-"){
            res=num1 - num2
                    }
        else if(arr[i]==="*"){
            res=num1 * num2
            }
         else if(arr[i]==="/"){
             res=Math.round(num1 / num2)
             console.log("check inside div if", num1, num2)
                }
stack.push(res)
    }
}
return stack.pop()
   }

    /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
minSum = function(nums1, nums2) {
    let sum1 = 0
    let sum2 = 0 
    const num1ZeroCount = new Map()
    const num2ZeroCount = new Map()
    num2ZeroCount.set(0, 0)
    num1ZeroCount.set(0, 0)
    for(let i=0;i<nums1.length;i++){
        if(nums1[i]!==0){
            sum1+=nums1[i]
        }
        else{
num1ZeroCount.set(0, num1ZeroCount.get(0)+1 || 1)
        }
    }
    for(let i=0;i<nums2.length;i++){
        if(nums2[i]!==0){
            sum2+=nums2[i]
        }
        else{
num2ZeroCount.set(0, num2ZeroCount.get(0)+1 || 1)
        }
    }

    console.log("check sum", sum1, sum2)

    if(num1ZeroCount.get(0)==0 && num2ZeroCount.get(0)==0){
if(sum1==sum2){
    return sum1
}
else{
    return -1
}
    }
    if(num1ZeroCount.get(0)===0 || num2ZeroCount.get(0)===0){
        
      
         if(sum2>sum1 && num2ZeroCount.get(0)===0){
if(sum2-sum1>=num1ZeroCount.get(0)){
    return sum2
}
        }
        else if(sum1>sum2 && num1ZeroCount.get(0)===0){
if(sum1-sum2>=num2ZeroCount.get(0)){
    return sum1
}
        }
      if((sum1==sum2) && (num2ZeroCount.get(0)>0 && num1ZeroCount.get(0)>0 )){
        return sum1
      }
      else{
        return -1
      }
    }
    else{
        if(sum2>sum1 && (sum2-sum1)+num2ZeroCount.get(0)<num1ZeroCount.get(0)){
            return sum1+=num1ZeroCount.get(0)
        }
        else if (sum1>sum2 && (sum1-sum2)+num1ZeroCount.get(0)<num2ZeroCount.get(0)){
            return sum2+=num2ZeroCount.get(0)
        } 
       else if(sum1>sum2){
            return sum1+=num1ZeroCount.get(0)
        }
        else if(sum2>sum1){
            return sum2+=num2ZeroCount.get(0)
        }
        else{
            return sum1+=Math.max(num1ZeroCount.get(0), num2ZeroCount.get(0))
        }
    }
};
 

}

obj1 = new RandomPrograms()
console.log(obj1.reverse('pravin'))
console.log(obj1.vowelCount('pravineee'))
console.log(obj1.flattenArray([1, [2, 3], 4, [5,6,7]]))
console.log(obj1.countNestElements([[[[]]]]))
console.log(obj1.firstUniqueChar("aabbcc"))
console.log(obj1.twoSum([6, 1 , 2 , 7], 9))
console.log(obj1.validParenthesis("((()))"))
console.log(obj1.reversePolishNotation(["2", "1", "+", "3", "*"]))
console.log(obj1.minSum([2,0,2,0], [1, 4]))
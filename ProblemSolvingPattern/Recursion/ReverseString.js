class Recursion{
    constructor(){
       
    }
    factorial = (n)=>{
if(n===0){
    return 1
}
else{
    return this.factorial(n-1) * n
}
    }

flattenArray = (arr)=>{
let res = []
for(let i of arr){
    if(Array.isArray(i)){
        res = res.concat(this.flattenArray(i))
    }else{
res.push(i)
    }
}
return res
}

sumOfDigits = (digit)=>{
let q = Math.floor(digit/10)
let rem = digit%10
if(q===0){
    return rem
}
else{
    return rem+this.sumOfDigits(q)
}
}
checkPalindrome=(s)=>{
if(s.length === 0 || s.length===1){
    return true
}
else{
    if(s[0]===s[s.length-1]){
        return this.checkPalindrome(s.slice(1, s.length-1))
    }
    else{
        return false
    }
}
}
power= (num, exp)=>{
if(exp===0){
    return 1
}
else{
    return num * this.power(num, exp-1)
}
}
}

const fact = new Recursion()
// console.log("fact",fact.factorial(5))
// console.log("flatten",fact.flattenArray([1,[2,[3,4]],5]))
console.log("sum",fact.sumOfDigits(910))
console.log("palindrome check",fact.checkPalindrome("h"))
console.log("power check",fact.power(2, 4))
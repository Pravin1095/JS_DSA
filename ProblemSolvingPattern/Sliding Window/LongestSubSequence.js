const myMethod=(arr)=>{
    let res=''
    let words=[]
    let finalRes=''
for(let i=0;i<arr.length;i++){
if(res.includes(arr[i])){
    words.push(res)
    res=''
    res=res+arr[i]
}else{
res=res+arr[i]
if(i+1==arr.length){
    words.push(res)
}
} 
}

for (let word of words){
    let maxLength=0
    if(word.length>maxLength){
        finalRes=word
    }
}
return finalRes
}

console.log(myMethod('helloworld'))
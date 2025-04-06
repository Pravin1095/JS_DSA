const linearSearch=(arr, val)=>{
    var a=20
for(let i=0;i<arr.length;i++){
    console.log('check a', a)
    if(val===arr[i]){
        return i
    }
    else{
        continue
    }
}
return -1
}

console.log(linearSearch([1, 2, 3, 5, 10, 12], 9))
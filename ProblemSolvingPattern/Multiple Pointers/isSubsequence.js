const isSubsequence=(str1, str2)=>{
    let str2_count=0
    let string_ele=''
for(let i=0;i<str1.length;i++){
    string_ele=str1[i]
for(let j=str2_count;j<str2.length;j++){
if(string_ele===str2[j]){
    str2_count+=1
    break
}
else{
    if(j+1==str2.length){
        return false
    }
    else{
    continue
    }
}
}
}
return true
}

console.log(isSubsequence('hello','hello world'))
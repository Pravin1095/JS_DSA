
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

}

obj1 = new RandomPrograms()
console.log(obj1.reverse('pravin'))
console.log(obj1.vowelCount('pravineee'))
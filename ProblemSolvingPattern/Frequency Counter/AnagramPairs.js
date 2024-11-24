const anagramPairCount=(str)=>{
//Edge case
const map=new Map()
if(str.length==0){
    return 0
}

let pairCount=0

for(let words of str){
    let frequency=new Array(26).fill(0)
    for(let char of words){
frequency[char.charCodeAt(0)-'a'.charCodeAt(0)]++
    }

    let key=frequency.join(',')
    console.log('key', key)
    if(map.has(key)){
        pairCount+=map.get(key)
        map.set(key, map.get(key) + 1);
        console.log('pairCount',pairCount)
        console.log('map.get',map.get(key))
    }
    else{
        map.set(key,1)
    }
}

return pairCount

}

// console.log(anagramPairCount(["listen", "silent", "enlist", "google", "gogole", "cat", "act", "dog"]))
console.log(anagramPairCount(["listen", "silent", "enlist"]))
// Output : 5
// Explanation: The anagram pairs are:

// ("listen", "silent")
// ("listen", "enlist")
// ("silent", "enlist")
// ("google", "gogole")
// ("cat", "act")
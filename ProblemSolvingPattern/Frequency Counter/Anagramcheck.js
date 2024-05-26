function validAnagram(arr1, arr2){
    // add whatever parameters you deem necessary - good luck!
    let charcount1={}
    let charcount2={}
    if(arr1.length!=arr2.length){
        return false
    }
    else{
        for (let val of arr1){
            charcount1[val]=(charcount1[val] || 0)+1
        }
         for (let val of arr2){
            charcount2[val]=(charcount2[val] || 0)+1
        }
        for(let keys in charcount1){
            if(charcount1[keys]!=charcount2[keys]){
                return false
            }
            
        }
    }
    return true
    
  }
  
console.log(validAnagram('anagram','nagaran'))  
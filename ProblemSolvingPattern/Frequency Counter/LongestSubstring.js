const longestSubstring=(s, k)=>{
    let freqCounter={}
for(let i=0;i<s.length;i++){
if(freqCounter[s[i]]){
    freqCounter[s[i]]+=1
    console.log('check freq',freqCounter[s[i]])
}
else{
    freqCounter[s[i]]=1
    console.log('check in else',freqCounter[s[i]])
}

if(freqCounter[s[i]]==k){
    return i+1
}

}
    return 0

}

// console.log(longestSubstring("cbbebi", 3))
console.log(longestSubstring("araaci", 2))

//You are given a string s and an integer k. Write a function to find the length of the longest substring in s that contains at most k unique characters.

// Output
// An integer representing the length of the longest substring with at most k unique characters.

// Input:


// s = "cbbebi";
// k = 3;
// Output:


// 5
// Explanation: The longest substring with at most 3 unique characters is "cbbeb" or "bbebi".

// if k=2 output should be 4 as 'bbeb', ' is the longest substring as k is the atmost and we have two unique characters 'b' and 'e' in the substring
function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let howMany =0
    if(str.length === 0) return str = "empty, plz enter nums"

    for(let i=0 ; i < str.length; i++){
        for(let v =0 ; v < vowels.length ; v++){
        if(str[i] === vowels[v]){
        howMany += 1
        }}
    }
    return howMany
}

console.log(countVowels("yara"))
console.log(countVowels("ilyas"))
console.log(countVowels("abdallah"))
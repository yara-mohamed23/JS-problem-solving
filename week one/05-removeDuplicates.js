// Input: "apple banana apple orange banana apple"
// Output: { apple: 3, banana: 2, orange: 1 }
// مش شغال

function removeDuplicatess(arr){
    let word = arr.split(' ');
    let newArr = []
    let count = 1
    let finalObj = {}
    if(word.length === 0) return word = "empty, plz enter nums"

    for(let i=0 ; i < word.length; i++){
        let flag = false
        
        for(let v =0 ; v < newArr.length ; v++){
        if(word[i] === newArr[v]){
            flag = true
            count += 1;
            break
        }}
        if(!flag){
            newArr.push(word[i])
        }
    }
    return finalObj
}
console.log(removeDuplicatess("apple banana apple orange banana apple apple apple "))

// ai


function removeDuplicates(arr){
    let word = arr.split(' ');
    let finalObj = {}; // 1. بدأنا بكائن (Object) فاضي في الأول

    if(!arr || word.length === 0) return "empty, plz enter nums";

    for(let i = 0; i < word.length; i++){
        let currentWord = word[i]; // الكلمة اللي عليها الدور

        // 2. لو الكلمة موجودة قبل كده جوة finalObj بنزود عدادها 1
        if (finalObj[currentWord]) {
            finalObj[currentWord] += 1;
        } else {
            // 3. لو أول مرة نشوف الكلمة، بنحطها جوة finalObj وعدادها يبتدي بـ 1
            finalObj[currentWord] = 1;
        }
    }

    return finalObj;
}

console.log(removeDuplicates("apple banana apple orange banana apple"));
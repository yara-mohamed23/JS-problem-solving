
let courseName = "HTML-CSS-JavaScript";
console.log(courseName.split('-'))

let sentence = "coding love I";
console.log(sentence.split(' ').reverse().join(' '))

function resreve(name){

let resrevedWord = name.split('').resreve().join('')

return resrevedWord
}

console.log(resreve("YAR"))

//without builtin functions
function resreve(name){
    let reversed = ""
    for(let i = name.length-1 ; i >= 0 ; i--){
        reversed += name[i]
    }
    return reversed
}
console.log(resreve("YAR"))

// js builtin functions
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("MOH")); // Output: "RAY"

// js builtin functions
function resreve(name){
let resrevedWord = name.split('').reverse().join('')
return resrevedWord
}
console.log(resreve("HANA"))

//Arrow Function
let reverseing = (str)=>{
    return str.split('').reverse().join('')
}
console.log(reverseing("OMAR"))

//Spread Operator ...
let srtingRev = str => [...str].reverse().join('')
console.log(srtingRev("Hello"))

//return
let s = (str)=> { return str.split('').reverse().join('')}
console.log(s('hana'))

//Implicit Return
let s = (str)=> str.split('').reverse().join('')
console.log(s('yara'))

let str = "yar"
console.log(str.split(''))
console.log([...str])
// console.log(...str) error

function largestNumberArray(arr){
    let lar = []
    if(arr.length === 0) return lar = ["empty, plz enter nums"]
    for(let i=0 ; i < arr.length; i++){
        if(arr.length === 1) return lar = arr[0]
        if(arr[i] > lar){
            lar = arr[i]
        }
    }
    return lar
}

console.log(largestNumberArray([1,2,3,5]))
console.log(largestNumberArray([3]))
console.log(largestNumberArray([]))

//Max
let s = (arr)=> Math.max(...arr)
console.log(s([1,2,3]))

//witout Spread Operator Max
//let s = (arr)=> Math.max(arr)
//console.log(s([1,2,3])) // NAN
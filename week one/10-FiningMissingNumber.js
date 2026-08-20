function FiningMissingNumber(arr){
    let sum = 0
    let n = arr.length + 1
    let total = (n * (n + 1)) / 2
    
    for(let i =0 ; i< arr.length ; i++){
       sum += arr[i]
    }
    let MissingNumber = total - sum
    return MissingNumber
}

console.log(FiningMissingNumber([1, 2, 4, 5, 6]))
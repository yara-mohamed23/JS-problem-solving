function removeDuplicates(arr){
    let newArr = []
    if(arr.length === 0) return arr = "empty, plz enter nums"

    for(let i=0 ; i < arr.length; i++){
        let flag = false
        for(let v =0 ; v < newArr.length ; v++){
        if(arr[i] === newArr[v]){
            flag = true
            break
        }}
        if(!flag){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))


function removeDuplicates(arr) {
    if (arr.length === 0) return "empty, plz enter nums";

    let newArr = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if(!seen[current]){
            seen[current] = true;
            newArr.push(current)
        }
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
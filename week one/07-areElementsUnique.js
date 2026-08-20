function areElementsUnique(arr){
    let result = []

    for(let i=0; i < arr.length; i++){
        let currentElement = arr[i]

        if(result.includes(currentElement)){
            return false
        }
        result.push(currentElement)
    }

    return true;
}

console.log(areElementsUnique([1, 2, 3, 4]))
console.log(areElementsUnique([1, 2, 2, 3, 4]))
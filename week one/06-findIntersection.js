function findIntersection(arr1,arr2){
    let result = []

    for(let i = 0 ; i < arr1.length ; i++){
        let currentItem = arr1[i]
            if(arr2.includes(currentItem)){
                result.push(currentItem)
            }
    }
    return result;
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));



let inputs= [
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'fruit' }
]

for(let input of inputs){
    console.log(input.type)
}

inputs.forEach((input, index) => {
    console.log(`user number ${index+1} his type ${input.type}`)
})

function countProperties(arr){
    let result = {}
    
    for(let i=0 ; i < arr.length ; i++){
        let currentInput = arr[i]
        let key = currentInput.type;
        if(result[key]){
            result[key] += 1
        }else{
            result[key] = 1
        }
    }
    return result
}

console.log(countProperties(inputs))
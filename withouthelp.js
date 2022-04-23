function addNums(arrayOfNumbers) {
    let sum = null
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]
        
    }
    return sum 
}

const ages = [11, 12, 14, 17]

const totalSum = addNums(ages)

console.log(totalSum)
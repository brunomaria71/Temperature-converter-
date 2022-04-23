// const farenheit = 81

// function tempCheck(farenheit) {
//     const result = (farenheit - 32) * 5/9
//     return result
// }

// const newTemps = tempCheck(farenheit)

// console.log(newTemps);


// function tempConvert(originalCelsius) {
//     const farenheitResult = (originalCelsius * 9/5) + 32
//     const kelvinResult = (originalCelsius) + 273.15
    
//     const result = {
//         farenheit: farenheitResult,
//         kelvin: kelvinResult,
//         celsius: originalCelsius
//     }
    
    
//     return result 
// }

// console.log(tempConvert(45));


// function doesExistInArray(namesArray, nameInput ) {
//     //console.log(namesArray.indexOf(nameInput))
//     return namesArray.indexOf(nameInput) !== -1 
// }

// const sampleArray = ['Maria', 'Todd', 'Ahmed']

// const nameDoesExist = doesExistInArray(sampleArray, 'zach')

// console.log(nameDoesExist)

// const sampleArray1 = ['Maria', 'Todd', 'Ahmed']

// function checkNames(array, targetName){
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === targetName) return true
//     }
//     return false
// }

// const doesNameExist = checkNames(sampleArray, 'Todd');

// console.log(doesNameExist)


// const sampleArray1 = [5, 10, 1000, 300]

function findSum(numeros){
    let sum = 0
    for (let i = 0; i < numeros.length; i++) {
        const currentNumber = numeros[i]
        sum += currentNumber
     //   sum = sum + numberos[i]
    }

    // for (const index in numbers) {
    //     sum += numbers[index]
    // }
    return sum
}

//const totalRevenue = findSum([10, 12, 7, 4, 13])
// console.log(totalRevenue)
console.log(findSum([10, 12, 7, 4, 13]))
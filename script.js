function convertToRoman(num) {
    const obj = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';
    
    for (let [symbol, value] of obj) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}

// Event listener for the Convert button
document.getElementById('convertButton').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    const romanNumeral = convertToRoman(inputNumber);
    document.getElementById('resultOutput').innerText = romanNumeral; // Display the result
});

// You can test your code by running the above function and printing it to console by pressing the run button at the top. 
// To run it with input 36, uncomment the following line
// console.log(convertToRoman(36));

// Example console tests - can be removed if not needed
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman;
function reverseNumber(x) {
    // Convert the number to a string
    const numString = x.toString();
    
    // Reverse the string and convert back to a number
    const reversedNum = parseInt(
        numString.split('').reverse().join('')
    );
    
    return reversedNum;
}

// Test cases
console.log(reverseNumber(32243));  
console.log(reverseNumber(12345));  
console.log(reverseNumber(1000));
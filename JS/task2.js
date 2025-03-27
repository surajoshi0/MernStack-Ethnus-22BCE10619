function alphabetizeString(str) {
    // Convert the string to an array of characters
    // Sort the characters alphabetically
    // Join the characters back into a string
    return str.split('').sort().join('');
}

// Test cases
console.log(alphabetizeString('webmaster'));  // Expected output: 'abeemrstw'
console.log(alphabetizeString('hello'));      // Expected output: 'ehllo'
console.log(alphabetizeString('javascript'));
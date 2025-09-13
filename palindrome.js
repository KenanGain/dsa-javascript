function palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    if (cleanedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('kayak')); // Output: true
console.log(palindrome('hello')); // Output: false
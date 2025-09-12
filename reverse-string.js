function reverseString(str) {
    let reversedStr = '';
    for ( let i = str.length - 1; i >= 0; i-- ) {
        reversedStr += str[i];
    }
    return reversedStr;

}

function reverseString2(str) {
    let reversedStr2 = '';

    for ( let char of str ) {
        reversedStr2 = char + reversedStr2;
    }
    return reversedStr2;
}   

function reverseString3(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString3('hello')); // Output: 'olleh'



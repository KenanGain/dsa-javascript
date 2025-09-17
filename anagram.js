function anagram(str1, str2) { 
    const normalize = str => str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// console.log(anagram('rail safety', 'fairy tales')); // Output: true
console.log(anagram('hello', 'world')); // Output: false
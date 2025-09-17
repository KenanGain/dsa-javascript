function anagram(str1, str2) { 
    const normalize = str => str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram('rail safety', 'fairy tales')); // Output: true
// console.log(isAnagram('hello', 'world')); // Output: false


function isAnagram(str1, str2) {
    const norm = str => str.toLowerCase().replace(/[\W]/g, '');

    a = norm(str1); b = norm(str2);

    if (a.length !== b.length) {
        return false;
    }

    const count = {};

    for ( let char of a) count[char] = (count[char] || 0) + 1;
    for ( let char of b) {
        if (!count[char]) {
            return false;
        }   
        count[char]--;
    }
    return true;
}
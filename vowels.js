function vowels(str) {
    const vowelCheck = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for ( let char of str.toLowerCase()) {
        if (vowelCheck.includes(char)) {
            count++;
        }   
    }
    return count;
}

console.log(vowels('Coding Money')); 


function isVowel(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}
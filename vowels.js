function countVowels(str) {
    let vowelCount = 0;
    const vowels = ['a', 'b', 'c', 'd', 'e', 'i', 'j', 'h'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            vowelCount++;
        }
    }

    return vowelCount;
}
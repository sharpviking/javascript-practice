//palindrome//

function isPalindrome(str) {
    str = str.toLowerCase();
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}
const reverseString = function(str) {
    let arr = str.split('');
    arr.reverse();

    let reversedString = arr.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

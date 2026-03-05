const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 > Math.floor(num1) || num2 > Math.floor(num2)) {
        return "ERROR";
    } else if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

 
    let count = 0;
    let total = 0;

    if (num1 > num2) {
        count = num1;
        total = num1;
        while (count > num2) {
            count--;
            total += count;
        }
    } else {
        count = num1; //count == 2
        total = num1; //total == 2
        while (count < num2) {
            count++;
            total += count;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

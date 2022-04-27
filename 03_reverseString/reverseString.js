const reverseString = function(input) {
    const arr = input.split("");
    let arrrev = [];
    for (i=0; i<=arr.length; i++) {
        arrrev[i] = arr[(arr.length - i)];
    }

    return arrrev.join("");
};

// Do not edit below this line
module.exports = reverseString;

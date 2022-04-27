const removeFromArray = function() {
    arr = arguments[0];
    for (n = 1; n <= (arguments.length -1); n++){
        for (i=0; i<=arr.length; i++) {
            if(arr[i] === arguments[n]) {
                arr.splice(i,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(text, n) {
    const arr = [];
    if (n >= 0) {
        for(i = 1; i <= n; i++) {
            arr[i-1] = text;
        }
        
        return(arr.join(""));
    }
    else {
        return("ERROR");
    }
};

// Do not edit below this line
module.exports = repeatString;

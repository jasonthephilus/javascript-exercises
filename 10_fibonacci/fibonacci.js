const fibonacci = function(n) {
    n = parseInt(n);
    if (n <= 0) {
        return "OOPS";
    }
    else {
        n0 = 0;
        n1 = 1;
        total = 1;
        for (i = 1; i < n; i++) {
            total = n0 + n1;
            n0 = n1;
            n1 = total;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = fibonacci;

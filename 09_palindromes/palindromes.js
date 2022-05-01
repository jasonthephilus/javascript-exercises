const palindromes = function (text) {
    text = text.replace(/[^a-z]/gi, "");
    text = text.toLowerCase();
    arr = text.split("");
    len = arr.length; console.log(len);
    for (i = 0; i < len; i++) {
        console.log(arr[i], arr[(len-i-1)]);
        if (arr[i] == arr[len-i-1]) {
            result = true;
        }
        else {
            result = false;
            break
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;

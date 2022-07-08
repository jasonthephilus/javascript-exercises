const caesar = function (text, caesarvalue) {
    caesarvalue = caesarvalue % 26;
    textstr = Array.from(text);
    textuni = textstr.map(function (e) {
        return e.charCodeAt(0);
    })

    textcaesar = textuni.map(function (e) {
        //check if lower/upper
        value = e + caesarvalue;
        if (e >= 65 && e <= 90) {
            //upper
            if (value > 90) {
                return value - 26;
            }
            else if (value < 65) {
                return value + 26;
            }
            else {
                return value;
            }
        }
        else if (e >= 97 && e <= 122) {
            //lower
            if (value > 122) {
                return value - 26;
            }
            else if (value < 97) {
                return value + 26;
            }
            else {
                return value;
            }
        }
        else {
            //nonlatin
            return e;
        }
    })

    textconverted = textcaesar.map(function (e) {

        return String.fromCharCode(e)
    }).join("")
    console.log(textuni)
    return textconverted;
};


// Do not edit below this line
module.exports = caesar;

module.exports = function toReadable(number) {
    var newStr = "";
    var array = String(number).split("").reverse();
    if (array.length === 1 && array[0] == 0) {
        newStr += "zero";
    }
    if (array[2] == 1) {
        newStr += "one hundred";
    } else if (array[2] == 2) {
        newStr += "two hundred";
    } else if (array[2] == 3) {
        newStr += "three hundred";
    } else if (array[2] == 4) {
        newStr += "four hundred";
    } else if (array[2] == 5) {
        newStr += "five hundred";
    } else if (array[2] == 6) {
        newStr += "six hundred";
    } else if (array[2] == 7) {
        newStr += "seven hundred";
    } else if (array[2] == 8) {
        newStr += "eight hundred";
    } else if (array[2] == 9) {
        newStr += "nine hundred";
    }
    if (array[1] == 1 && array[0] == 0) {
        newStr += " ten";
    } else if (array[1] == 1 && array[0] == 1) {
        newStr += " eleven";
    } else if (array[1] == 1 && array[0] == 2) {
        newStr += " twelve";
    } else if (array[1] == 1 && array[0] == 3) {
        newStr += " thirteen";
    } else if (array[1] == 1 && array[0] == 4) {
        newStr += " fourteen";
    } else if (array[1] == 1 && array[0] == 5) {
        newStr += " fifteen";
    } else if (array[1] == 1 && array[0] == 6) {
        newStr += " sixteen";
    } else if (array[1] == 1 && array[0] == 7) {
        newStr += " seventeen";
    } else if (array[1] == 1 && array[0] == 8) {
        newStr += " eighteen";
    } else if (array[1] == 1 && array[0] == 9) {
        newStr += " nineteen";
    } else {
        if (array[1] == 2) {
            newStr += " twenty";
        } else if (array[1] == 3) {
            newStr += " thirty";
        } else if (array[1] == 4) {
            newStr += " forty";
        } else if (array[1] == 5) {
            newStr += " fifty";
        } else if (array[1] == 6) {
            newStr += " sixty";
        } else if (array[1] == 7) {
            newStr += " seventy";
        } else if (array[1] == 8) {
            newStr += " eighty";
        } else if (array[1] == 9) {
            newStr += " ninety";
        }

        if (array[0] == 1) {
            newStr += " one";
        } else if (array[0] == 2) {
            newStr += " two";
        } else if (array[0] == 3) {
            newStr += " three";
        } else if (array[0] == 4) {
            newStr += " four";
        } else if (array[0] == 5) {
            newStr += " five";
        } else if (array[0] == 6) {
            newStr += " six";
        } else if (array[0] == 7) {
            newStr += " seven";
        } else if (array[0] == 8) {
            newStr += " eight";
        } else if (array[0] == 9) {
            newStr += " nine";
        }
    }
    return newStr.trim();
};

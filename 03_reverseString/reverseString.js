const reverseString = function(string) {

    let array = Array.from(string);
    let reverseArray = array.reverse();

    let reverseString = reverseArray.join("");

    return  reverseString;

};

// Do not edit below this lin
module.exports = reverseString;

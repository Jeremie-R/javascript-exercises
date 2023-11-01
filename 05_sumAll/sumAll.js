const sumAll = function(first, last) {

    if (Number.isInteger(first) = false) {
        return "ERROR"
    }
    if (Number.isInteger(last) = false) {
        return "ERROR"
    }
    if ((first < 0) ||  (last < 0)) {
        return "ERROR"
    }

    //thank you math
    if (first < last) {
        let total = ((last-first+1)/2)*(first+last);
        return total;

    } else {
        let total = ((firs-last+1)/2)*(first+last);
        return total;
    }


    

};

// Do not edit below this line
module.exports = sumAll;

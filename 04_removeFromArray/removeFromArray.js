const removeFromArray = function() {
    const array = arguments[0];
    console.log(array);

    for (let index = 1; index < (arguments.length) ; index++) {
        
        let indexToRemove = array.indexOf(arguments[index]);
        if (indexToRemove > -1) { 
            array.splice(indexToRemove, 1); 
        }

    
    }
    
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

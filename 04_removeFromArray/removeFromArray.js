const removeFromArray = function(array, item) {
    
    let indexToRemove = array.indexOf(item);
    if (indexToRemove > -1) { 
        array.splice(indexToRemove, 1); 
      }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(arr, ...elements) {
    /*let chosenElementIndex = arr.indexOf(element, 0);
    arr.splice(chosenElementIndex, 1);
    return arr;
    */
    let elementIndex = 0;

    for (const el of elements) {
        while (arr.includes(el)) {
            elementIndex = arr.indexOf(el, 0);
            arr.splice(elementIndex, 1);
        }
        
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;

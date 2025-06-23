function isSameType(value1, value2) {
    // Check if both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }
    // Check if one value is NaN and the other is not
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return false;
    }
    // Compare the types of the two values
    return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
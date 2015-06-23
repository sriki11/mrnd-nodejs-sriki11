
exports.Sum = function (num1, num2) {
    return num1 + num2;
}

exports.SumOfArray = function (arrayOfNums) {
    var sum = 0;
    for (var i = 0; i < arrayOfNums.length; i++)
        sum += arrayOfNums[i];
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var dup = new Array;
    var lena = arrayOfNums.length;
    var sum = 0;
    for (var i = 0; i < lena ; i++) {
        if (dup.indexOf(arrayOfNums[i]) == -1) {
            dup.push(arrayOfNums[i]);
            sum += arrayOfNums[i];
        }
    }
    return sum;
}

exports.ReverseString = function (str) {
    var len = str.length;
    var s = '';
    for (var i = len - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;

}


exports.ReverseArrayOfStrings = function (arrayOfStrings) {
    var rev = [];
    for (var j = 0; j < arrayOfStrings.length; j++)
    {
        var len = arrayOfStrings[j].length;
        var s = '';
        for (var i = len - 1; i >= 0; i--) {
            s += arrayOfStrings[j][i];
        }
        rev.push(s);
    }
    return rev;

}
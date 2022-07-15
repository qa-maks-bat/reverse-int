module.exports = function reverse(n) {
    let result = 1;

    const absoluteNumber = Math.abs(n);
    const numberToString = absoluteNumber.toString();

    const numberToArray = numberToString.split("");

    const reverseNumberFromArray = numberToArray.reduce(
        function (previous, current) {
            return current ? current + previous : previous;
        }, "");

    return result = 1 * reverseNumberFromArray;
};

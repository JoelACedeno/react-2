/* 
unroll should take in such a square array and return a single array containing the values in the square. 
You should obtain the values by traversing the square in a spiral: 
from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
*/

function unroll(squareArray) {
    const newArray = [];

    while (squareArray.length > 0) {
        // move top row to newArray
        newArray.push(...squareArray.shift())

        // move last column to newArray
        for (let i = 0; i < squareArray.length; i++) {
            newArray.push(squareArray[i].pop());
        }

        // move bottom row to newArray
        const lastInnerArr = squareArray.pop();
        lastInnerArr.reverse();
        newArray.push(...lastInnerArr);

        // move first column to newArray
        for (let i = squareArray.length - 1; i >= 0; i--) {
            newArray.push(squareArray[i].shift());
        }

        return newArray;
    }
}

module.exports = unroll;

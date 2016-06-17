// HackerRank Arrays - DS: https://www.hackerrank.com/domains/data-structures/arrays

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    // reverse
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }

    var newStr = "";
    for(var i = 0; i < newArr.length; i++) {
      newStr = newStr + newArr[i] + " ";
    }
    console.log(newStr);
}

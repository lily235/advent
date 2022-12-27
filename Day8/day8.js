function isLeftVisible(rowNum, columnNum, array) {
  for (let i = 0; i < columnNum; i++) {
    if (array[rowNum][i] >= array[rowNum][columnNum]) {
      return false;
    }
  }
  return true;
}

function isRightVisible(rowNum, columnNum, array) {
  for (let i = columnNum + 1; i < array[0].length; i++) {
    if (array[rowNum][i] >= array[rowNum][columnNum]) {
      return false;
    }
  }
  return true;
}

function isTopVisible(rowNum, columnNum, array) {
  for (let i = 0; i < rowNum; i++) {
    if (array[i][columnNum] >= array[rowNum][columnNum]) {
      return false;
    }
  }
  return true;
}

function isBottompVisible(rowNum, columnNum, array) {
  for (let i = rowNum + 1; i < array.length; i++) {
    if (array[i][columnNum] >= array[rowNum][columnNum]) {
      return false;
    }
  }
  return true;
}

function part1(input) {
  var visibleNum = 0;
  input.forEach((line, index, array) => {
    if (index === 0 || index === array.length - 1) {
      visibleNum += array.length;
    } else {
      visibleNum += 2;
      for (let i = 1; i < line.length - 1; i++) {
        if (
          isLeftVisible(index, i, array) ||
          isRightVisible(index, i, array) ||
          isTopVisible(index, i, array) ||
          isBottompVisible(index, i, array)
        ) {
          visibleNum += 1;
        }
      }
    }
  });

  return visibleNum;
}

function leftViewScore(rowNum, columnNum, array) {
  var viewScore = 0;
  for (let i = columnNum - 1; i >= 0; i--) {
    if (array[rowNum][i] < array[rowNum][columnNum]) {
      viewScore++;
    } else {
      return viewScore + 1;
    }
  }
  return viewScore;
}

function rightViewScore(rowNum, columnNum, array) {
  var viewScore = 0;
  for (let i = columnNum + 1; i < array[0].length; i++) {
    if (array[rowNum][i] < array[rowNum][columnNum]) {
      viewScore++;
    } else {
      return viewScore + 1;
    }
  }
  return viewScore;
}
function TopViewScore(rowNum, columnNum, array) {
  var viewScore = 0;
  for (let i = rowNum - 1; i >= 0; i--) {
    if (array[i][columnNum] < array[rowNum][columnNum]) {
      viewScore++;
    } else {
      return viewScore + 1;
    }
  }
  return viewScore;
}

function BottomViewScore(rowNum, columnNum, array) {
  var viewScore = 0;

  for (let i = rowNum + 1; i < array.length; i++) {
    if (array[i][columnNum] < array[rowNum][columnNum]) {
      viewScore++;
    } else {
      return viewScore + 1;
    }
  }
  return viewScore;
}

function part2(input) {
  var highestScore = 0;
  input.forEach((line, index, array) => {
    if (index != 0 && index != array.length - 1) {
      for (let i = 1; i < line.length - 1; i++) {
        var viewScore =
          leftViewScore(index, i, array) *
          rightViewScore(index, i, array) *
          TopViewScore(index, i, array) *
          BottomViewScore(index, i, array);
        if (viewScore > highestScore) {
          highestScore = viewScore;
        }
      }
    }
  });
  return highestScore;
}

function readInputAsLines(filename) {
  try {
    const fs = require("fs");
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");
    return lines;
  } catch (err) {
    console.error(err);
  }
  return [];
}

console.log(part1(readInputAsLines("input.txt")));
console.log(part2(readInputAsLines("input.txt")));

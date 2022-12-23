function oneMoveHead(direction, headPosition) {
  if (direction === "U") {
    headPosition.row++;
  } else if (direction === "D") {
    headPosition.row--;
  } else if (direction === "R") {
    headPosition.column++;
  } else if (direction === "L") {
    headPosition.column--;
  }
}

function isNotTouching(headPosition, tailPosition) {
  if (
    Math.abs(headPosition.row - tailPosition.row) < 2 &&
    Math.abs(headPosition.column - tailPosition.column) < 2
  ) {
    return false;
  } else {
    return true;
  }
}

function MoveTailTouched(headPosition, tailPosition) {
  if (headPosition.row === tailPosition.row) {
    tailPosition.column = (headPosition.column + tailPosition.column) / 2;
  } else if (headPosition.column === tailPosition.column) {
    tailPosition.row = (headPosition.row + tailPosition.row) / 2;
  } else {
    if (headPosition.row - tailPosition.row > 0) {
      tailPosition.row++;
    } else {
      tailPosition.row--;
    }
    if (headPosition.column - tailPosition.column > 0) {
      tailPosition.column++;
    } else {
      tailPosition.column--;
    }
  }
}

function MarkTailVisitedMap(tailPosition, visitedMap) {
  visitedMap.push([tailPosition.row, tailPosition.column]);
}

function Motions(direction, stepNum, visitedMap, headPosition, tailPosition) {
  for (let i = 0; i < stepNum; i++) {
    oneMoveHead(direction, headPosition);
    if (isNotTouching(headPosition, tailPosition)) {
      MoveTailTouched(headPosition, tailPosition);
      MarkTailVisitedMap(tailPosition, visitedMap);
    }
  }
}

function part1(input) {
  var headPosition = { row: 0, column: 0 };
  var tailPosition = { row: 0, column: 0 };
  let visitedMap = [[0, 0]];

  input.forEach((line) => {
    Motions(
      line.charAt(0),
      line.slice(2),
      visitedMap,
      headPosition,
      tailPosition
    );
  });
  console.log(visitedMap);

  const uniqueArr = visitedMap.filter((item, index) => {
    // Check if the current element is the first occurrence of that value
    return (
      visitedMap.findIndex((el) => el[0] === item[0] && el[1] === item[1]) ===
      index
    );
  });

  return uniqueArr.length;
}
// function part2(input) {

// }
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

console.log(part1(readInputAsLines("t-input.txt")));
//console.log(part2(readInputAsLines("input.txt")));

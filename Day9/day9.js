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

function oneMoveHead_part2(direction, headPosition) {
  if (direction === "U") {
    headPosition[0]++;
  } else if (direction === "D") {
    headPosition[0]--;
  } else if (direction === "R") {
    headPosition[1]++;
  } else if (direction === "L") {
    headPosition[1]--;
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
function isNotTouching_part2(oneKnot, nextKnot) {
  if (
    Math.abs(oneKnot[0] - nextKnot[0]) < 2 &&
    Math.abs(oneKnot[1] - nextKnot[1]) < 2
  ) {
    return false;
  } else {
    return true;
  }
}
function moveTailTouched(headPosition, tailPosition) {
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
      moveTailTouched(headPosition, tailPosition);
      MarkTailVisitedMap(tailPosition, visitedMap);
    }
  }
}

function moveNextKnotTouched(oneKnot, nextKnot) {
  if (oneKnot[0] === nextKnot[0]) {
    nextKnot[1] = (oneKnot[1] + nextKnot[1]) / 2;
  } else if (oneKnot[1] === nextKnot[1]) {
    nextKnot[0] = (oneKnot[0] + nextKnot[0]) / 2;
  } else {
    if (oneKnot[0] - nextKnot[0] > 0) {
      nextKnot[0]++;
    } else {
      nextKnot[0]--;
    }
    if (oneKnot[1] - nextKnot[1] > 0) {
      nextKnot[1]++;
    } else {
      nextKnot[1]--;
    }
  }
}

function markTailVisitedPositions(tailKnot, tailKnotsPositions) {
  tailKnotsPositions.push([tailKnot[0], tailKnot[1]]);
}

function uniqueArrays(arr) {
  const uniqueArr = arr.filter((item, index) => {
    // Check if the current element is the first occurrence of that value
    return (
      arr.findIndex((el) => el[0] === item[0] && el[1] === item[1]) === index
    );
  });
  return uniqueArr.length;
}

function nineKnotsMotions(
  direction,
  stepNum,
  knotsPositions,
  tailVisitedPositions
) {
  for (let i = 0; i < stepNum; i++) {
    oneMoveHead_part2(direction, knotsPositions[0]);

    for (var j = 0; j < knotsPositions.length - 1; j++) {
      if (isNotTouching_part2(knotsPositions[j], knotsPositions[j + 1])) {
        moveNextKnotTouched(knotsPositions[j], knotsPositions[j + 1]);
      }
    }
    //console.log(tailVisitedPositions);
    markTailVisitedPositions(
      knotsPositions[knotsPositions.length - 1],
      tailVisitedPositions
    );
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

  return uniqueArrays(visitedMap);
}

function part2(input) {
  var knotsPositions = [];
  var knotsNum = 10;
  for (var i = 0; i < knotsNum; i++) {
    knotsPositions[i] = [0, 0];
  }
  var tailVisitedPositions = [knotsPositions[9]];
  input.forEach((line) => {
    nineKnotsMotions(
      line.charAt(0),
      line.slice(2),
      knotsPositions,
      tailVisitedPositions
    );
  });

  return uniqueArrays(tailVisitedPositions);
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

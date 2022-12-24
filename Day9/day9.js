function oneStepMoveHead(direction, headPosition) {
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

function isTwoKnotsNotTouching(oneKnot, nextKnot) {
  if (
    Math.abs(oneKnot[0] - nextKnot[0]) < 2 &&
    Math.abs(oneKnot[1] - nextKnot[1]) < 2
  ) {
    return false;
  } else {
    return true;
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

function uniqueArrays(arr) {
  const uniqueArr = arr.filter((item, index) => {
    // Check if the current element is the first occurrence of that value
    return (
      arr.findIndex((el) => el[0] === item[0] && el[1] === item[1]) === index
    );
  });
  return uniqueArr.length;
}

function KnotsMotions(
  direction,
  stepNum,
  knotsPositions,
  tailVisitedPositions
) {
  for (let i = 0; i < stepNum; i++) {
    oneStepMoveHead(direction, knotsPositions[0]);

    for (var j = 0; j < knotsPositions.length - 1; j++) {
      if (isTwoKnotsNotTouching(knotsPositions[j], knotsPositions[j + 1])) {
        moveNextKnotTouched(knotsPositions[j], knotsPositions[j + 1]);
      }
    }

    tailVisitedPositions.push([
      knotsPositions[knotsPositions.length - 1][0],
      knotsPositions[knotsPositions.length - 1][1],
    ]);

    // tailVisitedPositions.push(knotsPositions[knotsPositions.length - 1]);
  }
}

function multiKnotsFunc(input, knotsNum) {
  var knotsPositions = [];
  for (var i = 0; i < knotsNum; i++) {
    knotsPositions[i] = [0, 0];
  }
  var tailVisitedPositions = [knotsPositions[knotsNum - 1]];
  input.forEach((line) => {
    KnotsMotions(
      line.charAt(0),
      line.slice(2),
      knotsPositions,
      tailVisitedPositions
    );
  });

  return uniqueArrays(tailVisitedPositions);
}

function part1(input) {
  var knotsNum = 2;
  return multiKnotsFunc(input, knotsNum);
}

function part2(input) {
  var knotsNum = 10;
  return multiKnotsFunc(input, knotsNum);
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

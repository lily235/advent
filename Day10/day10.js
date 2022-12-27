function signalStrengthCheckAdd(curCircleNum, valueOfX) {
  if ((curCircleNum - 20) % 40 === 0) {
    return curCircleNum * valueOfX;
  } else {
    return 0;
  }
}

function part1(input) {
  var totalSignalStrengths = 0;
  var curCircleNum = 0;
  var valueOfX = 1;

  input.forEach((line, index, array) => {
    if (line === "noop") {
      curCircleNum++;

      totalSignalStrengths += signalStrengthCheckAdd(curCircleNum, valueOfX);
    } else {
      curCircleNum++;

      totalSignalStrengths += signalStrengthCheckAdd(curCircleNum, valueOfX);
      curCircleNum++;

      totalSignalStrengths += signalStrengthCheckAdd(curCircleNum, valueOfX);
      valueOfX += Number(line.slice(5));
    }
  });
  return totalSignalStrengths;
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
//console.log(part2(readInputAsLines("input.txt")));

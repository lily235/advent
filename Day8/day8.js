function part1(input) {
  var visibleNum = 0;
  input.forEach((line, index, array) => {
    if (index === 0 || index === array.length - 1) {
      visibleNum += array.length;
    } else {
      visibleNum += 2;
      for (let i = 1; i < line.length - 1; i++) {
        var leftvisible = true;
        var rightvisible = true;
        var topvisible = true;
        var bottomvisible = true;
        for (let j = 0; j < i; j++) {
          if (array[index][j] >= array[index][i]) {
            leftvisible = false;
            break;
          }
        }
        for (let j = i + 1; j < line.length; j++) {
          if (array[index][j] >= array[index][i]) {
            rightvisible = false;
            break;
          }
        }
        for (let j = 0; j < index; j++) {
          if (array[j][i] >= array[index][i]) {
            topvisible = false;
            break;
          }
        }
        for (let j = index + 1; j < array.length; j++) {
          if (array[j][i] >= array[index][i]) {
            bottomvisible = false;
            break;
          }
        }

        if (leftvisible || rightvisible || topvisible || bottomvisible) {
          visibleNum += 1;
        }
      }
    }
  });

  return visibleNum;
}

function part2(_input) {}

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

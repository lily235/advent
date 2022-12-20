
function part1(input) {

}

function part2(input) {

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

console.log(part1(readInputAsLines("input.txt")))
console.log(part2(readInputAsLines("input.txt")))

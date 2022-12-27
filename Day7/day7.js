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

var result = 0;
var dirctorySizes = {};
var directoryPath = "";
dirctorySizes["/"] = 0;

function loopFileSystem(Path, filesize) {
  if (Path === "/") {
    //dirctorySizes['/'] += filesize;
    return;
  }

  let pathfiles = Path.split("/");

  var CurPath = Path;
  for (let i = pathfiles.length - 1; i > 0; i--) {
    if (i === 1) {
      dirctorySizes["/"] += filesize;
    } else {
      CurPath = CurPath.slice(0, -(pathfiles[i].length + 1));
      dirctorySizes[CurPath] += filesize;
    }
  }
}

function MoveOutOneLevel(Path) {
  let pathfiles = Path.split("/");
  return Path.slice(0, -(pathfiles[pathfiles.length - 1].length + 1));
}

readInputAsLines("input.txt").forEach((line) => {
  if (line === "$ ls") {
  } else if (line[0] === "$" && line.length > 4) {
    if (line === "$ cd /") {
      directoryPath = "/";
    } else if (line === "$ cd ..") {
      directoryPath = MoveOutOneLevel(directoryPath);
    } else {
      if (directoryPath === "/") {
        directoryPath = `/${line.slice(5)}`;
      } else {
        //line = '$ cd e';
        directoryPath = `${directoryPath}/${line.slice(5)}`;
      }
    }
  } else if (line.slice(0, 3) === "dir") {
    var filedirectory = "";
    if (directoryPath === "/") {
      filedirectory = `/${line.slice(4)}`;
      dirctorySizes[filedirectory] = 0;
    } else {
      //line = 'dir e';
      filedirectory = `${directoryPath}/${line.slice(4)}`;
      dirctorySizes[filedirectory] = 0;
    }
  } else {
    //file
    let curFileSize = Number(line.split(" ")[0]);
    dirctorySizes[directoryPath] += curFileSize;
    loopFileSystem(directoryPath, curFileSize);
  }
});

//get a total size of at most 100000
var mostSize = 100000;
var result = 0;
var oneDiretorySizes = [];

for (const pathKey in dirctorySizes) {
  if (dirctorySizes[pathKey] < mostSize) {
    result += dirctorySizes[pathKey];
    oneDiretorySizes.push(dirctorySizes[pathKey]);
  }
}
console.log(result);

var allDirectorySizes = [];
//console.log(dirctorySizes);
var needSize = dirctorySizes["/"] + 30000000 - 70000000;

for (const pathKey in dirctorySizes) {
  if (dirctorySizes[pathKey] >= needSize) {
    allDirectorySizes.push(dirctorySizes[pathKey]);
  }
}

var smallestNumber = Math.min(...allDirectorySizes);

console.log(smallestNumber);

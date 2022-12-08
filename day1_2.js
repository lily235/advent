
function readInputAsLines(filename) {
  try {
    const fs = require('fs');
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split("\n");
    return lines;
  } catch (err) {
    console.error(err);
  }
  return [];
}

var resultCalories=0;
var CaloriesTops = [];
var TopNumber = 3;

var currentCalories=0;
var NextBeReplaceNum;

readInputAsLines('testing.txt').forEach(lineCalory=> {
  if(Number(lineCalory)){
    currentCalories+=Number(lineCalory);
  
}else {
  CaloriesTops.push(currentCalories);
  CaloriesTops.sort((a,b) => b - a);
  CaloriesTops.pop();
  currentCalories = 0;
}
});

CaloriesTops.forEach(element=>{
  resultCalories+=element;
})

console.log('resultCalories: ', resultCalories);



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
var currentCalories=0;

readInputAsLines('testing.txt').forEach(lineCalory=> {

  if(Number(lineCalory)){
    currentCalories+=Number(lineCalory);
}else if(currentCalories>resultCalories){
    resultCalories=currentCalories;
    currentCalories = 0;
}else{
    currentCalories = 0;
}
});

console.log('resultCalories: ', resultCalories);

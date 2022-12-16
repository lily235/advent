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

var result=0;
var MarkerLength = 14;
var curArray=[];

function isIncluded(curArray, char)
{
    for(let j = 0; j < curArray.length; j++)
    {
        if(curArray[j] === char){
            return true;
        }
    }
    return false;
}

readInputAsLines('input.txt').forEach(line=> {
for(let i = 0; i<line.length - MarkerLength - 1; i++)
{
    curArray = [];
    for(let k = 0; k < MarkerLength; k++){
        if(isIncluded(curArray,line[i+k])){
            break;
        }else{
            curArray.push(line[i+k]);
        }
    }
    if(curArray.length === MarkerLength)
    {
        result = i + MarkerLength;
        break;
    } 
}
});

console.log('result:',result);
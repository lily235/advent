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

var result = [];
var linesign = 'firstpart';
var cratelines = [];
var cratetowers = []; //will be Two-dimensional array
var towerindex=0;
var towernumber=0;


function isLetter(str){
  return str.length === 1 && str.match(/[a-z]/i);
}

function buildCrateTowers(cratelines){
  towernumber=(cratelines[0].length + 1)/4;
  for (let k=0;k<towernumber; k++){
    cratetowers[k]=[];
}

  for(let i = 0; i < cratelines.length; i++)
  {
   for(let j = 0; j < cratelines[0].length; j++)
   {
    curLetter = cratelines[i][j];
    if(isLetter(curLetter)){
      towerindex=(j-1)/4;
      cratetowers[towerindex].push(curLetter);
    }  
   }
  } 
}

function rearrangementCrates(cratesNumber,fromTowerNumber,toTowerNumber){
    cratetowers[toTowerNumber] = cratetowers[toTowerNumber].concat(cratetowers[fromTowerNumber].slice(-cratesNumber));
    cratetowers[fromTowerNumber] = cratetowers[fromTowerNumber].slice(0,-cratesNumber);
}


readInputAsLines('testing.txt').forEach(line=>{
  if(line.length === 0){
      linesign = 'secondpart';
      cratelines.shift();
      //build crate towers
      buildCrateTowers(cratelines);

  }else if(linesign === 'firstpart'){
  //save crate lines from input file
    cratelines.unshift(line);
  }else if(linesign === 'secondpart'){
  //second part
  rearrangementCrates( Number(line.split(' ')[1]), Number(line.split(' ')[3]) -1 , Number(line.split(' ')[5]) - 1);
}
});

for(let i = 0; i < cratetowers.length; i++)
{
  result.push(cratetowers[i].pop());
}

console.log(result.join(''));
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


function isFullyContained(pairSectionsArray){
//when the 1st number is bigger than the 4rd number or when the 3st number is bigger than the 2rd number, return false
if(pairSectionsArray[0] > pairSectionsArray[3] || pairSectionsArray[2] > pairSectionsArray[1] )
{
    return false;
}else{
    return true;
}
}

var totalScore = 0;

readInputAsLines('testing.txt').forEach(line=> {

if(isFullyContained(line.replace(',','-').split('-').map(Number))){
    totalScore += 1;
}   
});
  
console.log('totalScore: ', totalScore);
  
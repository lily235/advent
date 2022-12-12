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
  
  var totalScore=0;
  var opponentPlay;
  var myPlay;
  const result = [];
  result["A X"] = 4;
  result["B X"] = 1;
  result["C X"] = 7;
  result["A Y"] = 8;
  result["B Y"] = 5;
  result["C Y"] = 2;
  result["A Z"] = 3;
  result["B Z"] = 9;
  result["C Z"] = 6;

  readInputAsLines('testing.txt').forEach(line=> {
    
    opponentPlay = line[0];
    myPlay = line[2];

    totalScore += result[opponentPlay + ' ' + myPlay];
  });
  
  console.log('totalScore: ', totalScore);
  
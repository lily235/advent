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
  var roundresult;

  const result = [];
  result["A X"] = 3;
  result["A Y"] = 4;
  result["A Z"] = 8;
  result["B X"] = 1;
  result["B Y"] = 5;
  result["B Z"] = 9;
  result["C X"] = 2;
  result["C Y"] = 6;
  result["C Z"] = 7;
  
  readInputAsLines('testing.txt').forEach(line=> {
    
    opponentPlay = line[0];
    roundresult = line[2];
    totalScore += result[opponentPlay + ' ' + roundresult];
  });
  
  console.log('totalScore: ', totalScore);
  
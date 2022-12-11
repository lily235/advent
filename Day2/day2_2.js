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
  
  readInputAsLines('testing.txt').forEach(line=> {
    
    opponentPlay = line[0];
    roundresult = line[2];
    if(opponentPlay == 'A'){
        if(roundresult == 'X'){
            totalScore+=3;
        }else if(roundresult == 'Y'){
            totalScore+=4;
        }else if(roundresult == 'Z'){
            totalScore+=8;
        }
    }else if(opponentPlay == 'B'){
        if(roundresult == 'X'){
            totalScore+=1;
        }else if(roundresult == 'Y'){
            totalScore+=5;
        }else if(roundresult == 'Z'){
            totalScore+=9;
        }
    }else if(opponentPlay == 'C'){
        if(roundresult == 'X'){
            totalScore+=2;
        }else if(roundresult == 'Y'){
            totalScore+=6;
        }else if(roundresult == 'Z'){
            totalScore+=7;
        }
    }
  });
  
  console.log('totalScore: ', totalScore);
  
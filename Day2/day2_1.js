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
  
  readInputAsLines('testing.txt').forEach(line=> {
    
    opponentPlay = line[0];
    myPlay = line[2];
    if(myPlay == 'X'){
        if(opponentPlay == 'A'){
            totalScore+=4;
        }else if(opponentPlay == 'B'){
            totalScore+=1;
        }else if(opponentPlay == 'C'){
            totalScore+=7;
        }
    }else if(myPlay == 'Y'){
        if(opponentPlay == 'A'){
            totalScore+=8;
        }else if(opponentPlay == 'B'){
            totalScore+=5;
        }else if(opponentPlay == 'C'){
            totalScore+=2;
        }
    }else if(myPlay == 'Z'){
        if(opponentPlay == 'A'){
            totalScore+=3;
        }else if(opponentPlay == 'B'){
            totalScore+=9;
        }else if(opponentPlay == 'C'){
            totalScore+=6;
        }
    }
  });
  
  console.log('totalScore: ', totalScore);
  
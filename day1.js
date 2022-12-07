var resultCalories=0;
var currentCalories=0;

const fs = require('fs');
const readline = require('readline');

void (async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream('testing.txt'),
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    if(Number(line)){
        currentCalories+=Number(line);
    }else if(currentCalories>resultCalories){
        resultCalories=currentCalories;
        currentCalories = 0;
    }else{
        currentCalories = 0;
    }
  });

  await new Promise((res) => rl.once('close', res));
  console.log('resultCalories: ', resultCalories);
})();
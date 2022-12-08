console.time('Time');
var resultCalories=0;
var CaloriesTop1=0;
var CaloriesTop2=0;
var CaloriesTop3=0;

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
    }else if(currentCalories>CaloriesTop1){
        CaloriesTop3= CaloriesTop2;
        CaloriesTop2=CaloriesTop1;
        CaloriesTop1=currentCalories;
        currentCalories = 0;
       
      }else if(currentCalories>CaloriesTop2){
        CaloriesTop3= CaloriesTop2;
        CaloriesTop2=currentCalories;
        currentCalories = 0;
      }else if(currentCalories>CaloriesTop3){
        CaloriesTop3=currentCalories;
        currentCalories = 0;  
    }else{
        currentCalories = 0;
        
    }
  });
  
  await new Promise((res) => rl.once('close', res));
  
  if(currentCalories)
    {   
        if(currentCalories>CaloriesTop1){
            CaloriesTop3= CaloriesTop2;
            CaloriesTop2=CaloriesTop1;
            CaloriesTop1=currentCalories;
    }else if(currentCalories>CaloriesTop2){
        CaloriesTop3= CaloriesTop2;
        CaloriesTop2=currentCalories;
    }else if(currentCalories>CaloriesTop3){
        CaloriesTop3=currentCalories;
  }
}
  resultCalories = CaloriesTop1+CaloriesTop2+CaloriesTop3;

  console.log('resultCalories: ', resultCalories);

})();

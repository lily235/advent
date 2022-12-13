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
    //when the 1st number equal to the 3rd number
   if(pairSectionsArray[0] === pairSectionsArray[2])
   {
        return true;
   }else if(pairSectionsArray[0] > pairSectionsArray[2])
        {
            if(pairSectionsArray[1] > pairSectionsArray[3])
            {
                //when the 1st number is bigger than the 3rd number,and the 2nd number is bigger than the 4th number:
                return false;

            }else{
                //when the 1st number is bigger than the 3rd number, and the 2nd number is smaller than or equal with the 4th number:
                return true;
                
            }
        }else{

            if(pairSectionsArray[1] < pairSectionsArray[3])
            {
                //when the 1st number is smaller than the 3rd number,and the 2nd number is smaller than 4th number or equal:
                return false;
            }else{
               //when the 1st number is bigger than the 3rd number,and the 2nd number is bigger than or equal with the 4th number:
                return true;
                
            }
        }
   

}

var totalScore = 0;

readInputAsLines('testing.txt').forEach(line=> {

if(isFullyContained(line.replace(',','-').split('-').map(Number))){
    totalScore += 1;
}   
});
  
console.log('totalScore: ', totalScore);
  
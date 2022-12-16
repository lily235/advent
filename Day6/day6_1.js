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

readInputAsLines('input.txt').forEach(line=> {

  console.log(line.length);
for(let i = 0; i<line.length-3; i++)
{
  console.log(i);
  if(line[i]!=line[i+1]){
    if(line[i]!=line[i+2]){
      if(line[i]!=line[i+3]){
        if(line[i+1]!=line[i+2]){
          if(line[i+1]!=line[i+3]){
            if(line[i+2]!=line[i+3])
            {
              result=i+4;
              break;
            }
          }
        }
      }
    }
  }
}

});
console.log('result:',result);
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
var breakcheck = false;
var result = 0;
var code;
var Acode="A".charCodeAt(0);
var Zcode="Z".charCodeAt(0);
var acode="a".charCodeAt(0);
var zcode="z".charCodeAt(0);
readInputAsLines('testing.txt').forEach(line=> {
    
    breakcheck = false;
    currentSacklength = line.length / 2;
   
    for(let i = 0;i < currentSacklength && !breakcheck; i++){
        for(let j = currentSacklength; j < 2 * currentSacklength; j++){
        if(line[i] === line[j])
        {
            code = line.charCodeAt(i);
            if (Acode<= code && code <= Zcode) {
                result+=(27+code-Acode);
            }
            if (acode <= code && code <= zcode) {
                result+=(1+code-acode);
            }
            breakcheck = true;
            break;
        }
    }
    }
});

console.log("result:",result);
    
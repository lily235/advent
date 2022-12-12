const { group } = require('console');

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
var groupcodes=[];
var groupRucksacks=[];
var linemod=0;

readInputAsLines('testing.txt').forEach(line=> {
    linemod++;
    breakcheck = false;
    groupRucksacks.push(line);
    
    if(!(linemod % 3)){
        for(let i = 0;i < groupRucksacks[0].length && !breakcheck; i++){
            for(let j = 0; j < groupRucksacks[1].length && !breakcheck; j++){
                for(let k = 0; k < groupRucksacks[2].length; k++){

                    groupcodes.push(groupRucksacks[0].charCodeAt(i));
                    groupcodes.push(groupRucksacks[1].charCodeAt(j));
                    groupcodes.push(groupRucksacks[2].charCodeAt(k));
                    if(groupcodes[0] === groupcodes[1] && groupcodes[0] === groupcodes[2])
                    {
                        //console.log(groupcodes);
                        code = groupRucksacks[0].charCodeAt(i);
                        if (Acode<= code && code <= Zcode) {
                            result+=(27+code-Acode);
                        }
                        if (acode <= code && code <= zcode) {
                            result+=(1+code-acode);
                        }
                        breakcheck = true;
                        groupcodes=[];
                        break;
                    }
                    groupcodes=[];
               
                }            
        }
        }
        groupRucksacks=[];
    }
});

console.log("result:",result);
    
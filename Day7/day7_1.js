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
var dirctorySizes = {};
var dirctorySize = 0;
var directoryPath='';
dirctorySizes['/'] = 0;

function loopFileSystem(Path,filesize){
    let pathfiles = Path.split('/');
    var CurPath = Path;
    for(let i = pathfiles.length-1; i > 0; i--)
    {
        if(i===1){
            dirctorySizes['/'] += filesize;
        }else{
            CurPath = CurPath.slice(0,-(pathfiles[i].length + 1));
            dirctorySizes[CurPath] += filesize;
        }  
    }
}

function MoveOutOneLevel(Path){
    let pathfiles = Path.split('/');
    return Path.slice(0,-(pathfiles[pathfiles.length-1].length + 1));
}


// Javascript program to print all
// combination of size r in an array of size n

	/* arr[] ---> Input Array
	data[] ---> Temporary array to store current combination
	start & end ---> Starting and Ending indexes in arr[]
	index ---> Current index in data[]
	r ---> Size of a combination to be printed */
	function combinationUtil(arr,data,start,end,index,r,temparr,bigsize)
	{
       
		// Current combination is ready to be printed, print it
		if (index == r)
		{
            let temptotalsize = 0;
			for (let j=0; j<r; j++){
				temptotalsize += data[j];
			}
			if(temptotalsize < bigsize){
                temparr.push(temptotalsize);
            }
		}
		
		// replace index with all possible elements. The condition
		// "end-i+1 >= r-index" makes sure that including one element
		// at index will make a combination with remaining elements
		// at remaining positions
		for (let i=start; i<=end && end-i+1 >= r-index; i++)
		{
			data[index] = arr[i];
			combinationUtil(arr, data, i+1, end, index+1, r,temparr,bigsize);
		}
	}
	
	// The main function that prints all combinations of size r
	// in arr[] of size n. This function mainly uses combinationUtil()
	function GetAllCombination(arr,n,r,temparr,bigsize)
	{
		// A temporary array to store all combination one by one
		let data = new Array(r);
		
		// Print all combination using temporary array 'data[]'
		combinationUtil(arr, data, 0, n-1, 0, r,temparr,bigsize);
	}

readInputAsLines('input.txt').forEach(line=>{
    if(line === '$ ls'){

    }else if(line[0] === '$' && line.length > 4){
        if(line === '$ cd /'){
            directoryPath = '/';
            
        }else if(line === '$ cd ..'){
            directoryPath = MoveOutOneLevel(directoryPath);
        }else{
            if(directoryPath === '/'){
                directoryPath = `/${line.slice(5)}`;
            }else{
                //line = '$ cd e';
                directoryPath = `${directoryPath}/${line.slice(5)}`;
            }
        }
        
    }else if(line.slice(0,3) === 'dir'){
        var filedirectory = '';
        if(directoryPath === '/'){
            filedirectory = `/${line.slice(4)}`;
            dirctorySizes[filedirectory] = 0;
        }else{
            //line = 'dir e';
            filedirectory = `${directoryPath}/${line.slice(4)}`;
            dirctorySizes[filedirectory] = 0;
        }
    }else{
        //file
        let curFileSize = Number(line.split(' ')[0]);
        dirctorySizes[directoryPath] += curFileSize;
        loopFileSystem(directoryPath,curFileSize);
}

    
});


//get a total size of at most 100000
var mostSize = 100000;
var result=0;
var temptotalsize=0;
var oneDiretorySizes=[];
var tempDirectorySizes=[];

for (const pathKey in dirctorySizes) {
    if(dirctorySizes[pathKey] < mostSize){
        oneDiretorySizes.push(dirctorySizes[pathKey]);
    }
 }

 let n = oneDiretorySizes.length;

 for(let r=1;r<n+1;r++){
    GetAllCombination(oneDiretorySizes, n, r,tempDirectorySizes,mostSize);
}

tempDirectorySizes.forEach(element=>{
    if(element>result){
        result=element;
    }
});
console.log(result);




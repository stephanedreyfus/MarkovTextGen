/* Occasional failure on key array length:
Assuming one key has either zero length array
or somehting similar. */

/** Command-line tool to generate Markov text. */
const MarkovMachine = require("./markov");
const fs = require("fs");
const axios = require("axios");
const process = require("process");



function cat(path, out){
    fs.readFile(path,'utf8', function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        else{
            //handleOutput(data, out);
            let mm = new MarkovMachine(data);
            mm.makeChains();
            handleOutput(mm.makeText(), out);
            
        }
        //console.log(`file contents: ${data}`);
    });
}

function handleOutput(text, out){
    if(out){
        fs.writeFile(out, text, 'utf8', function(err, data){
            if(err){
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    }
    else{
        console.log(text);
    }
    
}


async function webCat(path, out){
    try {
        let resp = await axios.get(path);
        //console.log(resp.data, out);
        let mm = new MarkovMachine(resp.data);
        mm.makeChains();
        handleOutput(mm.makeText(), out);
        //data === "<html..."
    } catch (err) {
        console.error(`Error fetching ${path}: ${err}`);
        process.exit(1);
    }

    //OR we can use this way
    //axios.get(path).then(function (data) {}).catch()
}

let path = process.argv[3];
let out =process.argv[2];


//cat(path, out)

if (path.startsWith("http://")){
    
    webCat(path, out);
}
else {
    
    cat(path, out);
}
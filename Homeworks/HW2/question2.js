function loadObjects(){

    /* ... Your implementation here ... */
    // You can use the readFile from the fs module
    // See the documentation: https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
    // The CSV files are comma-separated
    const defects = require('./readFiles.js');

    return defects/* array of objects */;
}


function query1(defects){
    /* Your implementation here */
    let checkResolved = (x) => x.status == "RESOLVED";
    let checkFixed = (x) => x.resolution == "FIXED";
    let countItems = (prev, curr) => 1+prev;

    let solvedDefs = defects.filter(checkResolved).filter(checkFixed).reduce(countItems, 0);

    return solvedDefs/*...*/;    
}

function query2(defects){
    /* Your implementation here */
    let checkBuildBot = (x) => x.summary.includes("buildbot") || x.summary.includes("Buildbot");
    let countItems = (prev, curr) => 1+prev;

    let summaryBB = defects.filter(checkBuildBot).reduce(countItems,0);

    return summaryBB/*...*/;    
}

function query3(defects){
    /* Your implementation here */
    let checkNotResolved = (x) => x.status != "RESOLVED";
    let countItems = (prev, curr) => 1+prev;
    let blCalc = (x) => 100 * (x / defects.reduce(countItems,0));

    let backLoged = defects.filter(checkNotResolved).reduce(countItems,0);
    backLoged = blCalc(backLoged);
    
    return backLoged /*...*/;    
}

function query4(defects){
    /* Your implementation here */
    getComponent = (x) => x.component;

    components = defects.map(getComponent);
    compFreq = new Map()

    for (let i=0; i < components.length; i++ ){
        let component = components[i];
        if (!compFreq.has(component)){
            compFreq.set(component, 0)
        }
        compFreq.set(component, compFreq.get(component) + 1);
    }

    let component = null;
    let max = 0;
    for (key of compFreq.keys()){
        if (compFreq.get(key) > max){
            max = compFreq.get(key);
            component = key;
        }
    }

    return component/*...*/;    
}

function query5(defects){
    /* Your implementation here */
    let checkFixedDoc = (x) => x.status === "RESOLVED" && x.resolution === "FIXED" && x.component === "Documentation";
    let getUser = (x) => x.fixed_by_username;

    names = defects.filter(checkFixedDoc).map(getUser);
    nameFreq = new Map()

    for (let i=0; i < names.length; i++ ){
        let name = names[i];
        if (!nameFreq.has(name)){
            nameFreq.set(name, 0)
        }
        nameFreq.set(name, nameFreq.get(name) + 1);
    }

    let name = null;
    let max = 0;
    for (key of nameFreq.keys()){
        if (nameFreq.get(key) > max){
            max = nameFreq.get(key);
            name = key;
        }
    }

    return name /*...*/;    
}

function query6(defects){
    /* Your implementation here */
    let checkBlocks = (x) => x.blocks.length;

    //blockList = defects.filter(checkBlocks);

    let visited = new Set();
    let currPath = new Set();
    
    for (let def of defects){
        if(!visited.has(def._bug_id)){
            if (dfsRecursive(def, defects, visited, currPath)){
                return true;
            }   
        }        
    }
    

    return false//blockList/*...*/;    
}


function dfsRecursive(def, defects, visited, currPath) {
    if (currPath.has(def.bug_id)){
        return true;
    }

    if (visited.has(def.bug_id)){
        return false;
    }

    //add def to visited and current path
    visited.add(def.bug_id);
    currPath.add(def.bug_id);

    //visit blocks 
    blocks = def.blocks;

    for (let block of blocks){
        getBlockDef = (x) => x.bug_id = block;
        blockDef = defects.filter(getBlockDef);
        blockDef = defects[0];
        if (dfsRecursive(blockDef, defects, visited, currPath)){
            return true;
        }
    }

    //remove def from path
    currPath.delete(def.bug_id);
    return false;
}


let defects = loadObjects();
console.log(query1(defects));
console.log(query2(defects));
console.log(query3(defects));
console.log(query4(defects));
console.log(query5(defects));
console.log(query6(defects));




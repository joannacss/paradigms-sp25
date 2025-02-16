//Defects class
class Defect { //bug_id,component,status,resolution,summary,changed,severity,number_comments,os,assignee_id,reporter_id,open_date,closed_date,fixed_by
    constructor(id, component, status, resolution, summary, fixed_by){
        this.bug_id = id
        this.component = component
        this.status = status
        this.resolution = resolution
        this.summary = summary
        this.blocks = []
        this.depends = []
        this.fixed_by_username = fixed_by
        this.fixed_by_real_name = null
    }
}


// import the NodeJS modules
const fs = require('fs');               // module for file I/O
const readline = require("readline");   // module for reading line-by-line from file

// create input streams
let defectsCSV = fs.readFileSync("defects.csv","utf8");        
let dependsCSV = fs.readFileSync("defect_depends.csv","utf8");
let blocksCSV = fs.readFileSync("defect_blocks.csv","utf8");
let developersCSV = fs.readFileSync("developers.csv","utf8");

//defects array
defects = []


// Reads defects CSV line-by-line
defectsCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */
    const columns = row.split(',');
    defect = new Defect(columns[0], columns[1], columns[2], columns[3], columns[4], columns[13]);
    defects.push(defect)
});

dependsCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */
    const columns = row.split(',');
    
    for (let def of defects){
        if (def.bug_id == columns[0]){
            def.depends.push(columns[1]);
        }
    }

});



blocksCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */
    const columns = row.split(',');
    
    for (let def of defects){
        if (def.bug_id == columns[0]){
            def.blocks.push(columns[1]);
        }
    }

});

developersCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */ 
    const columns = row.split(','); 
    
    for (let def of defects){
        if (def.fixed_by_username == columns[1]){
            def.fixed_by_real_name = columns[0];
        }
    }
});


// let callback1 = (x) => x.bug_id != 'bug_id';
// defects = defects.filter(callback1);
// console.log(defects);

module.exports = defects;
// import the NodeJS modules
const fs = require('fs');               // module for file I/O
const readline = require("readline");   // module for reading line-by-line from file

// create input streams
let defectsCSV = fs.readFileSync("defects.csv","utf8");        
let dependsCSV = fs.readFileSync("defect_depends.csv","utf8");
let blocksCSV = fs.readFileSync("defect_blocks.csv","utf8");
let developersCSV = fs.readFileSync("developers.csv","utf8");

// Reads defects CSV line-by-line
defectsCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */    
});

dependsCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */
});

blocksCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */
});

developersCSV.split("\n").forEach(row =>{
    /* Your logic here to parse the rows */    
});

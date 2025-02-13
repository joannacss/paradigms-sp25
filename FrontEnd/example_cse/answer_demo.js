// Q1: Use DOM to change the H1 element to “Computer Science and Engineering Faculty”
document.getElementsByTagName("h1")[0].innerText = "Computer Science and Engineering faculty"; 

// Q2: Change everyone’s names to be Prof. Last Name
let nameElements = document.getElementsByClassName("faculty-name"); // returns an HTMLCollection
for(let i = 0; i < nameElements.length ; i++){
    let fullName = nameElements[i].innerText.split(" ");
    let lastName = fullName[fullName.length - 1];
    nameElements[i].innerText = `Prof. ${lastName}`;
}

// Q3: Change Dr. Cleland-Huang’s link to her lab website (https://sarec.nd.edu)
let div = document.getElementById("post-1033"); // returns an HTMLDivElement
div.getElementsByClassName("faculty-name")[0].href = "https://sarec.nd.edu";

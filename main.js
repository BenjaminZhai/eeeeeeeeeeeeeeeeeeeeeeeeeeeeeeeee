// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  outputEl.innerHTML = "<h3>Display All Colors</h3>";
  let outputstr = ''
  for (i = 0; i < colorData.length; i++) {
    outputstr += `<div> <h3> ${colorData[i].name} <br>${colorData[i].family}</h3> `
    
  }
  outputEl.innerHTML = outputstr
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "<h3>Display Bright Colors</h3>";
  let outputstr = ''
  for (i = 0; i < colorData.length; i++) {
    if(colorData[i].brightness >= 200){
      outputstr += `<div> <h3> ${colorData[i].name} <br>${colorData[i].brightness}</h3> `
  }
    }
  outputEl.innerHTML = outputstr
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = "<h3>Count Red/Pink Family Colors</h3>";
  let outputstr = ''
  for (i = 0; i < colorData.length; i++) {
    if(colorData[i].family === 'Red' || colorData[i].family === 'Pink'){
      outputstr += `<div> <h3> ${colorData[i].name} <br>${colorData[i].family}</h3> `
  }
    }
  outputEl.innerHTML = outputstr
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
  let x = prompt('Please Input A Color Family')
  let outputstr = ''
  let count = 0
  for (i = 0; i < colorData.length; i++) {
    if(colorData[i].family === x){
      count++
      outputstr += `<div> <h3> ${colorData[i].name} <br>${colorData[i].family}</h3> `
  }
    }
  outputEl.innerHTML = count + outputstr
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
  let x = prompt('Please Input A First Letter')
  let outputstr = ''
  let count = 0
  for (i = 0; i < colorData.length; i++) {
    if(colorData[i].name.charAt(0) === x){
      count++
      outputstr += `<div> <h3> ${colorData[i].name} <br></h3> `
  }
    }
  outputEl.innerHTML = count + outputstr
}

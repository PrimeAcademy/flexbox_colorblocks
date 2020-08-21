console.log('js loaded!');

$(document).ready(handleReady);
//counters for dom
//yes, global variables are sometimes needed!

let redCount = 0;
let yellowCount = 0;
let blueCount = 0;
let greenCount = 0;

function handleReady() {
  //add click listeners
  $('#redBtn').on('click', addRedBox)
  $('#yellowBtn').on('click', addYellowBox)
  $('#greenBtn').on('click', addGreenBox)
  $('#blueBtn').on('click', addBlueBox)


}


//Box Making function
// Probably a way to make this more DRY, but this works!
// Don't try to over-engineer solutions--
//Get it working, then make better
function addRedBox() {

  //make box, put on dom
  let redBox = $('<div class="box red card"></div>')
  $('#target').append(redBox)

  //access global variable and increment
  redCount++
  //update dom text
  $('#redCount').text(`${redCount}`)

}

function addYellowBox() {
  let yellowBox = $('<div class="box yellow card"></div>')
  $('#target').append(yellowBox)

  yellowCount++
  $('#yellowCount').text(`${yellowCount}`)

}

function addGreenBox() {
  let greenBox = $('<div class="box green card"></div>')
  $('#target').append(greenBox)

  greenCount++
  $('#greenCount').text(`${greenCount}`)

}

function addBlueBox() {
  let blueBox = $('<div class="box blue card"></div>')
  $('#target').append(blueBox)

  blueCount++
  $('#blueCount').text(`${blueCount}`)

}
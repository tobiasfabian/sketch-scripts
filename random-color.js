/*
Set a random fill color for selected layers.
*/

var document = require('sketch/dom').getSelectedDocument()

var selection = document.selectedLayers;

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

selection.forEach(layer => layer.style.fills = [
  {
    color: randomColor(),
  },
]);

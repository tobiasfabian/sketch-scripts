/*
Set a random fill color for selected layers from a predefined color list.
*/

var document = require('sketch/dom').getSelectedDocument()

var selection = document.selectedLayers;

var colors = ['#FFFF00', '#FFCC00', '#FE9900', '#FF6601', '#FF0132', '#CC0099', '#7F00B2', '#0C00E5', '#004CFF', '#008CB2', '#00B201', '#7FD800'];

selection.forEach(layer => {
  var random = Math.round(Math.random() * (colors.length - 1));
  layer.style.fills = [
    {
      color: colors[random],
    }
  ]
});

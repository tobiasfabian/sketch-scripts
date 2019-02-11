var document = require('sketch/dom').getSelectedDocument();


var selectedLayers = document.selectedLayers;
var x = 300; // max x movement
var y = 140; // max y movement

selectedLayers.forEach((layer) => {
  layer.frame.x = layer.frame.x + Math.random() * x - x / 2;
  layer.frame.y = layer.frame.y + Math.random() * y - y / 2;
})

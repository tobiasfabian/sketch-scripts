/*
Set a random fill color for selected layers.
*/

var document = require('sketch/dom').getSelectedDocument()

var selection = document.selectedLayers;

selection.forEach(layer => {
  var hue = Math.random() * 256 - 1;
  var saturation = 60;
  var lightning = 40;
  var alpha = 1;
  var hsla = `hsla(${hue}, ${saturation}%, ${lightning}%, ${alpha})`;
  layer.style.fills = [
    {
      color: hsla,
    }
  ]
});

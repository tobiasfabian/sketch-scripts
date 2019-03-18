const minWidth = 1000;
const minHeight = 0;

const data = [
  {
    "Browser": "Safari",
    "Browser Size": "380x550",
    "Users": 1514,
    "Avg. Session Duration": "00:09:38",
  },
  {
    "Browser": "Chrome",
    "Browser Size": "360x560",
    "Users": 1409,
    "Avg. Session Duration": "00:10:24",
  },
].reverse();


var document = require('sketch/dom').getSelectedDocument();
var Shape = require('sketch/dom').Shape
var Rectangle = require('sketch/dom').Rectangle
var Style = require('sketch/dom').Style
var myArtboard = document.pages[0].layers[0]

let users = 0;
data.forEach((item) => {
  var size = item['Browser Size'].split('x');
  if (size[0] > minWidth && size[1] > minHeight) {
    users += parseInt(item['Users']);
  }
  item.size = size;
})
console.log(`Total Users: ${users}`);



data.forEach((item) => {
  var size = item.size;
  if (size[0] > minWidth && size[1] > minHeight) {
    const opacity = (parseInt(item['Users']) / users) * 255;
    const borderOpacity = 0.5 * 255;
    const x = myArtboard.frame.width / 2 - size[0] / 2;
    const y = myArtboard.frame.height / 2 - size[1] / 2;
    new Shape({
      name: `Users: ${item['Users']}, Session Duration: ${item['Avg. Session Duration']}`,
      frame: new Rectangle(x,y,size[0],size[1]),
      parent: myArtboard,
      style: {
        fills: [{
          color: `#000000${opacity.toString(16)}`,
          fill: Style.FillType.Color,
        }],
        borders: [{
          color: `#000000${borderOpacity.toString(16)}`,
        }]
      },
    });
  };
});

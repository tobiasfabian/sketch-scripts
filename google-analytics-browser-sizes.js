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
var artboard = document.pages[0].layers[0]

let users = 0;
let averageWidth = 0;
let averageHeight = 0;
data.forEach((item) => {
  var size = item['Browser Size'].split('x');
  if (size[0] > minWidth && size[1] > minHeight) {
    users += parseInt(item.Users);
    averageWidth += parseInt(size[0]) * parseInt(item.Users);
    averageHeight += parseInt(size[1]) * parseInt(item.Users);
  }
  item.size = size;
});
averageWidth = averageWidth / users;
averageHeight = averageHeight / users;
console.log(`Total Users: ${users}`);
console.log(`Average Width: ${averageWidth}`);
console.log(`Average Height: ${averageHeight}`);



data.forEach((item) => {
  var size = item.size;
  if (size[0] > minWidth && size[1] > minHeight) {
    const opacity = (parseInt(item.Users) / users) * 2 * 255;
    const borderOpacity = 0.5 * 255;
    const x = artboard.frame.width / 2 - size[0] / 2;
    const y = artboard.frame.height / 2 - size[1] / 2;
    new Shape({
      name: `Users: ${item['Users']}, Session Duration: ${item['Avg. Session Duration']}`,
      frame: new Rectangle(x,y,size[0],size[1]),
      parent: artboard,
      style: {
        // opacity: opacity,
        fills: [{
          color: `#000000${opacity.toString(16)}`,
          fill: Style.FillType.Color,
        }],
        borders: [{
          color: `#000000${borderOpacity.toString(16)}`,
          thickness: 0.1,
          position: Style.BorderPosition.Inside,
        }]
      },
    });
  };
});

const opacity = 0.5 * 255;
const borderOpacity = 0.5 * 255;
const x = artboard.frame.width / 2 - averageWidth / 2;
const y = artboard.frame.height / 2 - averageHeight / 2;
new Shape({
  name: 'Average',
  frame: new Rectangle(x, y, averageWidth, averageHeight),
  parent: artboard,
  style: {
    fills: [{
      color: `#ff0000${opacity.toString(16)}`,
      fill: Style.FillType.Color,
    }],
    borders: [{
      color: `#000000${borderOpacity.toString(16)}`,
      thickness: 0.1,
      position: Style.BorderPosition.Inside,
    }]
  },
});

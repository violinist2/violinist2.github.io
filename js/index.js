"use strict";

TweenLite.defaultEase = Linear.easeNone;

var root = document.querySelector("svg");
var path = document.querySelector(".path");

var total = 150;
var space = 5;
var repeat = 1;
var length = path.getTotalLength();
var offset = length / total;

var colors = [[17, 105, 185], [213, 20, 136], [238, 206, 25], [94, 166, 35]];

var colorList = [];
var gradient = [];

while (repeat--) {
  colorList = colorList.concat(colors);
}

colorList.push(colors[0]);

for (var i = 0; i < total; i++) {
  var amt = i / (total - 1);
  var rgb = lerpColors(colorList, amt).map(function (color) {
    return Math.round(color);
  });
  gradient.push("rgb(" + rgb + ")");
}

TweenLite.set(path, { strokeDasharray: offset + space + "," + (length - offset - space) });

var tl = gradient.reduce(function (tl, stroke, i) {

  var clone = path.cloneNode(true);
  root.appendChild(clone);
  TweenLite.set(clone, { stroke: stroke, strokeDashoffset: -i * offset });
  return tl.to(clone, 3, { strokeDashoffset: "+=" + length }, 0);
}, new TimelineMax({ repeat: -1 }));

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}

function lerpColor(start, end, amt) {
  var rgb = [];
  for (var i = 0; i < start.length; i++) {
    rgb[i] = lerp(start[i], end[i], amt);
  }
  return rgb;
}

function lerpColors(colors, amt) {
  if (amt >= 1) return colors[colors.length - 1];
  amt *= colors.length - 1;
  var i = amt >> 0;
  return lerpColor(colors[i], colors[i + 1], amt - i);
}
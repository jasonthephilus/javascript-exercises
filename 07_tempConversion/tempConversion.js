const ftoc = function(input) {
  output = (input-32)*5/9;
  output = Math.round(output*10) / 10;
  return output; 
};

const ctof = function(input) {
  output = (input*9/5)+32;
  output = Math.round(output*10)/10;
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

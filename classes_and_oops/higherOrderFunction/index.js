const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[1] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[1] * radius[i]);
    }
    return output;
};
console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
    }
    return output;
};
console.log(calculateDiameter(radius));

// ** DYR PRINCIPLE 
//**dont repeat your self    */
//**A FUNCTION WHICH TAKES ANOTHER FUNCTION AS AN ARGUMENT OR RETURN FROM IT IS KNOWN AS HIGHER ORDER FUNCTION */
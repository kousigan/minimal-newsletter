import React from "react";
import { materialGradientGenerator } from "material-gradient-generator";

function newColorGrad(arg1, arg2, arg3, arg4, val) {
  const colourGen = new materialGradientGenerator(arg1, arg2, arg3, arg4);
  // const nextColour = colourGen.NextColour();
  let colorSet = [];
  for (let i = 0; i < 19; i++) {
    colorSet[i] = colourGen.NextColour();
  }
  // console.log(colorSet);
  return colorSet[val];
}

export default newColorGrad;

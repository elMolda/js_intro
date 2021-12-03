// square
const squarePerimeter = (squareSide) => squareSide * 4;
const squareArea = (squareSide) => Math.pow(squareSide, 2);

// triangle
const trianglePerimeter = (triangleBase, triangleSide1, triangleSide2) =>
  triangleBase + triangleSide1 + triangleSide2;
const triangleArea = (triangleBase, triangleHeight) =>
  (triangleBase + triangleHeight) / 2;

//circle
const circleDiameter = (circleRadius) => circleRadius * 2;
const circlePerimeter = (circleRadius) =>
  circleDiameter(circleRadius) * Math.PI;
const circleArea = (circleRadius) => Math.PI * Math.pow(circleRadius, 2);

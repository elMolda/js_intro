// square
const squarePerimeter = (squareSide) => squareSide * 4;
const squareArea = (squareSide) => Math.pow(squareSide, 2);
function computeSquarePerimeter() {
  const squareSide = document.getElementById("squareInput").value;
  alert(squarePerimeter(squareSide));
  return squarePerimeter(squareSide);
}
function computeSquareArea() {
  const squareSide = document.getElementById("squareInput").value;
  alert(squareArea(squareSide));
  return squareArea(squareSide);
}
// triangle
const trianglePerimeter = (triangleBase, triangleSide1, triangleSide2) =>
  triangleBase + triangleSide1 + triangleSide2;
const triangleArea = (triangleBase, triangleHeight) =>
  (triangleBase + triangleHeight) / 2;

function computeTrianglePerimeter() {
  const triangleSide1 = Number(document.getElementById("triangleSide1").value);
  const triangleSide2 = Number(document.getElementById("triangleSide2").value);
  const triangleBase = Number(document.getElementById("triangleBase").value);
  alert(trianglePerimeter(triangleBase, triangleSide1, triangleSide2));
  return trianglePerimeter(triangleBase, triangleSide1, triangleSide2);
}

function computeTriangleArea() {
  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleBase = document.getElementById("triangleBase").value;
  alert(triangleArea(triangleBase, triangleHeight));
  return triangleArea(triangleBase, triangleHeight);
}

//circle
const circleDiameter = (circleRadius) => circleRadius * 2;
const circlePerimeter = (circleRadius) =>
  circleDiameter(circleRadius) * Math.PI;
const circleArea = (circleRadius) => Math.PI * Math.pow(circleRadius, 2);

function computeCircumference() {
  const circleRadius = document.getElementById("circleRadius").value;
  alert(circlePerimeter(circleRadius));
  return circlePerimeter(circleRadius);
}

function computeCircleArea() {
  const circleRadius = document.getElementById("circleRadius").value;
  alert(circleArea(circleRadius));
  return circleArea(circleRadius);
}
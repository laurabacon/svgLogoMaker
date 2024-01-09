const { Triangle, Circle, Square } = require("../lib/shapes");
const prettier = require("prettier");

// Test suite for the Triangle class
describe("Shapes", () => {
  // Test case to verify rendering of the triangle with text color
  test("should render the correct SVG string for Triangle with text color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    triangle.setText("NOO");
    triangle.setTextColor("white");

    const receivedSvg = triangle.render();
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,0 100,100 0,100" fill="blue" /><text x="50%" y="50%" fill="white" font-size="20">NOO</text></svg>`;

    // Format the received and expected SVG strings using prettier
    const formattedReceivedSvg = prettier.format(receivedSvg, { parser: "html" });
    const formattedExpectedSvg = prettier.format(expectedSvg, { parser: "html" });

    expect(formattedReceivedSvg).toEqual(formattedExpectedSvg);
  });

  // Test case to verify rendering of the circle with text color
  test("should render the correct SVG string for Circle with text color", () => {
    const circle = new Circle();
    circle.setColor("red");
    circle.setText("ABC");
    circle.setTextColor("black");

    const receivedSvg = circle.render();
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="90" fill="red" /><text x="150" y="100" fill="black" font-size="20">ABC</text></svg>`;

    // Format the received and expected SVG strings using prettier
    const formattedReceivedSvg = prettier.format(receivedSvg, { parser: "html" });
    const formattedExpectedSvg = prettier.format(expectedSvg, { parser: "html" });

    expect(formattedReceivedSvg).toEqual(formattedExpectedSvg);
  });

  // Test case to verify rendering of the square with text color
  test("should render the correct SVG string for Square with text color", () => {
    const square = new Square();
    square.setColor("green");
    square.setText("XYZ");
    square.setTextColor("white");

    const receivedSvg = square.render();
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="0" y="0" width="300" height="200" fill="green" /><text x="50%" y="50%" fill="white" font-size="20">XYZ</text></svg>`;

    // Format the received and expected SVG strings using prettier
    const formattedReceivedSvg = prettier.format(receivedSvg, { parser: "html" });
    const formattedExpectedSvg = prettier.format(expectedSvg, { parser: "html" });

    expect(formattedReceivedSvg).toEqual(formattedExpectedSvg);
  });
});
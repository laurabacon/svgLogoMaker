const { Triangle, Circle, Square, logoWidth, logoHeight } = require("../lib/shapes");
const logoWidth = 300;
const logoHeight = 200;
const color = "#FF0000";

describe("Triangle", () => {
  test("display accurately", () => {
    const shape = new Triangle();
    const color = "#FF0000";
    const logoWidth = 300;
    const logoHeight = 200;
    shape.setColor(color);

    expect(shape.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
        <polygon points="50,0 100,100 0,100" fill="${color}" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${shape.textColor}" font-size="20">${shape.text}</text>
      </svg>`
    );
  });
});

describe("Circle", () => {
  test("display accurately", () => {
    const shape = new Circle();
    const color = "#FF0000";
    const logoWidth = 300;
    const logoHeight = 200;
    shape.setColor(color);

    const cx = logoWidth / 2;
    const cy = logoHeight / 2;

    expect(shape.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
        <circle cx="${cx}" cy="${cy}" r="90" fill="${color}" />
        <text x="${cx}" y="${cy}" text-anchor="middle" alignment-baseline="middle" fill="${shape.textColor}" font-size="20">${shape.text}</text>
      </svg>`
    );
  });
});

describe("Square", () => {
  test("display accurately", () => {
    const shape = new Square();
    const color = "#FF0000";
    const logoWidth = 300;
    const logoHeight = 200;
    shape.setColor(color);

    expect(shape.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
        <rect x="0" y="0" width="${logoWidth}" height="${logoHeight}" fill="${color}" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${shape.textColor}" font-size="20">${shape.text}</text>
      </svg>`
    );
  });
});

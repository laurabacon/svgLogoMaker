const { Triangle, Circle, Square } = require("./lib/shapes");

describe("Triangle", () => {
  test("displayed accurately", () => {
    const shape = new Triangle();
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="50 15, 100 100, 0 100" fill="${shape.color}">`
    );
  });
});

describe("Circle", () => {
  test("displayed accurately", () => {
    const shape = new Circle();
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" height="100% width="100% fill="${shape.color}">`
    );
  });
});

describe("Square", () => {
  test("displayed accurately", () => {
    const shape = new Square();
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" height="100% width="100% fill="${shape.color}">`
    );
  });
});
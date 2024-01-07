const fs = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);
async function writeToFile(fileName, data) {
  try {
    await writeFileAsync(fileName, data);
    console.log("Generated logo.svg!");
  } catch (error) {
    console.log("Error occurred while generating the logo file.");
    console.error(error);
  }
}

async function startApp() {
  try {
    const { default: inquirer } = await import("inquirer");
    const answers = await inquirer.prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "Shape",
        message: "Please enter one of the following shapes: Triangle, Circle, or Square",
        choices: "Triangle, Circle, or Square",
      },
      {
        type: "input",
        name: "Color of shape",
        message: "Please enter a hexadecimal to select the color of your shape.",
        validate: (input) => {
          const hexColorRegex = /^#([a-fA-F0-9]{3}){1,2}$/;
          const isValidColor = hexColorRegex.test(input);
          return isValidColor;
        },
      },
      {
        type: "input",
        name: "Text",
        message: "Please enter three characters to be displayed on your logo.",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "Color of text",
        message: "Please enter a hexadecimal to select the color of your text.",
        validate: (input) => {
          const hexColorRegex = /^#([a-fA-F0-9]{3}){1,2}$/;
          const isValidColor = hexColorRegex.test(input);
          return isValidColor;
        },
      },
    ]);

    const shape = answers.Shape.toLowerCase();
    const color = answers["Color of shape"];
    const text = answers.Text;
    const textColor = answers["Color of text"];
    let svgData;
    const { Triangle, Circle, Square } = await import("./lib/shapes.js");

    switch (shape) {
      case "triangle":
        const { Triangle } = await import("./lib/shapes.js");
        const triangle = new Triangle();
        triangle.setColor(color);
        triangle.setText(text);
        triangle.setTextColor(textColor);
        svgData = triangle.render();
        break;
      case "circle":
        const { Circle } = await import("./lib/shapes.js");
        const circle = new Circle();
        circle.setColor(color);
        circle.setText(text);
        circle.setTextColor(textColor);
        svgData = circle.render();
        break;
      case "square":
        const { Square } = await import("./lib/shapes.js");
        const square = new Square();
        square.setColor(color);
        square.setText(text);
        square.setTextColor(textColor);
        svgData = square.render();
        break;
      default:
        console.log("Invalid shape selection.");
        return;
    }

    await writeToFile("logo.svg", svgData);
  } catch (error) {
    console.error("There was an error");
    console.error(error);
  }
}

// Invoke function to prompt user
startApp();
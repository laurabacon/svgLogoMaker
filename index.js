const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const { Triangle, Circle, Square } = require("./lib/shapes");

async function writeToFile(fileName, data) {
  try {
    await writeFileAsync(fileName, data);
    console.log("Your file has been generated!");
  } catch (error) {
    console.log("Error occurred while generating the file.");
    console.error(error);
  }
}

function startApp() {
  import("inquirer").then((module) => {
    const inquirer = module.default;
    inquirer
      .prompt([
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
          message:
            "Please enter a hexadecimal to select the color of your shape.",
          validate: (input) => {
            const hexColor = /^#([a-fA-F0-9]){3}$|^#([a-fA-F0-9]){6}$/;
            const isValidColor = hexColor.test(input);
            return isValidColor;
          },
        },
        {
          type: "input",
          name: "Text",
          message:
            "Please enter three characters to be displayed on your logo.",
          validate: (input) => input.length <= 3,
        },
        {
          type: "input",
          name: "Color of text",
          message:
            "Please enter a hexadecimal to select the color of your text.",
          validate: (input) => {
            const hexColor = /^#([a-fA-F0-9]){3}$|^#([a-fA-F0-9]){6}$/;
            const isValidColor = hexColor.test(input);
            return isValidColor;
          },
        },
      ])

      .then((answers) => {
        const shape = answers.Shape.toLowerCase();
        const color = answers["Color of shape"];
        const text = answers.Text;
        const textColor = answers["Color of text"];

        let svgData;

        switch (shape) {
          case "triangle":
            const triangle = new Triangle();
            triangle.setColor(color);
            triangle.setText(text);
            triangle.setTextColor(textColor);
            svgData = triangle.render();
            break;
          case "circle":
            const circle = new Circle();
            circle.setColor(color);
            circle.setText(text);
            circle.setTextColor(textColor);
            svgData = circle.render();
            break;
          case "square":
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

        writeToFile("logo.svg", svgData);
      })

      .catch((error) => {
        console.error("There was an error");
      });
  });
}

//Invoke function to prompt user
startApp();

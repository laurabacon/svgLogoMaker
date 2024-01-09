const logoWidth = 300;
const logoHeight = 200;

// Base Shape class
class Shape {
  constructor(color) {
    this.color = color;
    this.textColor = "";
  }

  // Set the color of the shape
  setColor(color) {
    this.color = color;
  }

  // Set the text to be displayed on the shape
  setText(text) {
    this.text = text;
  }

  // Set the color of the text
  setTextColor(textColor) {
    this.textColor = textColor;
  }

  // Placeholder render method for the base Shape class
  render() {
    return "";
  }
}

// Triangle class, extends Shape class
class Triangle extends Shape {
  // Render the triangle shape with the specified color, text, and text color
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      <text x="50%" y="50%" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
    </svg>`;
  }
}

// Circle class, extends Shape class
class Circle extends Shape {
  // Render the circle shape with the specified color, text, and text color
  render() {
    const cx = logoWidth / 2;
    const cy = logoHeight / 2;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <circle cx="${cx}" cy="${cy}" r="90" fill="${this.color}" />
      <text x="${cx}" y="${cy}" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
    </svg>`;
  }
}

// Square class, extends Shape class
class Square extends Shape {
  // Render the square shape with the specified color, text, and text color
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <rect x="0" y="0" width="${logoWidth}" height="${logoHeight}" fill="${this.color}" />
      <text x="50%" y="50%" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
    </svg>`;
  }
}

// Export the Triangle, Circle, and Square classes
module.exports = {
  Triangle,
  Circle,
  Square,
};
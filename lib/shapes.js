let logoWidth = 300;
let logoHeight = 200;

class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  setText(text) {
    this.text = text;
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  setText(text) {
    this.text = text;
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    const cRadius = Math.min(logoWidth, logoHeight) * 0.45;
    const cx = logoWidth / 2;
    const cy = logoHeight / 2;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <circle cx="${cx}" cy="${cy}" r="90" fill="${this.color}" />
      <text x="${cx}" y="${cy}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  setText(text) {
    this.text = text;
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${logoWidth}" height="${logoHeight}">
      <rect x="0" y="0" width="${logoWidth}" height="${logoHeight}" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = {
  logoWidth,
  logoHeight,
  Triangle,
  Circle,
  Square,
};
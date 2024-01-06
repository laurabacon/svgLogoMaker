class Shape {
    constructor(color) {
      this.color = "";
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
      return `<polygon height="100%" width="100%" points="50 15, 100 100, 0 100" fill="${this.color}">`;
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
      return `<circle cx="25" cy="75" r="20" height="100%" width="100%" fill="${this.color}">`;
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
      return `<rect x="0" y="0" width="100" height="100" fill="${this.color}">`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };

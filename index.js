const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require("./lib/shapes");

const logoWidth = 300;
const logoHeight = 200;

inquirer
  .prompt([
    /* Pass your questions in here */

  ])




  .then((answers) => {
    // Use user feedback for... whatever!!
    
  })



  .catch((error) => {
    console.error("There was an error");
    }
  });
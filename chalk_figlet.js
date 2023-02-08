// figlet
//  This method allows you to create ASCII Art from text. It takes in 3 parameters: Input Text - A string of text to turn into ASCII Art.
let figlet=require("figlet");
console.log(figlet.textSync('Iti!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));




// chalk
// Chalk module in Node.js is the third-party module that is used for styling the format of text and allows us to create our own themes in the node.js project.
const chalk = require('chalk');
console.log(chalk.blue('Hello Iti!')); 


// you can also use combination of figlet and chalk.
console.log(chalk.red(figlet.textSync("* Iti")));


// examples
console.log(chalk.red(figlet.textSync("Let  it  be !  It's  all  good")));

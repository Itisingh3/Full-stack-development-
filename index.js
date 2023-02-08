let figlet=require("figlet");
console.log(figlet.textSync('Iti!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

const chalk = require('chalk');
console.log(chalk.blue('Hello Iti!')); 
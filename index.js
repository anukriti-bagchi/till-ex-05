var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name?');


var welcomeMessage = "Welcome " + userName;//string concatenation
console.log(welcomeMessage);
console.log("have a wonderful stay");







const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(a) {

    rl.question("Enter operator (+ - * /): ", function(op) {

        rl.question("Enter second number: ", function(b) {

            a = Number(a);
            b = Number(b);

            if(op === "+") console.log(a + b);
            else if(op === "-") console.log(a - b);
            else if(op === "*") console.log(a * b);
            else if(op === "/") console.log(a / b);
            else console.log("Invalid");

            rl.close();

        });

    });

});
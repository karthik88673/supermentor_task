const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secret = Math.floor(Math.random() * 10) + 1;

function ask()
{
    rl.question("Guess number 1-10: ", function(n)
    {
        n = Number(n);

        if(n > secret)
        {
            console.log("Too big");
            ask();
        }
        else if(n < secret)
        {
            console.log("Too small");
            ask();
        }
        else
        {
            console.log("Correct");
            rl.close();
        }
    });
}

ask();
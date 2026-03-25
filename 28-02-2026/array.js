const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

rl.question("Enter number of students: ", function(n)
{
    n = Number(n);

    let count = 0;

    function askStudent()
    {
        if(count == n)
        {
            console.log("Student Data:");
            console.log(students);
            rl.close();
            return;
        }

        rl.question("Enter name: ", function(name)
        {
            rl.question("Enter mark1: ", function(m1)
            {
                rl.question("Enter mark2: ", function(m2)
                {
                    rl.question("Enter mark3: ", function(m3)
                    {
                        m1 = Number(m1);
                        m2 = Number(m2);
                        m3 = Number(m3);

                        let avg = (m1 + m2 + m3) / 3;

                        students.push({
                            name: name,
                            marks: [m1, m2, m3],
                            average: avg
                        });

                        count++;
                        askStudent();
                    });
                });
            });
        });
    }

    askStudent();
});
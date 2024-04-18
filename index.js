#! /usr/bin/env node                
import inquirer from "inquirer"; //to get user input
let calc = await inquirer.prompt([
    { name: "fnum",
        message: "Enter First Number",
        type: "number"
    },
    { name: "snum",
        message: "Enter Second Number",
        type: "number"
    },
    { name: "opr",
        message: "Select Option to Perform Calculation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
    },
]);
//Conditional statement
if (calc.opr === "Addition") {
    console.log(calc.fnum + calc.snum);
}
else if (calc.opr === "Subtraction") {
    console.log(calc.fnum - calc.snum);
}
else if (calc.opr === "Multiplication") {
    console.log(calc.fnum * calc.snum);
}
else if (calc.opr === "Division") {
    console.log(Math.floor(calc.fnum / calc.snum));
} //Math.floor function used for result in round figure Number
else if (calc.opr === "Modulus") {
    console.log(calc.fnum % calc.snum);
}
;

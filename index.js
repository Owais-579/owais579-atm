#! /usr/bin/env node
import inquirer from "inquirer";
// enter your pin
// what you want(withdraw,check balance)
// amount deduct and show remaining balance
let pin = 12345;
let balance = 20000;
// asking user for pin
let answer = await inquirer.prompt({
    name: "pin",
    message: "Please Enter Your pin",
    type: "number",
});
if (answer.pin === pin) {
    console.log("You Proceed further");
}
// ask user for withdraw or check balance
let OperationAns = await inquirer.prompt([
    {
        name: "q1",
        message: "What do you want ?",
        type: "list",
        choices: ["withdraw", "check balance"],
    },
]);
// agar user check balance select karega tu ye condition chalegi
if (OperationAns.q1 === "withdraw") {
    let amountAns = await inquirer.prompt({
        name: "q2",
        message: "Enter Your Amount",
        type: "number",
    });
    // user decimal na dal paye isliye condition
    if (Number.isInteger(amountAns.q2)) {
        if (balance < amountAns.q2) {
            console.log("You Have not sufficient balance Please Enter lower Amount");
        }
        else if ((balance -= amountAns.q2)) {
            console.log("Your Remaining balance is " + balance);
        }
    }
}
if (OperationAns.q1 === "check balance") {
    console.log("Your current balance is " + balance);
}

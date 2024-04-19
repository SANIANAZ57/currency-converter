#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log (chalk.bold.italic.greenBright("\n \t Welcome To Sani currency converter \n"));
//Define the list of currencies and their exchange rates
let exchange_rate: any ={
    "USD":1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":270.70,
} 
let userAnswer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select tha currency to convert from:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name:"to_currency",
        type:"list",
        message:"select tha currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"enter tha amount to convert:",
    }
]);

let form_amount = exchange_rate[userAnswer.from_currency]
let to_amount = exchange_rate[userAnswer.to_currency];
let amount =userAnswer.amount

let base_amount =amount / form_amount
let converted_amount = base_amount * to_amount

console.log(chalk.bold.italic.bgBlueBright.gray(`convert amount =${converted_amount.toFixed(3)}`));

console.log(chalk.italic.bgGreen.black("THANK YOU"));
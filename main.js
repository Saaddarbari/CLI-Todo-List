#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what would you like to do?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you Want to Add more?",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
;
let clearList = await inquirer.prompt([
    {
        name: "clear",
        type: "confirm",
        message: "Do you want to clear your ToDo list?",
        default: false,
    },
]);
if (clearList.clear) {
    todos = [];
    console.log("\n--- To-Do List Is clear---");
}
else {
    console.log("\n--- ToDo list not cleared! ---");
}
console.log("Final ToDo List:");
console.log(todos);

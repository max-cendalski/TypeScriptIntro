"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Buy Watch"),
    new todoItem_1.TodoItem(3, "Collect checks"), new todoItem_1.TodoItem(4, "Walk Dogs", true)
];
let collection = new todoCollection_1.TodoCollection("Max", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Gor for run");
let todoItem = collection.getTodoById(newId);
//collection.addTodo(todoItem)
//collection.removeComplete()
console.clear();
function displayTotoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do )`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
;
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTotoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();

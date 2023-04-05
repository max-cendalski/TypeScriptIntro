"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Buy Watch"),
    new todoItem_1.TodoItem(3, "Collect checks"), new todoItem_1.TodoItem(4, "Walk Dogs", true)
];
const prompt = inquirer.createPromptModule();
let collection = new todoCollection_1.TodoCollection("Max", todos);
let showCompleted = true;
//console.clear()
console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Gor for run");
//let todoItem: TodoItem = collection.getTodoById(newId)
//collection.addTodo(todoItem)
//collection.removeComplete()
console.clear();
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do )`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
;
var Commands;
(function (Commands) {
    Commands["Toogle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands),
        //badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toogle:
                showCompleted = !showCompleted;
                promptUser();
                break;
        }
    });
}
promptUser();

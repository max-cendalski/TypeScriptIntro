"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Buy Watch"),
    new todoItem_1.TodoItem(3, "Collect checks"), new todoItem_1.TodoItem(4, "Walk Dogs", true)
];
let collection = new todoCollection_1.TodoCollection("Max", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Gor for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
//collection.addTodo(todoItem)
console.log(JSON.stringify(todoItem));
console.log(JSON.stringify(todos));

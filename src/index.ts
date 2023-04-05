import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Buy Watch"),
  new TodoItem(3, "Collect checks"), new TodoItem(4, "Walk Dogs", true)
];

let collection: TodoCollection = new TodoCollection("Max", todos);

console.clear()
console.log(`${collection.userName}'s Todo List`)

let newId: number = collection.addTodo("Gor for run");
let todoItem: TodoItem = collection.getTodoById(newId)


//collection.addTodo(todoItem)

//collection.removeComplete()
console.clear()
function displayTotoList(): void {
  console.log(`${collection.userName}'s Todo List`
    + `(${collection.getItemCounts().incomplete} items to do )`)
  collection.getTodoItems(true).forEach(item => item.printDetails());
};

enum Commands {
  Quit = "Quit"
}

function promptUser() : void {
  console.clear();
  displayTotoList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose Option",
    choices: Object.values(Commands)
  }).then(answers=>{
    if (answers["command"] !== Commands.Quit) {
      promptUser()
    }
  })
}

promptUser();

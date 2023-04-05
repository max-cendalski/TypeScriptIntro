import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Buy Watch"),
  new TodoItem(3, "Collect checks"), new TodoItem(4, "Walk Dogs", true)
];
const prompt = inquirer.createPromptModule();
let collection: TodoCollection = new TodoCollection("Max", todos);
let showCompleted = true;

//console.clear()
console.log(`${collection.userName}'s Todo List`)
//let newId: number = collection.addTodo("Gor for run");
//let todoItem: TodoItem = collection.getTodoById(newId)
//collection.addTodo(todoItem)
//collection.removeComplete()


console.clear()
function displayTodoList(): void {
  console.log(`${collection.userName}'s Todo List`
    + `(${collection.getItemCounts().incomplete} items to do )`)
  collection.getTodoItems(showCompleted).forEach(item => item.printDetails())
};

enum Commands {
  Add = "Add New Task",
  Toogle = "Show/Hide Completed",
  Quit = "Quit"
}
function promptAdd(): void {
  console.clear();
  prompt({
    type: "input",
    name: "add",
    message: "Enter Task: "
  }).then(answers => {
    if (answers["add"] !== "") {
      collection.addTodo(answers["add"]);
    }
    promptUser()
  })
}

function promptUser(): void {
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
        promptUser()
        break;
      case Commands.Add:
        promptAdd();
        break;
    }
  })
}

promptUser();

import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from "./jsonTodoCollection";

let todos: TodoItem[] /* = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Buy Watch"),
  new TodoItem(3, "Collect checks"), new TodoItem(4, "Walk Dogs", true)
]; */
const prompt = inquirer.createPromptModule();
let collection: TodoCollection = new JsonTodoCollection("Max", todos);
let showCompleted = true;

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
  Complete = "Complete Task",
  Toogle = "Show/Hide Completed",
  Purge = "Remove Completed Tasks",
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

function promptComplete(): void {
  console.clear();
  prompt({
    type: "checkbox", name: "complete", message: "Mark Tasks Complete",
    choices: collection.getTodoItems(showCompleted).map(item => ({
      name: item.task, value: item.id, checked: item.complete
    }))
  }).then(answers => {
    let completedTasks = answers["complete"] as number[];
    collection.getTodoItems(true).forEach(item =>
      collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
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
      case Commands.Complete:
        if (collection.getItemCounts().incomplete > 0) {
          promptComplete()
        } else {
          promptUser()
        }
        break;
      case Commands.Purge:
        collection.removeComplete();
        promptUser();
        break;
    }
  })
}

promptUser();

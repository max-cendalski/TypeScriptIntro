import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Buy Watch"),
  new TodoItem(3, "Collect checks"), new TodoItem(4, "Walk Dogs", true)
];

let collection: TodoCollection = new TodoCollection("Max", todos);

console.clear()
console.log(`${collection.userName}'s Todo List`)

let newId:number = collection.addTodo("Gor for run");
let todoItem: TodoItem = collection.getTodoById(newId)
todoItem.printDetails()

//collection.addTodo(todoItem)

collection.getTodoItems(true).forEach(item => item.printDetails());

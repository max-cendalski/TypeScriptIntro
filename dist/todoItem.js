"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
//More Concise Code
/* export class TodoItem {
  constructor(public id: number,
    public task: string,
    public complete: boolean = false) {

  }
  printDetails() : void{
    console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`)
  }
}
 */

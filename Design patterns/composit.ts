/*Define a TaskItem interface (or abstract class) that declares:
getName(): string
display(indent: string): void
Implement SimpleTask class:
Stores a name.
Implements display() to print its name.
Implement CompositeTask class:
Stores a name.
Contains a list of TaskItem children.
Can add() sub-tasks.
Implements display() to print itself and recursively print its sub-tasks*/

interface TaskItem{
    getName():string;
    display(indent:string):void;
}

class SimpleTask implements TaskItem{
private name :string;
constructor(name:string){
    this.name = name;
}

    getName():string{
        return this.name;
    }
    display(indent:string):void{
        console.log(`${indent}${this.name}`);
    }
}

// this is Composite (can have children)
class  CompositeTask implements TaskItem{
    private name:string;
    private children:TaskItem[]=[]
    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name
    }
    
    add(task:TaskItem):void{
this.children.push(task);
    }
    display(indent:string):void{
        console.log(`${indent} ${this.name}`);
for(let item of this.children){
    item.display(indent + "   ");
}
}
}
 
 const task1 = new SimpleTask("Buy groceries");
const task2 = new SimpleTask("Call mom");
const task3 = new SimpleTask("Pay bills");

const personalTasks = new CompositeTask("Personal Tasks");
personalTasks.add(task1);
personalTasks.add(task2);
personalTasks.add(task3);

const task4 = new SimpleTask("Fix login bug");
const task5 = new SimpleTask("Deploy new release");

const workTasks = new CompositeTask("Work Tasks");
workTasks.add(task4);
workTasks.add(task5);

const allTasks = new CompositeTask("All Tasks");
allTasks.add(personalTasks);
allTasks.add(workTasks);

allTasks.display("");



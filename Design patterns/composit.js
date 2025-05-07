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
var SimpleTask = /** @class */ (function () {
    function SimpleTask(name) {
        this.name = name;
    }
    SimpleTask.prototype.getName = function () {
        return this.name;
    };
    SimpleTask.prototype.display = function (indent) {
        console.log("".concat(indent).concat(this.name));
    };
    return SimpleTask;
}());
// this is Composite (can have children)
var CompositeTask = /** @class */ (function () {
    function CompositeTask(name) {
        this.children = [];
        this.name = name;
    }
    CompositeTask.prototype.getName = function () {
        return this.name;
    };
    CompositeTask.prototype.add = function (task) {
        this.children.push(task);
    };
    CompositeTask.prototype.display = function (indent) {
        console.log("".concat(indent, " ").concat(this.name));
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.display(indent + "   ");
        }
    };
    return CompositeTask;
}());
var task1 = new SimpleTask("Buy groceries");
var task2 = new SimpleTask("Call mom");
var task3 = new SimpleTask("Pay bills");
var personalTasks = new CompositeTask("Personal Tasks");
personalTasks.add(task1);
personalTasks.add(task2);
personalTasks.add(task3);
var task4 = new SimpleTask("Fix login bug");
var task5 = new SimpleTask("Deploy new release");
var workTasks = new CompositeTask("Work Tasks");
workTasks.add(task4);
workTasks.add(task5);
var allTasks = new CompositeTask("All Tasks");
allTasks.add(personalTasks);
allTasks.add(workTasks);
allTasks.display("");

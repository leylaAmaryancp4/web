/*Create 4 subsystem classes:
1.CPU
freeze()
execute()
2.Memory
load(address: number, data: string)
3.HardDrive
read(sector: number, size: number): string
4.GPU
initialize()
Create a ComputerFacade class that:
Takes instances of CPU, Memory, HardDrive, GPU.
Has a method startComputer() that:
Freezes the CPU
Loads the program into memory
Reads data from hard drive
Initializes the GPU
Executes the CPU*/
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.freeze = function () { console.log("freezing CPU"); };
    ;
    CPU.prototype.execute = function () { console.log("Executing"); };
    ;
    return CPU;
}());
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.load = function (address, data) {
        console.log("Memory load ".concat(data, " at adress ").concat(address));
    };
    return Memory;
}());
var HardDrive = /** @class */ (function () {
    function HardDrive() {
    }
    HardDrive.prototype.read = function (sector, size) {
        console.log("HardDrive read sector".concat(sector, " size").concat(size));
        return "Data from sector ".concat(sector, " of size ").concat(size);
    };
    return HardDrive;
}());
var GPU = /** @class */ (function () {
    function GPU() {
    }
    GPU.prototype.initialize = function () { console.log("GPU initializing grapig system"); };
    ;
    return GPU;
}());
//The Facade :
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade(cpu, memory, harddrive, gpu) {
        this.cpu = cpu;
        this.memory = memory;
        this.harddrive = harddrive;
        this.gpu = gpu;
    }
    ComputerFacade.prototype.startComputer = function () {
        this.cpu.freeze();
        var data = this.harddrive.read(0, 256);
        this.memory.load(0, data);
        this.gpu.initialize();
    };
    return ComputerFacade;
}());
//client code
var cpu = new CPU();
var memory = new Memory();
var hardDrive = new HardDrive();
var gpu = new GPU();
var computer = new ComputerFacade(cpu, memory, hardDrive, gpu);
computer.startComputer();

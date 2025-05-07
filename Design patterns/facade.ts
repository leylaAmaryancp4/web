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

class CPU{
    freeze(){console.log("freezing CPU")};
    execute(){console.log("Executing")};
}
class Memory{
    load(address: number, data: string){
        console.log(`Memory load ${data} at adress ${address}`);
    }

}
class HardDrive{
    read(sector: number, size: number): string{
        console.log(`HardDrive read sector${sector} size${size}`)
        return `Data from sector ${sector} of size ${size}`;
    }
}
class GPU{
    initialize(){console.log("GPU initializing grapig system")};
}
//The Facade :
class ComputerFacade{
    private cpu :CPU;
    private memory :  Memory;
    private harddrive : HardDrive;
    private gpu : GPU;
    constructor(cpu:CPU,memory:Memory, harddrive:HardDrive, gpu:GPU){
        this.cpu = cpu;
        this.memory = memory;
        this.harddrive = harddrive;
        this.gpu = gpu;
    }
    startComputer(){
        this.cpu.freeze();
        let data =  this.harddrive.read( 0 , 256);
         this.memory.load( 0 ,data);
        this.gpu.initialize();
    }
}
 //client code
const cpu = new CPU();
const memory = new Memory();
const hardDrive = new HardDrive();
const gpu = new GPU();
const computer = new ComputerFacade(cpu, memory, hardDrive, gpu);
computer.startComputer();

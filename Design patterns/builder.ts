/*իրականացնել համակարգիչների անհատական հավաքման համակարգ՝ օգտագործելով Builder Design Pattern։
Client Code-ում հնարավոր է է քայլ առ քայլ ընտրել համակարգչի տարբեր բաղադրիչները՝ CPU, GPU, RAM, Storage, OS, և վերջում ստանալ վերջնական Computer օբյեկտ։
Պետք է առանձնացնել Director, Builder, ConcreteBuilder, և Product (Computer) դասերի պատասխանատվությունները։
 Նպատակը loose coupling է և հեշտ ընդլայնում ապագայում (OCP friendly)
Պահանջներ
Computer օբյեկտը պետք է ունենա հետևյալ դաշտերը՝ processor, graphics, memory, disk, operatingSystem։
Պետք է հնարավոր լինի կառուցել տարբեր տեսակի համակարգիչներ՝ օրինակ «Game PC», «Office PC», «Budget PC»։
Յուրաքանչյուր համակարգիչ կառուցվում է նույն Director-ի կողմից, բայց օգտագործելով տարբեր ConcreteBuilder-ներ։
Բոլոր կառուցման քայլերը պետք է լինեն անկախ, և հնարավոր լինի փոփոխել դրանց կարգը։*/ 
class Computer{
    processor:string='';
    graphics:string='';
    memory:string='';
    disk:string='';
    operatingSystem:string='';
    specs(){
        console.log(`CPU:${this.processor}, GPU:${this.graphics}, RAM:${this.memory}, OS:${this.operatingSystem}`);
    }
    
}
/*All three classes implement the ComputerBuilder interface, 
and build different configurations of the Computer object.

GamingPcBuilder

OfFicePCBuilder

BudgetPCBuilder*/


interface ComputerBuilder{
reset():void;
setProcessor():void;
setGraphics():void;
setMemory():void;
setDisk():void;
setOs():void;
getResult():Computer;
}

 //builder
class GamingPcBuilder implements ComputerBuilder{
    private computer:Computer = new Computer();
    reset():void{
        this.computer = new Computer();
    }
    setProcessor():void{
        this.computer.processor = "Intel Core i9";
    }
    setGraphics():void{
        this.computer.graphics="NVIDIA RTX 4080";
    }

    setMemory():void{
        this.computer.memory ="32GB RAM";
    }

    setDisk():void{
        this.computer.disk="2TB SSD";
    }
    setOs():void{
        this.computer.operatingSystem ="Windows 11";
    }

    getResult(): Computer {
        return this.computer;
    }
    

}

//Builder
class OfFicePCBuilder implements ComputerBuilder{
private computer:Computer=new Computer();
reset():void{
    this.computer = new Computer();
}

setProcessor():void{
    this.computer.processor="Intel Core i5";
}
setGraphics():void{
    this.computer.graphics="Integraed Graphics";
}
setMemory():void{
    this.computer.memory="16GB RAM";
}
setDisk():void{
    this.computer.disk="512GB SSD";

}

setOs():void{
    this.computer.operatingSystem="Windows 10"
}
getResult():Computer{
    return this.computer;
}
}


//Builder
class BudgetPCBuilder implements ComputerBuilder{
    private computer:Computer=new Computer();

    reset():void{
        this.computer =new Computer();
}
setProcessor():void{
    this.computer.processor="Intel Core i3";
}
setGraphics():void{
    this.computer.graphics="Basic GPU";
}

setMemory():void{
    this.computer.memory="8Gb RAM";
}
setDisk():void{
    this.computer.disk="256GB SSD";
}
 setOs():void{
    this.computer.operatingSystem ="Linux";
 }

 getResult():Computer{
return this.computer;
 }
}

class Director{
    private builder:ComputerBuilder;

    setBuilder(builder:ComputerBuilder):void{
        this.builder = builder;
    }

   
    constructGamingPC():void{
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setMemory();
        this.builder.setDisk();
        this.builder.setOs();
        
    }

    constructOfficePC():void{
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setMemory();
        this.builder.setDisk();
        this.builder.setOs();
    }

    constructBudgetPC():void{
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setDisk();
        this.builder.setOs();
    }
}


//client code
const director = new Director();

//game computer
const gamingBuilder=new GamingPcBuilder();
director.setBuilder(gamingBuilder);
director.constructGamingPC();
const gamePC=gamingBuilder.getResult();
gamePC.specs();


//office computer
const officeBuilder = new OfFicePCBuilder();
director.setBuilder(officeBuilder);
director.constructOfficePC();
const officePC=officeBuilder.getResult();
officePC.specs();

//budget computer

const budgetBuilder= new BudgetPCBuilder();
director.setBuilder(budgetBuilder);
director.constructBudgetPC();
const budgetPC=budgetBuilder.getResult();
budgetPC.specs(); 



/*իրականացնել համակարգիչների անհատական հավաքման համակարգ՝ օգտագործելով Builder Design Pattern։
Client Code-ում հնարավոր է է քայլ առ քայլ ընտրել համակարգչի տարբեր բաղադրիչները՝ CPU, GPU, RAM, Storage, OS, և վերջում ստանալ վերջնական Computer օբյեկտ։
Պետք է առանձնացնել Director, Builder, ConcreteBuilder, և Product (Computer) դասերի պատասխանատվությունները։
 Նպատակը loose coupling է և հեշտ ընդլայնում ապագայում (OCP friendly)
Պահանջներ
Computer օբյեկտը պետք է ունենա հետևյալ դաշտերը՝ processor, graphics, memory, disk, operatingSystem։
Պետք է հնարավոր լինի կառուցել տարբեր տեսակի համակարգիչներ՝ օրինակ «Game PC», «Office PC», «Budget PC»։
Յուրաքանչյուր համակարգիչ կառուցվում է նույն Director-ի կողմից, բայց օգտագործելով տարբեր ConcreteBuilder-ներ։
Բոլոր կառուցման քայլերը պետք է լինեն անկախ, և հնարավոր լինի փոփոխել դրանց կարգը։*/
var Computer = /** @class */ (function () {
    function Computer() {
        this.processor = '';
        this.graphics = '';
        this.memory = '';
        this.disk = '';
        this.operatingSystem = '';
    }
    Computer.prototype.specs = function () {
        console.log("CPU:".concat(this.processor, ", GPU:").concat(this.graphics, ", RAM:").concat(this.memory, ", OS:").concat(this.operatingSystem));
    };
    return Computer;
}());
var GamingPcBuilder = /** @class */ (function () {
    function GamingPcBuilder() {
        this.computer = new Computer();
    }
    GamingPcBuilder.prototype.reset = function () {
        this.computer = new Computer();
    };
    GamingPcBuilder.prototype.setProcessor = function () {
        this.computer.processor = "Intel Core i9";
    };
    GamingPcBuilder.prototype.setGraphics = function () {
        this.computer.graphics = "NVIDIA RTX 4080";
    };
    GamingPcBuilder.prototype.setMemory = function () {
        this.computer.memory = "32GB RAM";
    };
    GamingPcBuilder.prototype.setDisk = function () {
        this.computer.disk = "2TB SSD";
    };
    GamingPcBuilder.prototype.setOs = function () {
        this.computer.operatingSystem = "Windows 11";
    };
    GamingPcBuilder.prototype.getResult = function () {
        return this.computer;
    };
    return GamingPcBuilder;
}());
var OfFicePCBuilder = /** @class */ (function () {
    function OfFicePCBuilder() {
        this.computer = new Computer();
    }
    OfFicePCBuilder.prototype.reset = function () {
        this.computer = new Computer();
    };
    OfFicePCBuilder.prototype.setProcessor = function () {
        this.computer.processor = "Intel Core i5";
    };
    OfFicePCBuilder.prototype.setGraphics = function () {
        this.computer.graphics = "Integraed Graphics";
    };
    OfFicePCBuilder.prototype.setMemory = function () {
        this.computer.memory = "16GB RAM";
    };
    OfFicePCBuilder.prototype.setDisk = function () {
        this.computer.disk = "512GB SSD";
    };
    OfFicePCBuilder.prototype.setOs = function () {
        this.computer.operatingSystem = "Windows 10";
    };
    OfFicePCBuilder.prototype.getResult = function () {
        return this.computer;
    };
    return OfFicePCBuilder;
}());
var BudgetPCBuilder = /** @class */ (function () {
    function BudgetPCBuilder() {
        this.computer = new Computer();
    }
    BudgetPCBuilder.prototype.reset = function () {
        this.computer = new Computer();
    };
    BudgetPCBuilder.prototype.setProcessor = function () {
        this.computer.processor = "Intel Core i3";
    };
    BudgetPCBuilder.prototype.setGraphics = function () {
        this.computer.graphics = "Basic GPU";
    };
    BudgetPCBuilder.prototype.setMemory = function () {
        this.computer.memory = "8Gb RAM";
    };
    BudgetPCBuilder.prototype.setDisk = function () {
        this.computer.disk = "256GB SSD";
    };
    BudgetPCBuilder.prototype.setOs = function () {
        this.computer.operatingSystem = "Linux";
    };
    BudgetPCBuilder.prototype.getResult = function () {
        return this.computer;
    };
    return BudgetPCBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.constructGamingPC = function () {
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setMemory();
        this.builder.setDisk();
        this.builder.setOs();
    };
    Director.prototype.constructOfficePC = function () {
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setMemory();
        this.builder.setDisk();
        this.builder.setOs();
    };
    Director.prototype.constructBudgetPC = function () {
        this.builder.reset();
        this.builder.setProcessor();
        this.builder.setGraphics();
        this.builder.setDisk();
        this.builder.setOs();
    };
    return Director;
}());
//client code
var director = new Director();
//game computer
var gamingBuilder = new GamingPcBuilder();
director.setBuilder(gamingBuilder);
director.constructGamingPC();
var gamePC = gamingBuilder.getResult();
gamePC.specs();
//office computer
var officeBuilder = new OfFicePCBuilder();
director.setBuilder(officeBuilder);
director.constructOfficePC();
var officePC = officeBuilder.getResult();
officePC.specs();
//budget computer
var budgetBuilder = new BudgetPCBuilder();
director.setBuilder(budgetBuilder);
director.constructBudgetPC();
var budgetPC = budgetBuilder.getResult();
budgetPC.specs();

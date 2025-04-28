/*Ունենք Employee կլասը, որից ժառանգվում են Teacher, Developer և Manager կլասները
Employee կլասն ունի #salary դաշտը և Calculate մեթոդը, որը ստանդարտ #salary-ից հանում է  20% պահումներ
Info մեթոդը տպում է մարդու անունը, հաստիքը և աշխատավարձը
Developer, Teacher կլասները վերսահմանում են calculate մեթոդը
մասնավորապես Teacher-ի համար հաշվարկը կատարվում է ըստ սահմանված ժամերի
Developer-ի համար սահմանված աշխատավարձին ավելանում է բոնուս կախված նրանից junior/middle/senior է, թե ոչ:
Ստեղծել զանգված տարբեր աշխատակիցներից
գտնել բոլորի աշխատավարձերի գումարը (valueOf)
Գտնել ծրագրավորողների աշխատավարձերի գումարը:*/
class Employee{
    #salary;
constructor( name, position, salary){
    this.name = name;
    this.position = position;
    this.#salary = salary;
}
    calculate(){
        return this.#salary * 0.8;
}
info(){
    console.log(`Name:${this.name} , Staff:${this.position}, Salary:${this.calculate()}`);
}

getSalary(){
    return this.#salary;
}
valueOf(){
    return this.calculate();
}
};

class Developer extends Employee{
    constructor(name,basesalary,level){
        super(name, "Developer", basesalary);
        this.level=level
    }

        calculate(){
            let bonus = 0
            switch(this.level.toLowerCase()){
                case"junior":
                bonus = 0.05;
                break;
                case"middle":
                bonus = 0.1;
                break;
                case"senior":
                bonus = 0.2;
                break;
            }
            const base = this.getSalary();
            return base + base * bonus;
            
        }
    }

    
class Teacher extends Employee{
    constructor(name,rate, hours){
        super(name,"Teacher",rate * hours)
        this.rate = rate;
        this.hours = hours;
    }
    calculate(){
        return super.calculate()  ;// 20% պահում ընդհանուր գումարից
    }


}

const arr = [
    new Teacher("Areg", 45000,4),
    new Teacher("Anna", 5000, 20),             // 100000 -> -10%
    new Developer("Tigran", 200000, "junior"), // +5%
    new Developer("Aisha", 300000, "senior"), // +20%
    ];
    //Տպում ենք բոլորի տվյալները
    console.log("Information about workers");
    arr.forEach(i=>{i.info()//Տպում է տվյալները
        console.log("-----------");
    });

    //գտնել բոլորի աշխատավարձերի գումարը (valueOf)
    const totalsum = arr.reduce((acc,value)=>acc + value,0);
    console.log(`բոլորի աշխատավարձերի գումարը: ${totalsum}`);

    //Գտնել ծրագրավորողների աշխատավարձերի գումարը:
    // Ֆիլտրում ենք միայն Developer-ները              // Ավելացնում ենք նրանց աշխատավարձերը
    const dev = arr.filter(i => i instanceof Developer).reduce((acc,value)=>acc+value,0);
    console.log(`ծրագրավորողների աշխատավարձերի գումարը: ${dev}`);
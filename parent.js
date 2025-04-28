//Ունենք Parent (name, age, income)  և Child (name, age, mother, father) կլասը, 
//ընդ որում Child կլասը ունի Parent կլասից mother և father օբյեկտները  (has a կապով)
/*Ստեղծել Child-երի զանգված
գտնել ամենաերիտասարդ հայրիկ ունեցող երեխային
գտնել այն երեխային, որի ընտանեկան եկամուտն ամենաբարձն է
գտնել ամենաերիտասարդ մայրիկ ունեցող երեխային
գտնել այն երեխաների քանակը, որոնց մայրիկն ավելի բարձր աշխատավարձ ունի, քան հայրիկը*/
class Parent{
    constructor(name, age,income){
        this.name = name,
        this.age = age,
        this.income = income
    }
        print(){
            console.log(`Name: ${this.name}, Age: ${this.age}, Income: ${this.income}`);
        
    }
};
class Child{
    constructor(name,age,mother,father){
        this.name = name,
        this.age = age,
        this.mother = mother,
        this.father = father
    }

    //  ընտանեկան եկամուտն:
    familyIncome() {
        return this.mother.income + this.father.income;
    }
    print(){
        console.log(`Chiled name:${this.name}, Age:${this.age}`);
        console.log("Mother info");
        this.mother.print();
        console.log("Father info");
        this.father.print();
        console.log("---------------");
    }
};
const mom1 = new Parent("Sara", 30, 25000);
const dad1 = new Parent("David", 35, 30000);

const mom2 = new Parent("Anna", 40, 40000);
const dad2 = new Parent("Haik", 45, 20000);

const mom3 = new Parent("Bella", 50, 9000);
const dad3 = new Parent("Marcos", 52, 60000);

const child1 = new Child("Alecsander", 10,mom1,dad1);
const child2 = new Child("Micaela", 9,mom2,dad2);
const child3 = new Child("Sandra", 15,mom3,dad3);

//Ստեղծել Child-երի զանգված
let arr = [child1,child2, child3];
let minage = arr[0];

//գտնել ամենաերիտասարդ հայրիկ ունեցող երեխային
for(let i = 0; i < arr.length; ++i){
    if(arr[i].father.age < minage.father.age){
        minage = arr[i];
    }
}
//գտնել այն երեխային, որի ընտանեկան եկամուտն ամենաբարձն է
let maxincome = arr[0];
for(let i = 0; i < arr.length; ++i){
    if(arr[i].familyIncome() > maxincome.familyIncome()){
        maxincome = arr[i];
    }
}
//գտնել ամենաերիտասարդ մայրիկ ունեցող երեխային
let min = arr[0];
for(let i = 0; i < arr.length; ++i){
    if(arr[i].mother.age < min.mother.age){
        min = arr[i];
    }
}

//գտնել այն երեխաների քանակը, որոնց մայրիկն ավելի բարձր աշխատավարձ ունի, քան հայրիկը
let count = 0;
for(let i = 0; i < arr.length; ++i){
    if(arr[i].mother.income > arr[i].father.income){
        count++;
    }
}
console.log("yangest fater have");
minage.print();
console.log("child with max family incom");
maxincome.print();
console.log("child wit youngest mamma");
min.print();
console.log(`childrens count whose mother erns more than father ${count}`)


/* array մեթոդները
// 1. Ամենաերիտասարդ հայրիկ ունեցող երեխան
const youngestFatherChild = arr.reduce((minChild, current) => 
    current.father.age < minChild.father.age ? current : minChild
);

// 2. Ամենաբարձր ընտանեկան եկամուտ ունեցող երեխան
const richestFamilyChild = arr.reduce((maxChild, current) => 
    current.familyIncome() > maxChild.familyIncome() ? current : maxChild
);

// 3. Ամենաերիտասարդ մայրիկ ունեցող երեխան
const youngestMotherChild = arr.reduce((minChild, current) => 
    current.mother.age < minChild.mother.age ? current : minChild
);

// 4. Քանի երեխայի մայրիկն ավելի շատ է վաստակում, քան հայրիկը
const count = arr.filter(child => child.mother.income > child.father.income).length;

*/
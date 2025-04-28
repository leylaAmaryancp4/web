/*Հայտարարել օբյեկտների զանգված, որոնք ներկայացնում են մարդու անունը, տարիքը և աշխատավարձը
reduce-ով գտնել ամենաբարձր աշխատավարձ ունեցող մարդուն
reduce-ով գումարել բոլորի աշխատավարձերը
դասավորել տվյալները ըստ տարիքի աճման կարգով
filter-ով գտնել 40+ տարիքով մարդկանց քանակը*/

let people =[
   { name:"Anna", age: 20, salary:200000},
    {name:"Bella", age: 23, salary: 30000},
    {name:"David", age:18, salary:40000}

];
//reduce-ով գտնել ամենաբարձր աշխատավարձ ունեցող մարդուն
let result = people.reduce((max, person)=>person.salary > max.salary ? person:max, people[0]);
console.log(`higest paid:${result.name}, salary${result.salary} `);

//reduce-ով գումարել բոլորի աշխատավարձերը
const sum = people.reduce((start,person)=> start + person.salary,0);
console.log(`sum of all salary is ${sum}`);

//դասավորել տվյալները ըստ տարիքի աճման կարգով
 people.sort((a,b)=>a.age - b.age);
console.log("age in ascending order" );
people.forEach(person=>{
console.log(`Name ${person.name}, Age ${person.age}, Salary ${person.salary}`)
});

//filter-ով գտնել 40+ տարիքով մարդկանց քանակը
const over40 = people.filter(person =>person.age > 40);

console.log(`count of age over 40 ${over40.length}`);
 
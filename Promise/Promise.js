/*Գրել foo(n) ֆունկցիան, որը ստանում է n թիվը և պատահական. T ժամանակ հետո վերադարձնում Promise,  
որը fulfilled է, եթե n % 2 == 0, և rejected հակառակ դեպքում
Promise,.all, any, race, allSettled ֆունկցիաները կիրառել foo(n) մեթոդի տարբեր կանչերի համար*/

function foo(n){
    return  new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * 2000) + 1000; // պատահական 1000-3000 մս
        setTimeout(()=>{
            if(n % 2 === 0){
         resolve(n); 
            }else{
                reject("Number is odd");  

        }
    },delay);
});
}



Promise
.all([foo(6), foo(4), foo(10)])//6,4,10
.then(result =>{
    console.log(result)
})
.catch(err=> console.log(err));

Promise
.any([foo(4), foo(3), foo(1)])//4
.then(res=>{console.log(res)})
.catch(error=>{console.log(error)})

Promise
.race([foo(3), foo(2), foo(20)])//Number is odd
.then(i=>{console.log(i)})
.catch(error1=>{console.log(error1)});

Promise
.allSettled([foo(30), foo(40), foo(60)])
  .then(x=>{console.log(x)})
.catch(error2=>console.log(error2));
//outppute for allSettled
/*[
  { status: 'fulfilled', value: 30 },
  { status: 'fulfilled', value: 40 },
  { status: 'fulfilled', value: 60 }
]*/
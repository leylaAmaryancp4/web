//ստանում է a,b թվեր վերադարձնում այդ հատվածի թվերի գումարը recursiv
  function sum(a,b){
    if(a > b){
        return 0;
    }
    return a + sum(a + 1, b);
}
  console.log(sum(0,5));
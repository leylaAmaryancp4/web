/*Create a common interface ProductXml with a method toXml(): string.
Implement a class ProductJsonAdapter that:
Accepts a ProductJson object
Implements toXml() method, converting the JSON into XML string format.
Demonstrate its usage by adapting a sample ProductJson into XML.*/


//Ստեղծել ընդհանուր ինտերֆեյս — ProductXml, մեթոդ՝toXml(): string
interface ProductXml{
    toXml():string;
}


//Ունենալ ProductJson class որն իր մեջ պահում է ապրանքի տվյալներ՝
class ProductJson{
    constructor(
        public name:string,
        public price:number ,
        public count: number){

    }
}

/*ProductJsonAdapter class ընդունում է ProductJson օբյեկտ իր կոնստրուկտորի միջոցով
իրականացնում է ProductXml ինտերֆեյսը, այսինքն՝ պարտադիր իրականացնում է toXml() մեթոդը
այս մեթոդի միջոցով այն JSON տվյալները փոխակերպում է XML ֆորմատի տեքստի*/

 //Adapter code
class ProductJsonAdapter implements ProductXml{
    private product:ProductJson;
    constructor(product:ProductJson){
        this.product = product;
    }

    toXml():string{
        return`
    <product>
    <Name>${this.product.name}</Name>
    <Price>${this.product.price}</Price>
    <Count>${this.product.count}</Count>
    </product>`;
    
}
}

const productJson: ProductJson={
    name:"Laptop", 
    price:1500, 
    count:5};
const adapter = new ProductJsonAdapter(productJson);
console.log(adapter.toXml());
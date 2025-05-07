"use strict";
/*Create a common interface ProductXml with a method toXml(): string.
Implement a class ProductJsonAdapter that:
Accepts a ProductJson object
Implements toXml() method, converting the JSON into XML string format.
Demonstrate its usage by adapting a sample ProductJson into XML.*/
//Ունենալ ProductJson class որն իր մեջ պահում է ապրանքի տվյալներ՝
class ProductJson {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}
/*ProductJsonAdapter class ընդունում է ProductJson օբյեկտ իր կոնստրուկտորի միջոցով
իրականացնում է ProductXml ինտերֆեյսը, այսինքն՝ պարտադիր իրականացնում է toXml() մեթոդը
այս մեթոդի միջոցով այն JSON տվյալները փոխակերպում է XML ֆորմատի տեքստի*/
class ProductJsonAdapter {
    constructor(product) {
        this.product = product;
    }
    toXml() {
        return `
    <product>
    <Name>${this.product.name}</Name>
    <Price>${this.product.price}</Price>
    <Count>${this.product.count}</Count>
    </product>`;
    }
}
const productJson = {
    name: "Laptop",
    price: 1500,
    count: 5
};
const adapter = new ProductJsonAdapter(productJson);
console.log(adapter.toXml());

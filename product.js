/*  Ստեղծել Product (id, price, name, category) կլասը, ինչպես նաև զամբյուղի տվյալները ներկայացնող Basket-ը
օրինակ՝
const basket = new Basket()
basket.addProduct(new Product(....), 2) // նշանակում է տվյալ ապրանքից 2 հատ
և այլն
basket-ի print մեթոդը էկրանին տպում է բոլոր ապրանքների անունները, քանակները, subtotal արժեքները, 
իսկ վերջում ընդհանուր գինը
օրինակ՝
Pen $4 x 5 = $20 Subtotal
Book $20 x 1 = $20 Subtotal
------
Total: $40
Total-ի հաշվարկն իրականացնել Basket-ում գտնվող առանձին  մեթոդով*/
class Product{
    constructor(id,price,name,category){
        this.id = id,
        this.price = price,
        this.name = name,
        this.category = category

    }
    subtotal(quantity){
        return this.price * quantity;
    }
    
    
};

 class Basket{

    constructor(){
    this.arr =[];
 }
    addProduct(product,quantity){
        this.arr.push({product,quantity});
    }
    print() {
        let total = 0;
        this.arr.forEach(({ product, quantity }) => {
             const subtotal = product.subtotal(quantity);
          console.log(`${product.name} $${product.price} * ${quantity} = $${subtotal} Subtotal`);
          total += subtotal;
        });
        console.log("------");
        console.log(`Total: $${total}`);
      }
    

 };

 const basket = new Basket() 
basket.addProduct(new Product(1,300,"Book","war" ),2);
basket.addProduct(new Product(2,50,"Pen","stationery"),4)
basket.print();
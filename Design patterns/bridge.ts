/*You must use the Bridge Design Pattern to separate payment types from payment processors.
✅ Your code should allow adding new Payment types or new Processors without modifying existing classes.
 ✅ Respect Open/Closed Principle (OCP).*/

/* 0.Create an interface IPaymentProcessor with a method to process a payment.
 1.Create three concrete processors:
 StripeProcessor
 PayPalProcessor
CryptoWalletProcessor
2.Create an abstract class Payment.
3.Create two concrete payments:
BasicPayment
SubscriptionPayment
4.Payments should use the processor via constructor injection.*/


//Դա նշանակում է, որ յուրաքանչյուր processor (Stripe, PayPal, Crypto) պետք է ունենա այս մեթոդը։
interface IPaymentProcessor{
    processPayment(amount: number): void;

}

//Ստեղծիր processor-ները (իրականացնող class)
    class StripeProcessor implements IPaymentProcessor{
        processPayment(amount:number):void{
            console.log(`Strep processed payment of $${amount}`);
        }
    }
 class PayPalProcessor implements IPaymentProcessor{
    processPayment(amount:number):void{
        console.log(`Strep processed payment of $${amount}`);
    }
 }
class CryptoWalletProcessor implements IPaymentProcessor{
    processPayment(amount:number):void{
        console.log(`CryptoWallet processed crypto payment $${amount}`);
    }
}
//Bridge pattern
//Սա ընդհանուր հիմքն է բոլոր վճարումների համար։ Այն պետք է պահի processor-ը constructor-ի միջոցով։
abstract class Payment{
    protected processor:IPaymentProcessor
    abstract pay(amount: number): void;
constructor(processor:IPaymentProcessor){
    this.processor = processor;
}
}

 class BasicPayment extends Payment{
    pay(amount: number): void {
        console.log("Processing a basic one-time payment...");
        this.processor.processPayment(amount);
      }
 }

 class SubscriptionalPayment extends Payment{
    pay(amount:number):void{
        console.log("Processing a subscription payment...");
    this.processor.processPayment(amount);
    console.log("Subscription will automatically renew monthly.");
    }
 }

 const stripeProcessor = new StripeProcessor();
const payPalProcessor = new PayPalProcessor();
const cryptoProcessor = new CryptoWalletProcessor();

const oneTimePayment = new BasicPayment(stripeProcessor);
oneTimePayment.pay(49.99);

const monthlySubscription = new SubscriptionalPayment(payPalProcessor);
monthlySubscription.pay(9.99);

const cryptoOneTime = new BasicPayment(cryptoProcessor);
cryptoOneTime.pay(99.99);
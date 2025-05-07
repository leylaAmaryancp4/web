"use strict";
/*You must use the Bridge Design Pattern to separate payment types from payment processors.
✅ Your code should allow adding new Payment types or new Processors without modifying existing classes.
 ✅ Respect Open/Closed Principle (OCP).*/
//Ստեղծիր processor-ները (իրականացնող class)
class StripeProcessor {
    processPayment(amount) {
        console.log(`Strep processed payment of $${amount}`);
    }
}
class PayPalProcessor {
    processPayment(amount) {
        console.log(`Strep processed payment of $${amount}`);
    }
}
class CryptoWalletProcessor {
    processPayment(amount) {
        console.log(`CryptoWallet processed crypto payment $${amount}`);
    }
}
//Սա ընդհանուր հիմքն է բոլոր վճարումների համար։ Այն պետք է պահի processor-ը constructor-ի միջոցով։
class Payment {
    constructor(processor) {
        this.processor = processor;
    }
}
class BasicPayment extends Payment {
    pay(amount) {
        console.log("Processing a basic one-time payment...");
        this.processor.processPayment(amount);
    }
}
class SubscriptionalPayment extends Payment {
    pay(amount) {
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

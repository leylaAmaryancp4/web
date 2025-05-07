/*Define an interface IPaymentService:
makePayment(amount: number): void
refundPayment(amount: number): void
Create a class RealPaymentService that:
Implements the payment and refund logic (e.g., console logs the actions).
Create a User class:
Properties:
username: string
role: "admin" | "user"
Create a PaymentServiceProxy class that:
Implements IPaymentService.
Has a reference to the RealPaymentService.
Accepts a User object.
Allows makePayment() for everyone.
Allows refundPayment() only for admin users; otherwise throws an error or prints "Access Denied".*/

interface IPaymentService{
    makePayment(amount: number): void
 refundPayment(amount: number): void
}

class RealPaymentService implements IPaymentService{
    makePayment(amount: number): void{
        console.log(`Payment $${amount} has been made`);
    }
        refundPayment(amount:number):void{
            console.log(`Payment $${amount} has been refund`)
        }
    }


class User{
     username: string;
 role: "admin" | "user";

 constructor(username: string,role: "admin" | "user"){
    this.username = username;
    this.role = role;
 }

}
// PaymentServiceProxy - Protection Proxy
    class PaymentServiceProxy implements IPaymentService{
private realservice:RealPaymentService;  //Has a reference to the RealPaymentService.
private user:User;
constructor(user:User){
    this.realservice = new RealPaymentService;
    this.user = user;
}

  //Allows makePayment() for everyone.
  makePayment(amount: number): void{
    console.log(`${this.user.username} make payment.`);
    this.realservice.makePayment(amount);
  }

  //Allows refundPayment() only for admin users;
  refundPayment(amount:number):void{
    if(this.user.role === "admin"){
        this.realservice.refundPayment(amount);
    }else{
        console.log("Access Denied: Only admin users can refund payments.");
    }
  }

    }

//Client Code 
const admin = new User("Alice", "admin");
const regularUser = new User("Bob", "user");

const adminPaymentService = new PaymentServiceProxy(admin);
const userPaymentService = new PaymentServiceProxy(regularUser);

adminPaymentService.makePayment(100);   // OK
adminPaymentService.refundPayment(50);  // OK

userPaymentService.makePayment(30);     // OK
userPaymentService.refundPayment(10);   // Should print "Access Denied"

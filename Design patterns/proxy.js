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
var RealPaymentService = /** @class */ (function () {
    function RealPaymentService() {
    }
    RealPaymentService.prototype.makePayment = function (amount) {
        console.log("Payment $".concat(amount, " has been made"));
    };
    RealPaymentService.prototype.refundPayment = function (amount) {
        console.log("Payment $".concat(amount, " has been refund"));
    };
    return RealPaymentService;
}());
var User = /** @class */ (function () {
    function User(username, role) {
        this.username = username;
        this.role = role;
    }
    return User;
}());
// PaymentServiceProxy - Protection Proxy
var PaymentServiceProxy = /** @class */ (function () {
    function PaymentServiceProxy(user) {
        this.realservice = new RealPaymentService;
        this.user = user;
    }
    //Allows makePayment() for everyone.
    PaymentServiceProxy.prototype.makePayment = function (amount) {
        console.log("".concat(this.user.username, " make payment."));
        this.realservice.makePayment(amount);
    };
    PaymentServiceProxy.prototype.refundPayment = function (amount) {
        if (this.user.role === "admin") {
            this.realservice.refundPayment(amount);
        }
        else {
            console.log("Access Denied: Only admin users can refund payments.");
        }
    };
    return PaymentServiceProxy;
}());
//Client Code 
var admin = new User("Alice", "admin");
var regularUser = new User("Bob", "user");
var adminPaymentService = new PaymentServiceProxy(admin);
var userPaymentService = new PaymentServiceProxy(regularUser);
adminPaymentService.makePayment(100); // OK
adminPaymentService.refundPayment(50); // OK
userPaymentService.makePayment(30); // OK
userPaymentService.refundPayment(10); // Should print "Access Denied"

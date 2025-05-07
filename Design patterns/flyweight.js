/*Create an interface BulletType:
Intrinsic data: sprite name, damage value
Method render(x: number, y: number, direction: number): void
Create a concrete class ConcreteBulletType implementing BulletType.
Create a BulletTypeFactory:
Reuse ConcreteBulletType objects by sprite name + damage combination.
Create a Bullet class:
Holds extrinsic data:
Position (x, y)
Direction (angle)
Speed
Holds a reference to a BulletType.*/
var ConcreteBuilletType = /** @class */ (function () {
    function ConcreteBuilletType(spriteName, damage) {
        this.spriteName = spriteName;
        this.damage = damage;
    }
    ConcreteBuilletType.prototype.render = function (x, y, direction) {
        console.log(" Drawing ".concat(this.spriteName, " bullet at (").concat(x, ", ").concat(y, ") heading ").concat(direction, " with damage ").concat(this.damage));
    };
    return ConcreteBuilletType;
}());
//(Flyweight Factory)
var BulletTypeFactory = /** @class */ (function () {
    function BulletTypeFactory() {
        this.bulletTypes = new Map();
    }
    BulletTypeFactory.prototype.getBulletType = function (spriteName, damage) {
        var key = "".concat(spriteName, "_").concat(damage);
        if (!this.bulletTypes.has(key)) {
            this.bulletTypes.set(key, new ConcreteBuilletType(spriteName, damage));
        }
        return this.bulletTypes.get(key);
    };
    return BulletTypeFactory;
}());
/*Create a Bullet class:
Holds extrinsic data:
Position (x, y)
Direction (angle)
Speed
Holds a reference to a BulletType.*/
var Bullet = /** @class */ (function () {
    function Bullet(X, y, direction, speed, type) {
        this.X = X;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.type = type;
    }
    Bullet.prototype.render = function () {
        this.type.render(this.X, this.y, this.direction);
    };
    return Bullet;
}());
var factory = new BulletTypeFactory();
// Firing bullets
var bullets = [];
bullets.push(new Bullet(0, 0, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(5, 2, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(10, 5, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(15, 10, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(20, 20, 30, 12, factory.getBulletType("BlueIceShard", 15)));
// Rendering all bullets
for (var _i = 0, bullets_1 = bullets; _i < bullets_1.length; _i++) {
    var bullet = bullets_1[_i];
    bullet.render();
}

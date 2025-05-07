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

interface BulletType{
     spriteName:string;
     damage:number;
     render(x:number,y:number, direction:number):void;
}

class ConcreteBuilletType implements BulletType{
    constructor(public spriteName:string,  public damage:number ){}
     render(x:number,y:number,direction:number):void{
        console.log(` Drawing ${this.spriteName} bullet at (${x}, ${y}) heading ${direction} with damage ${this.damage}`

        );
     }
}

//(Flyweight Factory)
class BulletTypeFactory{
    private bulletTypes:Map<string,BulletType>= new Map();
    getBulletType( spriteName:string,  damage:number):BulletType{
      const key =`${spriteName}_${damage}`;
      if(!this.bulletTypes.has(key)){
        this.bulletTypes.set(key,new ConcreteBuilletType(spriteName,damage))
      } 
      return this.bulletTypes.get(key)!; 
    }
}
/*Create a Bullet class:
Holds extrinsic data:
Position (x, y)
Direction (angle)
Speed
Holds a reference to a BulletType.*/
class Bullet {
    constructor(
    private X:number,
    private y:number,
    private direction:number,
    private speed:number,
    private type:BulletType
    ){}
    render():void{
        this.type.render(this.X,this.y,this.direction);
    }
}
//Client Code 
const factory = new BulletTypeFactory();

// Firing bullets
const bullets: Bullet[] = [];

bullets.push(new Bullet(0, 0, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(5, 2, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(10, 5, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(15, 10, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(20, 20, 30, 12, factory.getBulletType("BlueIceShard", 15)));

// Rendering all bullets
for (const bullet of bullets) {
  bullet.render();
}
